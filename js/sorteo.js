/* sorteo.js · Sorteo automático de series + ventana flotante (modal) */
(function () {
  const btn = document.getElementById("btn-sorteo");
  const modal = document.getElementById("modal-sorteo");
  if (!btn || !modal) return;

  const resultado = document.getElementById("sorteo-resultado");
  const cerrar = document.getElementById("modal-cerrar");

  // Lee los equipos actuales desde la tabla del DOM (2da columna)
  function equiposActuales() {
    const celdas = document.querySelectorAll("#tabla-body tr td:nth-child(2)");
    return Array.from(celdas).map(function (td) { return td.textContent; });
  }

  // Mezcla un arreglo en el sitio (Fisher-Yates)
  function mezclar(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
    return arr;
  }

  btn.addEventListener("click", function () {
    const equipos = equiposActuales();

    if (equipos.length < 2) {
      alert("Necesitas al menos 2 equipos para sortear las series.");
      return;
    }

    const entrada = prompt("¿En cuántas series quieres repartir los " + equipos.length + " equipos?", "2");
    if (entrada === null) return; // el usuario canceló

    const series = parseInt(entrada, 10);
    if (isNaN(series) || series < 2 || series > equipos.length) {
      alert("Ingresa un número válido de series (entre 2 y " + equipos.length + ").");
      return;
    }

    if (!confirm("Se sortearán " + equipos.length + " equipos en " + series + " series. ¿Continuar?")) {
      return;
    }

    // Reparte al azar en 'series' grupos (round-robin sobre la lista mezclada)
    mezclar(equipos);
    const grupos = [];
    for (let i = 0; i < series; i++) grupos.push([]);
    equipos.forEach(function (eq, i) {
      grupos[i % series].push(eq);
    });

    // Pinta el resultado en el modal
    resultado.innerHTML = "";
    grupos.forEach(function (grupo, i) {
      const bloque = document.createElement("div");
      bloque.className = "serie";
      const items = grupo.map(function (eq) { return "<li>" + eq + "</li>"; }).join("");
      bloque.innerHTML = "<h3>Serie " + String.fromCharCode(65 + i) + "</h3><ul>" + items + "</ul>";
      resultado.appendChild(bloque);
    });

    modal.hidden = false;
  });

  // Cerrar la ventana: botón, click en el fondo o tecla Escape
  cerrar.addEventListener("click", function () { modal.hidden = true; });
  modal.addEventListener("click", function (e) {
    if (e.target === modal) modal.hidden = true;
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.hidden) modal.hidden = true;
  });
})();

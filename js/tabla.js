/* tabla.js · Tabla de posiciones dinámica: arreglo de equipos + render al DOM + orden por puntos */
(function () {
  const tbody = document.getElementById("tabla-body");
  if (!tbody) return;

  const pie = document.getElementById("tabla-pie");
  const select = document.getElementById("equipo-sel");
  const inputNuevo = document.getElementById("equipo-nuevo");

  // Datos en un arreglo (no en HTML fijo): G=ganados, E=empatados, P=perdidos
  const equipos = [
    { nombre: "Ingeniería de Sistemas", g: 4, e: 1, p: 0 },
    { nombre: "Administración de Empresas", g: 3, e: 1, p: 1 },
    { nombre: "Arquitectura", g: 2, e: 2, p: 1 },
    { nombre: "Derecho", g: 1, e: 1, p: 3 },
    { nombre: "Psicología", g: 0, e: 1, p: 4 },
  ];

  const puntos = function (t) { return t.g * 3 + t.e; };
  const jugados = function (t) { return t.g + t.e + t.p; };

  function render() {
    // Ordena por puntos (desc); a igualdad, por partidos ganados
    equipos.sort(function (a, b) {
      return puntos(b) - puntos(a) || b.g - a.g;
    });

    // Repinta las filas de la tabla
    tbody.innerHTML = "";
    equipos.forEach(function (t, i) {
      const fila = document.createElement("tr");
      if (i < 3) fila.className = "g" + (i + 1);           // top-3 medallado
      const medalla = i < 3 ? ' <i class="fa-solid fa-medal"></i>' : "";
      fila.innerHTML =
        "<td>" + (i + 1) + medalla + "</td>" +
        "<td>" + t.nombre + "</td>" +
        "<td>" + jugados(t) + "</td>" +
        "<td>" + t.g + "</td>" +
        "<td>" + t.e + "</td>" +
        "<td>" + t.p + "</td>" +
        "<td>" + puntos(t) + "</td>";
      tbody.appendChild(fila);
    });

    // Reconstruye el select conservando el equipo elegido
    const elegido = select.value;
    select.innerHTML = "";
    equipos.forEach(function (t) {
      const op = document.createElement("option");
      op.value = t.nombre;
      op.textContent = t.nombre;
      select.appendChild(op);
    });
    if (equipos.some(function (t) { return t.nombre === elegido; })) {
      select.value = elegido;
    }

    pie.textContent = equipos.length + " equipos · ordenado por puntos";
  }

  // Suma un resultado al equipo seleccionado y reordena
  function registrar(resultado) {
    const t = equipos.find(function (x) { return x.nombre === select.value; });
    if (!t) return;
    if (resultado === "g") t.g++;
    else if (resultado === "e") t.e++;
    else t.p++;
    render();
  }

  document.querySelectorAll(".btn-res").forEach(function (btn) {
    btn.addEventListener("click", function () {
      registrar(btn.dataset.res);
    });
  });

  document.getElementById("btn-agregar").addEventListener("click", function () {
    const nombre = inputNuevo.value.trim();
    if (nombre === "") return;
    if (equipos.some(function (x) { return x.nombre.toLowerCase() === nombre.toLowerCase(); })) {
      alert("Ese equipo ya está en la tabla.");
      return;
    }
    equipos.push({ nombre: nombre, g: 0, e: 0, p: 0 });
    inputNuevo.value = "";
    render();
  });

  render();
})();

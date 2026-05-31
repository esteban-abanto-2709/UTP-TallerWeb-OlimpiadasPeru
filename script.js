/* ============================================================
   SCRIPT.JS · Slider del Inicio
   Autoplay automático + navegación manual (flechas y puntos)
   ============================================================ */
(function () {
  const slider = document.getElementById("slider");
  if (!slider) return;

  const track = slider.querySelector(".slides");          // pista de slides
  const total = slider.querySelectorAll(".slide").length; // cantidad de slides
  const dots = slider.querySelectorAll(".dot");           // puntos indicadores
  const btnPrev = slider.querySelector(".prev");          // flecha anterior
  const btnNext = slider.querySelector(".next");          // flecha siguiente

  const INTERVALO = 5000; // milisegundos del autoplay
  let actual = 0;         // índice del slide visible
  let timer = null;       // referencia del autoplay

  // Muestra el slide indicado (con ciclo infinito) y actualiza los puntos
  function mostrar(indice) {
    actual = (indice + total) % total;
    track.style.transform = "translateX(-" + actual * 100 + "%)";
    dots.forEach(function (dot, i) {
      dot.classList.toggle("active", i === actual);
    });
  }

  // Inicia y reinicia el cambio automático
  function iniciarAutoplay() {
    timer = setInterval(function () {
      mostrar(actual + 1);
    }, INTERVALO);
  }
  function reiniciarAutoplay() {
    clearInterval(timer);
    iniciarAutoplay();
  }

  // Navegación manual: al usarla, reinicia el autoplay
  btnNext.addEventListener("click", function () {
    mostrar(actual + 1);
    reiniciarAutoplay();
  });
  btnPrev.addEventListener("click", function () {
    mostrar(actual - 1);
    reiniciarAutoplay();
  });
  dots.forEach(function (dot, i) {
    dot.addEventListener("click", function () {
      mostrar(i);
      reiniciarAutoplay();
    });
  });

  // Pausa el autoplay mientras el cursor está sobre el slider
  slider.addEventListener("mouseenter", function () {
    clearInterval(timer);
  });
  slider.addEventListener("mouseleave", iniciarAutoplay);

  // Arranque
  mostrar(0);
  iniciarAutoplay();
})();

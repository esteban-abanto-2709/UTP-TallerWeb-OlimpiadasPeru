/* SCRIPT.JS · Slider del Inicio: autoplay + flechas + puntos */
(function () {
  const slider = document.getElementById("slider");
  if (!slider) return;

  const track = slider.querySelector(".slides");
  const total = slider.querySelectorAll(".slide").length;
  const dots = slider.querySelectorAll(".dot");
  const btnPrev = slider.querySelector(".prev");
  const btnNext = slider.querySelector(".next");

  const INTERVALO = 5000; // ms del autoplay
  let actual = 0;
  let timer = null;

  // Muestra el slide indicado (con ciclo infinito) y actualiza los puntos
  function mostrar(indice) {
    actual = (indice + total) % total;
    track.style.transform = "translateX(-" + actual * 100 + "%)";
    dots.forEach(function (dot, i) {
      dot.classList.toggle("active", i === actual);
    });
  }

  function iniciarAutoplay() {
    timer = setInterval(function () {
      mostrar(actual + 1);
    }, INTERVALO);
  }
  function reiniciarAutoplay() {
    clearInterval(timer);
    iniciarAutoplay();
  }

  // Navegación manual: reinicia el autoplay al usarla
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

  mostrar(0);
  iniciarAutoplay();
})();

/* Botón flotante del himno: alterna reproducir / pausar */
(function () {
  const btn = document.getElementById("himno-btn");
  const audio = document.getElementById("himno-audio");
  if (!btn || !audio) return;

  const icono = btn.querySelector("i");
  const texto = btn.querySelector(".himno-texto");

  btn.addEventListener("click", function () {
    if (audio.paused) {
      audio.play();
      btn.classList.add("playing");
      icono.className = "fa-solid fa-pause";
      texto.textContent = "Pausar himno";
    } else {
      audio.pause();
      btn.classList.remove("playing");
      icono.className = "fa-solid fa-music";
      texto.textContent = "Escucha nuestro himno";
    }
  });
})();

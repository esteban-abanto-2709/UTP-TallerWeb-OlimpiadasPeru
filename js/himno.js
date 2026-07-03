/* himno.js · Botón flotante del himno: alterna reproducir / pausar */
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

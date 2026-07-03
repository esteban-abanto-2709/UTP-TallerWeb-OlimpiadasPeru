/* menu.js · Menú responsivo (hamburguesa) controlado por JS */
(function () {
  const btn = document.getElementById("menu-btn");
  const nav = document.getElementById("nav-principal");
  if (!btn || !nav) return;

  const icono = btn.querySelector("i");

  function alternar() {
    const abierto = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", abierto);
    btn.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
    icono.className = abierto ? "fa-solid fa-xmark" : "fa-solid fa-bars";
  }

  function cerrar() {
    nav.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-label", "Abrir menú");
    icono.className = "fa-solid fa-bars";
  }

  btn.addEventListener("click", alternar);

  // Cierra el menú al elegir una opción (navegación por anclas)
  nav.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", cerrar);
  });
})();

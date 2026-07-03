/* scrollspy.js · Resalta en el nav la sección visible al hacer scroll */
(function () {
  const enlaces = document.querySelectorAll('nav a[href^="#"]');
  if (!enlaces.length) return;

  // Mapa id de sección -> enlace del nav (solo los que existen en la página)
  const mapa = {};
  enlaces.forEach(function (a) {
    const id = a.getAttribute("href").slice(1);
    const sec = document.getElementById(id);
    if (sec) mapa[id] = a;
  });

  const secciones = Object.keys(mapa).map(function (id) {
    return document.getElementById(id);
  });
  if (!secciones.length) return;

  // Una sección se activa cuando cruza la franja central de la ventana
  const observer = new IntersectionObserver(
    function (entradas) {
      entradas.forEach(function (e) {
        if (e.isIntersecting) {
          enlaces.forEach(function (a) { a.classList.remove("active"); });
          mapa[e.target.id].classList.add("active");
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );

  secciones.forEach(function (s) { observer.observe(s); });
})();

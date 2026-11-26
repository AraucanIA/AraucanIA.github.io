/*
  Araucan IA — comportamiento del sitio (sin dependencias)
  1. Menú desplegable en celulares
  2. Barra transparente sobre la portada que se vuelve sólida al hacer scroll
  3. Abre el desplegable correspondiente al llegar desde el índice (#publico, etc.)
*/
(function () {
  "use strict";

  // 1. Menú en celulares
  var boton = document.querySelector(".menu-boton");
  var menu = document.getElementById("menu");
  if (boton && menu) {
    boton.addEventListener("click", function () {
      var abierto = boton.getAttribute("aria-expanded") === "true";
      boton.setAttribute("aria-expanded", String(!abierto));
      boton.setAttribute("aria-label", abierto ? "Abrir menú" : "Cerrar menú");
      menu.classList.toggle("menu--abierto", !abierto);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && boton.getAttribute("aria-expanded") === "true") {
        boton.click();
        boton.focus();
      }
    });
  }

  // 2. Barra transparente sobre la portada
  var barra = document.querySelector(".barra[data-transparente]");
  if (barra) {
    var actualizar = function () {
      var menuAbierto = boton && boton.getAttribute("aria-expanded") === "true";
      barra.classList.toggle("barra--transparente", window.scrollY < 40 && !menuAbierto);
    };
    window.addEventListener("scroll", actualizar, { passive: true });
    if (boton) boton.addEventListener("click", actualizar);
    actualizar();
  }

  // 3. Abrir el desplegable enlazado desde el índice
  var abrirDesdeHash = function () {
    if (!location.hash) return;
    var destino = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (destino && destino.tagName === "DETAILS") destino.open = true;
  };
  window.addEventListener("hashchange", abrirDesdeHash);
  abrirDesdeHash();
})();

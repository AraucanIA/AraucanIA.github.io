/* Araucan IA — menú en celulares (sin dependencias) */
(function () {
  "use strict";

  var boton = document.querySelector(".menu-boton");
  var menu = document.getElementById("menu");
  if (!boton || !menu) return;

  function cambiar(abrir) {
    boton.setAttribute("aria-expanded", String(abrir));
    boton.setAttribute("aria-label", abrir ? "Cerrar menú" : "Abrir menú");
    menu.classList.toggle("menu--abierto", abrir);
  }

  boton.addEventListener("click", function () {
    cambiar(boton.getAttribute("aria-expanded") !== "true");
  });

  // Al elegir una sección, el menú se cierra para dejar ver la página.
  menu.addEventListener("click", function (e) {
    if (e.target.closest("a")) cambiar(false);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && boton.getAttribute("aria-expanded") === "true") {
      cambiar(false);
      boton.focus();
    }
  });
})();

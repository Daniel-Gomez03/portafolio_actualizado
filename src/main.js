//Pantalla de carga
window.addEventListener('load', () => {
  const contenedorLoader = document.querySelector('.container-loader');
  contenedorLoader.style.opacity = 0;
  contenedorLoader.style.visibility = 'hidden';
})

//Menu de hamburguesa para vista de movil y tablet
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");
  const overlay = document.createElement("div");
  const closeMenu = document.querySelector(".close-menu");

  overlay.classList.add("overlay");
  document.body.appendChild(overlay);

  function toggleMenu() {
      nav.classList.toggle("nav-active");
      overlay.classList.toggle("overlay-active");
      menuToggle.style.display = nav.classList.contains("nav-active") ? "none" : "flex";
  }

  menuToggle.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu);
  closeMenu.addEventListener("click", toggleMenu);
});


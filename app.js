//  JAVASCRIPT PARA EL MODO CLARO

// Obtener el botón y el tema guardado
const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;
const savedTheme = localStorage.getItem("theme") || "dark";

// Aplicar tema guardado
if (savedTheme === "light") {
  document.body.classList.add("light-mode");
  themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
} else {
  document.body.classList.remove("light-mode");
  themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
}

// Event listener para cambiar tema
themeToggle.addEventListener("click", () => {
  const isLight = document.body.classList.toggle("light-mode");

  // Guardar preferencia
  localStorage.setItem("theme", isLight ? "light" : "dark");

  // Cambiar icono
  themeToggle.innerHTML = isLight
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
});

// Respetar preferencia del sistema
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: light)").matches
) {
  if (!localStorage.getItem("theme")) {
    document.body.classList.add("light-mode");
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
}

// Lógica del Menú Hamburguesa
const menuToggle = document.querySelector('#mobile-menu');
const navMenu = document.querySelector('.navbar nav');
const navLinks = document.querySelectorAll('.navbar nav ul li a');

// Abrir / Cerrar menú
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('is-active');
    navMenu.classList.toggle('active');
});

// Cerrar menú al hacer click en un enlace
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('is-active');
        navMenu.classList.remove('active');
    });
});
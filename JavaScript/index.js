// Menu Mobile

const menuIcon = document.getElementById("menu_icon");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

// Abre o menu ao clicar no icone
menuIcon.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

// Fecha o menu
closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});

// Fecha o menu ao clicar em qualquer link
document.querySelectorAll(".mobile_nav_links a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});

// Menu tablet

const menuIconTab = document.getElementById("menu_icon_tab");
const tabMenu = document.getElementById("mobileMenu");
const closeMenuTab = document.getElementById("closeMenu");

menuIconTab.addEventListener("click", () => {
  tabMenu.classList.add("active");
});

closeMenuTab.addEventListener("click", () => {
  tabMenu.classList.remove("active");
});

document.querySelectorAll(".mobile_nav_links a").forEach((link) => {
  link.addEventListener("click", () => {
    tabMenu.classList.remove("active");
  });
});

function abrirLogin() {
  window.open("../pages/login.html", "_blank", "noopener,noreferrer");
}

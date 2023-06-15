const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  const windowPosition = window.scrollY > 0;
  nav.classList.toggle("scrollink-active", windowPosition);
});

const button = document.getElementById("slide");

button.onclick = () => {
  document.getElementById("scroll").scrollLeft += 700;
};

// Menu Bar
const menuBar = document.querySelector("#hamburger");
const menuNav = document.querySelector(".navbar-nav");

menuBar.addEventListener("click", () => {
  menuNav.classList.toggle("menu-active");
});

// const navbarNav = document.querySelector(".navbar-nav");

// //ketika hamburger di Click

// const menuBar = document.querySelector(".menu-bar");
// onclick = () => {
//   navbarNav.classList.toggle("active");
// };

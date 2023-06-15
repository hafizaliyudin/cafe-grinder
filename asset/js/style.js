const nav = document.querySelector("nav");
const navbarNav = document.querySelector(".navbar-nav");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  const windowPosition = window.scrollY > 0;
  nav.classList.toggle("scrollink-active", windowPosition);
});

// Hamburger Menu
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (a) {
  if (hamburger.contains(a.target)) {
    navbarNav.classList.toggle("active");
  }
  console.log("text");
});

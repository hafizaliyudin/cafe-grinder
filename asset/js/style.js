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

const menuBtn = document.getElementById("menu-btn");
const menu = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

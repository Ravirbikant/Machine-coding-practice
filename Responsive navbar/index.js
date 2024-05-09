const navLinks = document.querySelector(".nav-links");
const toggleButton = document.querySelector(".nav-toggle");

toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

addEventListener("resize", () => {
  if (innerWidth > 700) {
    navLinks.classList.remove("open");
  }
});

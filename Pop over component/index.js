const popOver = document.querySelector(".pop-over");
const cancel = document.querySelector(".cancel");
const overlay = document.querySelector(".overlay");

function openPopOver() {
  popOver.classList.add("active");
  overlay.classList.add("active");
}

cancel.addEventListener("click", () => {
  popOver.classList.remove("active");
  overlay.classList.remove("active");
});

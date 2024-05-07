let slides = document.querySelectorAll(".slide");
let prev = document.querySelector(".prev");
let nextBtn = document.querySelector(".nextBtn");

let count = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

prev.disabled = true;
function previous() {
  count--;
  if (count == 0) prev.disabled = true;
  else prev.disabled = false;
  nextBtn.disabled = false;
  slideImage();
}

function next() {
  count++;
  if (count == slides.length - 1) nextBtn.disabled = true;
  else nextBtn.disabled = false;
  prev.disabled = false;
  slideImage();
}

function slideImage() {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${count * 100}%)`;
  });
}

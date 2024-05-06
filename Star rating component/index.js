let stars = document.getElementsByClassName("star");
let ratingCount = document.getElementById("rating-count");
let selectedStars = 0;

for (let i = 0; i < stars.length; i++) {
  let star = stars[i];
  star.addEventListener("mouseover", () => {
    for (let j = 0; j <= i; j++) {
      stars[j].classList.add("filled");
    }
  });

  star.addEventListener("mouseleave", () => {
    for (let j = selectedStars; j < stars.length; j++) {
      stars[j].classList.remove("filled");
    }
  });

  star.addEventListener("click", () => {
    ratingCount.innerHTML = i + 1;
    selectedStars = i + 1;
    for (let j = 0; j < stars.length; j++) {
      stars[j].classList.remove("filled");
    }
    for (let j = 0; j <= i; j++) {
      stars[j].classList.add("filled");
    }
  });
}

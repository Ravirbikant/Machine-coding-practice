const cards = document.querySelectorAll(".card");
const cardContainer = document.querySelector(".container");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.7,
  }
);

const lastCardObserver = new IntersectionObserver((entries) => {
  const lastCard = entries[0];
  if (!lastCard.isIntersecting) return;
  loadNewCards();
  lastCardObserver.unobserve(lastCard.target);
  lastCardObserver.observe(document.querySelector(".card:last-child"));
}, {});

lastCardObserver.observe(document.querySelector(".card:last-child"));

cards.forEach((card) => {
  observer.observe(card);
});

let colors = [
  "yellow",
  "palegreen",
  "peachpuff",
  "darksalmon",
  "darkseagreen",
  "pink",
  "orangered",
];

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function loadNewCards() {
  const rndInt = randomIntFromInterval(0, colors.length - 1);

  for (let i = 0; i < 2; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.backgroundColor = colors[rndInt];
    observer.observe(card);
    cardContainer.append(card);
  }
}

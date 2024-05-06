const accordion = document.querySelectorAll(".accordion");
const accordionHead = document.querySelectorAll(".accordion-head");

let accordionOpen = [];

for (let i = 0; i < accordion.length; i++) {
  accordionOpen.push(false);
  accordionHead[i].addEventListener("click", () => {
    if (!accordionOpen[i]) accordion[i].style.height = "144px";
    else accordion[i].style.height = "44px";
    accordionOpen[i] = !accordionOpen[i];
  });
}

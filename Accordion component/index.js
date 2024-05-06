const accordion = document.querySelectorAll(".accordion");
const accordionHead = document.querySelectorAll(".accordion-head");
const icon = document.querySelectorAll(".icon");

let accordionOpen = [];

for (let i = 0; i < accordion.length; i++) {
  accordionOpen.push(false);
  accordionHead[i].addEventListener("click", () => {
    if (!accordionOpen[i]) {
      accordion[i].style.height = "144px";
      icon[i].innerHTML = "&#9650";
    } else {
      icon[i].innerHTML = "&#9660";
      accordion[i].style.height = "44px";
    }
    accordionOpen[i] = !accordionOpen[i];
  });
}

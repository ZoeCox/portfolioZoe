const modalBox = document.querySelector("#modal-box");
const modalContent = document.querySelector("#modal-body-content");
const dogSiteBtn = document.querySelector("#dogSite-tile-button");
const demoGameBtn = document.querySelector("#demoGame-tile-button");
const memoryGameBtn = document.querySelector("#memoryGame-tile-button");
const textGameBtn = document.querySelector("#textGame-tile-button");
const cards = [dogSiteBtn, demoGameBtn, memoryGameBtn, textGameBtn];

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", () => {
    console.log(`option ${i} clicked`);
    modalContent.innerHTML = `option ${i} clicked`;
    modalContent.classList.remove("hidden");
  });
}

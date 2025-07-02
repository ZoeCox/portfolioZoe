const modalBox = document.querySelector("#modal-box");
const modalContent = document.querySelector("#modal-body-content");
const modalTitle = document.querySelector("#modal-title-holder");
const dogSiteBtn = document.querySelector("#dogSite-tile-button");
const demoGameBtn = document.querySelector("#demoGame-tile-button");
const memoryGameBtn = document.querySelector("#memoryGame-tile-button");
const textGameBtn = document.querySelector("#textGame-tile-button");
const buttons = [dogSiteBtn, demoGameBtn, memoryGameBtn, textGameBtn];

const dogSiteImg = new Image();
dogSiteImg.src = "./images/dogToyPage.png";
const demoGameImg = new Image();
demoGameImg.src = "./images/fantasyGame.png";
const memoryGameImg = new Image();
memoryGameImg.src = "./images/simonGame.png";
const textGameImg = new Image();
textGameImg.src = "./images/textGame.png";

const dogSiteContent = {
  title: "Happy Dog Toys Site",
  description:
    "This is made to mimic a real E-Commerce site themed around the sale of dog toys. It includes product pages for each item, ability to make a 'favourites' list, basket facility, and profile management. I made use of broswer local storage facilities to ensure basket persistence, and retention of profile settings betweeen users' visits.",
  frameworks:
    "This is a site made with Vanilla JavaScript (ES6), HTML 5 and standard CSS.",
  images: dogSiteImg,
  githubRepo: "GitHub Repo: https://github.com/ZoeCox/Dog-Toy-Site",
};

const demoGameContent = {
  title: "Fantasy Demo Game Site",
  description:
    "This was made as a short 'demo' game based on a typical side scrolling 2d pixel art game. I wanted to see how I could translate a narrative into a game written only by my own code. The user can input their name for interactivity, and includes a dialogue box; the input is controlled by a keyboard using event listeners. I love fantasy genre games, so having a character about to set off on a grand adventure felt like the perfect start of a game to me.",
  frameworks:
    "This is a site made with Vanilla JavaScript (ES6), HTML 5 and standard CSS. The game itself is made on HTML canvas in Javascript.",
  images: demoGameImg,
  githubRepo: "GitHub Repo: https://github.com/ZoeCox/fantasyGame",
};

const memoryGameContent = {
  title: "Memory Game Site",
  description:
    "This is a visual interactive game (mouse or touch input for mobile devices). It is based on the British memory toy ('Simon') which runs in rounds where the user remembers the order of colour pattern. This implements score tracking, as well as a light and dark mode for accessibility. Local storage facilities are used to ensure the user's score persists between visits, as well as their Dark/Light mode preference.",
  frameworks:
    "This is a site made with Vanilla JavaScript (ES6), HTML 5 and standard CSS.",
  images: memoryGameImg,
  githubRepo: "GitHub Repo: https://github.com/ZoeCox/simonGame",
};

const textGameContent = {
  title: "Text Based Game Site",
  description:
    "This is a text based, option game, which is set in a fantasy land with a typical rescue the Princess trope story. This allows the player to choose a custom name, purchase items and arrange purchases through an inventory management system. With an inbuilt turn based combat model, the player can earn experience and gold fighting monsters in order to work their way up to the boss level.",
  frameworks:
    "This is a site made with Vanilla JavaScript (ES6), HTML 5 and standard CSS.",
  images: textGameImg,
  githubRepo: `GitHub Repo: https://github.com/ZoeCox/tbag`,
};

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    // buttons[i].blur();
    //to shift focus off of descended button from modal, because aria hidden attr is screaming? why?? also this doesn't work!
    modalContent.innerHTML = "";
    const brk = document.createElement("br");
    switch (buttons[i]) {
      case dogSiteBtn:
        for (const value in dogSiteContent) {
          if (
            dogSiteContent.hasOwnProperty(value) &&
            value !== "title" &&
            value !== "images"
          ) {
            modalContent.innerHTML += dogSiteContent[value];
            modalContent.appendChild(brk);
          } else if (value === "images") {
            modalContent.appendChild(dogSiteContent[value]);
            modalContent.appendChild(brk);
          } else {
            modalTitle.innerHTML = dogSiteContent[value];
          }
        }
        break;
      case demoGameBtn:
        for (const value in demoGameContent) {
          if (
            demoGameContent.hasOwnProperty(value) &&
            value !== "title" &&
            value !== "images"
          ) {
            modalContent.innerHTML += demoGameContent[value];
            modalContent.appendChild(brk);
          } else if (value === "images") {
            modalContent.appendChild(demoGameContent[value]);
            modalContent.appendChild(brk);
          } else {
            modalTitle.innerHTML = demoGameContent[value];
          }
        }
        break;
      case memoryGameBtn:
        for (const value in memoryGameContent) {
          if (
            memoryGameContent.hasOwnProperty(value) &&
            value !== "title" &&
            value !== "images"
          ) {
            modalContent.innerHTML += memoryGameContent[value];
            modalContent.appendChild(brk);
          } else if (value === "images") {
            modalContent.appendChild(memoryGameContent[value]);
            modalContent.appendChild(brk);
          } else {
            modalTitle.innerHTML = memoryGameContent[value];
          }
        }
        break;
      case textGameBtn:
        for (const value in textGameContent) {
          if (
            textGameContent.hasOwnProperty(value) &&
            value !== "title" &&
            value !== "images"
          ) {
            modalContent.innerHTML += textGameContent[value];
            modalContent.appendChild(brk);
          } else if (value === "images") {
            modalContent.appendChild(textGameContent[value]);
            modalContent.appendChild(brk);
          } else {
            modalTitle.innerHTML = textGameContent[value];
          }
        }
        break;
    }
  });
}

const headerBar = document.querySelector("#scroll-banner");
let headerBarLeftVal = 125;
headerBar.style.left = `${headerBarLeftVal}%`;

document.addEventListener("scroll", () => {
  if (headerBarLeftVal <= -30) {
    return;
  } else {
    headerBarLeftVal -= 5;
  }
  headerBar.style.left = `${headerBarLeftVal}%`;
});

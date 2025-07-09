const headerBar = document.querySelector("#scroll-banner");
let headerBarLeftVal = 200;
headerBar.style.left = `${headerBarLeftVal}%`;

document.addEventListener("scroll", () => {
  if (window.innerWidth > 2050) {
    if (headerBarLeftVal <= -150) {
      return;
    } else {
      headerBarLeftVal -= 5;
    }
  } else {
    if (headerBarLeftVal <= -30) {
      return;
    } else {
      headerBarLeftVal -= 5;
    }
  }
  headerBar.style.left = `${headerBarLeftVal}%`;
});

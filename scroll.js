const headerBar = document.querySelector("#scroll-banner");
let headerBarLeftVal = 120;
headerBar.style.left = `${headerBarLeftVal}%`;
const scrollYTracker = () => {
  let viewHeight = window.innerHeight;
  let scrollYsPosition = window.scrollY;
  console.log(viewHeight, scrollYsPosition);
  let percentScrolled;
};

scrollYTracker();

document.addEventListener("scroll", () => {
  if (headerBarLeftVal <= -20) {
    return;
  } else {
    headerBarLeftVal -= 5;
  }
  headerBar.style.left = `${headerBarLeftVal}%`;
});

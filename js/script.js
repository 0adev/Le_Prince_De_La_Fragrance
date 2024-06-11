const primaryHeader = document.querySelector(".primary-header");
const navLinks = document.querySelector(".nav-links");
const menuList = document.querySelector(".menu-list");
const featuresImgFrameLarge = document.querySelector(".features .image");
const featuresIconLarge = document.querySelector(".features .feature-icon");
const featuresImgFrameSmall = [
  document.querySelector(".first-feature img:first-of-type"),
  document.querySelector(".second-feature img:first-of-type"),
  document.querySelector(".third-feature img:first-of-type"),
];
const featuresIconSmall = [
  document.querySelector(".first-feature .icon"),
  document.querySelector(".second-feature .icon"),
  document.querySelector(".third-feature .icon"),
];

// toggle menu
const handleNavClick = (e) => {
  const target = e.target;
  const parentClassList = target.parentElement.classList;
  const targetClassList = target.classList;

  if (parentClassList.contains("hamburger-menu")) {
    e.preventDefault();
    menuList.classList.add("open-menu");
    return;
  } else if (targetClassList.contains("close")) {
    e.preventDefault();
    menuList.classList.remove("open-menu");
    return;
  }
};

// features section

const handleWindowScroll = () => {
  const scrollY = window.scrollY;
  const screenwidth = window.innerWidth;
  let largeScreenMin = 800;
  const largeScreenMax = 1524;
  let smallScreenMax = 796;

  const featuresSection = () => {
    const largeScreen = () => {
      if (scrollY > 2150) {
        featuresImgFrameLarge.style.backgroundImage =
          "url(./assets/hero-img1.jpg)";
        featuresIconLarge.style.backgroundImage =
          "url(./assets/perfume-svgrepo-com.svg)";
      } else if (scrollY > 1508) {
        featuresImgFrameLarge.style.backgroundImage =
          "url(./assets/features-img02.jpg)";
        featuresIconLarge.style.backgroundImage =
          "url(./assets/quality-medal-.svg)";
      } else {
        featuresImgFrameLarge.style.backgroundImage =
          "url(./assets/features-img01.jpg)";
        featuresIconLarge.style.backgroundImage =
          "url(./assets/timer-forward-.svg)";
      }
    };

    const smallScreen = () => {
      const scrollY = window.scrollY;

      if (scrollY > 770) {
        featuresImgFrameSmall[0].classList.add("translateX-0");
        featuresIconSmall[0].classList.add("translateX-0");
      }
      if (scrollY > 1410) {
        featuresImgFrameSmall[1].classList.add("translateX-0");
        featuresIconSmall[1].classList.add("translateX-0");
      }
      if (scrollY > 2010) {
        featuresImgFrameSmall[2].classList.add("translateX-0");
        featuresIconSmall[2].classList.add("translateX-0");
      }
    };

    if (screenwidth <= largeScreenMax && screenwidth >= largeScreenMin) {
      largeScreen();
    } else if (screenwidth <= smallScreenMax) {
      smallScreen();
    }
  };

  featuresSection();
};

// Event Listeners
window.addEventListener("scroll", handleWindowScroll);
navLinks.addEventListener("click", handleNavClick);

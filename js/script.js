// Cache selectors
const primaryHeader = document.querySelector(".primary-header");
const navLinks = document.querySelector(".nav-links");
const menuList = document.querySelector(".menu-list");
const featuresImgFrameLarge = document.querySelector(".features .image");
const featuresIconLarge = document.querySelector(".features .feature-icon");
const featuresImgFrameSmall = document.querySelectorAll(
  ".feature img:first-of-type"
);
const featuresIconSmall = document.querySelectorAll(".feature .icon");

// Toggle menu
const handleNavClick = (e) => {
  const target = e.target;
  const parentClassList = target.parentElement.classList;

  if (parentClassList.contains("hamburger-menu")) {
    e.preventDefault();
    menuList.classList.add("open-menu");
  } else if (target.classList.contains("close")) {
    e.preventDefault();
    menuList.classList.remove("open-menu");
  }
};

// Handle scroll
const handleWindowScroll = () => {
  const scrollY = window.scrollY;
  const screenwidth = window.innerWidth;
  const largeScreenMin = 800;
  const largeScreenMax = 1524;
  const smallScreenMax = 796;

  const updateLargeScreen = () => {
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

  const updateSmallScreen = () => {
    const addClasses = (index) => {
      if (index >= 0 && index < featuresImgFrameSmall.length) {
        featuresImgFrameSmall[index].classList.add("translateX-0");
      }
      if (index >= 0 && index < featuresIconSmall.length) {
        featuresIconSmall[index].classList.add("translateX-0");
      }
    };

    const removeClasses = () => {
      featuresImgFrameSmall.forEach((image) => {
        image.classList.remove("translateX-0");
      });
      featuresIconSmall.forEach((icon) => {
        icon.classList.remove("translateX-0");
      });
    };

    if (scrollY > 2010) {
      addClasses(2);
    } else if (scrollY > 1410) {
      addClasses(1);
    } else if (scrollY > 770) {
      addClasses(0);
    } else {
      removeClasses();
    }
  };

  if (screenwidth <= largeScreenMax && screenwidth >= largeScreenMin) {
    updateLargeScreen();
  } else if (screenwidth <= smallScreenMax) {
    updateSmallScreen();
  }
  updateLargeScreen();
  updateSmallScreen();
};

// Event Listeners
window.addEventListener("scroll", handleWindowScroll);
navLinks.addEventListener("click", handleNavClick);

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
const sectionHeading = document.querySelectorAll(".section-heading");

// Toggle menu
const handleNavClick = (e) => {
  const target = e.target;
  const parentClassList = target.parentElement.classList;

  if (parentClassList.contains("hamburger-menu")) {
    e.preventDefault();
    menuList.classList.add("open-menu");
  } else if (target.classList.contains("item")) {
    menuList.classList.remove("open-menu");
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

  const handleSectionHeading = (value, index) => {
    const heading = sectionHeading[index];
    if (scrollY > value) {
      heading.classList.add("translateY-0");
    } else {
      heading.classList.remove("translateY-0");
    }
  };

  const updateSmallScreen = () => {
    const featuresAnimation = () => {
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

      if (scrollY > 1780) {
        addClasses(2);
      } else if (scrollY > 1280) {
        addClasses(1);
      } else if (scrollY > 700) {
        addClasses(0);
      } else {
        removeClasses();
      }

      const featuresHeading = () => {
        handleSectionHeading(590, 0);
      };
      const collectionHeading = () => {
        handleSectionHeading(2240, 1);
      };

      featuresHeading();
      collectionHeading();
    };
    featuresAnimation();
  };

  const updateLargeScreen = () => {
    const featuresAnimation = () => {
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

      const featuresHeading = () => {
        handleSectionHeading(530, 0);
      };
      const collectionHeading = () => {
        handleSectionHeading(2230, 1);
      };

      featuresHeading();
      collectionHeading();
    };

    featuresAnimation();
  };
  if (screenwidth <= smallScreenMax) {
    updateSmallScreen();
  } else if (screenwidth <= largeScreenMax && screenwidth >= largeScreenMin) {
    updateLargeScreen();
  }
  updateSmallScreen();
  updateLargeScreen();
};

// Event Listeners
window.addEventListener("scroll", handleWindowScroll);
navLinks.addEventListener("click", handleNavClick);

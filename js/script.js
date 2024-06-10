const primaryHeader = document.querySelector(".primary-header");
const navLinks = document.querySelector(".nav-links");
const menuList = document.querySelector(".menu-list");
const featuresImgFrame = document.querySelector(".features .image");

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
    if (scrollY > 1986) {
      featuresImgFrame.style.backgroundImage = "url(./assets/hero-img1.jpg)";
    } else if (scrollY > 1308) {
      featuresImgFrame.style.backgroundImage =
        "url(./assets/features-img02.jpg)";
    } else {
      featuresImgFrame.style.backgroundImage =
        "url(./assets/features-img01.jpg)";
    }
    return;
  };

  featuresSection();
};

// Event Listeners
window.addEventListener("scroll", handleWindowScroll);
navLinks.addEventListener("click", handleNavClick);

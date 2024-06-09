const primaryHeader = document.querySelector(".primary-header");
const navLinks = document.querySelector(".nav-links");
const menuList = document.querySelector(".menu-list");

// favIcon dark theme

const screenwidth = window.innerWidth;
let largeScreenMin = 800;
const largeScreenMax = 1524;
let smallScreenMax = 796;
const scrollThreshold = window.scrollY;

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

// Event Listeners
navLinks.addEventListener("click", handleNavClick);

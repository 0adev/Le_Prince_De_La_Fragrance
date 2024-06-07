// Cache the elements
const navLinks = document.querySelector(".nav-links");
const menuList = document.querySelector(".menu-list");
const switcherIcon = document.querySelector(".fa-moon");

// Function to toggle the menu
const doSomthing = (e) => {
  const target = e.target;

  const toggleMenu = () => {
    // Check if the target is the menu or close button
    const isMenuButton =
      target.parentElement.classList.contains("hamburger-menu");
    const isCloseButton = target.classList.contains("close");

    // Toggle menu visibility based on the clicked element
    if (isMenuButton) {
      menuList.classList.add("open-menu");
    } else if (isCloseButton) {
      menuList.classList.remove("open-menu");
    }
  };

  // const darkMode = () => {

  // };

  toggleMenu();
  // darkMode();
};

// Attach event listener using event delegation
navLinks.addEventListener("click", doSomthing);

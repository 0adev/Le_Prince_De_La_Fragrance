const hero = document.querySelector(".hero");
const firstHeroImage = hero.querySelector(".first-column .image");

const webPageScroll = () => {
  const scrollThreshold = window.scrollY;

  const rotateImage = () => {
    const addClasses = () => {
      firstHeroImage.classList.remove("rotateX-0");
    };

    const removeClasses = () => {
      firstHeroImage.classList.add("rotateX-0");
    };

    if (scrollThreshold > 240) {
      removeClasses();
    } else {
      addClasses();
    }

    console.log(window.scrollY);
  };

  // function call
  rotateImage();
};

// Add event listener for the hamburger menu
hamburgerMenu.addEventListener("click", openMenu);
// Add event listener for closing the menu
closeNavList.addEventListener("click", closeMenu);
window.addEventListener("scroll", webPageScroll);

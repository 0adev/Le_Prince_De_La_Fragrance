const hero = document.querySelector(".hero");
const firstHeroImage = hero.querySelector(".first-column .image");

const webPageScroll = () => {
  const scrollThreshold = window.scrollY;

  const rotateImage = () => {
    const addClasses = () => {
      firstHeroImage.classList.remove("rotateX-0");
      return;
    };

    const removeClasses = () => {
      firstHeroImage.classList.add("rotateX-0");
      return;
    };

    if (scrollThreshold > 240) {
      removeClasses();
    } else {
      addClasses();
    }
  };

  // function call
  rotateImage();
};

window.addEventListener("scroll", webPageScroll);

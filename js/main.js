window.onload = function() {
  parallaxImages();
  loader();
  window.setTimeout(preloaderKiller, 1000);
  scrollToTop();
};

const scrollToTop = () => {
  window.onbeforeunload = function() {
    window.scrollTo(0, 0);
  };
};

const loader = () => {
  var preloader = document.getElementById("preloader");
  preloader.style.opacity = "0";
};
const preloaderKiller = () => {
  preloader.parentNode.removeChild(preloader);
};

const parallaxImages = () => {
  let image1 = document.getElementsByClassName("image1");
  new simpleParallax(image1, {
    orientation: "right",
    overflow: "true",
    scale: "2"
  });
  let image2 = document.getElementsByClassName("image2");
  new simpleParallax(image2, {
    orientation: "left",
    overflow: "true",
    scale: "2"
  });
  let image3 = document.getElementsByClassName("image3");
  new simpleParallax(image3, {
    overflow: "true",
    scale: "2"
  });
};

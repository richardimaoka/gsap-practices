gsap.registerPlugin(ScrollTrigger);

gsap.to(".e", {
  scrollTrigger: ".e", // start animation when ".box" enters the viewport
  x: 500,
  rotation: 360,
});

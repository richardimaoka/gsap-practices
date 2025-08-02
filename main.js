gsap.registerPlugin(ScrollTrigger);

gsap.to(".e", {
  scrollTrigger: {
    trigger: ".e",
    toggleActions: "play none none reset",
  },
  x: 500,
  rotation: 360,
});

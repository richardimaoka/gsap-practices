gsap.registerPlugin(ScrollTrigger);

gsap.to(".e", {
  scrollTrigger: {
    trigger: ".e",
    toggleActions: "restart none none reverse",
    markers: true,
    scrub: true,
  },
  x: 500,
  rotation: 360,
});

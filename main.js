gsap.to(".svgBox", {
  duration: 2,
  x: 300, // use transform shorthand (this is now using SVG units not px, the SVG viewBox is 100 units wide)
  xPercent: -100,
  // or target SVG attributes
  attr: {
    fill: "#8d3dae",
    rx: 10,
  },
});

import gsap from "gsap";

window.addEventListener('DOMContentLoaded', () => {
  gsap.fromTo(".crop rect",
    { scaleY: 0, transformOrigin: "bottom center" },
    { scaleY: 1, stagger: 0.3, duration: 1.2, ease: "bounce.out" }
  );

  gsap.to("#sun", {
    y: 10,
    repeat: -1,
    yoyo: true,
    duration: 2,
    ease: "power1.inOut"
  });
});


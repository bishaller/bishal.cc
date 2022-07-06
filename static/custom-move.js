gsap.set(".billBoard__mouse", {xPercent: -50, yPercent: -50});
let ball = document.querySelector(".billBoard__mouse");
const pos = {x: window.innerWidth / 2, y: window.innerHeight / 2};
const mouse = {x: pos.x, y: pos.y};
const speed = 0.1;

const xSet = gsap.quickSetter(ball, "x", "px");
const ySet = gsap.quickSetter(ball, "y", "px");

window.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});

gsap.ticker.add(() => {
    // adjust speed for higher refresh monitors
    const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

    pos.x += (mouse.x - pos.x) * dt;
    pos.y += (mouse.y - pos.y) * dt;
    xSet(pos.x);
    ySet(pos.y);
});

gsap.to(".billBoard__mouse", {
    rotation: "+=360",
    repeat: -1,
    paused: false,
    duration: 5,
    ease: "Linear.easeNone",
});
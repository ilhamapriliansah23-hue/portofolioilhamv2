const hamburger = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links a");

hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", String(isOpen));
});

links.forEach(link => link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
}));

document.querySelector("#current-year").textContent = new Date().getFullYear();

let Pupils = document.getElementsByClassName("footer-pupil"),
pupilsArr = Array.from(Pupils),
pupilStartPoint = -10,
pupilRangeX = 20,
pupilRangeY = 15,
mouseXStartPoint = 0,
mouseXEndPoint = window.innerWidth,
currentXPosition = 0,
fracXValue = 0,
mouseYEndPoint = window.innerHeight,
currentYPosition = 0,
fracYValue = 0,
mouseXRange = mouseXEndPoint - mouseXStartPoint;

const mouseMove = e => {
fracXValue = (currentXPosition = e.clientX - mouseXStartPoint) / mouseXRange;
fracYValue = (currentYPosition = e.clientY) / mouseYEndPoint;
let t = pupilStartPoint + fracXValue * pupilRangeX,
    o = pupilStartPoint + fracYValue * pupilRangeY;  /*animasi mata*/
pupilsArr.forEach(e => {
    e.style.transform = `translate(${t}px, ${o}px)`;
});
};
if (pupilsArr.length) {
    window.addEventListener("mousemove", mouseMove);
}

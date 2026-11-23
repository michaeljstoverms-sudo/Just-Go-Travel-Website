// JUST GO TRAVEL — slideshow, mobile navigation, and consultation form helpers
const slides = [...document.querySelectorAll(".hero-slide")];
const slideData = [
  { kicker: "THE MALDIVES", title: "Somewhere<br><em>beautiful</em> is calling.", copy: "Trade the everyday for turquoise water, warm horizons, and time well spent." },
  { kicker: "GREECE", title: "Find your own<br><em>island story.</em>", copy: "Whitewashed villages, blue water, and long afternoons made for wandering." },
  { kicker: "FIND YOUR ESCAPE", title: "A change of view<br><em>changes everything.</em>", copy: "Discover a new perspective, one unforgettable place at a time." },
  { kicker: "THE MOUNTAINS", title: "Go where the air<br><em>feels different.</em>", copy: "Trade the familiar for wide-open views and a little adventure." }
];
let activeSlide = 0;
let slideTimer;

function showSlide(index) {
  activeSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => slide.classList.toggle("active", i === activeSlide));
  document.getElementById("slideKicker").textContent = slideData[activeSlide].kicker;
  document.getElementById("slideTitle").innerHTML = slideData[activeSlide].title;
  document.getElementById("slideCopy").textContent = slideData[activeSlide].copy;
  document.getElementById("slideCurrent").textContent = String(activeSlide + 1).padStart(2, "0");
}
function restartSlideshow() {
  clearInterval(slideTimer);
  slideTimer = setInterval(() => showSlide(activeSlide + 1), 6000);
}
document.getElementById("prevSlide").addEventListener("click", () => { showSlide(activeSlide - 1); restartSlideshow(); });
document.getElementById("nextSlide").addEventListener("click", () => { showSlide(activeSlide + 1); restartSlideshow(); });
restartSlideshow();

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

// Destination and trip-interest links prefill the consultation form.
document.querySelectorAll("[data-destination]").forEach(link => link.addEventListener("click", () => {
  document.getElementById("destinationInput").value = link.dataset.destination;
}));
document.querySelectorAll("[data-interest]").forEach(link => link.addEventListener("click", () => {
  document.getElementById("destinationInput").value = link.dataset.interest;
}));

document.getElementById("year").textContent = new Date().getFullYear();

// FormSubmit sends the form to the business email. Its first submission requires
// the owner to confirm the activation email from FormSubmit.
document.getElementById("planForm").addEventListener("submit", () => {
  const message = document.getElementById("formMessage");
  message.textContent = "Sending your request…";
});

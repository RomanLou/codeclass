//Slider with courses
var slides = document.querySelectorAll('#slider_courses .courses_slider-item');
var slides_ind = document.querySelectorAll('#slider_courses-indicators .courses__list-link');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 5000);
var selected;

const elements = document.querySelectorAll("#slider_courses-indicators .courses__list-link");
elements.forEach(element => element.addEventListener("click", event => {
    event.preventDefault();
    selected = selectSlide(Array.prototype.indexOf.call(elements, event.target));
}, false));

function nextSlide() {
    cleanStyle();
    currentSlide = (currentSlide + 1) % slides.length;
    setStyle();
}

function selectSlide(position) {
    cleanStyle();
    currentSlide = position;
    setStyle();
}

function cleanStyle() {
    slides[currentSlide].className = 'courses_slider-item';
    slides_ind[currentSlide].className = 'courses__list-link';
}

function setStyle() {
    slides[currentSlide].className = 'courses_slider-item active';
    slides_ind[currentSlide].className = 'courses__list-link courses__list-link--active';
}
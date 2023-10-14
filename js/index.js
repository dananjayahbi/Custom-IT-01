const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');

let index = 0;

function nextSlide() {
    index = (index + 1) % slides.length;
    updateSlider();
}

function updateSlider() {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });

    slider.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(nextSlide, 5000); // Change slide every 5 seconds (adjust as needed)

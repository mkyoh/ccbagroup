let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
const totalSlides = slides.length;

function showSlides() {
    for (let i = 0; i < totalSlides; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > totalSlides) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

showSlides();
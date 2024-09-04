document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelector(".slides");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  let index = 0;

  function showSlide(n) {
    const totalSlides = slides.children.length;
    if (n >= totalSlides) index = 0;
    else if (n < 0) index = totalSlides - 1;
    else index = n;

    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  function showNextSlide() {
    showSlide(index + 1);
  }

  function showPrevSlide() {
    showSlide(index - 1);
  }

  nextButton.addEventListener("click", showNextSlide);
  prevButton.addEventListener("click", showPrevSlide);

  // Optional: Auto-slide functionality
  setInterval(showNextSlide, 5000); // Change slide every 5 seconds
});

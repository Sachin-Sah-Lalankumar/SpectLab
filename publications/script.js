document.addEventListener("DOMContentLoaded", function () {
  const cardList = document.querySelector(".card-list");
  const prevButton = document.querySelector(".navigation .prev");
  const nextButton = document.querySelector(".navigation .next");

  // Scroll card list to the left
  prevButton.addEventListener("click", function () {
    cardList.scrollBy({
      left: -300, // Adjust scroll amount based on card width
      behavior: "smooth",
    });
  });

  // Scroll card list to the right
  nextButton.addEventListener("click", function () {
    cardList.scrollBy({
      left: 300, // Adjust scroll amount based on card width
      behavior: "smooth",
    });
  });
});

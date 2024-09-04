// Get the modal
var modal = document.getElementById("modal");

// Get the image in the modal and the close button
var modalImg = document.getElementById("modalImage");
var span = document.getElementsByClassName("close")[0];

// Get all the images in the gallery and add click event listeners
var images = document.getElementsByClassName("gallery-item");
for (let i = 0; i < images.length; i++) {
  images[i].onclick = function () {
    modal.style.display = "flex";
    modalImg.src = this.src;
  };
}

// When the user clicks on the close button, close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal image, close the modal
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

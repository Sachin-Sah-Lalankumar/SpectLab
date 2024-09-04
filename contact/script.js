function initMap() {
  const location = { lat: 40.73061, lng: -73.935242 }; // Replace with your desired latitude and longitude
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: location,
  });
  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission for demonstration
    alert("Thank you for your message!");
  });

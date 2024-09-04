// Get references to necessary elements
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Toggle menu visibility and icon on button click
menuBtn.addEventListener("click", () => {
  // Toggle the 'open' class on navLinks
  navLinks.classList.toggle("open");

  // Check if the menu is open and change the icon accordingly
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.className = isOpen ? "ri-close-line" : "ri-menu-line";
});

// Ensure the 'Book Appointment' button is hidden or shown appropriately on resize
window.addEventListener("resize", () => {
  if (window.innerWidth > 780) {
    // Show the 'Book Appointment' button in desktop mode
    bookAppointmentBtn.style.display = "flex";
  } else if (!navLinks.classList.contains("open")) {
    // Hide the 'Book Appointment' button in mobile mode when the menu is closed
    bookAppointmentBtn.style.display = "none";
  }
});

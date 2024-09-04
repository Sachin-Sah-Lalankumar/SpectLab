document
  .getElementById("appointmentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve form values
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const appointmentDate = document.getElementById("appointmentDate").value;
    const timeSlot = document.getElementById("timeSlot").value;
    const additionalInfo = document.getElementById("additionalInfo").value;

    // Simple form validation (just an example)
    if (
      fullName === "" ||
      email === "" ||
      phone === "" ||
      appointmentDate === "" ||
      timeSlot === ""
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    // Display a confirmation message
    alert(
      `Thank you, ${fullName}! Your appointment has been booked for ${appointmentDate} during the ${timeSlot} time slot.`
    );
    // Optionally, reset the form after submission
    document.getElementById("appointmentForm").reset();
  });

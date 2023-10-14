// Wait for the DOM to be fully loaded before running the JavaScript code
document.addEventListener("DOMContentLoaded", function () {
    // Get references to the form and its elements
    const loginForm = document.getElementById("registration-form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    // Add an event listener to the form for when it's submitted
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get the values from the email and password inputs
        const email = emailInput.value;
        const password = passwordInput.value;

        // You can perform login validation here (e.g., sending data to a server, checking credentials, etc.)

        // For this example, we'll just display the email and password in an alert
        alert(`Email: ${email}\nPassword: ${password}`);
    });
});

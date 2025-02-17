const registrationForm = document.getElementById("form");
const errorMessages = document.getElementById("errorMessages");

registrationForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const { email, password } = registrationForm.elements;
    errorMessages.innerHTML = ""; // Clear previous error messages

    if (!email.value.trim() || !isValidEmail(email.value)) {
        displayError("Please enter a valid email address.");
        return;
    }

    if (!password.value.trim() || !isValidPassword(password.value)) {
        displayError("Password must be at least 8 characters long and contain at least one letter and one digit.");
        return;
    }

    // If validation passes, display the alert and reset the form
    alert("Registration successful!");

    // Clear the form fields individually
    email.value = '';
    password.value = '';
});

function isValidEmail(email) {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
}

function isValidPassword(password) {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
}

function displayError(message) {
    const errorDiv = document.createElement("div");
    errorDiv.textContent = message;
    errorMessages.appendChild(errorDiv);
}

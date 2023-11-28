'use-strict'

// DOM elements
const form = document.getElementById("email-form");
const emailInput = document.getElementById("email");
const errorMsg = document.getElementById("error-msg");
const errorIcon = document.getElementById("error-icon");

form.addEventListener("submit", (event) => {

    let emailRegex = new RegExp('^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$');
    let isValid = emailRegex.test(emailInput.value);

    // if the email field is not valid, show error
    // and prevent the form from being sent
    if (!isValid) {
      event.preventDefault();
      showError();
    }

});

const showError = () => {
    errorMsg.textContent = "Please, provide a valid email.";
    emailInput.classList.add("input-error");
    errorIcon.classList.add("input-error-icon-show");
}
// Get the current year for the copyright
const currentYear = new Date().getFullYear();
const yearSpan = document.getElementById("currentyear");
yearSpan.textContent = currentYear; // Update the year dynamically

// Get the last modified date of the document
const lastModified = document.lastModified;
const lastModifiedParagraph = document.getElementById("lastModified");
lastModifiedParagraph.textContent = `Last modified: ${lastModified}`; // Update the last modified date

document.addEventListener("DOMContentLoaded", () => {
    // Active Navigation Highlight
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.forEach(nav => nav.classList.remove("active"));
            link.classList.add("active");
        });
    });

    // Preserve active state on reload
    const currentPage = window.location.pathname;
    navLinks.forEach(link => {
        if (link.href.includes(currentPage)) {
            link.classList.add("active");
        }
    });
});


// Contact js

function validateForm() {
    let isValid = true;

    // Get form fields
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    // Get error message elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    // Reset errors
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    // Name validation
    if (name.value.trim() === "") {
        nameError.textContent = "Please enter your name.";
        isValid = false;
    }

    // Email validation
    if (!validateEmail(email.value)) {
        emailError.textContent = "Please enter a valid email.";
        isValid = false;
    }

    // Message validation
    if (message.value.trim() === "") {
        messageError.textContent = "Please enter a message.";
        isValid = false;
    }

    return isValid; // Prevent form submission if not valid
}

// Email validation function
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}


// toggle

const mainnav = document.querySelector(".my-navs");
const hambutton = document.querySelector("#menu-button");

hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("show");
    hambutton.classList.toggle("show");
});

document.addEventListener("DOMContentLoaded", () => {
    // Selecting elements
    const savedNameInput = document.getElementById("savedName");
    const saveButton = document.getElementById("saveButton");
    const greeting = document.getElementById("greeting");

    // Load stored name on page load
    if (localStorage.getItem("username")) {
        greeting.textContent = `Welcome back, ${localStorage.getItem("username")}!`;
    }

    // Save name to localStorage when the button is clicked
    saveButton.addEventListener("click", () => {
        const name = savedNameInput.value.trim();
        if (name) {
            localStorage.setItem("username", name);
            greeting.textContent = `Welcome back, ${name}!`;
        }
    });
});

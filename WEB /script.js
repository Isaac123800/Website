/* ================================
FREEDOM OF OPINION - JAVASCRIPT
================================ */

// Find the opinion form
const opinionForm = document.getElementById("opinionForm");

// Find the message area
const formMessage = document.getElementById("formMessage");

// Handle form submission
opinionForm.addEventListener("submit", function (event) {

```
// Stop the page from refreshing
event.preventDefault();

// Get the user's name
const name = document.getElementById("name").value.trim();

// Get the user's opinion
const opinion = document.getElementById("opinion").value.trim();

// Check that both fields have been completed
if (name === "" || opinion === "") {
    formMessage.textContent = "Please fill in both fields.";
    formMessage.style.color = "#dc2626";
    return;
}

// Show a success message
formMessage.textContent =
    `Thank you, ${name}! Your opinion has been submitted.`;

formMessage.style.color = "#16a34a";

// Clear the form
opinionForm.reset();
```

});

// ================================
// SMOOTH NAVIGATION
// ================================

// Add smooth scrolling to navigation links
const navigationLinks = document.querySelectorAll("nav a");

navigationLinks.forEach(function (link) {

```
link.addEventListener("click", function (event) {

    const targetId = this.getAttribute("href");

    // Make sure the link points to a section on this page
    if (targetId.startsWith("#")) {

        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth"
```


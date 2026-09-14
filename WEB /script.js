/* =================================
DARK / LIGHT MODE
================================= */

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {

```
document.body.classList.toggle("dark-mode");

if (document.body.classList.contains("dark-mode")) {
    themeButton.textContent = "☀️ Light Mode";
    localStorage.setItem("theme", "dark");
} else {
    themeButton.textContent = "🌙 Dark Mode";
    localStorage.setItem("theme", "light");
}
```

});

/* =================================
REMEMBER THEME
================================= */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
document.body.classList.add("dark-mode");
themeButton.textContent = "☀️ Light Mode";
}

/* =================================
OPINION FORM
================================= */

const opinionForm = document.getElementById("opinionForm");
const formMessage = document.getElementById("formMessage");

opinionForm.addEventListener("submit", function (event) {

```
event.preventDefault();

const name = document.getElementById("name").value.trim();
const opinion = document.getElementById("opinion").value.trim();

if (name === "" || opinion === "") {
    formMessage.textContent = "Please fill in both fields.";
    formMessage.style.color = "#dc2626";
    return;
}

formMessage.textContent =
    `Thank you, ${name}! Your opinion has been submitted.`;

formMessage.style.color = "#16a34a";

opinionForm.reset();
```

});

/* =================================
SMOOTH NAVIGATION
================================= */

const navigationLinks = document.querySelectorAll("nav a");

navigationLinks.forEach(function (link) {

```
link.addEventListener("click", function (event) {

    const targetId = this.getAttribute("href");

    if (targetId.startsWith("#")) {

        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    }
});
```

});

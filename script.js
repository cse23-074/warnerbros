document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger-menu");
    const navLinks = document.querySelector(".nav ul");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
});


const menuIcon = document.querySelector("#menu-icon");
const navlinks = document.querySelector(".nav-links");
menuIcon.addEventListener("click", (event) => {
    event.stopPropagation();
    navlinks.classList.toggle("active");
});
navlinks.addEventListener("mouseleave", () => {
    navlinks.classList.remove("active");
});
navlinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navlinks.classList.remove("active");
    });
});

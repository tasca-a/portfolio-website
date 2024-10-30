const hamburgerMenu = document.getElementById("hamburger-menu");
const hamburgerIcon = document.getElementById("hamburger-menu-icon");
const nav = document.getElementsByTagName("nav")[0];

hamburgerMenu.addEventListener(
    "click",
    function() {
        hamburgerIcon.classList.toggle("active")
        nav.classList.toggle("active")
    },
)

const workTogetherButton = document.getElementById("workTogether");
const contactSection = document.getElementById("contact")

workTogetherButton.addEventListener(
    "click",
    function() {
        contactSection.scrollIntoView({ behavior: "smooth"});
    }
)
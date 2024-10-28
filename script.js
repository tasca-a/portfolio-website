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
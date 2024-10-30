// Each page-specific script file must contain its functionalities inside a function, because
// otherwise all the variables will be in the global scope which (to my understanding) is not
// cleared when removing/replacing the scripts when the navigation occurs.
function initializeHomepage() {
    // Homepage functionalities.
    const workTogetherButton = document.getElementById("workTogether");
    const contactSection = document.getElementById("contact")

    workTogetherButton.addEventListener(
        "click",
        function() {
            contactSection.scrollIntoView({ behavior: "smooth"});
        }
    )

    const aboutMeButton = document.getElementById("goToAboutMe");
    aboutMeButton.addEventListener(
        "click",
        function() {
            loadPage("about-me");
        }
    );
}

initializeHomepage();
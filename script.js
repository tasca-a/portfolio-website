// Hamburger menu functionalities.
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

// Load new pages functionalities.
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
    link.addEventListener(
        "click",
        function(event) {
            event.preventDefault();

            // Het the page to load from the data-page attribute.
            const page = this.getAttribute("data-page");
            loadPage(page);

            hamburgerIcon.classList.remove("active")
            nav.classList.remove("active")

            // Update the URL without reloading the page.
            history.pushState({ page }, "", `#${page}`)
        }
    );
});

const content = document.querySelector("main");
function loadPage(page) {
    fetch(`${page}.html`)
        .then(response => {
            if (!response.ok) throw new Error(`Failed to load ${page}`);
            return response.text();
        })
        .then(data => {
            // Update the main content.
            content.innerHTML = data;

            navLinks.forEach(link => {
                if (link.getAttribute("data-page") === page) {
                    link.style.textDecoration = "underline";
                } else {
                    link.style.textDecoration = "none";
                }
            });

            setTimeout(() => {
                content.scrollTo({ top: 0, behavior: 'smooth' });
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 50);

            // Load page-specific scripts.
            loadScript(`${page}.js`);
        })
        .catch(error => console.error("Error loading page: ", error));
}

function loadScript(scriptSrc) {
    // Remove any previously loaded script to prevent duplication.
    const oldScript = document.querySelector(`script[src="${scriptSrc}"]`);
    if (oldScript) {
        console.log(`oldScript = ${oldScript.src}`);
        oldScript.remove();
    }

    const script = document.createElement('script');
    script.src = scriptSrc;
    script.type = "text/javascript";
    script.async = true;

    document.body.appendChild(script);
}

// Handle back/forward navigation.
window.addEventListener("popstate", (event) => {
    const page = event.state ? event.state.page : "home";
    loadPage(page);
});

// Initial load.
loadPage("home");
/home
/* =========================
   MOBILE NAVIGATION
========================= */

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    const isOpen = navMenu.classList.contains("active");

    menuToggle.textContent = isOpen ? "✕" : "☰";
    menuToggle.setAttribute("aria-expanded", isOpen);
});


// Close mobile navigation after clicking a link

const navLinks = navMenu.querySelectorAll("a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");

        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
    });
});


/* =========================
   DARK / LIGHT THEME
========================= */

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

    const isLight = document.body.classList.contains("light-theme");

    themeToggle.textContent = isLight ? "☾" : "☀";

    themeToggle.setAttribute(
        "aria-label",
        isLight ? "Switch to dark theme" : "Switch to light theme"
    );

});


/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const revealElements = document.querySelectorAll(
    ".section-heading, .about-card, .skill-card, .project-card, .badge-card, .contact-card"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver(
    (entries, observerInstance) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observerInstance.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(element => {
    observer.observe(element);
});


/* =========================
   CURRENT YEAR
========================= */

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();


/* =========================
   ACTIVE NAVIGATION LINK
========================= */

const sections = document.querySelectorAll("section[id]");

const sectionObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const currentId = entry.target.getAttribute("id");

                navLinks.forEach(link => {

                    link.classList.remove("active");

                    if (link.getAttribute("href") === `#${currentId}`) {
                        link.classList.add("active");
                    }

                });

            }

        });

    },
    {
        threshold: 0.4
    }
);

sections.forEach(section => {
    sectionObserver.observe(section);
});


/* =========================
   CONSOLE MESSAGE
========================= */

console.log(
    "%cWelcome to Surya's Cybersecurity Portfolio!",
    "color: #ffad33; font-size: 16px; font-weight: bold;"
);

console.log(
    "Learning SOC Analysis, Ethical Hacking and VAPT."
);


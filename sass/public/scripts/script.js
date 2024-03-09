const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("header nav");
const mediaQuery = window.matchMedia("(min-width: 1025px)");

function handleMediaChange(e) {
    if (e.matches) {
        nav.style.display = "flex";
    } else {
        nav.style.display = "none";
    }
}

handleMediaChange(mediaQuery);

mediaQuery.addEventListener("change", handleMediaChange);

hamburger.addEventListener("click", () => {
    if (nav.style.display === "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
    }
});

const root = document.documentElement;

const currentMode = localStorage.getItem('mode');

if (currentMode === 'dark') {
    root.classList.add('dark');
} else {
    root.classList.add('light');
}

document.getElementById('dark-mode').addEventListener('click', function () {
    if (root.classList.contains('dark')) {
        root.classList.remove('dark');
        root.classList.add('light');

        localStorage.setItem('mode', 'light');
    } else {
        root.classList.remove('light');
        root.classList.add('dark');

        localStorage.setItem('mode', 'dark');
    }
});


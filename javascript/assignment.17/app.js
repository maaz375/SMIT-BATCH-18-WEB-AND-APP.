function goLogin() {
    window.location.href = "login.html";
}

function goSignup() {
    window.location.href = "signup.html";
}

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuToggle && mobileMenu) {
    const closeMenu = () => {
        menuToggle.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        mobileMenu.classList.remove("is-open");
        mobileMenu.setAttribute("aria-hidden", "true");
    };

    menuToggle.addEventListener("click", () => {
        const isOpen = menuToggle.classList.toggle("is-open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        mobileMenu.classList.toggle("is-open", isOpen);
        mobileMenu.setAttribute("aria-hidden", String(!isOpen));
    });

    mobileMenu.querySelectorAll("a, button").forEach((item) => {
        item.addEventListener("click", closeMenu);
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
            closeMenu();
        }
    });
}

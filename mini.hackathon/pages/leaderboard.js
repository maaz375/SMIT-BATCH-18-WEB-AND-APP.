// ===== SECTION NAVIGATION (Top Helpers / Rankings / Badges) =====
const sections = {
  "top helpers": document.querySelector(".top-helpers-wrap"),
  "rankings": document.querySelector(".rank-list"),
  "badges": document.querySelector(".badge-system")
};

let navLinks = document.querySelectorAll(".nav-item");

navLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    let text = this.innerText.toLowerCase();

    // Remove active class
    navLinks.forEach(l => l.classList.remove("active"));
    this.classList.add("active");

    // Hide all sections first
    Object.values(sections).forEach(sec => {
      if (sec) sec.style.display = "none";
    });

    // Show selected section
    if (text.includes("top")) {
      sections["top helpers"].style.display = "block";
    } 
    else if (text.includes("ranking")) {
      sections["rankings"].style.display = "block";
    } 
    else if (text.includes("badge")) {
      sections["badges"].style.display = "block";
    }
  });
});

// ===== DEFAULT VIEW (show Rankings first) =====
window.addEventListener("DOMContentLoaded", () => {
  Object.values(sections).forEach(sec => {
    if (sec) sec.style.display = "none";
  });

  if (sections["rankings"]) {
    sections["rankings"].style.display = "block";
  }
});
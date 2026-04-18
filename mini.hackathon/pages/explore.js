// ===== GET DATA =====
let requests = JSON.parse(localStorage.getItem("requests")) || [];

// ===== DEMO DATA =====
if (requests.length === 0) {
  requests = [
    {
      title: "Need help",
      description: "Help needed",
      category: "Web Development",
      urgency: "High",
      skills: ["HTML", "CSS"],
      location: "Karachi",
      user: "Ayesha Khan",
      helpers: 1,
      status: "solved"
    },
    {
      title: "Portfolio responsive issue",
      description: "HTML/CSS layout issue",
      category: "Web Development",
      urgency: "High",
      skills: ["CSS", "Responsive"],
      location: "Karachi",
      user: "Sara Noor",
      helpers: 1,
      status: "open"
    },
    {
      title: "Figma feedback needed",
      description: "Poster design feedback",
      category: "Design",
      urgency: "Medium",
      skills: ["Figma"],
      location: "Lahore",
      user: "Ayesha Khan",
      helpers: 1,
      status: "open"
    }
  ];

  localStorage.setItem("requests", JSON.stringify(requests));
}


// ===== GET ELEMENTS =====
let container = document.querySelector(".feed");
let selects = document.querySelectorAll("aside select");
let categorySelect = selects[0];
let urgencySelect = selects[1];

let skillInput = document.querySelector('input[placeholder*="React"]');
let locationInput = document.querySelector('input[placeholder*="Karachi"]');


// ===== SET FILTER OPTIONS =====
let categories = [...new Set(requests.map(r => r.category))];
let urgencies = [...new Set(requests.map(r => r.urgency))];

categories.forEach(cat => {
  let opt = document.createElement("option");
  opt.textContent = cat;
  categorySelect.appendChild(opt);
});

urgencies.forEach(u => {
  let opt = document.createElement("option");
  opt.textContent = u;
  urgencySelect.appendChild(opt);
});


// ===== RENDER FUNCTION =====
function render(data) {
  container.innerHTML = "";

  data.forEach(req => {
    let div = document.createElement("div");
    div.className = "card";

    let tags = `
      <span>${req.category}</span>
      <span class="red">${req.urgency}</span>
      ${req.status === "solved" ? '<span class="green">Solved</span>' : ''}
    `;

    div.innerHTML = `
      <div class="tags">${tags}</div>

      <h3>${req.title}</h3>
      <p>${req.description}</p>

      <div class="meta">
        <div>
          <strong>${req.user}</strong>
          <p>${req.location} • ${req.helpers} helper interested</p>
        </div>
        <a href="#">Open details</a>
      </div>
    `;

    // CLICK EVENT
    div.querySelector("a").onclick = function (e) {
      e.preventDefault();
      alert("Opening: " + req.title);
    };

    container.appendChild(div);
  });
}


// ===== FILTER FUNCTION =====
function applyFilters() {
  let category = categorySelect.value;
  let urgency = urgencySelect.value;
  let skill = skillInput.value.toLowerCase();
  let location = locationInput.value.toLowerCase();

  let filtered = requests.filter(req => {
    return (
      (category === "All categories" || req.category === category) &&
      (urgency === "All urgency levels" || req.urgency === urgency) &&
      (skill === "" || req.skills.join(" ").toLowerCase().includes(skill)) &&
      (location === "" || req.location.toLowerCase().includes(location))
    );
  });

  render(filtered);
}


// ===== EVENTS =====
categorySelect.onchange = applyFilters;
urgencySelect.onchange = applyFilters;
skillInput.oninput = applyFilters;
locationInput.oninput = applyFilters;


// ===== INITIAL LOAD =====
render(requests);


// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.onclick = function (e) {
    let id = this.getAttribute("href");

    if (id.startsWith("#")) {
      e.preventDefault();
      let section = document.querySelector(id);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
});
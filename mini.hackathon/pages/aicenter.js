// ===== LOAD DATA =====
let requests = JSON.parse(localStorage.getItem("requests")) || [];
let users = JSON.parse(localStorage.getItem("users")) || [];


// ===== DEMO DATA =====
if (requests.length === 0) {
  requests = [
    {
      title: "Need help with JS bug",
      description: "JavaScript error in project",
      urgency: "High"
    },
    {
      title: "Portfolio layout issue",
      description: "CSS responsive problem",
      urgency: "High"
    },
    {
      title: "Figma feedback",
      description: "Need design review",
      urgency: "Medium"
    }
  ];

  localStorage.setItem("requests", JSON.stringify(requests));
}


// ===== AI: AUTO CATEGORY =====
function detectCategory(text) {
  text = text.toLowerCase();

  if (text.includes("js") || text.includes("javascript") || text.includes("css") || text.includes("html")) {
    return "Web Development";
  } 
  else if (text.includes("design") || text.includes("figma")) {
    return "Design";
  } 
  else if (text.includes("python") || text.includes("data")) {
    return "Data / Python";
  } 
  else {
    return "General";
  }
}


// ===== AI: SUGGEST TAGS =====
function getTags(text) {
  text = text.toLowerCase();
  let tags = [];

  if (text.includes("bug")) tags.push("Debugging");
  if (text.includes("responsive")) tags.push("Responsive");
  if (text.includes("api")) tags.push("API");
  if (text.includes("ui")) tags.push("UI/UX");
  if (text.includes("figma")) tags.push("Figma");

  return tags.length ? tags : ["General"];
}


// ===== AI: REWRITE SUGGESTION =====
function rewriteText(title, desc) {
  return `${title} – ${desc}. Looking for quick help from the community.`;
}


// ===== AI ANALYSIS =====
let categoryCount = {};
let highUrgency = 0;

requests.forEach(req => {
  let combined = req.title + " " + req.description;

  // add category if not exists
  req.category = detectCategory(combined);

  // count category
  categoryCount[req.category] = (categoryCount[req.category] || 0) + 1;

  // urgency
  if (req.urgency === "High") highUrgency++;
});

// top category
let topCategory = Object.keys(categoryCount).sort((a, b) => {
  return categoryCount[b] - categoryCount[a];
})[0];


// ===== TRUSTED USERS =====
let mentors = users.filter(u => u.trust >= 80 || u.role === "Can Help");


// ===== UPDATE STATS =====
let stats = document.querySelectorAll(".stat");

if (stats.length >= 3) {
  stats[0].querySelector("h3").innerText = topCategory || "General";
  stats[1].querySelector("h3").innerText = highUrgency;
  stats[2].querySelector("h3").innerText = mentors.length;
}


// ===== RENDER AI RECOMMENDATIONS =====
let container = document.querySelector(".section");

if (container) {
  container.innerHTML = `
    <small>AI RECOMMENDATIONS</small>
    <h2>Requests needing attention</h2>
  `;

  // prioritize high urgency
  let sorted = requests.sort((a, b) => {
    if (a.urgency === "High" && b.urgency !== "High") return -1;
    if (b.urgency === "High" && a.urgency !== "High") return 1;
    return 0;
  });

  sorted.forEach(req => {
    let combined = req.title + " " + req.description;

    let tags = getTags(combined);
    let rewrite = rewriteText(req.title, req.description);

    let div = document.createElement("div");
    div.className = "req";

    div.innerHTML = `
      <h4>${req.title}</h4>
      <p>${req.description}</p>

      <div class="tags">
        <span class="tag">${req.category}</span>
        <span class="tag">${req.urgency}</span>
      </div>

      <p style="font-size:12px; opacity:0.7;">
        💡 AI Suggestion: ${rewrite}
      </p>

      <p style="font-size:12px;">
        🏷️ Tags: ${tags.join(", ")}
      </p>

      <a href="#" class="btn">Open</a>
    `;

    // CLICK
    div.querySelector(".btn").onclick = function (e) {
      e.preventDefault();
      alert("Opening: " + req.title);
    };

    container.appendChild(div);
  });
}


// ===== NAVIGATION =====
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


// ===== LIVE AI EFFECT =====
setInterval(() => {
  document.querySelectorAll(".stat").forEach(box => {
    box.style.transform = "scale(1.05)";
    setTimeout(() => {
      box.style.transform = "scale(1)";
    }, 300);
  });
}, 3000);
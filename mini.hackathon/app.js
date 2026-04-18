// ===== LOAD DATA =====
let requests = JSON.parse(localStorage.getItem("requests")) || [];
let users = JSON.parse(localStorage.getItem("users")) || [];


// ===== DEFAULT DATA =====
if (requests.length === 0) {
  requests = [
    { title: "Need help", description: "Help needed", status: "open" },
    { title: "Portfolio help", description: "Responsive issue", status: "open" },
    { title: "Design feedback", description: "Need feedback", status: "solved" }
  ];
  localStorage.setItem("requests", JSON.stringify(requests));
}

if (users.length === 0) {
  users = [
    { name: "User1" },
    { name: "User2" },
    { name: "User3" }
  ];
  localStorage.setItem("users", JSON.stringify(users));
}


// ===== UPDATE STATS (without changing HTML) =====
let stats = document.querySelectorAll(".stat h2");

if (stats.length >= 3) {
  let members = users.length;
  let totalRequests = requests.length;
  let solved = requests.filter(r => r.status === "solved").length;

  stats[0].innerText = members + "+";
  stats[1].innerText = totalRequests + "+";
  stats[2].innerText = solved + "+";
}


// ===== RENDER REQUESTS =====
let container = document.querySelector("#requests .cards");

if (container) {
  container.innerHTML = "";

  requests.forEach(req => {
    let card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${req.title}</h3>
      <p>${req.description}</p>
      <a href="#">Open details</a>
    `;

    // CLICK EVENT
    card.onclick = function () {
      alert("Request: " + req.title);
    };

    container.appendChild(card);
  });
}


// ===== POST REQUEST BUTTON =====
let postBtn = document.querySelector(".outline");

if (postBtn) {
  postBtn.onclick = function (e) {
    e.preventDefault();

    let title = prompt("Enter request title:");
    if (!title) return;

    let desc = prompt("Enter description:");

    // SIMPLE AI TAGGING
    let tag = "General";
    let text = (title + " " + desc).toLowerCase();

    if (text.includes("js") || text.includes("javascript")) tag = "JavaScript";
    else if (text.includes("design")) tag = "Design";
    else if (text.includes("bug")) tag = "Debugging";

    let newRequest = {
      title: title + " (" + tag + ")",
      description: desc,
      status: "open"
    };

    requests.push(newRequest);
    localStorage.setItem("requests", JSON.stringify(requests));

    alert("Request Added!");
    location.reload();
  };
}


// ===== LIVE EFFECT =====
let liveBtn = document.querySelector(".ghost");

if (liveBtn) {
  setInterval(() => {
    liveBtn.style.opacity = "0.6";

    setTimeout(() => {
      liveBtn.style.opacity = "1";
    }, 400);

  }, 2000);
}
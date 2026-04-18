// ===== GET ELEMENTS =====
let selects = document.querySelectorAll("select");
let nameSelect = selects[0];
let roleSelect = selects[1];

let emailInput = document.querySelector('input[type="email"]');
let passwordInput = document.querySelector('input[type="password"]');

let btn = document.querySelector(".btn");


// ===== SET ROLE OPTIONS (NO HTML CHANGE) =====
roleSelect.innerHTML = `
  <option>Need Help</option>
  <option>Can Help</option>
  <option>Both</option>
`;


// ===== LOCAL STORAGE =====
let users = JSON.parse(localStorage.getItem("users")) || [];
let currentUser = JSON.parse(localStorage.getItem("currentUser"));


// ===== DEFAULT USER =====
if (users.length === 0) {
  users = [
    {
      name: "Ayesha Khan",
      email: "ayesha@gmail.com",
      password: "1234",
      role: "Both"
    }
  ];
  localStorage.setItem("users", JSON.stringify(users));
}


// ===== LOGIN / SIGNUP =====
btn.onclick = function (e) {
  e.preventDefault();

  let name = nameSelect.value;
  let role = roleSelect.value;
  let email = emailInput.value.trim();
  let password = passwordInput.value.trim();

  if (email === "" || password === "") {
    alert("Please fill all fields");
    return;
  }

  // CHECK USER
  let foundUser = users.find(u => u.email === email && u.password === password);

  if (foundUser) {
    // LOGIN
    localStorage.setItem("currentUser", JSON.stringify(foundUser));
    alert("Login Successful!");
    showDashboard(foundUser);

  } else {
    // SIGNUP
    let newUser = {
      name: name,
      email: email,
      password: password,
      role: role
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(newUser));

    alert("Account Created!");
    showDashboard(newUser);
  }
};


// ===== SHOW DASHBOARD =====
function showDashboard(user) {
  let dashboardBox = document.querySelector("#dashboard .box");

  if (dashboardBox) {
    dashboardBox.innerHTML = `
      <h2>Welcome, ${user.name}</h2>
      <p><b>Email:</b> ${user.email}</p>
      <p><b>Role:</b> ${user.role}</p>
      <button id="logoutBtn">Logout</button>
    `;
  }

  // SCROLL
  document.getElementById("dashboard").scrollIntoView({
    behavior: "smooth"
  });

  // LOGOUT
  setTimeout(() => {
    let logoutBtn = document.getElementById("logoutBtn");

    if (logoutBtn) {
      logoutBtn.onclick = function () {
        localStorage.removeItem("currentUser");
        alert("Logged out!");
        location.reload();
      };
    }
  }, 100);
}


// ===== AUTO LOGIN =====
if (currentUser) {
  showDashboard(currentUser);
}


// ===== SMOOTH NAVIGATION =====
let links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.onclick = function (e) {
    let targetId = this.getAttribute("href");

    if (targetId.startsWith("#")) {
      e.preventDefault();

      let section = document.querySelector(targetId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth"
        });
      }
    }
  };
});
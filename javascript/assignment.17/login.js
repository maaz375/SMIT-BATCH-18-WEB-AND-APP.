function login() {
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;

    if (!email || !password) {
        alert("All fields are required!");
        return;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Invalid email format!");
        return;
    }

    if (password.length < 4 || password.length > 15) {
        alert("Password must be 4 to 15 characters!");
        return;
    }

    // 🔥 USERS ARRAY CHECK
    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(u => u.email === email);

    if (!user) {
        alert("Email not found!");
        return;
    }

    if (user.password !== password) {
        alert("Incorrect password!");
        return;
    }

    // ✅ SESSION SAVE
    localStorage.setItem("currentUser", JSON.stringify(user));

    alert("Login successful!");

    window.location.href = "web.html";
}
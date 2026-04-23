function signup() {
    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();

    // 🔥 FIX: email lowercase (important for login matching)
    let email = document.getElementById("email").value.trim().toLowerCase();

    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let agree = document.getElementById("agree").checked;

    // Required
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        alert("All fields are required!");
        return;
    }

    // Name validation
    if (firstName.length < 3 || firstName.length > 13) {
        alert("First name must be 3 to 13 characters!");
        return;
    }

    if (lastName.length < 3 || lastName.length > 13) {
        alert("Last name must be 3 to 13 characters!");
        return;
    }

    // Password validation
    if (password.length < 4 || password.length > 15) {
        alert("Password must be 4 to 15 characters!");
        return;
    }

    if (confirmPassword.length < 4 || confirmPassword.length > 15) {
        alert("Confirm password must be 4 to 15 characters!");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Email format
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Invalid email format!");
        return;
    }

    // Checkbox
    if (!agree) {
        alert("You must agree to Privacy Policy & Terms!");
        return;
    }

    // 📦 GET USERS ARRAY
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // ❌ duplicate email check
    let exists = users.find(u => u.email === email);
    if (exists) {
        alert("Email already registered!");
        return;
    }

    // ✔ CLEAN USER OBJECT
    let newUser = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    };

    users.push(newUser);

    // 💾 SAVE BACK
    localStorage.setItem("users", JSON.stringify(users));

    // 🔥 clear session conflict (optional but good)
    localStorage.removeItem("currentUser");

    alert("Signup successful!");

    window.location.href = "login.html";
}
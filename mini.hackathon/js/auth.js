let isLogin = true;

// Toggle Login / Signup
function toggleMode() {
    isLogin = !isLogin;

    document.getElementById('signup-fields').style.display = isLogin ? 'none' : 'block';
    document.getElementById('form-title').innerText = isLogin 
        ? "Authenticate your community profile" 
        : "Create your community profile";
    document.getElementById('main-btn').innerText = isLogin 
        ? "Continue to dashboard" 
        : "Create Account";
    document.getElementById('toggle-msg').innerText = isLogin 
        ? "Don't have an account?" 
        : "Already have an account?";
    document.getElementById('toggle-link').innerText = isLogin 
        ? "Signup" 
        : "Login";
}

// FORM SUBMIT
document.getElementById('authForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value.trim().toLowerCase();
    const password = document.getElementById('password').value.trim();
    const userName = document.getElementById('userName').value.trim();

    let users = JSON.parse(localStorage.getItem('users')) || [];

    // ================= LOGIN =================
    if (isLogin) {

        const user = users.find(u => 
            u.email === email && u.password === password
        );

        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', 'logged-in');
            alert("Login successful ✅");
            window.location.href = 'index.html';
        } else {
            alert("Invalid email or password ❌");
        }

    } 
    
    // ================= SIGNUP =================
    else {

        if (!userName || !email || !password) {
            alert("Please fill all fields ❌");
            return;
        }

        const existingUser = users.find(u => u.email === email);

        if (existingUser) {
            alert("User already exists ❌");
            return;
        }

        const newUser = {
            userName,
            email,
            password
        };

        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        alert("Signup successful ✅ Now login");
        toggleMode();
    }
});
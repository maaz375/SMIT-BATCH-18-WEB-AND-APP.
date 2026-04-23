let generatedOTP = "";
let isOTPVerified = false;
let otpExpiryTime = 0;

// ================= EMAIL CHECK =================
function checkEmail() {
    let email = document.getElementById("email").value.trim();

    if (!email) {
        alert("Enter email!");
        return;
    }

    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(email)) {
        alert("Invalid email format!");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(u => u.email === email);

    if (!user) {
        alert("This email is not registered!");
        return;
    }

    // OTP generate
    generatedOTP = Math.floor(1000 + Math.random() * 9000).toString();
    otpExpiryTime = Date.now() + 60000;

    alert("Your OTP is: " + generatedOTP);

    // enable OTP input
    document.getElementById("otp").disabled = false;
    document.getElementById("otpBtn").disabled = false;

    // lock email
    document.getElementById("email").disabled = true;
    document.getElementById("emailBtn").disabled = true;
}

// ================= VERIFY OTP =================
function verifyOTP() {
    let otp = document.getElementById("otp").value;

    if (!otp) {
        alert("Enter OTP!");
        return;
    }

    if (Date.now() > otpExpiryTime) {
        alert("OTP expired!");
        return;
    }

    if (otp !== generatedOTP) {
        alert("Invalid OTP!");
        return;
    }

    alert("OTP Verified!");
    isOTPVerified = true;

    document.getElementById("otp").disabled = true;
    document.getElementById("otpBtn").disabled = true;

    document.getElementById("passBox").style.display = "block";

    toggleResetButton(); // 🔥 FIX CALL
}

// ================= RESET PASSWORD =================
function resetPassword() {
    let newPassword = document.getElementById("newPassword").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();
    let email = document.getElementById("email").value.trim();

    if (!isOTPVerified) {
        alert("Verify OTP first!");
        return;
    }

    if (newPassword.length < 4 || newPassword.length > 15) {
        alert("Password must be 4 to 15 characters!");
        return;
    }

    if (newPassword !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let index = users.findIndex(u => u.email === email);

    if (index === -1) {
        alert("User not found!");
        return;
    }

    users[index].password = newPassword;

    localStorage.setItem("users", JSON.stringify(users));

    alert("Password updated successfully!");

    window.location.href = "login.html";
}

// ================= BUTTON CONTROL =================
function toggleResetButton() {
    let newPassword = document.getElementById("newPassword")?.value || "";
    let confirmPassword = document.getElementById("confirmPassword")?.value || "";
    let resetBtn = document.getElementById("resetBtn");

    if (!resetBtn) return;

    let validLength = newPassword.length >= 4 && newPassword.length <= 15;
    let match = newPassword === confirmPassword;

    if (isOTPVerified && validLength && match) {
        resetBtn.disabled = false;
        resetBtn.style.opacity = "1";
    } else {
        resetBtn.disabled = true;
        resetBtn.style.opacity = "0.5";
    }
}

// realtime input tracking
document.addEventListener("input", toggleResetButton);
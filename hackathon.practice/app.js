function logout(){
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
}

function isStrongPassword(password) {
    let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;
    return pattern.test(password);
}

function signup() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;

    if(!isStrongPassword(password)){
    alert("Password must be strong (A@12 type)");
    return;
}

    if(!name || !email || !password){
        alert("Please fill all fields");
        return;
    }

    // 📧 email check
    if(!isValidEmail(email)){
        alert("Invalid email format");
        return;
    }

    // 🔐 password strength check
    if(password.length < 6){
        alert("Password must be at least 6 characters");
        return;
    }

    let user = {
        name,
        email,
        password
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup successful!");

    window.location.href = "login.html";
}

function toggleLoginPassword() {
    let pass = document.getElementById("loginPassword");

    if(pass.type === "password"){
        pass.type = "text";
    } else {
        pass.type = "password";
    }
}

function toggleSignupPassword() {
    let pass = document.getElementById("password");

    if(pass.type === "password"){
        pass.type = "text";
    } else {
        pass.type = "password";
    }
}

function isValidEmail(email) {
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

function login() {
    let email = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value;
    let remember = document.getElementById("rememberMe").checked;

    let storedUser = JSON.parse(localStorage.getItem("user"));

    if(!storedUser){
        alert("No account found");
        return;
    }

    if(email === storedUser.email && password === storedUser.password){

        localStorage.setItem("loggedIn", "true");

        // 🧠 Remember me logic
        if(remember){
            localStorage.setItem("rememberUser", email);
        } else {
            localStorage.removeItem("rememberUser");
        }

        window.location.href = "index.html";
    } else {
        alert("Invalid credentials");
    }
}

let generatedOTP = null;

function sendOTP() {
    let email = document.getElementById("loginEmail").value;

    if(!email){
        alert("Enter email first");
        return;
    }

    // fake OTP generate
    generatedOTP = Math.floor(1000 + Math.random() * 9000);

    alert("Your OTP is: " + generatedOTP);
}

function verifyOTP() {
    let inputOTP = document.getElementById("otpInput").value;

    if(inputOTP == generatedOTP){
        alert("OTP Verified!");

        localStorage.setItem("loggedIn", "true");
        window.location.href = "index.html";
    } else {
        alert("Invalid OTP");
    }
}

let products = [
    { id: 1, name: "Shoes", price: 2000, image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNob2VzfGVufDB8fDB8fHww" },
    { id: 2, name: "Watch", price: 1500, image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdhdGNofGVufDB8fDB8fHww" },
    { id: 3, name: "T-Shirt", price: 1000, image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dCUyMHNoaXJ0fGVufDB8fDB8fHww" },
    { id: 4, name: "Bag", price: 2500, image: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhZ3xlbnwwfHwwfHx8MA%3D%3D" }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function showProducts() {
    let productList = document.getElementById("productList");
    productList.innerHTML = "";

    products.forEach(product => {
        let div = document.createElement("div");
        div.className = "card";

        div.innerHTML = `
            <img src="${product.image}">
            <h3>${product.name}</h3>
            <p>Rs ${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;

        productList.appendChild(div);
    });
}

function addToCart(id) {
    let item = products.find(p => p.id === id);

    let existing = cart.find(p => p.id === id);

    if(existing){
        existing.qty += 1;
    } else {
        item.qty = 1;
        cart.push(item);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    document.getElementById("cartCount").innerText = cart.length;

    alert(item.name + " added to cart");
}

window.onload = function () {
    showProducts();
    document.getElementById("cartCount").innerText = cart.length;
};

function showProducts(data = products) {
    let productList = document.getElementById("productList");
    productList.innerHTML = "";

    data.forEach(product => {
        let div = document.createElement("div");
        div.className = "card";

        div.innerHTML = `
            <img src="${product.image}">
            <h3>${product.name}</h3>
            <p>Rs ${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;

        productList.appendChild(div);
    });
}

// SEARCH FUNCTION
document.addEventListener("input", function(e){
    if(e.target.id === "searchBox"){
        let value = e.target.value.toLowerCase();

        let filtered = products.filter(p =>
            p.name.toLowerCase().includes(value)
        );

        showProducts(filtered);
    }
});

window.onload = function() {
    let savedEmail = localStorage.getItem("rememberUser");

    if(savedEmail){
        document.getElementById("loginEmail").value = savedEmail;
        document.getElementById("rememberMe").checked = true;
    }
};
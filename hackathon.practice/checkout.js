let cart = JSON.parse(localStorage.getItem("cart")) || [];

function showSummary() {
    let div = document.getElementById("orderSummary");
    let total = 0;

    div.innerHTML = "";

    cart.forEach(item => {
        total += item.price * item.qty;

        div.innerHTML += `
            <p>${item.name} x ${item.qty} = Rs ${item.price * item.qty}</p>
        `;
    });

    document.getElementById("finalTotal").innerText = total;
}

function generateOrderId() {
    return "ORD" + Math.floor(Math.random() * 1000000);
}

function placeOrder() {
    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let address = document.getElementById("address").value.trim();
    let city = document.getElementById("city").value.trim();
    let payment = document.getElementById("payment").value;

    if(!name || !phone || !address || !city || !payment){
        alert("Please fill all fields");
        return;
    }

    let order = {
        id: generateOrderId(),
        name,
        phone,
        address,
        city,
        payment,
        items: cart
    };

    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);

    localStorage.setItem("orders", JSON.stringify(orders));

    localStorage.removeItem("cart");

    window.location.href = "success.html";
}

window.onload = showSummary;
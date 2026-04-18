let cart = JSON.parse(localStorage.getItem("cart")) || [];
let lastRemoved = null;
let lastIndex = null;

function showCart() {
    let cartItems = document.getElementById("cartItems");
    let total = 0;

    cartItems.innerHTML = "";

    cart.forEach((item, index) => {

        total += item.price * item.qty;

        let div = document.createElement("div");
        div.className = "card";

        div.innerHTML = `
            <img src="${item.image}">
            <h3>${item.name}</h3>
            <p>Rs ${item.price}</p>

            <p>
                <button onclick="decrease(${index})">-</button>
                ${item.qty}
                <button onclick="increase(${index})">+</button>
            </p>

            <button onclick="removeItem(${index})">Remove</button>
        `;

        cartItems.appendChild(div);
    });

    document.getElementById("total").innerText = total;
}

function increase(index) {
    cart[index].qty++;
    updateCart();
}

function decrease(index) {
    if(cart[index].qty > 1){
        cart[index].qty--;
    } else {
        removeItem(index);
    }
    updateCart();
}

function removeItem(index) {
    // save last removed item
    lastRemoved = cart[index];
    lastIndex = index;

    cart.splice(index, 1);
    updateCart();

    showUndo();
}

function showUndo() {
    let undoDiv = document.createElement("div");
    undoDiv.id = "undoBox";

    undoDiv.innerHTML = `
        Item removed 
        <button onclick="undoRemove()">UNDO</button>
    `;

    document.body.appendChild(undoDiv);

    // auto hide after 5 seconds
    setTimeout(() => {
        let box = document.getElementById("undoBox");
        if(box) box.remove();
    }, 5000);
}

function undoRemove() {
    if(lastRemoved !== null){
        cart.splice(lastIndex, 0, lastRemoved);
        updateCart();

        let box = document.getElementById("undoBox");
        if(box) box.remove();
    }
}

function updateCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    showCart();
}

window.onload = showCart;

function goToCheckout() {
    if(cart.length === 0){
        alert("Cart is empty");
        return;
    }
    window.location.href = "checkout.html";
}
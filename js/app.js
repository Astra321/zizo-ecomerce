// JavaScript for TechZone Website

// Search Functionality
function searchProducts() {
    const input = document.getElementById("search-box").value.toLowerCase();
    const resultsContainer = document.getElementById("search-results");
    resultsContainer.innerHTML = "";

    // Dummy products array for demonstration purposes
    const products = [
        "personal computer",
        "smartphone",
        "keyboard",
        "mouse",
        "monitor",
        "application software",
        "system software"
    ];

    const results = products.filter(product => product.toLowerCase().includes(input));

    if (results.length > 0) {
        results.forEach(result => {
            const resultItem = document.createElement("p");
            resultItem.textContent = result;
            resultsContainer.appendChild(resultItem);
        });
    } else {
        resultsContainer.innerHTML = "<p>No products found.</p>";
    }
}

// Adding Items to Shopping Basket
let basket = [];

function addToBasket(productName, price) {
    const product = { name: productName, price: price };
    basket.push(product);
    updateBasketDisplay();
    alert(`${productName} has been added to your basket.`);
}

// Update Basket Display
function updateBasketDisplay() {
    const basketContainer = document.getElementById("basket-items");
    const totalPriceContainer = document.getElementById("total-price");
    basketContainer.innerHTML = "";
    let totalPrice = 0;

    basket.forEach(item => {
        const basketItem = document.createElement("p");
        basketItem.textContent = `${item.name} - $${item.price}`;
        basketContainer.appendChild(basketItem);
        totalPrice += item.price;
    });

    totalPriceContainer.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
}

// Proceed to Checkout
function proceedToCheckout() {
    if (basket.length === 0) {
        alert("Your basket is empty. Please add some items before proceeding to checkout.");
    } else {
        window.location.href = "checkout.html";
    }
}

// Handle Form Submission (Checkout)
const shippingForm = document.getElementById("shipping-form");
if (shippingForm) {
    shippingForm.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thank you for your order! Your items will be shipped soon.");
        basket = []; // Clear the basket after placing the order
        window.location.href = "index.html";
    });
}

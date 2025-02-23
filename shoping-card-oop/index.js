class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class ShoppingCartItem {
    constructor(product, quantity = 1) {
        this.product = product;
        this.quantity = quantity;
    }

    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(product) {
        let existingItem = this.items.find(
            (item) => item.product.id === product.id
        );
        if (existingItem) {
            existingItem.quantity++;
        } else {
            this.items.push(new ShoppingCartItem(product));
        }
        this.updateCartDisplay();
    }

    removeItem(productId) {
        this.items = this.items.filter((item) => item.product.id !== productId);
        this.updateCartDisplay();
    }

    updateQuantity(productId, amount) {
        let item = this.items.find((item) => item.product.id === productId);
        if (item) {
            item.quantity += amount;
            if (item.quantity <= 0) {
                this.removeItem(productId);
            }
        }
        this.updateCartDisplay();
    }

    getTotalPrice() {
        return this.items.reduce(
            (total, item) => total + item.getTotalPrice(),
            0
        );
    }

    updateCartDisplay() {
        document.querySelector(
            ".total"
        ).textContent = `${this.getTotalPrice()} $`;
    }
}

// Initialize shopping cart
const cart = new ShoppingCart();

// Create products from the UI
const products = [
    new Product(1, "Baskets", 100),
    new Product(2, "Socks", 20),
    new Product(3, "Bag", 50),
];

// Add event listeners to UI buttons
document.querySelectorAll(".card").forEach((card, index) => {
    const product = products[index];
    const plusBtn = card.querySelector(".fa-plus-circle");
    const minusBtn = card.querySelector(".fa-minus-circle");
    const removeBtn = card.querySelector(".fa-trash-alt");
    const quantityEl = card.querySelector(".quantity");

    plusBtn.addEventListener("click", () => {
        cart.addItem(product);
        quantityEl.textContent = parseInt(quantityEl.textContent) + 1;
    });

    minusBtn.addEventListener("click", () => {
        cart.updateQuantity(product.id, -1);
        let currentQuantity = parseInt(quantityEl.textContent);
        quantityEl.textContent = currentQuantity > 0 ? currentQuantity - 1 : 0;
    });

    removeBtn.addEventListener("click", () => {
        cart.removeItem(product.id);
        quantityEl.textContent = 0;
    });
});

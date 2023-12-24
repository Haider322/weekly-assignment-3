"use strict";
// Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation
Object.defineProperty(exports, "__esModule", { value: true });
class ShoppingCart {
    constructor() {
        this.cart = [];
    }
    addItem(name, price, quantity) {
        const newItem = { name, price, quantity };
        this.cart.push(newItem);
        this.printCart();
    }
    removeItem(name) {
        const indexToRemove = this.cart.findIndex(item => item.name === name);
        if (indexToRemove !== -1) {
            this.cart.splice(indexToRemove, 1);
            this.printCart();
        }
        else {
            console.log(`Item "${name}" not found in the cart.`);
        }
    }
    updateQuantity(name, newQuantity) {
        const itemToUpdate = this.cart.find(item => item.name === name);
        if (itemToUpdate) {
            itemToUpdate.quantity = newQuantity;
            this.printCart();
        }
        else {
            console.log(`Item "${name}" not found in the cart.`);
        }
    }
    printCart() {
        console.log("Cart Contents:");
        console.table(this.cart);
    }
}
let shoppingCart = new ShoppingCart();
shoppingCart.addItem("Product A", 20.99, 2);
shoppingCart.addItem("Product B", 10.50, 1);
shoppingCart.updateQuantity("Product A", 3);
shoppingCart.removeItem("Product B");

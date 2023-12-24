// Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation


type CartItem = {
    name: string;
    price: number;
    quantity: number;
};

class ShoppingCart {
    private cart: CartItem[] = [];

    addItem(name: string, price: number, quantity: number): void {
        const newItem: CartItem = { name, price, quantity };
        this.cart.push(newItem);
        this.printCart();
    }

    removeItem(name: string): void {
        const indexToRemove = this.cart.findIndex(item => item.name === name);

        if (indexToRemove !== -1) {
            this.cart.splice(indexToRemove, 1);
            this.printCart();
        } else {
            console.log(`Item "${name}" not found in the cart.`);
        }
    }

    updateQuantity(name: string, newQuantity: number): void {
        const itemToUpdate = this.cart.find(item => item.name === name);

        if (itemToUpdate) {
            itemToUpdate.quantity = newQuantity;
            this.printCart();
        } else {
            console.log(`Item "${name}" not found in the cart.`);
        }
    }

    private printCart(): void {
        console.log("Cart Contents:");
        console.table(this.cart);
        
    }
}

let shoppingCart = new ShoppingCart();

shoppingCart.addItem("Product A", 20.99, 2);
shoppingCart.addItem("Product B", 10.50, 1);

shoppingCart.updateQuantity("Product A", 3);
shoppingCart.removeItem("Product B");

export{}
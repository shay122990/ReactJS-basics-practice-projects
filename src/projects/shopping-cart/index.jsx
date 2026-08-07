import Cart from "./Cart";
import ProductList from "./ProductList";
import styles from "./ShoppingCart.module.css";
// import { useReducer } from "react";

const initialState = {
  products: [
    {
      id: 1,
      name: "Apple",
      price: 2,
    },
    {
      id: 2,
      name: "Orange",
      price: 3,
    },
    {
      id: 3,
      name: "Banana",
      price: 1,
    },
  ],

  cart: [],
};
console.log(initialState);

function ShoppingCart() {
  return <div className={styles.shoppingContainer}>Shopping Cart</div>;
}

export default ShoppingCart;

// Step 1 — Display products
// Step 2 — Add product to cart (ADD_ITEM)
// Step 3 — Display cart
// Step 4 — Increase quantity (INCREASE_QTY)
// Step 5 — Decrease quantity (DECREASE_QTY)
// Step 6 — Remove item (REMOVE_ITEM)
// Step 7 — Calculate total items
// Step 8 — Calculate total price
// Step 9 — Clear cart (CLEAR_CART)

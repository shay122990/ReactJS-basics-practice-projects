import ProductList from "./ProductList";
import styles from "./ShoppingCart.module.css";
import { useReducer } from "react";

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

function reducer(state, action) {
  switch (action.type) {
    default:
      return state;
  }
}
function ShoppingCart() {
  const [{ products, cart }, dispatch] = useReducer(reducer, initialState);
  console.log(dispatch, cart);
  return (
    <div className={styles.container}>
      <ProductList products={products} />
    </div>
  );
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

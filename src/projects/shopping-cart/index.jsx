import Cart from "./Cart";
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
    case "add": {
      const product = action.payload;
      const existingItem = state.cart.find((item) => item.id === product.id);

      if (existingItem) {
        // If item already in cart, map through and increase its quantity
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }

      return {
        ...state,
        cart: [...state.cart, { ...product, quantity: 1 }],
      };
    }
    default:
      return state;
  }
}
function ShoppingCart() {
  const [{ products, cart }, dispatch] = useReducer(reducer, initialState);
  console.log(dispatch, cart);
  return (
    <div className={styles.container}>
      <ProductList products={products} dispatch={dispatch} />
      <Cart cart={cart} />
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

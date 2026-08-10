import { useReducer } from "react";
import Cart from "./Cart";
import ProductList from "./ProductList";
import styles from "./ShoppingCart.module.css";

const initialState = {
  products: [
    {
      id: 1,
      name: "Apple",
      price: 2,
      description: "Fresh and juicy red apple.",
      image: "🍎",
    },
    {
      id: 2,
      name: "Orange",
      price: 3,
      description: "Sweet and juicy orange.",
      image: "🍊",
    },
    {
      id: 3,
      name: "Banana",
      price: 1,
      description: "Ripe and healthy banana.",
      image: "🍌",
    },
  ],

  cart: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id,
      );

      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }

      return {
        ...state,
        cart: [
          ...state.cart,
          {
            ...action.payload,
            quantity: 1,
          },
        ],
      };
    }

    case "INCREASE_QTY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      };

    case "DECREASE_QTY":
      return {
        ...state,
        cart: state.cart
          .map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          )
          .filter((item) => item.quantity > 0),
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    default:
      throw new Error("Unknown action type");
  }
}

function ShoppingCart() {
  const [{ products, cart }, dispatch] = useReducer(reducer, initialState);

  return (
    <main className={styles.page}>
      <div className={styles.shoppingContainer}>
        <section className={styles.productsSection}>
          <div className={styles.sectionHeader}>
            <h2>Products</h2>
            <span />
          </div>

          <ProductList products={products} cart={cart} dispatch={dispatch} />
        </section>

        <section className={styles.cartSection}>
          <div className={styles.sectionHeader}>
            <h2>Your Cart</h2>
            <span />
          </div>

          <Cart cart={cart} dispatch={dispatch} />
        </section>
      </div>
    </main>
  );
}

export default ShoppingCart;

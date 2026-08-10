import styles from "./ShoppingCart.module.css";

function Cart({ cart, dispatch }) {
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <div className={styles.cartContent}>
      {cart.length === 0 ? (
        <div className={styles.emptyCart}>
          <div className={styles.emptyIcon}>🛒</div>

          <p>Your cart is empty.</p>
          <span>Add some products to get started.</span>
        </div>
      ) : (
        <div className={styles.cartList}>
          {cart.map((item) => (
            <div className={styles.cartItem} key={item.id}>
              <div className={styles.cartItemInfo}>
                <span className={styles.cartItemName}>{item.name}</span>

                <span className={styles.cartItemPrice}>
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>

              <div className={styles.cartItemBottom}>
                <div className={styles.quantityControls}>
                  <button
                    className={styles.qtyButton}
                    onClick={() =>
                      dispatch({
                        type: "DECREASE_QTY",
                        payload: item,
                      })
                    }
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    className={styles.qtyButton}
                    onClick={() =>
                      dispatch({
                        type: "INCREASE_QTY",
                        payload: item,
                      })
                    }
                  >
                    +
                  </button>
                </div>

                <button
                  className={styles.removeButton}
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_ITEM",
                      payload: item,
                    })
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className={styles.summary}>
        <div className={styles.summaryRow}>
          <span>Total Items</span>
          <strong>{totalItems}</strong>
        </div>

        <div className={`${styles.summaryRow} ${styles.total}`}>
          <span>Total Price</span>
          <strong>${totalPrice.toFixed(2)}</strong>
        </div>

        <button
          className={styles.clearButton}
          disabled={cart.length === 0}
          onClick={() =>
            dispatch({
              type: "CLEAR_CART",
            })
          }
        >
          <span>♙</span>
          Clear Cart
        </button>
      </div>
    </div>
  );
}

export default Cart;

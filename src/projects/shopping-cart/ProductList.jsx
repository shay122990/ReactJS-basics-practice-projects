import styles from "./ShoppingCart.module.css";

function ProductList({ products, cart, dispatch }) {
  return (
    <div className={styles.productList}>
      {products.map((product) => {
        const cartItem = cart.find((item) => item.id === product.id);

        const quantity = cartItem?.quantity || 0;

        return (
          <article className={styles.productCard} key={product.id}>
            <div className={styles.productImage}>
              <span>{product.image}</span>
            </div>
            <div className={styles.productInfo}>
              <h3>{product.name}</h3>

              <p>{product.description}</p>

              <strong>${product.price.toFixed(2)}</strong>
            </div>

            <button
              className={styles.addButton}
              onClick={() =>
                dispatch({
                  type: "ADD_ITEM",
                  payload: product,
                })
              }
            >
              <span>🛒 </span>

              {quantity > 0 ? <span>{quantity} Add</span> : <span>Add</span>}
            </button>
          </article>
        );
      })}
    </div>
  );
}

export default ProductList;

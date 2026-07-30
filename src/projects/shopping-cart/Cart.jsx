function Cart({ cart, dispatch }) {
  return (
    <div>
      Your Cart:
      {cart.map((p) => (
        <p key={p.id}>
          {p.name}
          {p.quantity}
          <span>
            <button onClick={() => dispatch({ type: "add", payload: p })}>
              Add
            </button>
            <button onClick={() => dispatch({ type: "remove", payload: p })}>
              remove
            </button>
          </span>
        </p>
      ))}
      <p>Total Items: {cart.reduce((acc, item) => acc + item.quantity, 0)}</p>
      <p>
        Total Price: $
        {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
      </p>
    </div>
  );
}

export default Cart;

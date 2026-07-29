function Cart({ cart }) {
  return (
    <div>
      {cart.map((p) => (
        <p key={p.id}>
          {p.name}
          {p.quantity}
        </p>
      ))}
    </div>
  );
}

export default Cart;

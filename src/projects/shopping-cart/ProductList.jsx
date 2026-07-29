function ProductList({ products, dispatch }) {
  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}>
          <h3>{p.name}</h3>
          <p>${p.price}</p>
          <button onClick={() => dispatch({ type: "add", payload: p })}>
            Add
          </button>
        </li>
      ))}
    </ul>
  );
}
export default ProductList;

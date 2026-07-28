function ProductList({ products }) {
  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}>
          <h3>{p.name}</h3>
          <p>${p.price}</p>
          <button>Add</button>
        </li>
      ))}
    </ul>
  );
}
export default ProductList;

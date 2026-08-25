import { useState, useMemo, memo } from "react";
import styles from "./ProductListMemo.module.css";
import productsData from "./data";

function ProductListMemo() {
  const products = productsData;
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [count, setCount] = useState(0); // When state changes, React calls the component function again to produce the new UI

  const searchedProduct = useMemo(
    () =>
      products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase()),
      ),
    [search, products],
  );

  const categoryFiltered = useMemo(
    () =>
      searchedProduct.filter((item) =>
        category === "All" ? true : item.category === category,
      ),
    [category, searchedProduct],
  );

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Performance Lab</p>
          <h1>Product List</h1>
          <p className={styles.subtitle}>
            Search, filter and sort through the products.
          </p>
        </header>

        <section className={styles.controls}>
          <SearchBar search={search} setSearch={setSearch} />
          <FilterControls category={category} setCategory={setCategory} />
        </section>

        <div className={styles.resultsHeader}>
          <h2>Products</h2>
          <span className={styles.resultCount}>
            {categoryFiltered.length} products
          </span>
        </div>

        <ProductList products={categoryFiltered} />

        <Counter count={count} setCount={setCount} />
      </div>
    </div>
  );
}

const SearchBar = memo(function SearchBar({ search, setSearch }) {
  return (
    <div className={styles.controlGroup}>
      <label htmlFor="search">Search products</label>

      <input
        id="search"
        className={styles.input}
        type="text"
        placeholder="Search product ..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
});

const FilterControls = memo(function FilterControls({ category, setCategory }) {
  return (
    <div className={styles.controlGroup}>
      <label htmlFor="category">Category</label>

      <select
        id="category"
        className={styles.select}
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Home">Home</option>
        <option value="Accessories">Accessories</option>
      </select>
    </div>
  );
});

const ProductList = memo(function ProductList({ products }) {
  console.log("ProductList rendered");

  return (
    <ul className={styles.productList}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
});

function ProductItem({ product }) {
  return (
    <li className={styles.productCard}>
      <div className={styles.productInfo}>
        <h3>{product.name}</h3>
        <p className={styles.category}>{product.category}</p>
      </div>

      <span className={styles.price}>${product.price}</span>
    </li>
  );
}

// Its job in this project isn't to be a useful feature — it's going to give us an unrelated piece of state that causes the parent component to re-render.
function Counter({ count, setCount }) {
  return (
    <section className={styles.counter}>
      <div>
        <p className={styles.counterLabel}>Unrelated state</p>
        <h2>Counter</h2>
      </div>

      <div className={styles.counterControls}>
        <span className={styles.count}>{count}</span>

        <button
          className={styles.button}
          onClick={() => setCount((count) => count + 1)}
        >
          +1
        </button>
      </div>
    </section>
  );
}

export default ProductListMemo;

// Lesson learned
// memo
//  ↓
// "Don't re-render this component if its props haven't changed."

// useCallback
//  ↓
// "Keep this function reference stable."

// useMemo
//  ↓
// "Keep this calculated value stable."

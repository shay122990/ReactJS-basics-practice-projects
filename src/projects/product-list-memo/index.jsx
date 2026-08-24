import styles from "./ProductListMemo.module.css";
// import products from "./data";

function ProductListMemo() {
  return (
    <div className={styles.app}>
      <h1>Product List</h1>
      <ProductList />
    </div>
  );
}

// function SearchBar() {}

// function FilterControls() {}

function ProductList() {
  return <ProductItem />;
}

function ProductItem() {}

// function Counter() {}

export default ProductListMemo;

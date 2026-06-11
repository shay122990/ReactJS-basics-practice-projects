import { useState } from "react";
import styles from "./ClosetTracker.module.css";

const initialCloset = [
  {
    id: 1,
    item: "Black Blazer",
    category: "Outerwear",
    color: "Black",
    fabric: "Wool",
    favorite: false,
  },
  {
    id: 2,
    item: "White Linen Shirt",
    category: "Top",
    color: "White",
    fabric: "Linen",
    favorite: true,
  },
  {
    id: 3,
    item: "Blue Straight Jeans",
    category: "Bottom",
    color: "Blue",
    fabric: "Denim",
    favorite: false,
  },
  {
    id: 4,
    item: "Cream Knit Sweater",
    category: "Top",
    color: "Cream",
    fabric: "Cotton",
    favorite: false,
  },
  {
    id: 5,
    item: "Brown Leather Boots",
    category: "Shoes",
    color: "Brown",
    fabric: "Leather",
    favorite: true,
  },
  {
    id: 6,
    item: "Black Maxi Skirt",
    category: "Bottom",
    color: "Black",
    fabric: "Satin",
    favorite: false,
  },
];

export default function ClosetTracker() {
  const [closet, setCloset] = useState(initialCloset);
  const [search, setSearch] = useState("");

  function handleAddToCloset(piece) {
    setCloset((closet) => [...closet, piece]);
  }

  function handleSetFavorite(id) {
    setCloset((closet) =>
      closet.map((fav) =>
        fav.id === id ? { ...fav, favorite: !fav.favorite } : fav,
      ),
    );
  }

  const searchedItems = closet.filter((item) =>
    item.item.toLowerCase().includes(search.toLocaleLowerCase()),
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Walk-In Closet</h1>

      <ClothingForm close={closet} onHandleAddToCloset={handleAddToCloset} />

      <div className={styles.controls}>
        <SearchBar search={search} setSearch={setSearch} />
        <CategoryFilter />
        <SortControls />
      </div>

      <Stats closet={closet} />

      <ClothingList
        closet={searchedItems}
        onHandleSetFavorite={handleSetFavorite}
      />
    </div>
  );
}

function ClothingForm({ onHandleAddToCloset }) {
  const [item, setItem] = useState("");
  const [color, setColor] = useState("");
  const [fabric, setFabric] = useState("");
  const [category, setCategory] = useState("Top");

  const capitalize = (str) => {
    if (!str) return "";
    return str
      .trim()
      .split(/\s+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  function handleSubmitItem(e) {
    e.preventDefault();

    if (!item.trim()) return;

    const id = crypto.randomUUID();

    const newItem = {
      id,
      item: capitalize(item.trim()),
      color: capitalize(color.trim()),
      fabric: capitalize(fabric.trim()),
      category: capitalize(category),
      favorite: false,
    };
    onHandleAddToCloset(newItem);

    setItem("");
    setColor("");
    setFabric("");
    setCategory("Top");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmitItem}>
      <input
        type="text"
        placeholder="Item name"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <input
        type="text"
        placeholder="Color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Fabric"
        value={fabric}
        onChange={(e) => setFabric(e.target.value)}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Top</option>
        <option>Bottom</option>
        <option>Outerwear</option>
        <option>Shoes</option>
        <option>Accessories</option>
      </select>

      <button type="submit">Add Item</button>
    </form>
  );
}

function SearchBar({ search, setSearch }) {
  return (
    <input
      className={styles.searchInput}
      type="text"
      placeholder="Search clothing..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

function CategoryFilter() {
  return (
    <select className={styles.select}>
      <option>All</option>
      <option>Top</option>
      <option>Bottom</option>
      <option>Outerwear</option>
      <option>Shoes</option>
      <option>Accessories</option>
    </select>
  );
}

function SortControls() {
  return (
    <select className={styles.select}>
      <option>Default</option>
      <option>Favorites First</option>
      <option>A-Z</option>
    </select>
  );
}

function Stats({ closet }) {
  const total = closet.length;

  const favorites = closet.filter((item) => item.favorite).length;

  const uniqueCategories = new Set(closet.map((item) => item.category));
  const totalCategories = uniqueCategories.size;

  return (
    <div className={styles.stats}>
      <p>Total Items: {total}</p>
      <p>Favorites: {favorites}</p>
      <p>Categories: {totalCategories}</p>
    </div>
  );
}

function ClothingList({ closet, onHandleSetFavorite }) {
  return (
    <ul className={styles.list}>
      {closet.map((item) => (
        <ClothingItem
          key={item.id}
          item={item}
          onHandleSetFavorite={onHandleSetFavorite}
        />
      ))}
    </ul>
  );
}

function ClothingItem({ item, onHandleSetFavorite }) {
  return (
    <li className={`${styles.card} ${item.favorite ? styles.favorite : ""}`}>
      <h3>{item.item}</h3>

      <p>Category: {item.category}</p>
      <p>Color: {item.color}</p>
      <p>Fabric: {item.fabric}</p>

      <button onClick={() => onHandleSetFavorite(item.id)}>♡ Favorite</button>
    </li>
  );
}

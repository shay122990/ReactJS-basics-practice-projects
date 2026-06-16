import styles from "./ExpenseTracker.module.css";
import { useState } from "react";

const initialExpenses = [
  {
    id: 1,
    description: "Groceries",
    amount: 120,
    category: "Food",
  },
  {
    id: 2,
    description: "Netflix",
    amount: 40,
    category: "Entertainment",
  },
  {
    id: 3,
    description: "Gym Membership",
    amount: 200,
    category: "Health",
  },
  {
    id: 4,
    description: "Petrol",
    amount: 350,
    category: "Transport",
  },
  {
    id: 5,
    description: "Coffee",
    amount: 25,
    category: "Food",
  },
];

export default function ExpenseTracker() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sort, setSort] = useState("default");

  console.log(expenses);
  function handleAddExpense(exp) {
    setExpenses((expenses) => [...expenses, exp]);
  }

  const searchedExpenses = expenses.filter(
    (expense) =>
      expense.description.toLowerCase().includes(search.toLowerCase()) ||
      expense.amount.toString().includes(search) ||
      expense.category.toLowerCase().includes(search.toLowerCase()),
  );

  const filteredCategory = searchedExpenses.filter(
    (expense) =>
      selectedCategory === "All" || expense.category === selectedCategory,
  );

  let sortedExpenses = filteredCategory.slice();

  if (sort === "a-z") {
    sortedExpenses.sort((a, b) => a.category.localeCompare(b.category));
  }

  if (sort === "highest") {
    sortedExpenses.sort((a, b) => b.amount - a.amount);
  }

  if (sort === "lowest") {
    sortedExpenses.sort((a, b) => a.amount - b.amount);
  }

  return (
    <div className={styles.expenseContainer}>
      <ExpenseForm onHandleAddExpense={handleAddExpense} />

      <div className={styles.controls}>
        <SearchBar search={search} setSearch={setSearch} />
        <CategoryFilter
          category={selectedCategory}
          setCategory={setSelectedCategory}
          expenses={expenses}
        />
        <SortControls sort={sort} setSort={setSort} />
      </div>

      <Stats expenses={expenses} />
      <ExpenseList expenses={sortedExpenses} />
    </div>
  );
}

function ExpenseForm({ onHandleAddExpense }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const capitalize = (str) => {
    if (!str) return "";
    return str
      .trim()
      .split(/\s+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (!description.trim() || !amount.trim()) return;

    const id = crypto.randomUUID();
    const newExpense = {
      id,
      description: capitalize(description.trim()),
      amount: Number(amount),
      category: capitalize(category.trim()),
    };

    onHandleAddExpense(newExpense);

    setDescription("");
    setAmount("");
    setCategory("");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        className={styles.input}
        type="text"
        placeholder="Amount"
        onChange={(e) => setAmount(e.target.value)}
      />

      <input
        className={styles.input}
        type="text"
        placeholder="Category"
        onChange={(e) => setCategory(e.target.value)}
      ></input>

      <button className={styles.button} type="submit">
        Add Expense
      </button>
    </form>
  );
}

function SearchBar({ search, setSearch }) {
  return (
    <input
      className={styles.searchInput}
      type="text"
      placeholder="Search expense..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
function CategoryFilter({ category, setCategory, expenses }) {
  const categories = [
    "All",
    ...new Set(expenses.map((expense) => expense.category)),
  ];

  return (
    <select
      className={styles.select}
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    >
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
}

function SortControls({ sort, setSort }) {
  return (
    <select
      className={styles.select}
      value={sort}
      onChange={(e) => setSort(e.target.value)}
    >
      <option value="default">Default</option>
      <option value="highest">Highest Amount</option>
      <option value="lowest">Lowest Amount</option>
      <option value="a-z">A-Z</option>
    </select>
  );
}

function Stats({ expenses }) {
  const total = expenses.length;
  const uniqueCategories = new Set(expenses.map((cat) => cat.category));
  const totalCategories = uniqueCategories.size;
  const mostExpensive = Math.max(...expenses.map((am) => am.amount));
  const totalSpent = expenses.reduce((acc, cur) => acc + cur.amount, 0);

  return (
    <div className={styles.stats}>
      <p>Total Expenses: {total}</p>
      <p>Total Categories: {totalCategories}</p>
      <p>Most Expensive Expense: {mostExpensive}</p>
      <p>Total Amount Spent: {totalSpent}</p>
    </div>
  );
}

function ExpenseList({ expenses }) {
  return (
    <ul className={styles.expenseList}>
      {expenses.map((item) => (
        <ExpenseItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

function ExpenseItem({ item }) {
  return (
    <li className={styles.expenseItem}>
      <h3 className={styles.category}>{item.category}</h3>

      <p className={styles.description}>Description: {item.description}</p>

      <p className={styles.amount}>AED {item.amount}</p>
    </li>
  );
}

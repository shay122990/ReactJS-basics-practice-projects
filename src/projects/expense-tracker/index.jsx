import styles from "./ExpenseTracker.module.css";

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
    amount: 150,
    category: "Transport",
  },
  {
    id: 5,
    description: "Coffee",
    amount: 25,
    category: "Food",
  },
];
console.log(initialExpenses);

export default function ExpenseTracker() {
  return (
    <div className={styles.expenseContainer}>
      <ExpenseForm />

      <div className={styles.controls}>
        <SearchBar />
        <CategoryFilter />
        <SortControls />
      </div>

      <Stats />
      <ExpenseList />
    </div>
  );
}

function ExpenseForm() {
  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" placeholder="Description" />

      <input className={styles.input} type="text" placeholder="Amount" />

      <select className={styles.select}>
        <option value="Food">Food</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Health">Health</option>
        <option value="Transport">Transport</option>
      </select>

      <button className={styles.button} type="submit">
        Add Expense
      </button>
    </form>
  );
}

function SearchBar() {
  return (
    <input
      className={styles.searchInput}
      type="text"
      placeholder="Search expense..."
    />
  );
}

function CategoryFilter() {
  return (
    <select className={styles.select}>
      <option value="All">All</option>
      <option value="Food">Food</option>
      <option value="Entertainment">Entertainment</option>
      <option value="Health">Health</option>
      <option value="Transport">Transport</option>
    </select>
  );
}

function SortControls() {
  return (
    <select className={styles.select}>
      <option value="default">Default</option>
      <option value="highest">Highest Amount</option>
      <option value="lowest">Lowest Amount</option>
      <option value="a-z">A-Z</option>
    </select>
  );
}

function Stats() {
  return (
    <div className={styles.stats}>
      <p>Total Expenses: 100</p>
      <p>Total Categories:</p>
      <p>Most Expensive Expense:</p>
      <p>Total Amount Spent:</p>
    </div>
  );
}

function ExpenseList() {
  return (
    <ul className={styles.expenseList}>
      {initialExpenses.map((item) => (
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

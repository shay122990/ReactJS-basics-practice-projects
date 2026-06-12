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

// ExpenseTracker
// ├── ExpenseForm
// ├── SearchBar
// ├── CategoryFilter
// ├── SortControls
// ├── Stats
// └── ExpenseList
//     └── ExpenseItem

// category filter
// All;
// Food;
// Entertainment;
// Health;
// Transport;

// sort controls
// Default
// Highest Amount
// Lowest Amount
// A-Z

// stats
// Total Expenses
// Total Categories
// Most Expensive Expense
// Total Amount Spent

const ExpenseTracker = () => {
  return (
    <div className={styles.expenseContainer}>
      <ExpenseForm />
      <SearchBar />
      <CategoryFilter />
      <SortControls />
      <Stats />
      <ExpenseList />
    </div>
  );
};

function ExpenseForm() {
  return (
    <form action="">
      <input type="text" placeholder="Description" />
      <input type="text" placeholder="Amount" />
      <select>
        <option value="Food">Food</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Health">Health</option>
        <option value="Transport">Transport</option>
      </select>

      <button type="submit">Add Expense</button>
    </form>
  );
}

function SearchBar() {
  return <input type="text" placeholder="Search expense..." />;
}

function CategoryFilter() {
  return (
    <select>
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
    <select>
      <option value="default">Default</option>
      <option value="highest">Highest Amount</option>
      <option value="lowest">Lowest Amount</option>
      <option value="a-z">A-Z</option>
    </select>
  );
}

function Stats() {
  return (
    <div>
      <p>Total Expenses: 100</p>
      <p>Total Categories: </p>
      <p>Most Expensive Expense: </p>
      <p>Total Amount Spent: </p>
    </div>
  );
}

function ExpenseList() {
  return (
    <ul>
      {initialExpenses.map((item) => (
        <ExpenseItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

function ExpenseItem({ item }) {
  return (
    <li>
      <h3> {item.category}</h3>
      <p>Description: {item.description}</p>
      <p>Amount: {item.amount}</p>
    </li>
  );
}

export default ExpenseTracker;

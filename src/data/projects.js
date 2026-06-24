import counter from "../assets/project-images/counter.jpg";
import todo from "../assets/project-images/todo.jpg";
import advice from "../assets/project-images/advice.jpg";
import colorChange from "../assets/project-images/color-change.jpg";
import calculator from "../assets/project-images/calculator.jpg";
import pizzaMenu from "../assets/project-images/pizza-menu.jpg";
import steps from "../assets/project-images/steps.jpg";
import travelList from "../assets/project-images/travel-list.jpg";
import dateCounter from "../assets/project-images/date-counter.jpg";
import flashcards from "../assets/project-images/flashcards.jpg";
import tipCalculator from "../assets/project-images/tip-calculator.jpg";
import splitBill from "../assets/project-images/split-bill.jpg";
import workoutTracker from "../assets/project-images/workout-tracker.jpg";
import closet from "../assets/project-images/closet.jpg";
import expenses from "../assets/project-images/expenses.jpg";

// ------------- CATEGORIES
// Fundamentals
// State Management
// Forms & Inputs
// Lists & Data
// API Integration
// Derived State
// Component Architecture

export const PROJECTS = [
  {
    id: 1,
    slug: "counter-click-tracker",
    title: "Counter & Click Tracker",
    category: "Fundamentals",
    learn:
      "Component composition, JSX, props, state updates and event handling",
    skills: ["useState", "events", "props", "jsx"],
    img: counter,
  },
  {
    id: 2,
    slug: "todo",
    title: "Todo App",
    category: "Lists & Data",
    learn:
      "CRUD operations, rendering lists, updating arrays and conditional UI",
    skills: [
      "map",
      "filter",
      "controlled inputs",
      "keys",
      "conditional rendering",
    ],
    img: todo,
  },
  {
    id: 3,
    slug: "get-advice",
    title: "Get Advice",
    category: "API Integration",
    learn: "Fetching remote data and handling asynchronous requests",
    skills: ["fetch", "async await", "api requests", "loading state"],
    img: advice,
  },
  {
    id: 4,
    slug: "color-change",
    title: "Color Change",
    category: "State Management",
    learn: "Managing dynamic UI updates through state and side effects",
    skills: ["useState", "clipboard api", "setTimeout", "inline styles"],
    img: colorChange,
  },
  {
    id: 5,
    slug: "calculator",
    title: "Calculator",
    category: "State Management",
    learn: "Managing interconnected state values and calculator logic",
    skills: [
      "switch",
      "state updates",
      "string manipulation",
      "number conversion",
    ],
    img: calculator,
  },
  {
    id: 6,
    slug: "pizza-menu",
    title: "Pizza Menu",
    category: "Component Architecture",
    learn: "Passing data through components and rendering dynamic menus",
    skills: ["props", "map", "conditional rendering", "component composition"],
    img: pizzaMenu,
  },
  {
    id: 7,
    slug: "steps",
    title: "Steps",
    category: "State Management",
    learn: "Updating UI based on step progression",
    skills: ["useState", "conditional rendering", "events"],
    img: steps,
  },
  {
    id: 8,
    slug: "travel-list",
    title: "Travel List",
    category: "Lists & Data",
    learn: "Managing collections of items with sorting and filtering",
    skills: ["map", "sort", "filter", "array methods"],
    img: travelList,
  },
  {
    id: 9,
    slug: "date-counter",
    title: "Date Counter",
    category: "Forms & Inputs",
    learn: "Working with controlled inputs and derived values",
    skills: ["controlled inputs", "derived state", "date calculations"],
    img: dateCounter,
  },
  {
    id: 10,
    slug: "flash-cards",
    title: "Flash Cards",
    category: "State Management",
    learn: "Building interactive UI with conditional rendering",
    skills: ["conditional rendering", "events", "state toggling"],
    img: flashcards,
  },
  {
    id: 11,
    slug: "tip-calculator",
    title: "Tip Calculator",
    category: "Derived State",
    learn: "Calculating values from user input and shared state",
    skills: [
      "lifting state",
      "controlled inputs",
      "derived state",
      "reusable components",
    ],
    img: tipCalculator,
  },
  {
    id: 12,
    slug: "eat-n-split",
    title: "Eat-N-Split",
    category: "Component Architecture",
    learn: "Sharing state between components and managing user interactions",
    skills: [
      "lifting state",
      "forms",
      "controlled inputs",
      "component communication",
    ],
    img: splitBill,
  },
  {
    id: 13,
    slug: "workout-tracker",
    title: "Workout Tracker",
    category: "Lists & Data",
    learn: "Managing workouts with filtering, sorting and completion tracking",
    skills: ["search", "sort", "filter", "forms", "derived state"],
    img: workoutTracker,
  },
  {
    id: 14,
    slug: "closet-tracker",
    title: "Closet Tracker",
    category: "Lists & Data",
    learn: "Managing collections with search, filtering and sorting",
    skills: ["search", "filter", "sort", "forms", "array methods"],
    img: closet,
  },
  {
    id: 15,
    slug: "expense-tracker",
    title: "Expense Tracker",
    category: "Lists & Data",
    learn: "Tracking expenses with search, categories, sorting and statistics",
    skills: ["search", "filter", "sort", "reduce", "forms"],
    img: expenses,
  },
  {
    id: 16,
    slug: "usePopcorn",
    title: "usePopcorn",
    category: "Lists & Data, API Integration",
    learn: "Tracking watched and rated movies.",
    skills: ["search", "rating", "toggle movie"],
    img: expenses,
  },
  {
    id: 17,
    slug: "tabbed",
    title: "Tabbed",
    category: "Component Architecture",
    learn: "Toggle different tabs",
    skills: ["show/hide", "undo", "toggle"],
    img: expenses,
  },
  {
    id: 18,
    slug: "character-counter",
    title: "Character Counter",
    category: "State Management",
    learn: "Derived state, conditional rendering UI",
    skills: ["controlled values", "state", "default props"],
    img: expenses,
  },
];

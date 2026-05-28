const questions = [
  {
    id: 1001,
    question: "What language is primarily used with React?",
    answer: "JavaScript",
  },
  {
    id: 1002,
    question: "What hook is used for managing state in functional components?",
    answer: "useState",
  },
  {
    id: 1003,
    question: "Which hook is used for side effects in React?",
    answer: "useEffect",
  },
  {
    id: 1004,
    question: "What does JSX stand for?",
    answer: "JavaScript XML",
  },
  {
    id: 1005,
    question: "What company created React?",
    answer: "Meta",
  },
  {
    id: 1006,
    question: "What method is used to render React content to the DOM?",
    answer: "ReactDOM.createRoot",
  },
  {
    id: 1007,
    question: "What keyword is used to pass data into components?",
    answer: "props",
  },
  {
    id: 1008,
    question: "What symbol is commonly used to embed JavaScript inside JSX?",
    answer: "Curly braces",
  },
  {
    id: 1009,
    question: "What hook is used for referencing DOM elements?",
    answer: "useRef",
  },
  {
    id: 1010,
    question: "What hook is used for memoizing values?",
    answer: "useMemo",
  },
  {
    id: 1011,
    question: "What hook is used for memoizing functions?",
    answer: "useCallback",
  },
  {
    id: 1012,
    question: "What is the default file extension for React components?",
    answer: ".jsx",
  },
  {
    id: 1013,
    question: "What prop is required when rendering lists in React?",
    answer: "key",
  },
  {
    id: 1014,
    question: "What React feature allows reusable UI pieces?",
    answer: "Components",
  },
  {
    id: 1015,
    question:
      "What hook is used for global-like state management in small apps?",
    answer: "useContext",
  },
  {
    id: 1016,
    question: "What is React mainly used for?",
    answer: "Building user interfaces",
  },
  {
    id: 1017,
    question: "What does SPA stand for?",
    answer: "Single Page Application",
  },
  {
    id: 1018,
    question: "Which hook is used for complex state logic?",
    answer: "useReducer",
  },
  {
    id: 1019,
    question: "What tool creates React projects quickly?",
    answer: "Vite",
  },
  {
    id: 1020,
    question: "What virtual structure improves React performance?",
    answer: "Virtual DOM",
  },
  {
    id: 1021,
    question: "What prop is used to pass children into a component?",
    answer: "children",
  },
  {
    id: 1022,
    question: "What hook runs after every render by default?",
    answer: "useEffect",
  },
  {
    id: 1023,
    question: "What is used to style React components dynamically?",
    answer: "Inline styles",
  },
  {
    id: 1024,
    question: "Which operator is commonly used for conditional rendering?",
    answer: "Ternary operator",
  },
  {
    id: 1025,
    question: "What React feature prevents unnecessary re-renders?",
    answer: "memo",
  },
  {
    id: 1026,
    question: "What is the top-level component usually called?",
    answer: "App",
  },
  {
    id: 1027,
    question: "What React hook handles form input values?",
    answer: "useState",
  },
  {
    id: 1028,
    question: "What package contains React DOM rendering methods?",
    answer: "react-dom",
  },
  {
    id: 1029,
    question: "What syntax extension does React use?",
    answer: "JSX",
  },
  {
    id: 1030,
    question: "What keyword creates a functional component?",
    answer: "function",
  },
  {
    id: 1031,
    question: "What React hook is useful for timers and subscriptions?",
    answer: "useEffect",
  },
  {
    id: 1032,
    question: "What is lifting state up in React?",
    answer: "Moving shared state to a parent component",
  },
  {
    id: 1033,
    question: "What is the purpose of props?",
    answer: "Passing data between components",
  },
  {
    id: 1034,
    question: "What does React use to track list items efficiently?",
    answer: "Keys",
  },
  {
    id: 1035,
    question: "What hook can store mutable values without re-rendering?",
    answer: "useRef",
  },
  {
    id: 1036,
    question: "What is conditional rendering?",
    answer: "Displaying UI based on conditions",
  },
  {
    id: 1037,
    question: "What React feature allows nesting components?",
    answer: "Composition",
  },
  {
    id: 1038,
    question: "What command starts a Vite React development server?",
    answer: "npm run dev",
  },
  {
    id: 1039,
    question: "What hook is commonly used to fetch API data?",
    answer: "useEffect",
  },
  {
    id: 1040,
    question: "What is hydration in React?",
    answer: "Attaching event listeners to server-rendered HTML",
  },
  {
    id: 1041,
    question: "What hook can optimize expensive calculations?",
    answer: "useMemo",
  },
  {
    id: 1042,
    question: "What hook helps optimize callback references?",
    answer: "useCallback",
  },
  {
    id: 1043,
    question:
      "What React feature allows rendering multiple elements without a wrapper div?",
    answer: "Fragments",
  },
  {
    id: 1044,
    question: "What shorthand syntax is used for React fragments?",
    answer: "<></>",
  },
  {
    id: 1045,
    question: "What is a controlled component?",
    answer: "A form element controlled by React state",
  },
  {
    id: 1046,
    question: "What is an uncontrolled component?",
    answer: "A form element managed by the DOM",
  },
  {
    id: 1047,
    question: "What is prop drilling?",
    answer: "Passing props through many component levels",
  },
  {
    id: 1048,
    question: "What library is commonly used for routing in React?",
    answer: "React Router",
  },
  {
    id: 1049,
    question: "What hook gives access to context values?",
    answer: "useContext",
  },
  {
    id: 1050,
    question: "What does React.StrictMode help with?",
    answer: "Highlighting potential problems in development",
  },
];
export default questions;

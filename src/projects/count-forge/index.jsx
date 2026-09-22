import { useState } from "react";
import styles from "./CountForge.module.css";

export default function CountForge() {
  return (
    <div className={styles.countForge}>
      <h1>Count Forge</h1>

      <Counter>
        <div className={styles.counterPanel}>
          <Counter.Label />
          <Counter.Display />
          <div className={styles.controls}>
            <Counter.Decrement />
            <Counter.Reset />
            <Counter.Increment />
          </div>
          <Counter.Step />
        </div>
      </Counter>
    </div>
  );
}

function Counter({ children }) {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function increment() {
    setCount((count) => count + step);
  }

  function decrement() {
    setCount((count) => count - step);
  }

  function reset() {
    setCount(0);
  }

  return (
    <CounterContext.Provider
      value={{
        count,
        step,
        setStep,
        increment,
        decrement,
        reset,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
}

import { createContext, useContext } from "react";

const CounterContext = createContext();

function useCounter() {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error("Counter components must be used inside <Counter>");
  }

  return context;
}

Counter.Label = function Label() {
  return (
    <div className={styles.label}>
      <span>COUNTER</span>
      <span className={styles.status}>ACTIVE</span>
    </div>
  );
};

Counter.Display = function Display() {
  const { count } = useCounter();

  return <div className={styles.display}>{count}</div>;
};

Counter.Increment = function Increment() {
  const { increment } = useCounter();

  return (
    <button className={styles.increment} onClick={increment}>
      +
    </button>
  );
};

Counter.Decrement = function Decrement() {
  const { decrement } = useCounter();

  return (
    <button className={styles.decrement} onClick={decrement}>
      −
    </button>
  );
};

Counter.Reset = function Reset() {
  const { reset } = useCounter();

  return (
    <button className={styles.reset} onClick={reset}>
      RESET
    </button>
  );
};

Counter.Step = function Step() {
  const { step, setStep } = useCounter();

  return (
    <div className={styles.stepControl}>
      <span>STEP</span>

      <select value={step} onChange={(e) => setStep(Number(e.target.value))}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={5}>5</option>
        <option value={10}>10</option>
      </select>
    </div>
  );
};

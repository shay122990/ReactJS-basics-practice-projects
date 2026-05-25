import { useState } from "react";
import styles from "./DateCounter.module.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  let message;

  if (count === 0) {
    message = "Today is";
  } else if (count > 0) {
    message = `${count} days from today is`;
  } else {
    message = `${Math.abs(count)} days ago was`;
  }

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <section className={styles.page}>
      <div className={styles.overlay}></div>

      <div className={styles.app}>
        <h1 className={styles.title}>
          Date
          <span>Counter</span>
        </h1>

        <div className={styles.controls}>
          <div className={styles.row}>
            <input
              className={styles.range}
              type="range"
              min="0"
              max="10"
              value={step}
              onChange={(e) => setStep(+e.target.value)}
            />

            <span className={styles.stepValue}>{step}</span>
          </div>

          <div className={styles.row}>
            <button
              className={styles.btn}
              onClick={() => setCount((c) => c - step)}
            >
              −
            </button>

            <input
              className={styles.counterInput}
              type="text"
              value={count}
              onChange={(e) => setCount(+e.target.value)}
            />

            <button
              className={styles.btn}
              onClick={() => setCount((c) => c + step)}
            >
              +
            </button>
          </div>
        </div>

        <div className={styles.dateCard}>
          <span className={styles.message}>{message}</span>

          <span className={styles.date}>{date.toDateString()}</span>
        </div>

        {(count !== 0 || step !== 1) && (
          <button className={styles.resetBtn} onClick={handleReset}>
            Reset Timeline
          </button>
        )}
      </div>
    </section>
  );
}

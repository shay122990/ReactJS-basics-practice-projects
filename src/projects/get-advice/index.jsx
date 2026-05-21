import { useState, useEffect } from "react";
import styles from "./GetAdvice.module.css";

const GetAdvice = () => {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");

    const data = await res.json();

    setAdvice(data.slip.advice);

    setCount((prev) => prev + 1);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.mountainBack}></div>
      <div className={styles.mountainMid}></div>
      <div className={styles.mountainFront}></div>

      <div className={styles.panel}>
        <p className={styles.label}>Advice From The Void</p>

        <h1 className={styles.advice}>{advice}</h1>

        <div className={styles.controls}>
          <button onClick={getAdvice} className={styles.btn}>
            Get Advice
          </button>

          <p className={styles.counter}>{count} collected</p>
        </div>
      </div>
    </div>
  );
};

export default GetAdvice;

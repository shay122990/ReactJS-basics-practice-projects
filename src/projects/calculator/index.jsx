import { useState } from "react";
import styles from "./Calculator.module.css";

const buttons = [
  "C",
  "±",
  "%",
  "÷",
  "7",
  "8",
  "9",
  "×",
  "4",
  "5",
  "6",
  "−",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "=",
];

function Calculator() {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [overwrite, setOverwrite] = useState(false);

  const isOperator = (val) => ["+", "−", "×", "÷"].includes(val);

  const handleClear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperator(null);
    setOverwrite(false);
  };

  const handleNumber = (value) => {
    if (overwrite) {
      setDisplay(value);
      setOverwrite(false);
      return;
    }

    if (display === "0" && value === "0") return;

    if (display === "0" && value !== ".") {
      setDisplay(value);
      return;
    }

    if (value === "." && display.includes(".")) return;

    setDisplay((prev) => prev + value);
  };

  const compute = () => {
    if (previousValue === null || operator === null) {
      return Number(display);
    }

    const current = Number(display);
    const prev = Number(previousValue);

    let result = current;

    switch (operator) {
      case "+":
        result = prev + current;
        break;

      case "−":
        result = prev - current;
        break;

      case "×":
        result = prev * current;
        break;

      case "÷":
        result = current === 0 ? "Error" : prev / current;
        break;

      default:
        break;
    }

    return result;
  };

  const handleOperator = (op) => {
    if (display === "Error") {
      handleClear();
      return;
    }

    if (previousValue === null) {
      setPreviousValue(display);
    } else {
      const result = compute();

      setPreviousValue(String(result));
      setDisplay(String(result));
    }

    setOperator(op);
    setOverwrite(true);
  };

  const handleEquals = () => {
    if (display === "Error") {
      handleClear();
      return;
    }

    const result = compute();

    setDisplay(String(result));

    setPreviousValue(null);
    setOperator(null);
    setOverwrite(true);
  };

  const handlePercent = () => {
    if (display === "Error") return;

    const value = Number(display) / 100;

    setDisplay(String(value));
  };

  const handleToggleSign = () => {
    if (display === "Error") return;

    if (display.startsWith("-")) {
      setDisplay(display.slice(1));
    } else if (display !== "0") {
      setDisplay("-" + display);
    }
  };

  const handleClick = (btn) => {
    if (!isNaN(btn) || btn === ".") {
      handleNumber(btn);
      return;
    }

    if (isOperator(btn)) {
      handleOperator(btn);
      return;
    }

    if (btn === "C") {
      handleClear();
      return;
    }

    if (btn === "=") {
      handleEquals();
      return;
    }

    if (btn === "%") {
      handlePercent();
      return;
    }

    if (btn === "±") {
      handleToggleSign();
    }
  };

  return (
    <div className={styles["calculator-page"]}>
      <div className={styles.calculator}>
        <div className={styles.display}>{display}</div>

        <div className={styles.buttons}>
          {buttons.map((btn) => (
            <button
              key={btn}
              className={`
                ${styles.btn}
                ${isOperator(btn) || btn === "=" ? styles["btn-operator"] : ""}
                ${btn === "C" ? styles["btn-clear"] : ""}
                ${btn === "0" ? styles["btn-zero"] : ""}
              `}
              onClick={() => handleClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculator;

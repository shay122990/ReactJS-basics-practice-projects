import { useState } from "react";
import styles from "./ColorChanger.module.css";

export default function App() {
  const [color, setColor] = useState("#1e293b");
  const [copyText, setCopyText] = useState("Copy");

  const changeColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    setColor(randomColor);
    setCopyText("Copy");
  };

  const copyColor = () => {
    navigator.clipboard
      .writeText(color)
      .then(() => {
        setCopyText("Copied!");

        setTimeout(() => {
          setCopyText("Copy");
        }, 1500);
      })
      .catch((err) => console.error("Failed to copy:", err));
  };

  return (
    <div className={styles.page}>
      <div className={styles.card} style={{ backgroundColor: color }}>
        <div className={styles.overlay}>
          <div className={styles.content}>
            <p className={styles.label}>Current Color</p>

            <h1 className={styles.hex}>{color}</h1>

            <div className={styles.actions}>
              <button className={styles.btn} onClick={changeColor}>
                Change Color
              </button>

              <button className={styles.btnSecondary} onClick={copyColor}>
                {copyText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

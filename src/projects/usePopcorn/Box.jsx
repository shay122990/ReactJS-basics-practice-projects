import styles from "./UsePopcorn.module.css";
import { useState } from "react";

export default function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className={styles.box}>
      <button
        className={styles.btnToggle}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}

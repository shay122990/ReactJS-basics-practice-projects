import { useState } from "react";
import styles from "./ToDo.module.css";

export default function ToDo() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const addTask = () => {
    if (!input.trim()) return;

    setList((prev) => [...prev, input]);

    setInput("");
  };

  const handleDelete = (indexToRemove) => {
    setList((prev) => prev.filter((_, i) => i !== indexToRemove));
  };

  return (
    <div className={styles.page}>
      <div className={`${styles.orb} ${styles.orb1}`}></div>
      <div className={`${styles.orb} ${styles.orb2}`}></div>
      <div className={`${styles.orb} ${styles.orb3}`}></div>

      <div className={styles.grid}></div>

      <div className={styles.panel}>
        <h1 className={styles.title}>To-Do List</h1>

        <div className={styles.controls}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a task..."
            className={styles.input}
          />

          <button onClick={addTask} className={styles.btn}>
            Add
          </button>
        </div>

        <ul className={styles.list}>
          {list.map((item, index) => (
            <li key={index} className={styles.item}>
              <span>{item}</span>

              <button
                onClick={() => handleDelete(index)}
                className={styles.deleteBtn}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

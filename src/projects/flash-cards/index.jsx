import { useState } from "react";
import styles from "./FlashCards.module.css";
import questions from "./data.js";

export default function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <p className={styles.badge}>Frontend Study Set</p>
        <h1>React Flashcards</h1>
        <span>Click a card to reveal the answer</span>
      </div>

      <div className={styles.flashcards}>
        {questions.map((question, index) => (
          <div
            onClick={() => handleClick(question.id)}
            key={question.id}
            className={`${styles.card} ${
              question.id === selectedId ? styles.selected : ""
            }`}
          >
            <div className={styles.cardTop}>
              <span>Lesson {index + 1} </span>
            </div>

            <p>
              {question.id === selectedId ? question.answer : question.question}
            </p>

            <button>{question.id === selectedId ? "Hide" : "Reveal"}</button>
          </div>
        ))}
      </div>
    </section>
  );
}

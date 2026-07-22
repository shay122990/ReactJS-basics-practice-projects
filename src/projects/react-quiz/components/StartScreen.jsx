import styles from "../ReactQuiz.module.css";

function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className={styles.start}>
      <h2>Welcome to the React Quiz</h2>
      <h3> {numQuestions} question to test your React mastery</h3>
      <button
        className={`${styles.btn} ${styles.btnUi}`}
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;

import styles from "../ReactQuiz.module.css";
import { useQuiz } from "../hooks/useQuiz";

function NextButton() {
  const { dispatch, answer, numQuestions, index } = useQuiz();
  if (answer === null) return null;

  if (index < numQuestions - 1)
    return (
      <button
        className={`${styles.btn} ${styles.btnUi}`}
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  if (index === numQuestions - 1)
    return (
      <button
        className={`${styles.btn} ${styles.btnUi}`}
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}

export default NextButton;

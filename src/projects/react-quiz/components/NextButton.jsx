import styles from "../ReactQuiz.module.css";

function NextButton({ dispatch, answer }) {
  if (answer === null) return null;

  return (
    <button
      className={`${styles.btn} ${styles.btnUi}`}
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next
    </button>
  );
}

export default NextButton;

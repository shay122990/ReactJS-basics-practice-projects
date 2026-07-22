import styles from "../ReactQuiz.module.css";

function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  console.log(answer);

  return (
    <div className={styles.options}>
      {question.options.map((option, index) => (
        <button
          key={option}
          className={[
            styles.btn,
            styles.btnOption,
            index === answer && styles.answer,
            hasAnswered &&
              (index === question.correctOption
                ? styles.correct
                : styles.wrong),
          ]
            .filter(Boolean)
            .join(" ")}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;

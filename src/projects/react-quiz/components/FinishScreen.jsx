import styles from "../ReactQuiz.module.css";

function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;

  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "😄";
  if (percentage >= 0 && percentage < 50) emoji = "😒";
  if (percentage === 0) emoji = "🤦🏻‍♀️";

  return (
    <>
      <p className={styles.result}>
        <span>{emoji}</span>
        You scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className={styles.highscore}>(Highscore: {highscore} points)</p>
      <button
        className={`${styles.btn} ${styles.btnUi}`}
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
}

export default FinishScreen;

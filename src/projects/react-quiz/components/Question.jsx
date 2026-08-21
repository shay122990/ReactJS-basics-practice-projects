import { useQuiz } from "../hooks/useQuiz";
import styles from "../ReactQuiz.module.css";

import Options from "./Options";

function Question() {
  const { question } = useQuiz();
  return (
    <div className={styles.questions}>
      <h4>{question.question}</h4>
      <Options />
    </div>
  );
}

export default Question;

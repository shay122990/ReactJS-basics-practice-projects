import styles from "../ReactQuiz.module.css";

export default function Loader() {
  return (
    <div className={styles.loaderContainer}>
      <div className="loader"></div>
      <p>Loading questions...</p>
    </div>
  );
}

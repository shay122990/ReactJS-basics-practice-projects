import styles from "./UsePopcorn.module.css";

export default function ErrorMessage({ message }) {
  return (
    <div>
      <p className={styles.error}>⛔️ {message}</p>
    </div>
  );
}

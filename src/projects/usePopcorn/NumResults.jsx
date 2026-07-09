import styles from "./UsePopcorn.module.css";
export default function NumResults({ movies }) {
  return (
    <p className={styles.numResults}>
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

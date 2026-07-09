import styles from "./UsePopcorn.module.css";

export default function Main({ children }) {
  return (
    <>
      <main className={styles.main}>{children}</main>
    </>
  );
}

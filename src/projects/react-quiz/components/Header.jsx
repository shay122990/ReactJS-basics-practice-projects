import styles from "../ReactQuiz.module.css";
import logo from "/logo512.png";

function Header() {
  return (
    <header className={styles.appHeader}>
      <img src={logo} alt="React logo" />
      <h1>The React Quiz</h1>
    </header>
  );
}

export default Header;

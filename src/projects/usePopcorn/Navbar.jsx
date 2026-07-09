import styles from "./UsePopcorn.module.css";
import Logo from "./Logo";

export default function Navbar({ children }) {
  return (
    <>
      <nav className={styles.navBar}>
        <Logo />
        {children}
      </nav>
    </>
  );
}

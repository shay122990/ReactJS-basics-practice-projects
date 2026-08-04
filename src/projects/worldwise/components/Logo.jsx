import styles from "./Logo.module.css";
import { Link } from "react-router-dom";
import logo from "../logo.png";

function Logo() {
  return (
    <Link>
      <img src={logo} alt="WorldWise logo" className={styles.logo} />
    </Link>
  );
}

export default Logo;

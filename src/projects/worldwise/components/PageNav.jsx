import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />

      <ul>
        <li>
          <NavLink to="/projects/worldwise/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/projects/worldwise/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/projects/worldwise/login" className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;

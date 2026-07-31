import { NavLink } from "react-router-dom";

function PageNav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/projects/worldwise">Home</NavLink>
          <NavLink to="/projects/worldwise/pricing">Pricing</NavLink>
          <NavLink to="/projects/worldwise/product">Product</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;

import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();

  // Hide button if on home page
  if (location.pathname === "/") return null;

  return (
    <Link
      to="/"
      style={{
        position: "absolute",
        top: "20px",
        left: "20px",
        textDecoration: "none",
        zIndex: 1000,
      }}
    >
      <button
        style={{
          padding: "8px 14px",
          borderRadius: "8px",
          border: "1px solid #2b3245",
          background: "#11141b",
          color: "#e6e7ea",
          cursor: "pointer",
          fontSize: "14px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
        }}
      >
        ← Back
      </button>
    </Link>
  );
};

export default Nav;

import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#5647B7",
  };
  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        <NavLink
          to="/host"
          style={({ isActive }) => (isActive ? activeStyles : null)}>
          Host
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyles : null)}>
          About
        </NavLink>
        <NavLink
          to="/vans"
          style={({ isActive }) => (isActive ? activeStyles : null)}>
          Vans
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;

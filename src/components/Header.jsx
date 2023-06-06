import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <Nav />
    </header>
  );
};
export default Header;

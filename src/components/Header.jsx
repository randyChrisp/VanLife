import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

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

import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Link to="/about">About</Link>
      <Link to="/vans">Vans</Link>
    </div>
  );
};

export default Nav;

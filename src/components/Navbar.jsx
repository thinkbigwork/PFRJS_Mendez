import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <h1>
          <Link to="/">Sound Passion</Link>
        </h1>

        <ul>
          <li>
          <NavLink to="/category/headphones">Headphones</NavLink>
          </li>
          <li>
            <NavLink to="/category/speakers">Speakers</NavLink>
          </li>
          <li>
            <NavLink to="/category/soundglasses">Soundglasses</NavLink>
          </li>
        </ul>
      

        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;

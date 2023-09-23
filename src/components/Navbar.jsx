import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <h1>
          <Link className="nav-item mx-4 navbar-brand text-uppercase fs-1 fw-bold"  to="/">Sound Passion</Link>
        </h1>

        <ul className="navbar-nav mb-lg-0">
          <li  className="mt-3 me-4">
          <NavLink className="navbar-brand link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to="/category/headphones">Headphones</NavLink>
          </li>
          <li  className="mt-3 me-4">
            <NavLink className="navbar-brand link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to="/category/speakers ">Speakers</NavLink>
          </li>
          <li  className="mt-3 ">
            <NavLink className="navbar-brand link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to="/category/soundglasses">Soundglasses</NavLink>
          </li>
        </ul>
      

        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;

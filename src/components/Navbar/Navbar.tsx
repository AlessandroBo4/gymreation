import "./Navbar.css";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/bookings">Bookings</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

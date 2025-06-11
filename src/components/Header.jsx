import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <header>
      <h1>Spelman College Graduation Weekend</h1>
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/history">History</Link></li>
          <li><Link to="/classday">Class Day</Link></li>
          <li><Link to="/baccalaureate">Baccalaureate</Link></li>
          <li><Link to="/contactus">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

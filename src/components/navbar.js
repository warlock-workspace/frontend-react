import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css"; // Import your CSS file for styling

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container">
      <nav className="navbar">
        <div className="navbarItems">
          <Link to="/" className="navbar-logo">
            PropertyDekho.com
          </Link>
          <span className="toggleBar" onClick={handleToggle}>
            <i className="fa fa-bars dropdown-bar" />
          </span>
        </div>

        {isMenuOpen && (
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/properties" className="nav-links">
                Properties
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/service" className="nav-links">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signin" className="signup-button">
                Sign up
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/post-property" className="post-property">
                Post Property
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
}

export default Navbar;

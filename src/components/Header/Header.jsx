import React, { useState } from "react";
import Hamburger from "hamburger-react";
import "./Header.css";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left Section: Logo */}
        <div className="logo">
          LOGO
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="hamburger-menu">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>

        {/* Full Menu Section */}
        <div className={`menu-container ${isOpen ? "open" : ""}`}>
          {/* Middle Section: Navigation Links */}
          <div className="nav-links">
            <a href="#" className="nav-link active">
              Home
            </a>
            <a href="#" className="nav-link">
              About
            </a>
            <a href="#" className="nav-link">
              Services
            </a>
            <a href="#" className="nav-link">
              Contact
            </a>
          </div>

          {/* Call Me Button */}
          <div className="call-me-button">
            <button className="button">Call Me</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

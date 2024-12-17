import React, { useState } from "react";
import "./hamMenu.css";
import { Link } from "react-router-dom";

const HamMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="ham-menu">
      <button
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>
      <nav className={`menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu}>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link to="policy" onClick={toggleMenu}>
              <a>Privacy Policy</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HamMenu;

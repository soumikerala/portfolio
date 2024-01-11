import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Portfolio</div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/Skills">Skills</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

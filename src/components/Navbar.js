import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const hamburgerMenu = () => {
    document.querySelector("ul").classList.toggle("active");
    document.querySelector(".bar").classList.toggle("active");
  };
  return (
    <nav>
      <h3>LOGO</h3>
      <ul>
        <h3>LOGO</h3>
        <li>
          <Link className={`link`} to="/">
            Home <div className="line"></div>
          </Link>
        </li>
        <li>
          <Link className={`link`} to="/about">
            About <div className="line"></div>
          </Link>{" "}
        </li>
        <li>
          <Link className={`link`} to="/services">
            Services <div className="line"></div>
          </Link>
        </li>
        <li>
          <Link className={`link`} to="/contact">
            Contact <div className="line"></div>
          </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={hamburgerMenu}>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;

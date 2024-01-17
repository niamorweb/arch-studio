import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="logo">
        <img src="/logo-white.svg" alt="" />
      </div>

      <ul className="footer_links">
        <NavLink to="/portfolio">
          <li>Portfolio</li>{" "}
        </NavLink>
        <NavLink to="/about-us">
          <li>About Us</li>{" "}
        </NavLink>
        <NavLink to="/contact">
          <li>Contact</li>{" "}
        </NavLink>
      </ul>

      <NavLink className="btn_link" to="/portfolio">
        See Our Portfolio
        <img src="/icons/icon-arrow-white.svg" alt="" />
      </NavLink>
    </footer>
  );
}

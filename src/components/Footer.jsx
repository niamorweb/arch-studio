import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="logo">
        <img src="../../arch-studio/logo-white.svg" alt="" />
      </div>

      <ul className="footer_links">
        <NavLink to="/arch-studio/portfolio">
          <li>Portfolio</li>{" "}
        </NavLink>
        <NavLink to="/arch-studio/about-us">
          <li>About Us</li>{" "}
        </NavLink>
        <NavLink to="/arch-studio/contact">
          <li>Contact</li>{" "}
        </NavLink>
      </ul>

      <NavLink className="btn_link" to="/arch-studio/portfolio">
        See Our Portfolio
        <img src="../../arch-studio/icons/icon-arrow-white.svg" alt="" />
      </NavLink>
    </footer>
  );
}

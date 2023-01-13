import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [showNavMobile, setShowNavMobile] = useState(false);
  return (
    <>
      {showNavMobile ? <div className="overlay_fixed"></div> : null}

      <header>
        <nav>
          <div className="logo">
            <NavLink to="/arch-studio/">
              <img src="../../logo.svg" alt="" />
            </NavLink>
          </div>
          <ul className="nav_big_screen">
            <NavLink to="/arch-studio/portfolio">
              {" "}
              <li>Portfolio</li>{" "}
            </NavLink>
            <NavLink to="/arch-studio/about-us">
              {" "}
              <li>About Us</li>{" "}
            </NavLink>
            <NavLink to="/arch-studio/contact">
              {" "}
              <li>Contact</li>{" "}
            </NavLink>
          </ul>
          <div className="btns-mobile">
            {showNavMobile ? (
              <img
                onClick={() => setShowNavMobile(false)}
                id="btnClose"
                src="../../icons/icon-close.svg"
                alt=""
              />
            ) : (
              <img
                onClick={() => setShowNavMobile(true)}
                id="btnHamburger"
                src="../../icons/icon-hamburger.svg"
                alt=""
              />
            )}
          </div>

          {showNavMobile ? (
            <ul className="nav_mobile">
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
          ) : null}
        </nav>
      </header>
    </>
  );
}

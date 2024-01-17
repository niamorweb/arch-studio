import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [showNavMobile, setShowNavMobile] = useState(false);
  useEffect(() => {
    setShowNavMobile(false);
  }, []);
  return (
    <>
      {showNavMobile ? <div className="overlay_fixed"></div> : null}

      <header>
        <nav>
          <div className="logo">
            <NavLink to="/">
              <img src="/logo.svg" alt="" />
            </NavLink>
          </div>
          <ul className="nav_big_screen">
            <NavLink to="/portfolio">
              {" "}
              <li>Portfolio</li>{" "}
            </NavLink>
            <NavLink to="/about-us">
              {" "}
              <li>About Us</li>{" "}
            </NavLink>
            <NavLink to="/contact">
              {" "}
              <li>Contact</li>{" "}
            </NavLink>
          </ul>
          <div className="btns-mobile">
            {showNavMobile ? (
              <img
                onClick={() => setShowNavMobile(false)}
                id="btnClose"
                src="/icons/icon-close.svg"
                alt=""
              />
            ) : (
              <img
                onClick={() => setShowNavMobile(true)}
                id="btnHamburger"
                src="/icons/icon-hamburger.svg"
                alt=""
              />
            )}
          </div>

          {showNavMobile ? (
            <ul className="nav_mobile">
              <NavLink to="/portfolio">
                <li onClick={() => setShowNavMobile(false)}>Portfolio</li>{" "}
              </NavLink>
              <NavLink to="/about-us">
                <li onClick={() => setShowNavMobile(false)}>About Us</li>{" "}
              </NavLink>
              <NavLink to="/contact">
                <li onClick={() => setShowNavMobile(false)}>Contact</li>{" "}
              </NavLink>
            </ul>
          ) : null}
        </nav>
      </header>
    </>
  );
}

import React from "react";
import Sun from "../assets/icons/sun.svg";
import Moon from "../assets/icons/moon.svg";
import Logo from "../assets/icons/logo.svg";
import Location from "../assets/icons/location.svg";
import Search from "../assets/icons/searchtablet.svg";
import "../Sass/Navbar/NavbarDesktop/navbarDesktop.css";

function NavbarDesktop() {
  return (
    <>
      <div className="navbar__desktop">
        <div className="navbar__desktop-logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="navbar__desktop-toggle">
          <div className="navbar__desktop-sun">
            <img src={Sun} alt="" />
          </div>
          <div className="navbar__desktop-icon">
            <div className="navbar__desktop-icon-switch"></div>
          </div>
          <div className="navbar-desktop-moon">
            <img src={Moon} alt="" />
          </div>
        </div>
      </div>

      <div className="navbar__desktop__form">
        <form action="">
          <div className="navbar__desktop__form-container first-input">
            <div className="navbar__desktop__form-search">
              <img src={Search} alt="" />
            </div>
            <div className="navbar__desktop__form-input">
              <input
                type="text"
                placeholder="Filter by title, companies, expertise…"
              />
            </div>
          </div>

          <div className="navbar__desktop__form-container">
            <div className="navbar__desktop__form-location">
              <img src={Location} alt="" />
            </div>
            <div className="navbar__desktop__form-input">
              <input type="text" placeholder="Filter by location…" />
            </div>
          </div>

          <div className="navbar__desktop__form-container1">
            <div className="navbar__desktop__form-checkbox">
              <input
                type="checkbox"
                id="schedule"
                name="schedule"
                value="fulltime"
              />
              <label for="schedule">Full Time Only</label>
            </div>

            <div className="navbar__desktop__form-btn">
              <button>Search</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default NavbarDesktop;

import React from "react";
import Sun from "../assets/icons/sun.svg";
import Moon from "../assets/icons/moon.svg";
import Logo from "../assets/icons/logo.svg";
import Location from "../assets/icons/location.svg";
import Search from "../assets/icons/searchtablet.svg";
import "../Sass/Navbar/NavbarTablet/navbarTablet.css";

function NavbarTablet() {
  return (
    <>
      <div className="navbar__tablet">
        <div className="navbar__tablet-logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="navbar__tablet-toggle">
          <div className="navbar__tablet-sun">
            <img src={Sun} alt="" />
          </div>
          <div className="navbar__tablet-icon">
            <div className="navbar__tablet-icon-switch"></div>
          </div>
          <div className="navbar-tablet-moon">
            <img src={Moon} alt="" />
          </div>
        </div>
      </div>

      {/* <div className="navbar__tablet__form">
        <form action="">
          <div className="navbar__tablet__form-container first-input">
            <div className="navbar__tablet__form-search">
              <img src={Search} alt="" />
            </div>
            <div className="navbar__tablet__form-input">
              <input type="text" placeholder="Filter by title…" />
            </div>
          </div>

          <div className="navbar__tablet__form-container">
            <div className="navbar__tablet__form-location">
              <img src={Location} alt="" />
            </div>
            <div className="navbar__tablet__form-input">
              <input type="text" placeholder="Filter by location…" />
            </div>
          </div>

          <div className="navbar__tablet__form-container1">
            <div className="navbar__tablet__form-checkbox">
              <input
                type="checkbox"
                id="fulltime"
                name="schedule"
                value="fulltime"
              />
            </div>
            <label for="schedule">Full Time</label>
            <div className="navbar__tablet__form-btn">
              <button>Search</button>
            </div>
          </div>
        </form>
      </div> */}
    </>
  );
}

export default NavbarTablet;

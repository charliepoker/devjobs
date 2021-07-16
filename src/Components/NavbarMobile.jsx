import React from "react";
import Sun from "../assets/icons/sun.svg";
import Moon from "../assets/icons/moon.svg";
import Logo from "../assets/icons/logo.svg";
import Filter from "../assets/icons/filter.svg";
import Search from "../assets/icons/search.svg";
import Triangle1 from "../assets/mobile/triangle1.svg";
import Triangle2 from "../assets/mobile/triangle2.svg";
import "../Sass/Navbar/NavbarMobile/NavbarMobile.css";

function NavbarMobile() {
  return (
    <>
      <div className="header">
        <div className="header__top">
          <img src={Triangle1} alt="" />
        </div>
        <div className="header__bottom">
          <img src={Triangle2} alt="" />
        </div>
        <div className="navbar__mobile">
          <div className="navbar__mobile-logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="navbar__mobile-toggle">
            <div className="navbar__mobile-sun">
              <img src={Sun} alt="" />
            </div>
            <div className="navbar__mobile-icon">
              <div className="navbar__mobile-icon-switch"></div>
            </div>
            <div className="navbar-mobile-moon">
              <img src={Moon} alt="" />
            </div>
          </div>
        </div>
        {/* <form className="form">
          <input
            className="form__input"
            type="text"
            placeholder="Filter by title…"
          />
          <img className="form__filter" src={Filter} alt="filter icon" />
          <img className="form__search" src={Search} alt="search icon" />
        </form> */}
      </div>
    </>
  );
}

export default NavbarMobile;

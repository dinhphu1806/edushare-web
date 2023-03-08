import React, { useState } from "react";
import "./header.scss";
import { menuData } from "./menuData";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
const Header = () => {
  const [openMobile, setOpenMobile] = useState(false);

  return (
    <div className="header">
      <div className="header__container container flex flex-between ">
        <NavLink to="/" className="header__logo flex relative">
          <div className="header__logo__icon flex flex-center">E</div>
          <span>Edushare</span>
        </NavLink>

        {/* nav */}
        <ul className={openMobile ? `header__nav__mobile` : `header__nav flex`}>
          {menuData.map((item) => {
            return (
              <li key={item.id}>
                <NavLink to={item.path}>{item.title}</NavLink>
              </li>
            );
          })}
          <div className="header__login__mobile">Sign In</div>
        </ul>

        <div className="header__login__desktop">Sign In</div>

        <div
          className="header__icon__bars"
          onClick={() => setOpenMobile(!openMobile)}
        >
          {openMobile ? <ImCross className="close" /> : <FaBars />}
        </div>
      </div>
    </div>
  );
};

export default Header;

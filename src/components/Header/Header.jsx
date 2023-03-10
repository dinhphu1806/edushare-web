import React, { useEffect, useState } from "react";
import "./header.scss";
import { menuData } from "./menuData";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { MdDarkMode } from "react-icons/md";

import { motion } from "framer-motion";

// const getThemeToStorage = () => {
//   let theme = "light-theme";
//   if (localStorage.getItem("theme")) {
//     theme = localStorage.getItem("theme");
//   }
//   return theme;
// };

const getThemeStorage = () => {
  let theme = "ligh-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

const Header = () => {
  const [openMobile, setOpenMobile] = useState(false);

  const [theme, setTheme] = useState(getThemeStorage());

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="header">
      <div className="header__container container flex flex-between ">
        <NavLink to="/" className="header__logo flex relative">
          <div
            className="header__logo__icon flex flex-center fw-800 fs-28"
            style={{
              width: "38px",
              height: "38px",
              backgroundColor: "#f77e53",
              fontStyle: "normal",
              borderRadius: "19px",
              fontFamily: '"Exo", sans-serif',
              color: "#fff",
            }}
          >
            E
          </div>
          <span
            className="fw-700 fs-24"
            style={{ fontFamily: '"Exo", sans-serif', fontStyle: "normal" }}
          >
            Edushare
          </span>
        </NavLink>

        {/* nav */}
        <ul className={openMobile ? `header__nav__mobile` : `header__nav flex`}>
          {menuData.map((item) => {
            return (
              <li key={item.id}>
                <NavLink
                  to={item.path}
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontStyle: "normal",
                  }}
                  className="fw-600 fs-15"
                >
                  {item.title}
                </NavLink>
              </li>
            );
          })}
          <div className="header__login__mobile">Sign In</div>
        </ul>

        <div className="flex flex-between">
          <motion.button
            whileTap={{ scale: 1.2 }}
            className="header__darkmode-desktop mr-2"
            onClick={toggleTheme}
          >
            <MdDarkMode className="darkmode fs-22" />
          </motion.button>
          <div className="header__login__desktop">Sign In</div>
        </div>

        <div className="flex flex-between">
          <motion.button
            whileTap={{ scale: 1.2 }}
            className="header__darkmode-mobile mr-2"
            onClick={toggleTheme}
          >
            <MdDarkMode className="darkmode fs-18 fw-600" />
          </motion.button>
          <div
            className="header__icon__bars fs-28"
            onClick={() => setOpenMobile(!openMobile)}
          >
            {openMobile ? <ImCross className="close" /> : <FaBars />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React, { useEffect, useState, useRef } from "react";
import "./header.scss";
import { menuData } from "./menuData";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { MdDarkMode } from "react-icons/md";
import { BiSearch } from "react-icons/bi";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ModalSearh from "../ModalSearch/ModalSearh";

// const getThemeToStorage = () => {
//   let theme = "light-theme";
//   if (localStorage.getItem("theme")) {
//     theme = localStorage.getItem("theme");
//   }
//   return theme;
// };

// const getThemeToStorage = () => {
//   let theme = "light-theme";
//   if (localStorage.getItem("theme")) {
//     theme = localStorage.getItem("theme");
//   }
//   return theme;
// };

const getThemeToStorage = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

const Header = () => {
  const [openMobile, setOpenMobile] = useState(false);

  const [theme, setTheme] = useState(getThemeToStorage());

  const [openSearch, setOpenSearch] = useState(false);

  const navigate = useNavigate();

  const headerRef = useRef(null);

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  // handle func sticky
  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky");
      } else {
        headerRef.current.classList.remove("sticky");
      }
    });
  };
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    // sticky
    handleStickyHeader();
    return () => {
      window.removeEventListener("scroll", handleStickyHeader);
    };
  });

  return (
    <div className="header" ref={headerRef}>
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
          <motion.div
            whileTap={{ scale: 1.2 }}
            className="header__search__desktop mr-1 "
            style={{ cursor: "pointer" }}
            onClick={() => setOpenSearch(!openSearch)}
          >
            <BiSearch className="fs-18 fw-600" />
          </motion.div>
          <motion.button
            whileTap={{ scale: 1.2 }}
            className="header__darkmode-desktop mr-2"
            onClick={toggleTheme}
          >
            <MdDarkMode className="darkmode fs-22" />
          </motion.button>
          <motion.div
            whileTap={{ scale: 1.2 }}
            className="header__login__desktop "
            onClick={() => navigate("/signin")}
            style={{ cursor: "pointer" }}
          >
            Sign In
          </motion.div>
        </div>

        <div className="flex flex-between">
          <motion.div
            whileTap={{ scale: 1.2 }}
            className="header__search__mobile mr-1 "
            style={{ cursor: "pointer" }}
            onClick={() => setOpenSearch(!openSearch)}
          >
            <BiSearch className="fs-18 fw-600" />
          </motion.div>
          <motion.button
            whileTap={{ scale: 1.2 }}
            className="header__darkmode-mobile mr-2"
            onClick={toggleTheme}
          >
            <MdDarkMode className="darkmode fs-18 fw-600" />
          </motion.button>
          <div
            className="header__icon__bars fs-24"
            onClick={() => setOpenMobile(!openMobile)}
          >
            {openMobile ? (
              <ImCross className="close" />
            ) : (
              <FaBars className="fs-24" />
            )}
          </div>
        </div>
        {openSearch && (
          <ModalSearh openSearch={openSearch} setOpenSearch={setOpenSearch} />
        )}
      </div>
    </div>
  );
};

export default Header;

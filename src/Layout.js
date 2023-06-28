import React from "react";
import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import Logo from "./images/logo.jpg";
// import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div>
      <header>
        <img src={Logo} alt="網站logo" />
        <nav>
          <ul>
            <li>
              <Link to="/">首頁</Link>
            </li>
            <li>
              <Link to="/about">
                <FontAwesomeIcon icon={faUser} /> 關於Johnny
              </Link>
            </li>
            <li>
              <Link to="/about">
                <FontAwesomeIcon icon={faBookOpen} /> 2023家教課程
              </Link>
            </li>
            <li>
              <Link to="/about">
                <FontAwesomeIcon icon={faLaptopCode} /> udemy課程
              </Link>
            </li>
            <li>
              <Link to="/about">
                <FontAwesomeIcon icon={faFileLines} /> 深碗專題專案
              </Link>
            </li>
            <li>
              <Link to="/about">
                <FontAwesomeIcon icon={faBagShopping} /> 電商平台專案
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;

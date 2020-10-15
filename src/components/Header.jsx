import React from "react";
import HeaderLogo from "../assets/img/logo_header.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-inner">
        <h1 className="header-logo">
          <img src={HeaderLogo} alt="i am" />
        </h1>

        <input id="headerMenu" type="checkbox" className="header-nav-check" />
        <label htmlFor="headerMenu" className="header-nav-toggle">
          <span></span>
        </label>

        <nav className="header-nav">
          <ul className="header-nav-list">
            <li className="header-nav-item">
              <a href="/">TOP</a>
            </li>
            <li className="header-nav-item">
              <a href="/works/">実績</a>
            </li>
            <li className="header-nav-item">
              <a href="/profile/">プロフィール</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

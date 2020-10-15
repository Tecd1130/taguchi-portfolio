import React from "react";
import FooterLogo from "../assets/img/logo_footer.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <h1 className="footer-logo">
          <img src={FooterLogo} alt="i am" />
        </h1>

        <nav className="footer-nav">
          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <a href="/">TOP</a>
            </li>
            <li className="footer-nav-item">
              <a href="/works/">実績</a>
            </li>
            <li className="footer-nav-item">
              <a href="/profile/">プロフィール</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

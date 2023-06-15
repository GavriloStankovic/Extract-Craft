import React, { Fragment } from "react";
import "./Header.scss";
import { ReactComponent as Instagram } from "../../assets/instagram/instagram.svg";
import { ReactComponent as Facebook } from "../../assets/facebook/facebook.svg";
import { ReactComponent as Tiktok } from "../../assets/tik-tok/tik-tok.svg";
import { ReactComponent as Logo } from "../../assets/logo/logo.svg";
import { ReactComponent as Cart } from "../../assets/cart/cart.svg";
import { ReactComponent as ProfileIcon } from "../../assets/profile-icon.svg";
import { ReactComponent as HamburgerMenu } from "../../assets/hamburger-menu.svg";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="container">
      <div className="header">
        <Logo />
        <div className="nav-menu">
          <ul>
            <li>MAKING YOUR OWN</li>
            <li>SHOP</li>
            <li>RESOURCES</li>
            <li>CONTACT</li>
          </ul>
          <button className="nav-button">MY ACCOUNT</button>
          <Cart />
        </div>
        <div className="responsive-header">
          <ProfileIcon />
          <Cart />
          <HamburgerMenu onClick={toggleMenu} />
        </div>
        <div className={`dropdown-menu ${isOpen ? "open" : ""}`}>
          {/* <div className={`menu-overlay open slide-in`} /> */}
          <div className="dropdown-menu-header">
            <Logo />
            <button onClick={toggleMenu}>X</button>
          </div>
          <div className="mobile-menu-text">
            <ul>
              <li>
                <a href="">MAKING YOUR OWN</a>
              </li>
              <li>
                <a href="">SHOP</a>
              </li>
              <li>
                <a href="">RESOURCES</a>
              </li>
              <li>
                <a href="">CONTACT</a>
              </li>
              <li>
                <a href="">SUPPORT</a>
              </li>
              <li>
                <a href="">PRODUCTS</a>
              </li>
            </ul>
          </div>
          <div className="social-icons">
            <Instagram />
            <Facebook />
            <Tiktok />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

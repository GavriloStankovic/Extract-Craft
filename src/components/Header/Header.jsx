import React from "react";
import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/logo/logo.svg";
import { ReactComponent as Cart } from "../../assets/cart/cart.svg";
import { ReactComponent as ProfileIcon } from "../../assets/profile-icon.svg";
import { ReactComponent as HamburgerMenu } from "../../assets/hamburger-menu.svg";

const Header = () => {
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
          <HamburgerMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;

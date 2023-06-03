import React from "react";
import "./Header.scss";
import Logo from "../../assets/logo/logo.svg";
import Cart from "../../assets/cart/cart.svg";
import ProfileIcon from "../../assets/profile-icon.svg";
import HamburgerMenu from "../../assets/hamburger-menu.svg";

const Header = () => {
  return (
    <div className="wrapper">
      <div className="header">
        <img src={Logo} alt="logo" width={242} height={60.91} />
        <div className="nav-menu">
          <ul>
            <li>MAKING YOUR OWN</li>
            <li>SHOP</li>
            <li>RESOURCES</li>
            <li>CONTACT</li>
          </ul>
          <button className="nav-button">MY ACCOUNT</button>
          <img src={Cart} alt="cart" width={97} height={51} />
        </div>
        <div className="responsive-header">
          <img src={ProfileIcon} alt="" width={30} />
          <img src={Cart} alt="" width={50} />
          <img src={HamburgerMenu} alt="" width={34} />
        </div>
      </div>
    </div>
  );
};

export default Header;

import "./Header.scss";
import { ReactComponent as Instagram } from "../../assets/instagram/instagram.svg";
import { ReactComponent as Facebook } from "../../assets/facebook/facebook.svg";
import { ReactComponent as Tiktok } from "../../assets/tik-tok/tik-tok.svg";
import { ReactComponent as Logo } from "../../assets/logo/logo.svg";
import { ReactComponent as Cart } from "../../assets/cart/cart.svg";
import { ReactComponent as ProfileIcon } from "../../assets/profile-icon.svg";
import { ReactComponent as HamburgerMenu } from "../../assets/hamburger-menu.svg";
import { useState } from "react";
import Fade from "react-reveal/Fade";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="container">
      <div className="header">
        <Fade top>
          <Logo />
        </Fade>
        <div className="nav-menu">
          <ul>
            <Fade top delay={300}>
              <li>MAKING YOUR OWN</li>
            </Fade>
            <Fade top delay={600}>
              <li>SHOP</li>
            </Fade>
            <Fade top delay={900}>
              <li>RESOURCES</li>
            </Fade>
            <Fade top delay={1200}>
              <li>CONTACT</li>
            </Fade>
          </ul>
          <Fade top delay={1500}>
            <div>
              <button className="nav-button">MY ACCOUNT</button>
            </div>
          </Fade>
          <Fade top delay={1800}>
            <Cart />
          </Fade>
        </div>
        <div className="responsive-header">
          <Fade top delay={600}>
            <ProfileIcon />
          </Fade>
          <Fade top delay={900}>
            <Cart />
          </Fade>
          <Fade top delay={1200}>
            <HamburgerMenu onClick={toggleMenu} />
          </Fade>
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
                <a href="/extract-craft/src/components/Header/Header.jsx">
                  MAKING YOUR OWN
                </a>
              </li>
              <li>
                <a href="/extract-craft/src/components/Header/Header.jsx">
                  SHOP
                </a>
              </li>
              <li>
                <a href="/extract-craft/src/components/Header/Header.jsx">
                  RESOURCES
                </a>
              </li>
              <li>
                <a href="/extract-craft/src/components/Header/Header.jsx">
                  CONTACT
                </a>
              </li>
              <li>
                <a href="/extract-craft/src/components/Header/Header.jsx">
                  SUPPORT
                </a>
              </li>
              <li>
                <a href="/extract-craft/src/components/Header/Header.jsx">
                  PRODUCTS
                </a>
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

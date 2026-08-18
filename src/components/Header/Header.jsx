import "./Header.scss";
import Instagram from "../../assets/instagram/instagram.svg?react";
import Facebook from "../../assets/facebook/facebook.svg?react";
import Tiktok from "../../assets/tik-tok/tik-tok.svg?react";
import Logo from "../../assets/logo/logo.svg?react";
import Cart from "../../assets/cart/cart.svg?react";
import ProfileIcon from "../../assets/profile-icon.svg?react";
import HamburgerMenu from "../../assets/hamburger-menu.svg?react";
import { Fade } from "../Reveal/Reveal";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext/CartContext";
import CartPreview from "../CartPreview/CartPreview";

const Header = () => {
  const { showCart, setShowCart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleCart = () => {
    setShowCart(!showCart);
  };
  return (
    <div className="container">
      <div className="header">
        <Fade top>
          <Logo />
        </Fade>
        <div className="nav-menu">
          <ul>
            <Fade top delay={200}>
              <li>MAKING YOUR OWN</li>
            </Fade>
            <Fade top delay={400}>
              <li>SHOP</li>
            </Fade>
            <Fade top delay={600}>
              <li>RESOURCES</li>
            </Fade>
            <Fade top delay={800}>
              <li>CONTACT</li>
            </Fade>
          </ul>
          <Fade top delay={1000}>
            <div>
              <button className="nav-button">MY ACCOUNT</button>
            </div>
          </Fade>
          <Fade top delay={1200}>
            <Cart onClick={toggleCart} />
          </Fade>
        </div>
        <div className="responsive-header">
          <Fade top delay={200}>
            <ProfileIcon />
          </Fade>
          <Fade top delay={400}>
            <Cart onClick={toggleCart} />
          </Fade>
          <Fade top delay={600}>
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
                <button type="button">MAKING YOUR OWN</button>
              </li>
              <li>
                <button type="button">SHOP</button>
              </li>
              <li>
                <button type="button">RESOURCES</button>
              </li>
              <li>
                <button type="button">CONTACT</button>
              </li>
              <li>
                <button type="button">SUPPORT</button>
              </li>
              <li>
                <button type="button">PRODUCTS</button>
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
      {showCart && <CartPreview />}
    </div>
  );
};

export default Header;

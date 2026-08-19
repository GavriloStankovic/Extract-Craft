import "./Header.scss";
import Instagram from "../../assets/instagram/instagram.svg?react";
import Facebook from "../../assets/facebook/facebook.svg?react";
import Tiktok from "../../assets/tik-tok/tik-tok.svg?react";
import Logo from "../../assets/logo/logo.svg?react";
import Cart from "../../assets/cart/cart.svg?react";
import ProfileIcon from "../../assets/profile-icon.svg?react";
import HamburgerMenu from "../../assets/hamburger-menu.svg?react";
import { Fade } from "../Reveal/Reveal";
import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { CartContext } from "../../context/CartContext/CartContext";
import CartPreview from "../CartPreview/CartPreview";

const NAV_ITEMS = ["MAKING YOUR OWN", "SHOP", "RESOURCES", "CONTACT"];
const MOBILE_NAV_ITEMS = [...NAV_ITEMS, "SUPPORT", "PRODUCTS"];

const Header = () => {
  const { showCart, setShowCart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const closeButtonRef = useRef(null);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleCart = () => {
    setShowCart(!showCart);
  };

  // Escape closes whichever overlay is open, and the menu hands focus back to
  // the button that opened it so keyboard users do not land at the top again.
  useEffect(() => {
    if (!isOpen && !showCart) return undefined;

    const onKeyDown = (event) => {
      if (event.key !== "Escape") return;
      if (showCart) setShowCart(false);
      if (isOpen) {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, showCart, setShowCart]);

  useEffect(() => {
    if (isOpen) closeButtonRef.current?.focus();
  }, [isOpen]);
  return (
    <header className="container">
      <div className="header">
        <Link className="logo-link" to="/" aria-label="ExtractCraft — home">
          <Fade top>
            <Logo aria-hidden="true" focusable="false" />
          </Fade>
        </Link>
        <nav className="nav-menu" aria-label="Main">
          <ul>
            {NAV_ITEMS.map((item, index) => (
              <Fade key={item} top delay={200 * (index + 1)}>
                <li>
                  <button type="button">{item}</button>
                </li>
              </Fade>
            ))}
          </ul>
          <Fade top delay={1000}>
            <div>
              <button type="button" className="nav-button">
                MY ACCOUNT
              </button>
            </div>
          </Fade>
          <button
            type="button"
            className="icon-button cart-button"
            onClick={toggleCart}
            aria-label="Cart"
            aria-expanded={showCart}
            aria-controls="cart-preview"
          >
            <Fade top delay={1200}>
              <Cart aria-hidden="true" focusable="false" />
            </Fade>
          </button>
        </nav>
        <div className="responsive-header">
          <button type="button" className="icon-button" aria-label="My account">
            <Fade top delay={200}>
              <ProfileIcon aria-hidden="true" focusable="false" />
            </Fade>
          </button>
          <button
            type="button"
            className="icon-button cart-button"
            onClick={toggleCart}
            aria-label="Cart"
            aria-expanded={showCart}
            aria-controls="cart-preview"
          >
            <Fade top delay={400}>
              <Cart aria-hidden="true" focusable="false" />
            </Fade>
          </button>
          <button
            type="button"
            className="icon-button"
            ref={menuButtonRef}
            onClick={toggleMenu}
            aria-label="Menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <Fade top delay={600}>
              <HamburgerMenu aria-hidden="true" focusable="false" />
            </Fade>
          </button>
        </div>
        {/* The panel stays in the DOM so it can slide in, so `inert` is what
            keeps its links out of the tab order while it is off screen. */}
        <div
          id="mobile-menu"
          className={`dropdown-menu ${isOpen ? "open" : ""}`}
          inert={!isOpen}
        >
          <div className="dropdown-menu-header">
            <Logo aria-hidden="true" focusable="false" />
            <button
              type="button"
              ref={closeButtonRef}
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <span aria-hidden="true">X</span>
            </button>
          </div>
          <nav className="mobile-menu-text" aria-label="Mobile">
            <ul>
              {MOBILE_NAV_ITEMS.map((item) => (
                <li key={item}>
                  <button type="button">{item}</button>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="social-icons">
            <li>
              <Instagram role="img" aria-label="Instagram" />
            </li>
            <li>
              <Facebook role="img" aria-label="Facebook" />
            </li>
            <li>
              <Tiktok role="img" aria-label="TikTok" />
            </li>
          </ul>
        </div>
      </div>
      {showCart && <CartPreview />}
    </header>
  );
};

export default Header;

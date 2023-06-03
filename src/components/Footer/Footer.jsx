import React from "react";
import "./Footer.scss";
import facebook from "../../assets/facebook/facebook.svg";
import instagram from "../../assets/instagram/instagram.svg";
import tiktok from "../../assets/tik-tok/tik-tok.svg";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-connected">
        <h2>Let’s Stay Connected!</h2>
        <div className="icons">
          <img src={facebook} alt="" width={33.8} height={33.8} />
          <img src={instagram} alt="" width={33.8} height={33.8} />
          <img src={tiktok} alt="" width={33.8} height={33.8} />
        </div>
      </div>
      <div className="footer-text">
        <p>
          Enter your email address below to get updates from the ExtractCraft
          team, including the latest extraction recipes, products, and Xcrafter
          news.
        </p>
        <p>info@extractcraft.com</p>
      </div>
      <div className="footer-email">
        <input type="email" placeholder="Vaša e-mail adresa" />
        <button>Submit</button>
      </div>
      <div className="footer-tabel">
        <div>
          <h1>BUY ONLINE</h1>
        </div>
        <div>
          <h1>VIDEOS</h1>
        </div>
        <div>
          <h1>COMMUNITY</h1>
        </div>
        <div>
          <h1>BUY ONLINE</h1>
        </div>
      </div>
      <div className="hidden-footer-icons">
        <img src={facebook} alt="" width={33.8} height={33.8} />
        <img src={instagram} alt="" width={33.8} height={33.8} />
        <img src={tiktok} alt="" width={33.8} height={33.8} />
      </div>
      <div className="footer-links">
        <p>info@extractcraft.com</p>
        <h3>© 2023 ExtractCraft LLC</h3>
        <div className="links">
          <a href="#">FAQs</a>
          <a href="#">Careers</a>
          <a href="#">Warranty / Returns</a>
          <a href="#">Terms & Privacy Policy</a>
        </div>
      </div>
      <div className="hidden-h3">
        <h3>© 2023 ExtractCraft LLC</h3>
      </div>
      <div className="last">
        <h3>
          Website Design by <span>Winnow Creative</span>
        </h3>
      </div>
    </div>
  );
};

export default Footer;

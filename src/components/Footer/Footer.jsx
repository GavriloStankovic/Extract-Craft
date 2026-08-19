import "./Footer.scss";
import facebook from "../../assets/facebook/facebook.svg";
import instagram from "../../assets/instagram/instagram.svg";
import tiktok from "../../assets/tik-tok/tik-tok.svg";

const SOCIALS = [
  { src: facebook, name: "Facebook" },
  { src: instagram, name: "Instagram" },
  { src: tiktok, name: "TikTok" },
];

const TABLE_LINKS = ["BUY ONLINE", "VIDEOS", "COMMUNITY", "BUY ONLINE"];

const SocialIcons = ({ className }) => (
  <ul className={className}>
    {SOCIALS.map((social) => (
      <li key={social.name}>
        <img src={social.src} alt={social.name} width={33.8} height={33.8} />
      </li>
    ))}
  </ul>
);

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-connected">
        <h2>Let’s Stay Connected!</h2>
        <SocialIcons className="icons" />
      </div>
      <div className="footer-text">
        <p>
          Enter your email address below to get updates from the ExtractCraft
          team, including the latest extraction recipes, products, and Xcrafter
          news.
        </p>
        <a href="mailto:info@extractcraft.com">info@extractcraft.com</a>
      </div>
      <form className="footer-email" onSubmit={(event) => event.preventDefault()}>
        <label className="visually-hidden" htmlFor="newsletter-email">
          Your email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Your email address"
        />
        <button type="submit">Submit</button>
      </form>
      <ul className="footer-tabel">
        {TABLE_LINKS.map((label, index) => (
          <li key={`${label}-${index}`}>{label}</li>
        ))}
      </ul>
      <SocialIcons className="hidden-footer-icons" />
      <div className="footer-links">
        <a className="footer-email-link" href="mailto:info@extractcraft.com">
          info@extractcraft.com
        </a>
        <p className="copyright">© 2023 ExtractCraft LLC</p>
        <div className="links">
          <button type="button">FAQs</button>
          <button type="button">Careers</button>
          <button type="button">Warranty / Returns</button>
          <button type="button">Terms &amp; Privacy Policy</button>
        </div>
      </div>
      <div className="hidden-h3">
        <p className="copyright">© 2023 ExtractCraft LLC</p>
      </div>
      <div className="last">
        <p>
          Website Design by <span>Winnow Creative</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

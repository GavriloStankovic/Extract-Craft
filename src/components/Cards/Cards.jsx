import "./Cards.scss";
import white from "../../assets/white-honey.svg";
import yellow from "../../assets/yellow-honey.svg";
import blue from "../../assets/blue-honey.svg";
import { Fade } from "../Reveal/Reveal";

const CARDS = [
  {
    className: "left-card",
    image: white,
    alt: "A jar of clear home made herbal extract",
    title:
      "Create your own high quality plant, botanical, or herbal based extracts and medicines safely and easily from your home.",
    text: "Superior to an infusion machine, our simple to use SourceTurbo is the premier home extraction equipment on the market today.",
    delay: 0,
  },
  {
    className: "center-card",
    image: yellow,
    alt: "A jar of golden herbal oil beside fresh botanicals",
    title:
      "Craft dispensary grade products like herbal oil and butter, topicals, creams, and edibles for a fraction of their price.",
    text: "Discover the endless possibilities of what can be created, from citrus infused topicals to high potency herbal butter to Real Simple Oil.",
    delay: 500,
  },
  {
    className: "right-card",
    image: blue,
    alt: "A jar of full spectrum oil on a blue background",
    title:
      "Save money producting your own Full Spectrum Oils while taking control of your own health needs and happiness.",
    text: "Join our passionate community of DIYers, makers, cannaseurs and health advocates improving our own health and wellness.",
    delay: 1000,
  },
];

const Cards = () => {
  return (
    <section className="cards-wrapper" aria-labelledby="cards-heading">
      <h2 id="cards-heading" className="visually-hidden">
        What you can craft at home
      </h2>
      <div className="container">
        <ul className="cards">
          {CARDS.map((card) => (
            <Fade key={card.className} bottom duration={1000} delay={card.delay}>
              <li className={card.className}>
                <img src={card.image} alt={card.alt} />
                <p className="card-title">{card.title}</p>
                <span className="divider" aria-hidden="true" />
                <p className="card-text">{card.text}</p>
              </li>
            </Fade>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Cards;

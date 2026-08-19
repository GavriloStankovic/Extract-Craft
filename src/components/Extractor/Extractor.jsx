import "./Extractor.scss";
import sugar from "../../assets/sugar.svg";
import bears from "../../assets/bears.svg";
import honey from "../../assets/honey.svg";
import { Slide } from "../Reveal/Reveal";

const EXTRACTOR_CARDS = [
  {
    className: "extractor-left",
    image: sugar,
    alt: "Freshly baked brownies dusted with sugar",
    title: "Master Baker - With a Twist",
    text: "GETTING the perfect brownie BAKED can feel impossible. But we’ve got you covered!",
    duration: 800,
  },
  {
    className: "extractor-center",
    image: bears,
    alt: "A handful of home made gummy bears",
    title: "Edibles Made Easy",
    text: "Make ANYTHING into gummy bears with our easy-to-use extraction machine!",
    duration: 1000,
  },
  {
    className: "extractor-right",
    image: honey,
    alt: "A jar of golden concentrate with a honey dipper",
    title: "Shattering Expectations",
    text: "High-quality end products from extraordinary materials.",
    duration: 1200,
  },
];

const Extractor = () => {
  return (
    <section className="extractor-wrapper" aria-labelledby="extractor-heading">
      <div className="container">
        <div className="extractor-header">
          <h2 id="extractor-heading">The #1 Rated Botanical Extractor</h2>
        </div>
        <ul className="extractor-cards">
          {EXTRACTOR_CARDS.map((card) => (
            <Slide key={card.className} left duration={card.duration}>
              <li className={card.className}>
                <img src={card.image} alt={card.alt} />
                <h3>{card.title}</h3>
                <span className="divider" aria-hidden="true" />
                <p className="card-text">{card.text}</p>
              </li>
            </Slide>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Extractor;

import "./Concentration.scss";
import { Fade, Flip } from "../Reveal/Reveal";

const LEFT_POINTS = [
  "Create your own high quality plant, botanical, or herbal based extracts and medicines safely and easily from your home.",
  "Safe, simple, and easy to use for both home and small business applications.",
  "Create “maximum -strength” essential oils and concentrates that capture more plant quality (including terpenes) than any other process including infusion.",
];

const RIGHT_POINTS = [
  "Preserve all the natural goodness from your herbs utilizing ExtractCraft’s patented low temperature vacuum extraction system.",
  "Craft the cleanest, most pure concentrate products for your daily herbal medicinal needs.",
  "Our closed loop ethanol extraction system recovers 95% of the ethanol and saves you money.",
];

const Concentration = () => {
  return (
    <section className="container" aria-labelledby="concentration-heading">
      <div className="concentration-wrapper">
        <div className="cocentration-header">
          <Flip left duration={2000}>
            <h2 id="concentration-heading">
              It’s HIGH time you improved
              <br /> your concentration
            </h2>
          </Flip>
          <Flip left duration={2000}>
            <div>
              <button type="button" className="primary">
                SHOP NOW
              </button>
            </div>
          </Flip>
        </div>
        <div className="concentration">
          <Fade left duration={2000} delay={800}>
            <ul className="concentration-left">
              {LEFT_POINTS.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Fade>
          <Fade right duration={2000} delay={800}>
            <ul className="concentration-right">
              {RIGHT_POINTS.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Fade>
          <div className="button-hidden">
            <button type="button">SHOP NOW</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Concentration;

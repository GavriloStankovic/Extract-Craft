import "./Benefits.scss";
import benefits from "../../assets/benefits.svg";
import { Flip } from "../Reveal/Reveal";

const Beefits = () => {
  return (
    <section className="container benefits-wrapper" aria-labelledby="benefits-heading">
      {/* The narrow layout moves the heading above the illustration; only one of
          the two is ever displayed, the other is removed by `display: none`. */}
      <div className="hidden-benefits">
        <Flip top>
          <h2>Health Benefits</h2>
        </Flip>
      </div>
      <div className="benefits-image">
        <img
          src={benefits}
          alt="Bottles of essential oil, a relief cream and a tincture dropper"
        />
      </div>
      <div className="benefits-text">
        <Flip top delay={200}>
          <h2 id="benefits-heading">Health Benefits</h2>
        </Flip>
        <Flip top delay={600}>
          <p>
            Essential oils and botanical extract have been shown to help boost
            immunity, anti-virals, antibacterials, antiseptics and anti-fungals.
            <br />
            <br />
            Aid with managing the negative effects of stress, inflammation,
            pain, migraines, anxiety, depleted energy, damaged blood vessels,
            and hormonal imbalances.
            <br />
            <br /> Assist with relaxation, sleep, comfort and pleasure.
          </p>
        </Flip>
        <Flip top delay={1000}>
          <h3>What can you make?</h3>
        </Flip>
        <Flip top delay={1800}>
          <div className="options">
            <ul>
              <li>
                <span aria-hidden="true">-</span> Relief Creams
              </li>
              <li>
                <span aria-hidden="true">-</span> Tinctures
              </li>
            </ul>
            <ul>
              <li>
                <span aria-hidden="true">-</span> Magic Butter
              </li>
              <li>
                <span aria-hidden="true">-</span> Edibles
              </li>
            </ul>
          </div>
        </Flip>
        <Flip top delay={2400}>
          <div>
            <button type="button" className="primary">
              SHOP NOW
            </button>
          </div>
        </Flip>
      </div>
    </section>
  );
};

export default Beefits;

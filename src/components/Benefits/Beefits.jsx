import React from "react";
import "./Benefits.scss";
import benefits from "../../assets/benefits.svg";

const Beefits = () => {
  return (
    <div className="container benefits-wrapper">
      <div className="hidden-benefits">
        <h1>Health Benefits</h1>
      </div>
      <div className="benefits-image">
        <img src={benefits} alt="" />
      </div>
      <div className="benefits-text">
        <h1>Health Benefits</h1>
        <p>
          Essential oils and botanical extract have been shown to help boost
          immunity, anti-virals, antibacterials, antiseptics and anti-fungals.
          <br />
          <br />
          Aid with managing the negative effects of stress, inflammation, pain,
          migraines, anxiety, depleted energy, damaged blood vessels, and
          hormonal imbalances.
          <br />
          <br /> Assist with relaxation, sleep, comfort and pleasure.
        </p>
        <h3>What can you make?</h3>
        <div className="options">
          <div>
            <p>
              <span>-</span> Relief Creams
            </p>
            <p>
              <span>-</span> Tinctures
            </p>
          </div>
          <div>
            <p>
              <span>-</span> Magic Butter
            </p>
            <p>
              <span>-</span> Edibles
            </p>
          </div>
        </div>
        <button className="primary">SHOP NOW</button>
      </div>
    </div>
  );
};

export default Beefits;

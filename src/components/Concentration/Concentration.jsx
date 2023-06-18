import React from "react";
import "./Concentration.scss";
import { Flip } from "react-reveal";

const Concentration = () => {
  return (
    <div className="container">
      <div className="concentration-wrapper">
        <div className="cocentration-header">
          <Flip left>
            <h1>
              It's HIGH time you improved
              <br /> your concentration
            </h1>
          </Flip>
          <Flip left>
            <div>
              <button className="primary">SHOP NOW</button>
            </div>
          </Flip>
        </div>
        <div className="concentration">
          <div className="concentration-left">
            <span>
              &bull; Create your own high quality plant, botanical, or herbal
              based extracts and medicines safely and easily from your home.
            </span>
            <span>
              &bull; Safe, simple, and easy to use for both home and small
              business applications.
            </span>
            <span>
              &bull; Create “maximum -strength” essential oils and concentrates
              that capture more plant quality (including terpenes) than any
              other process including infusion.
            </span>
          </div>
          <div className="concentration-right">
            <span>
              &bull; Preserve all the natural goodness from your herbs utilizing
              ExtractCraft’s patented low temperature vacuum extraction system.
            </span>
            <span>
              &bull; Craft the cleanest, most pure concentrate products for your
              daily herbal medicinal needs.
            </span>
            <span>
              &bull; Our closed loop ethanol extraction system recovers 95% of
              the ethanol and saves you money.
            </span>
          </div>
          <div className="button-hidden">
            <button>SHOP NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Concentration;

import React from "react";
import "./Concentration.scss";
import { Flip } from "react-reveal";
import Fade from "react-reveal/Fade";

const Concentration = () => {
  return (
    <div className="container">
      <div className="concentration-wrapper">
        <div className="cocentration-header">
          <Flip left duration={2000}>
            <h1>
              It's HIGH time you improved
              <br /> your concentration
            </h1>
          </Flip>
          <Flip left duration={2000}>
            <div>
              <button className="primary">SHOP NOW</button>
            </div>
          </Flip>
        </div>
        <div className="concentration">
          <Fade left duration={2000} delay={800}>
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
                &bull; Create “maximum -strength” essential oils and
                concentrates that capture more plant quality (including
                terpenes) than any other process including infusion.
              </span>
            </div>
          </Fade>
          <Fade right duration={2000} delay={800}>
            <div className="concentration-right">
              <span>
                &bull; Preserve all the natural goodness from your herbs
                utilizing ExtractCraft’s patented low temperature vacuum
                extraction system.
              </span>
              <span>
                &bull; Craft the cleanest, most pure concentrate products for
                your daily herbal medicinal needs.
              </span>
              <span>
                &bull; Our closed loop ethanol extraction system recovers 95% of
                the ethanol and saves you money.
              </span>
            </div>
          </Fade>
          <div className="button-hidden">
            <button>SHOP NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Concentration;

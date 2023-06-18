import React from "react";
import "./Machine.scss";
import bottleLeft from "../../assets/leftBottle.svg";
import rightBottle from "../../assets/rightBottle.svg";
import machine from "../../assets/machine.svg";
import dashed from "../../assets/dashed.svg";
import Fade from "react-reveal/Fade";

const Machine = () => {
  return (
    <div className="machine-wrapper">
      <div className="machine-header">
        <h1>Home Kitchen or Small Business? We got you</h1>
      </div>
      <div className="machine-holder">
        <Fade left>
          <img src={bottleLeft} alt="" />
        </Fade>
        <Fade right>
          <img src={rightBottle} alt="" />
        </Fade>
        <div className="machine-card">
          <img src={machine} alt="" />
          <img src={dashed} alt="" />
          <p>&bull; Home Solutions</p>
          <p>
            &bull; Create your own pure oils at home
            <br />
          </p>
          <p>
            &bull; Safest & Lowest Cost home extraction
            <br />
          </p>
          <p>&bull; Essential Oils, Full Spectrum Oils in your home kitchen</p>
          <h1>$799.00</h1>
          <button>SHOP NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Machine;

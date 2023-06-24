import React from "react";
import "./IndustryLeader.scss";
import { ReactComponent as Bottles } from "../../assets/bottles.svg";
import Fade from "react-reveal/Fade";

const IndustryLeader = () => {
  return (
    <div className="industry-wrapper">
      <div className="container">
        <div className="industryLeader">
          <div className="industry-left">
            <Fade top delay={1400}>
              <span>The Industry Leader in Home Extraction Technology</span>
            </Fade>
            <Fade top delay={1600}>
              <h1>
                Craft high potency Real Simple Oil <br />
                and herbal concentrates from your <br />
                home grown plants and botanicals
              </h1>
            </Fade>
            <Fade top delay={1800}>
              <div>
                <button className="primary">LEARN MORE</button>
              </div>
            </Fade>
          </div>
          <Fade bottom delay={2000}>
            <div className="right-side">
              <Bottles />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default IndustryLeader;

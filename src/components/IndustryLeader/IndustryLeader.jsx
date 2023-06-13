import React from "react";
import "./IndustryLeader.scss";
import { ReactComponent as Bottles } from "../../assets/bottles.svg";

const IndustryLeader = () => {
  return (
    <div className="industry-wrapper">
      <div className="container">
        <div className="industryLeader">
          <div className="industry-left">
            <span>The Industry Leader in Home Extraction Technology</span>
            <h1>
              Craft high potency Real Simple Oil <br />
              and herbal concentrates from your <br />
              home grown plants and botanicals
            </h1>
            <button className="primary">LEARN MORE</button>
          </div>
          <div className="right-side">
            <Bottles />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryLeader;

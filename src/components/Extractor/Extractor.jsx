import React from "react";
import "./Extractor.scss";
import sugar from "../../assets/sugar.svg";
import bears from "../../assets/bears.svg";
import honey from "../../assets/honey.svg";
import { Slide } from "react-reveal";

const Extractor = () => {
  return (
    <div className="extractor-wrapper">
      <div className="container">
        <div className="extractor-header">
          <h1>The #1 Rated Botanical Extractor</h1>
        </div>
        <div className="extractor-cards">
          <Slide left>
            <div className="extractor-left">
              <img src={sugar} alt="" />
              <h2>Master Baker - With a Twist</h2>
              <span></span>
              <h3>
                GETTING the perfect brownie BAKED can feel impossible. But we've
                got you covered!
              </h3>
            </div>
          </Slide>
          <Slide left delay={300}>
            <div className="extractor-center">
              <img src={bears} alt="" />
              <h2>Edibles Made Easy</h2>
              <span></span>
              <h3>
                Make ANYTHING into gummy bears with our easy-to-use extraction
                machine!
              </h3>
            </div>
          </Slide>
          <Slide left delay={600}>
            <div className="extractor-right">
              <img src={honey} alt="" />
              <h2>Shattering Expectations</h2>
              <span></span>
              <h3>High-quality end products from extraordinary materials.</h3>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Extractor;

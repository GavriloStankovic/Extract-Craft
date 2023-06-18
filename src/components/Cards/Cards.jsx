import React from "react";
import "./Cards.scss";
import white from "../../assets/white-honey.svg";
import yellow from "../../assets/yellow-honey.svg";
import blue from "../../assets/blue-honey.svg";
import Slide from "react-reveal/Slide";

const Cards = () => {
  return (
    <div className="cards-wrapper">
      <div className="container">
        <div className="cards">
          <Slide left>
            <div className="left-card">
              <img src={white} alt="" />
              <h3>
                Create your own high quality plant, botanical, or herbal based
                extracts and medicines safely and easily from your home.
              </h3>
              <span></span>
              <h4>
                Superior to an infusion machine, our simple to use SourceTurbo
                is the premier home extraction equipment on the market today.
              </h4>
            </div>
          </Slide>
          <Slide bottom>
            <div className="center-card">
              <img src={yellow} alt="" />
              <h3>
                Craft dispensary grade products like herbal oil and butter,
                topicals, creams, and edibles for a fraction of their price.
              </h3>
              <span></span>
              <h4>
                Discover the endless possibilities of what can be created, from
                citrus infused topicals to high potency herbal butter to Real
                Simple Oil.
              </h4>
            </div>
          </Slide>
          <Slide right>
            <div className="right-card">
              <img src={blue} alt="" />
              <h3>
                Save money producting your own Full Spectrum Oils while taking
                control of your own health needs and happiness.
              </h3>
              <span></span>
              <h4>
                Join our passionate community of DIYers, makers, cannaseurs and
                health advocates improving our own health and wellness.
              </h4>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Cards;

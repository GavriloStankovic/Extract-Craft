import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartContext";
import "./Machine.scss";
import bottleLeft from "../../assets/leftBottle.svg";
import rightBottle from "../../assets/rightBottle.svg";
import dashed from "../../assets/dashed.svg";
import Fade from "react-reveal/Fade";
import { Swiper, SwiperSlide } from "swiper/react";
import machineArray from "../../utils/machineSlider";

const Machine = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="machine-wrapper">
      <div className="machine-header">
        <h1>Home Kitchen or Small Business? We got you</h1>
      </div>
      <div className="machine-holder">
        <Fade left duration={1600}>
          <img src={bottleLeft} alt="" />
        </Fade>
        <Fade right duration={1600}>
          <img src={rightBottle} alt="" />
        </Fade>
        <Swiper>
          {machineArray.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="machine-card">
                <img src={item.image} alt="" />
                <img src={dashed} alt="" />
                <p>&bull; {item.p1}</p>
                <p>
                  &bull; {item.p2}
                  <br />
                </p>
                <p>
                  &bull; {item.p3}
                  <br />
                </p>
                <p>&bull; {item.p4}</p>
                <h1>${item.price}</h1>
                <button onClick={() => addToCart(index)}>BUY NOW</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Machine;

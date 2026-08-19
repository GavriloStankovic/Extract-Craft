import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartContext";
import "./Machine.scss";
import bottleLeft from "../../assets/leftBottle.svg";
import rightBottle from "../../assets/rightBottle.svg";
import dashed from "../../assets/dashed.svg";
import { Fade } from "../Reveal/Reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard } from "swiper/modules";
import machineArray from "../../utils/machineSlider";

const Machine = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <section className="machine-wrapper" aria-labelledby="machine-heading">
      <div className="machine-header">
        <h2 id="machine-heading">Home Kitchen or Small Business? We got you</h2>
      </div>
      <div className="machine-holder">
        <Fade left duration={1600}>
          <img src={bottleLeft} alt="" />
        </Fade>
        <Fade right duration={1600}>
          <img src={rightBottle} alt="" />
        </Fade>
        <Swiper
          modules={[A11y, Keyboard]}
          keyboard={{ enabled: true }}
          a11y={{
            containerRole: "group",
            containerRoleDescriptionMessage: "carousel",
            containerMessage: "Extraction machines",
          }}
        >
          {machineArray.map((item, index) => (
            <SwiperSlide key={item.p1}>
              <article className="machine-card" aria-label={item.p1}>
                <img src={item.image} alt={item.p1} />
                <img src={dashed} alt="" />
                <ul className="machine-points">
                  <li>{item.p1}</li>
                  <li>{item.p2}</li>
                  <li>{item.p3}</li>
                  <li>{item.p4}</li>
                </ul>
                <p className="machine-price">${item.price}</p>
                <button
                  type="button"
                  onClick={() => addToCart(index)}
                  aria-label={`BUY NOW — ${item.p1}, $${item.price}`}
                >
                  BUY NOW
                </button>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Machine;

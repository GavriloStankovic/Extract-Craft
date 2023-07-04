import React, { useContext } from "react";
import { CartContext } from "../../context/context";
import "./Machine.scss";
import bottleLeft from "../../assets/leftBottle.svg";
import rightBottle from "../../assets/rightBottle.svg";
import dashed from "../../assets/dashed.svg";
import Fade from "react-reveal/Fade";
import { Swiper, SwiperSlide } from "swiper/react";
import machineArray from "../../utils/machineSlider";
import { useNavigate } from "react-router";

const Machine = () => {
  const { showCart, cartItems, totalPrice, addToCart, resetCart } =
    useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

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
      {showCart && (
        <div className="cart-wrapper">
          <h2>Shopping Cart</h2>
          {cartItems.map((cartItem) => (
            <div key={cartItem.index} className="cart-item">
              <img src={cartItem.image} alt={cartItem.p1} />
              <div>
                <p>{cartItem.p1}</p>
                <p>Quantity: {cartItem.quantity}</p>
                <p>Price: {cartItem.price}</p>
              </div>
              <button
                onClick={() =>
                  resetCart(cartItem.id, cartItem.price, cartItem.quantity)
                }
              >
                X
              </button>
            </div>
          ))}
          <div className="cart-options">
            <p className="total-price">Total Price: ${totalPrice}</p>
            <button onClick={goToCheckoutHandler} className="checkout-button">
              CHECKOUT
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Machine;

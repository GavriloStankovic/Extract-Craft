import React, { useState } from "react";
import "./Machine.scss";
import bottleLeft from "../../assets/leftBottle.svg";
import rightBottle from "../../assets/rightBottle.svg";
import dashed from "../../assets/dashed.svg";
import Fade from "react-reveal/Fade";
import { Swiper, SwiperSlide } from "swiper/react";
import machineArray from "../../utils/machineSlider";

const Machine = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (index) => {
    const item = machineArray[index];
    const existingItem = cartItems.find((cartItem) => cartItem.index === index);

    if (existingItem) {
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.index === index
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...item, index, quantity: 1, id: index }]);
    }

    const newTotalPrice = totalPrice + item.price;
    setTotalPrice(newTotalPrice);

    setShowCart(true);
  };

  const removeFromCart = (id, price, quantity) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== id);
    setCartItems(updatedCartItems);

    const newTotalPrice = totalPrice - price * quantity;
    setTotalPrice(newTotalPrice);

    if (updatedCartItems.length === 0) {
      setShowCart(false);
    }
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
                  removeFromCart(cartItem.id, cartItem.price, cartItem.quantity)
                }
              >
                X
              </button>
            </div>
          ))}
          <p className="total-price">Total Price: ${totalPrice}</p>
        </div>
      )}
    </div>
  );
};

export default Machine;

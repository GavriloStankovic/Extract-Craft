import React, { useContext } from "react";
import { CartContext } from "../../context/context";
import "./Checkout.scss";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { AiTwotoneDelete } from "react-icons/ai";

const Checkout = () => {
  const { cartItems, totalPrice, removeFromCart, addToCart, resetCart } =
    useContext(CartContext);

  return (
    <div className="checkout-wrapper">
      <h2>Your Shopping Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="checkout-items">
          <img src={item.image} alt={item.name} />
          <p>{item.p1}</p>
          <div className="quantity-options">
            <BsArrowLeftCircleFill onClick={() => removeFromCart(item.id)} />
            <p>Quantity: {item.quantity}</p>
            <BsArrowRightCircleFill
              onClick={() => addToCart(item.id, item.quantity)}
            />
          </div>
          <p>Price per item: ${item.price}</p>
          <AiTwotoneDelete onClick={() => resetCart(item.id)} />
        </div>
      ))}
      <p className="checkout-total-price">Total: ${totalPrice}</p>
    </div>
  );
};

export default Checkout;

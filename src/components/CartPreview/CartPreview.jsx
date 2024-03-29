import React from "react";
import "./CartPreview.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartContext";
import { useNavigate } from "react-router";
import { Fade } from "react-reveal";

const CartPreview = () => {
  const { cartItems, resetCart, totalPrice } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <div>
      <Fade top duration={400}>
        <div className="cart-wrapper">
          <h2>Your Cart</h2>
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
      </Fade>
    </div>
  );
};

export default CartPreview;

import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext/CartContext";
import "./Checkout.scss";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { AiTwotoneDelete } from "react-icons/ai";

const Checkout = () => {
  const {
    cartItems,
    totalPrice,
    removeFromCart,
    addToCart,
    resetCart,
    setShowCart,
  } = useContext(CartContext);

  useEffect(() => {
    setShowCart(false);

    return () => {
      setShowCart(true);
    };
  }, [setShowCart]);

  return (
    <div className="checkout-wrapper">
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="checkout-empty">Your cart is empty.</p>
      ) : (
        <ul className="checkout-list">
          {cartItems.map((item) => (
            <li key={item.id} className="checkout-items">
              <img src={item.image} alt="" />
              <p>{item.p1}</p>
              <div className="quantity-options">
                <button
                  type="button"
                  className="icon-button"
                  onClick={() => removeFromCart(item.id)}
                  aria-label={`Decrease the quantity of ${item.p1}`}
                >
                  <BsArrowLeftCircleFill aria-hidden="true" focusable="false" />
                </button>
                <p>Quantity: {item.quantity}</p>
                <button
                  type="button"
                  className="icon-button"
                  onClick={() => addToCart(item.id)}
                  aria-label={`Increase the quantity of ${item.p1}`}
                >
                  <BsArrowRightCircleFill aria-hidden="true" focusable="false" />
                </button>
              </div>
              <p>Price per item: ${item.price}</p>
              <button
                type="button"
                className="icon-button"
                onClick={() => resetCart(item.id)}
                aria-label={`Remove ${item.p1} from the cart`}
              >
                <AiTwotoneDelete aria-hidden="true" focusable="false" />
              </button>
            </li>
          ))}
        </ul>
      )}
      <p className="checkout-total-price" aria-live="polite">
        Total: ${totalPrice}
      </p>
    </div>
  );
};

export default Checkout;

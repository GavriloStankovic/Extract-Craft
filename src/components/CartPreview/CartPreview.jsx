import { useContext } from "react";
import "./CartPreview.scss";
import { CartContext } from "../../context/CartContext/CartContext";
import { useNavigate } from "react-router";
import { Fade } from "../Reveal/Reveal";

const CartPreview = () => {
  const { cartItems, resetCart, totalPrice } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <div>
      <Fade top duration={400}>
        <section
          id="cart-preview"
          className="cart-wrapper"
          aria-labelledby="cart-preview-heading"
        >
          <h2 id="cart-preview-heading">Your Cart</h2>
          {cartItems.length === 0 ? (
            <p className="cart-empty">Your cart is empty.</p>
          ) : (
            <ul className="cart-items">
              {cartItems.map((cartItem) => (
                <li key={cartItem.id} className="cart-item">
                  <img src={cartItem.image} alt="" />
                  <div>
                    <p>{cartItem.p1}</p>
                    <p>Quantity: {cartItem.quantity}</p>
                    <p>Price: ${cartItem.price}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => resetCart(cartItem.id)}
                    aria-label={`Remove ${cartItem.p1} from cart`}
                  >
                    <span aria-hidden="true">X</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
          <div className="cart-options">
            <p className="total-price">Total Price: ${totalPrice}</p>
            <button
              type="button"
              onClick={goToCheckoutHandler}
              className="checkout-button"
            >
              CHECKOUT
            </button>
          </div>
        </section>
      </Fade>
    </div>
  );
};

export default CartPreview;

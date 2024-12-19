import React from "react";
import "./viewCart.css";
import { useCart } from "../../State/storeState";

const ViewCart = () => {
  const { cart } = useCart();
  const subtotal = Math.round(
    cart.reduce((acc, item) => item.price * cart.length, 0)
  );
  console.log(cart);
  return (
    <div className="view-cart-container">
      <div className="cart-details">
        <h2>My cart</h2>
        <hr />
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.img} alt={item.name} className="cart-item-image" />
            <div className="cart-item-info">
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>Size: {item.size}</p>
              <div className="quantity-controls">
                <button>-</button>
                <span>{item.quantity}</span>
                <button>+</button>
              </div>
            </div>
            <p>${item.price * item.quantity}</p>
          </div>
        ))}
        <hr />
        <div className="cart-actions">
          <p className="promo-code">Enter a promo code</p>
          <p className="add-note">Add a note</p>
        </div>
      </div>

      <div className="order-summary">
        <h2>Order summary</h2>
        <hr />
        <div className="summary-details">
          <p>
            Subtotal <span>${subtotal}</span>
          </p>
          <p>
            Delivery <span>FREE</span>
          </p>
          <p className="delivery-location">California, United States</p>
        </div>
        <hr />
        <div className="summary-total">
          <p>
            Total <span>${subtotal}</span>
          </p>
        </div>
        <button className="checkout-button">Checkout</button>
        <p className="secure-checkout">🔒 Secure Checkout</p>
      </div>
    </div>
  );
};

export default ViewCart;

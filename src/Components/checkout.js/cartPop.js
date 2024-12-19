import React from "react";
import "./cartPopStyles.css";
import { Link } from "react-router-dom";
import { useCart } from "../../State/storeState";

const CartPopup = ({ isOpen, onClose, cartItems, subtotal }) => {
  if (!isOpen) return null;

  const { removeItem } = useCart();

  return (
    <div className="cart-popup-overlay">
      <div className="cart-popup">
        <button className="close-button" onClick={onClose}>
          ✕
        </button>
        <h2>
          Cart ({cartItems.length} {cartItems.length === 1 ? "item" : "items"})
        </h2>
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>Size: {item.size}</p>
                {/* <div className="quantity-controls">
                  <button>-</button>
                  <span>{item.quantity}</span>
                  <button>+</button>
                </div> */}
              </div>
              <button
                className="delete-button"
                onClick={() => removeItem(item.id)}
              >
                🗑
              </button>
            </div>
          ))}
        </div>
        <div className="cart-footer">
          <p>
            Subtotal <span>${subtotal}</span>
          </p>
          <button className="checkout-button">Checkout</button>
          <Link to="cart">
            <button className="view-cart-button">View Cart</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;

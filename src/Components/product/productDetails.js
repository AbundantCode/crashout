import React from "react";

const ProductDetails = ({
  productName,
  sku,
  price,
  size,
  setSize,
  quantity,
  setQuantity,
  onAddToCart,
  onBuyNow,
}) => {
  return (
    <div className="product-details">
      <h1>{productName}</h1>
      <p className="sku">SKU: {sku}</p>
      <p className="price">${price}</p>

      <label>Size</label>
      <select value={size} onChange={(e) => setSize(e.target.value)}>
        <option value="">Select</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
      </select>

      <label>Quantity</label>
      <input
        type="number"
        value={quantity}
        min="1"
        onChange={(e) => setQuantity(parseInt(e.target.value))}
      />

      <div className="buttons">
        <button onClick={onAddToCart} className="add-to-cart">
          Add to Cart
        </button>
        <button onClick={onBuyNow} className="buy-now">
          Buy Now
        </button>
      </div>

      <div className="policies">
        <h3>Return and Refund Policy</h3>
        <p>No refunds or returns</p>
      </div>

      <div className="shipping-info">
        <h3>Shipping Info</h3>
        <ul>
          <li>Orders are processed within 1-2 business days.</li>
          <li>Shipping fees vary based on checkout method.</li>
          <li>Shipping only within the United States.</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;

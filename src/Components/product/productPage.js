import React, { useState } from "react";
import ProductDetails from "./productDetails";
import "./product.css";

const ProductPage = () => {
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    alert(`Added ${quantity} x White Tee (Size: ${size}) to cart!`);
  };

  const handleBuyNow = () => {
    alert("Proceeding to checkout...");
  };

  return (
    <div className="product-page">
      <div className="product-image">
        <img src="/white-t.png" alt="White Tee" />
        <h3>Authentic 100% cotton tee.</h3>
      </div>
      <ProductDetails
        productName="White Tee"
        sku="0025"
        price={40.0}
        size={size}
        setSize={setSize}
        quantity={quantity}
        setQuantity={setQuantity}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
      />
    </div>
  );
};

export default ProductPage;

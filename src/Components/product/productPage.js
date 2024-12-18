import React, { useState } from "react";
import ProductDetails from "./productDetails";
import "./product.css";
import { itemData } from "../data";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const item = itemData[id];
  console.log(item.img);
  const handleAddToCart = () => {
    alert(`Added ${quantity} x White Tee (Size: ${size}) to cart!`);
  };

  const handleBuyNow = () => {
    alert("Proceeding to checkout...");
  };

  return (
    <div className="product-page">
      <div className="product-image">
        {item && item.img ? (
          <img src={item.img} alt={item.name || "Product"} />
        ) : (
          <p>Loading image...</p>
        )}
        <h3>Authentic 100% cotton tee.</h3>
      </div>
      <ProductDetails
        productName={item.name}
        sku="0025"
        price={item.price}
        size={size}
        setSize={setSize}
        quantity={quantity}
        setQuantity={setQuantity}
        onAddToCart={item}
        onBuyNow={handleBuyNow}
      />
    </div>
  );
};

export default ProductPage;

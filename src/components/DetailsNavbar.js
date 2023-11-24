import React, { useState } from "react";

const DetailsNavbar = ({ shrprice }) => {
  const [quantity, setQuantity] = useState(1);
  const calculateTotalPrice = () => {
    return quantity * shrprice;
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= 1000) {
      setQuantity(newQuantity);
    }
  };

  const handleInvestButtonClick = () => {
    console.log(`Investing ${quantity} shares at ${shrprice} each.`);
  };

  return (
    <div className="details-navbar">
      <div>Current Market Cap: {shrprice} INR</div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{}}>
          Quantity:
          <input
            type="number"
            value={quantity}
            onChange={(e) => handleQuantityChange(Number(e.target.value))}
            min="1"
            max="1000"
          />
        </div>
        <div style={{ margin: 20 }}>
          Total Price: {calculateTotalPrice()} INR
        </div>
      </div>
      <div>
        <button className="btn-detailsnavbar" onClick={handleInvestButtonClick}>
          INVEST
        </button>
      </div>
    </div>
  );
};

export default DetailsNavbar;

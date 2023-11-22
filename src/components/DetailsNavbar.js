import React, { useState } from "react";

const DetailsNavbar = ({ currentSharePrice }) => {
  const [quantity, setQuantity] = useState(1);

  const calculateTotalPrice = () => {
    return quantity * currentSharePrice;
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= 1000) {
      setQuantity(newQuantity);
    }
  };

  const handleInvestButtonClick = () => {
    console.log(`Investing ${quantity} shares at ${currentSharePrice} each.`);
  };

  return (
    <div className="details-navbar">
      <div>Current Share Price: {currentSharePrice} INR</div>
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
        <div style={{ margin: 20 }}>Total Price: ${calculateTotalPrice()}</div>
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

import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Spinners from "./Spinner";
const DetailsNavbar = ({ shrdetails }) => {
  const shrprice=shrdetails[0]
  const shrid=shrdetails[1]
  // console.log(shrid)
  const nav= useNavigate()
  const [quantity, setQuantity] = useState(1);
  const calculateTotalPrice = () => {
    return quantity * shrprice;
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= 1000) {
      setQuantity(newQuantity);
    }
  };
  const handleInvestButtonClick = async () => {
    if (!localStorage.getItem("token")) {
      nav("/login");
    } else {
      window.alert("Purchased");
      try {
        const res = await axios.post(
          "http://localhost:5000/api/authorization/addpurchase",
          {
            venture_id: shrid,
            price: shrprice,
            quantity: quantity
          },
          {
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem("token")
            }
          }
        );
        const responseData = res.data;
        console.log(responseData);
        nav("/dashboard");
      } catch (error) {
        console.log(error);
      }
    }
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

import React from "react";
import { iconsImgs } from "../utils/images";
import { Doughnut, Pie } from "react-chartjs-2";

const Reports = () => {
  return (
    <div className="grid-c-title">
      <img src={iconsImgs.wealth} alt="img" />
      <h3 className="grid-c-title-text">Statistics</h3>
    </div>
  );
};

export default Reports;

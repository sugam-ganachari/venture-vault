import React from "react";
import { iconsImgs } from "../utils/images";
import { Doughnut } from "react-chartjs-2";

const Reports = ({ data }) => {
  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        data: Object.values(data),
        backgroundColor: [
          "#b91c1c",
          "#a855f7",
          "#3b82f6",
          "#14b8a6",
          "#ef4444",
          "#f97316",
          "#eab308",
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
        ],
        hoverBackgroundColor: [
          "#b91c1c",
          "#a855f7",
          "#3b82f6",
          "#14b8a6",
          "#ef4444",
          "#f97316",
          "#eab308",
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
        ],
      },
    ],
  };

  return (
    <div className="grid-c-title">
      <img src={iconsImgs.wealth} alt="img" />
      <h3 className="grid-c-title-text">Statistics</h3>
      <Doughnut data={chartData} />
    </div>
  );
};

export default Reports;

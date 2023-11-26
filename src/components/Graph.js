import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function Graph({ per }) {
  per = Number(per.replace("%", ""));

  const generateRandomIncrements = (total, count) => {
    const increments = Array.from({ length: count }, () => Math.random());
    const totalIncrement = increments.reduce((acc, curr) => acc + curr, 0);
    return increments.map((increment) => (increment / totalIncrement) * total);
  };
  const numDataPoints = 12;

  const randomIncrements = generateRandomIncrements(per, numDataPoints);

  const cumulativeValues = randomIncrements.reduce(
    (acc, increment) => {
      acc.push(acc[acc.length - 1] + increment);
      return acc;
    },
    [0]
  );

  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light1",
    title: {
      text: "Venture Revenue Growth FY22",
    },
    axisY: {
      title: "Revenue Growth Rate",
      suffix: "%",
    },
    axisX: {
      title: "Months",
      prefix: "M",
      interval: 1,
    },
    data: [
      {
        type: "line",
        toolTipContent: "Month {x}: {y}%",
        dataPoints: cumulativeValues.map((value, index) => ({
          x: index + 1,
          y: value,
        })),
      },
    ],
  };

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
}

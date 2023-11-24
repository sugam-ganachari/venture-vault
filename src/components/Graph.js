import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";
//var CanvasJSReact = require('@canvasjs/react-charts');
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function Graph({per}) {
  per = Number(per.replace("%",""))
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
        dataPoints: [
          { x: 1, y: per/12 },
          { x: 2, y: per/11 },
          { x: 3, y: per/10 },
          { x: 4, y: per/9 },
          { x: 5, y: per/8 },
          { x: 6, y: per/7 },
          { x: 7, y: per/6 },
          { x: 8, y: per/5 },
          { x: 9, y: per/4 },
          { x: 10, y: per/3 },
          { x: 11, y: per/2 },
          { x: 12, y: per },
        ],
      },
    ],
  };
  return (
    <div>
      <CanvasJSChart
        options={options}
        /* onRef={ref => this.chart = ref} */
      />
    </div>
  );
}

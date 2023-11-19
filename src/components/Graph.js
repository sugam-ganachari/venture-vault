import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
 
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
export default function Graph(){
    const options = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", // "light1", "dark1", "dark2"
        title:{
            text: "Revenue Growth FY22"
        },
        axisY: {
            title: "Revenue Growth Rate",
            suffix: "%"
        },
        axisX: {
            title: "Months",
            prefix: "M",
            interval: 12
        },
        data: [{
            type: "line",
            toolTipContent: "Week {x}: {y}%",
            dataPoints: [
                { x: 1, y: 0 },
                { x: 2, y: 24 },
                { x: 3, y: 48 },
                { x: 4, y: 60 },
                { x: 5, y: 90 },
                { x: 6, y: 120 },
                { x: 7, y: 140 },
                { x: 8, y: 180 },
                { x: 9, y: 200 },
                { x: 10, y:210 },
                { x: 11, y: 220 },
                { x: 12, y: 223 }
            ]
        }]
    }
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
        }
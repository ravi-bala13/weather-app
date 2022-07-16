import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["", "Sales"],
  ["", 1000],
  ["", 1170],
  ["", 660],
  ["", 1030],
];

export const options = {
  title: "Company Performance",
  curveType: "function",
  legend: { position: "bottom" },
};

function LineChart() {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}

export default LineChart;

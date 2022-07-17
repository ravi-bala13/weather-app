import React from "react";
import { Chart } from "react-google-charts";

export let data = [];

export const options = {
  title: "",
  curveType: "function",
  legend: { position: "bottom" },
};

function LineChart({ hourlyData }) {
  data = [];
  data.push(["Celcius", "Hours"]);
  for (let i = 0; i < hourlyData.length; i++) {
    const element = hourlyData[i];
    let arr = [];
    arr[0] = hourlyData[i].title.split(":")[0];
    arr[1] = hourlyData[i].temp;
    data.push(arr);
  }

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

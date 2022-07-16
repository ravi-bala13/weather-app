import React from "react";
import { iconUrlFromCode } from "../services/weatherService";
import LineChart from "./LineChart";

function GraphBox({ weatherData: { icon, temp } }) {
  return (
    <div className="w-full md:mx-auto md:w-1/2">
      <div className="shadow-xl mx-4">
        <div className="flex flex-row items-center">
          <h1 className="text-4xl font-medium md:ml-4">{temp.toFixed()}°C</h1>
          <img className="h-20" src={iconUrlFromCode(icon)} alt="" />
        </div>

        <div>
          <LineChart />
        </div>
      </div>
    </div>
  );
}

export default GraphBox;

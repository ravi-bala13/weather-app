import React from "react";
import { iconUrlFromCode } from "../services/weatherService";
import LineChart from "./LineChart";

function GraphBox({ weatherData: { icon }, dailyDetails }) {
  return (
    <div className="w-full md:mx-auto md:w-1/2">
      <div id="graphbox" className="rounded-lg p-2 shadow-xl mx-4">
        <div className="flex flex-row items-center">
          <h1 className="text-4xl font-medium ml-2 mt-2 md:ml-2">
            {dailyDetails.temp.toFixed()}°C
          </h1>
          <img
            className="h-20 mt-2"
            src={iconUrlFromCode(dailyDetails.icon)}
            alt=""
          />
        </div>

        <div>
          <LineChart />
        </div>
      </div>
    </div>
  );
}

export default GraphBox;

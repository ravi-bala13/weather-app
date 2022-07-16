import React from "react";
import LineChart from "./LineChart";

function GraphBox() {
  return (
    <div className="w-full md:mx-auto md:w-1/2">
      <div className="shadow-xl border mx-4">
        <div className="flex flex-row items-center">
          <h1 className="text-4xl font-medium">30°C</h1>
          <img
            className="h-20"
            src="https://weatherapp-swanand.netlify.app/img/cloudy.ac49ed24.svg"
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

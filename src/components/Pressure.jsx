import React from "react";

function Pressure({ dailyDetails }) {
  return (
    <div className="flex flex-row w-full my-6 md:mx-auto">
      <div className="bg-bals-blue w-1/2 h-16 ml-2 mr-3 p-2">
        <p>Pressure</p>
        <p>{dailyDetails.pressure} hpa</p>
      </div>
      <div className="bg-bals-blue w-1/2 mr-2 h-16 p-2">
        <p>Humidity</p>
        <p>{dailyDetails.humidity} %</p>
      </div>
    </div>
  );
}

export default Pressure;

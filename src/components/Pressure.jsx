import React from "react";

function Pressure({ weatherData: { humidity, pressure } }) {
  return (
    <div className="flex flex-row w-full my-6 md:mx-auto md:w-1/2">
      <div className="bg-bals-blue w-1/2 h-18 ml-4 mr-3 p-4">
        <p>Pressure</p>
        <p>{pressure} hpa</p>
      </div>
      <div className="bg-bals-blue w-1/2 mr-4 h-18 p-4">
        <p>Humidity</p>
        <p>{humidity} %</p>
      </div>
    </div>
  );
}

export default Pressure;

import React from "react";
import { formatToLocalTime } from "../services/weatherService";

function SunTime({ weatherData: { sunrise, sunset, timezone } }) {
  return (
    <div className="flex flex-row w-full my-4 md:mx-auto md:w-1/2">
      <div className="w-1/2 h-18 ml-4 mr-3">
        <p>Sunrice</p>
        <p>{formatToLocalTime(sunrise, timezone, "hh:mm a")}</p>
      </div>
      <div className="w-1/2 mr-4 h-18 text-right">
        <p>Sunset</p>
        <p>{formatToLocalTime(sunset, timezone, "hh:mm a")}</p>
      </div>
    </div>
  );
}

export default SunTime;

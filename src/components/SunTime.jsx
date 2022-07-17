import React from "react";
import { formatToLocalTime } from "../services/weatherService";

function SunTime({ weatherData: { timezone }, dailyDetails }) {
  return (
    <div className="flex flex-row w-full my-4 md:mx-auto">
      <div className="w-1/2 h-18 ml-2 mr-3">
        <p>Sunrice</p>
        <p>{formatToLocalTime(dailyDetails.sunrise, timezone, "hh:mm a")}</p>
      </div>
      <div className="w-1/2 mr-2 h-18 text-right">
        <p>Sunset</p>
        <p>{formatToLocalTime(dailyDetails.sunset, timezone, "hh:mm a")}</p>
      </div>
    </div>
  );
}

export default SunTime;

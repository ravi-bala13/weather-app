import React from "react";
import { iconUrlFromCode } from "../services/weatherService";

function ForeCastBox({ weatherData: { daily } }) {
  console.log("daily:", daily);
  return (
    <div className=" w-full mb-5 md:mx-auto md:w-1/2">
      <div className="text-center space-x-2 mx-4 flex flex-row justify-between items-center overflow-x-scroll">
        {daily &&
          daily.map((item, i) => {
            // if (i >= 3) return;
            return (
              <div
                key={i}
                className="py-2 h-32 my-2 flex flex-col items-center text-sm w-[84px] hover:border sm:w-[84px]"
              >
                <div className="w-18">
                  <p>{item.title}</p>
                  <p>{item.temp.toFixed()} °27°</p>
                </div>

                <img className="h-10" src={iconUrlFromCode(item.icon)} alt="" />
                <p className="w-20">{item.mode}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ForeCastBox;

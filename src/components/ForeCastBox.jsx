import React, { useState } from "react";
import { iconUrlFromCode } from "../services/weatherService";

function ForeCastBox({
  weatherData: { daily },
  setDailyDetails,
  dailyDetails,
}) {
  console.log("daily:", daily);

  const [activeBox, setActiveBox] = useState({
    activeObject: null,
    objects: [
      { id: 0 },
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
    ],
  });

  const toggleActiveBox = (index) => {
    console.log("index:", index);
    setActiveBox({ ...activeBox, activeObject: activeBox.objects[index] });
    const { temp } = daily[index];
    setDailyDetails({ ...dailyDetails, ...daily[index] });
  };

  const toggleActiveBoxIdName = (index) => {
    if (activeBox.activeObject === activeBox.objects[index]) {
      return "box-active";
    } else {
      return "box-inactive";
    }
  };

  return (
    <div className=" w-full mb-5 md:mx-auto md:w-1/2">
      <div className="text-center space-x-2 mx-4 flex flex-row justify-between items-center overflow-x-scroll">
        {daily &&
          daily.map((item, i) => {
            return (
              <div
                onClick={() => toggleActiveBox(i)}
                id={toggleActiveBoxIdName(i)}
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

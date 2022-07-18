import React, { useState } from "react";

function CitiesList({ input, setInput, setDivToggle }) {
  const [cities, setCities] = useState([
    "Madurai",
    "Chennai",
    "Trichy",
    "Bengaluru",
    "Coimbatore",
    "Tiruchirapalli",
    "Tiruppur",
    "Salem",
    "Erode",
    "Tirunelveli",
  ]);
  return (
    <div className="absolute z-10 bg-white mt-4 flex px-4 flex-col items-center my-2 w-full text-black">
      <div id="debounce" className="rounded-lg flex flex-col w-full">
        {cities
          .filter((val) => {
            if (input == "") {
              return val;
            } else if (val.toLowerCase().includes(input.toLowerCase())) {
              return val;
            }
          })
          .map((item, i) => (
            <div
              onClick={() => {
                setDivToggle(false);
                setInput(item);
              }}
              key={i}
              className="h-12 flex items-center pl-2 bg-bg-div border-b border-b-color"
            >
              {item}
            </div>
          ))}
      </div>
    </div>
  );
}

export default CitiesList;

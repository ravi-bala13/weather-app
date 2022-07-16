import React from "react";

function SunTime() {
  return (
    <div className="flex flex-row w-full my-4 md:mx-auto md:w-1/2">
      <div className="w-1/2 h-18 ml-4 mr-3">
        <p>Sunrice</p>
        <p>5pm</p>
      </div>
      <div className="w-1/2 mr-4 h-18 text-right">
        <p>Sunset</p>
        <p>6pm</p>
      </div>
    </div>
  );
}

export default SunTime;

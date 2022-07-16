import React from "react";

function ForeCastBox() {
  return (
    <div className=" w-full mb-5 md:mx-auto md:w-1/2">
      <div className="border mx-4 flex items-center justify-center overflow-x-scroll">
        <div className="border w-40 h-32 flex flex-col items-center">
          <p>Sat</p>
          <p>37 °27°</p>
          <img
            className="h-10"
            src="https://weatherapp-swanand.netlify.app/img/sunny.ef428e2d.svg"
            alt=""
          />
          <p>clear</p>
        </div>
        <div className="border w-40 h-32 flex flex-col items-center">
          <p>Sat</p>
          <p>37 °27°</p>
          <img
            className="h-10"
            src="https://weatherapp-swanand.netlify.app/img/cloudy.ac49ed24.svg"
            alt=""
          />
          <p>clear</p>
        </div>
        <div className="border w-40 h-32 flex flex-col items-center">
          <p>Sat</p>
          <p>37 °27°</p>
          <img
            className="h-10"
            src="https://weatherapp-swanand.netlify.app/img/cloudy.ac49ed24.svg"
            alt=""
          />
          <p>clear</p>
        </div>
        <div className="border w-40 h-32 flex flex-col items-center">
          <p>Sat</p>
          <p>37 °27°</p>
          <img
            className="h-10"
            src="https://weatherapp-swanand.netlify.app/img/cloudy.ac49ed24.svg"
            alt=""
          />
          <p>clear</p>
        </div>
      </div>
    </div>
  );
}

export default ForeCastBox;

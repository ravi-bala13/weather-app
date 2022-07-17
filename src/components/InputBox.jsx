import React, { useState } from "react";
import {
  // UilAirplay,
  UilSearch,
  UilLocationPoint,
} from "@iconscout/react-unicons";

function InputBox({ setQuery }) {
  const [input, setInput] = useState("");
  const onSubmit = () => {
    setQuery({ q: input });
  };

  return (
    <div className="relative flex flex-row items-center my-5 w-full text-black md:mx-auto md:w-1/2">
      <UilLocationPoint
        size={22}
        className="absolute ml-5 text-blue cursor-pointer transition ease-out hover:scale-125"
      />

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for city...."
        id="input"
        className="rounded-lg pl-10 text-xl font-light p-2 w-full shadow-xl capitalize placeholder:lowercase mx-4"
      />

      <UilSearch
        onClick={onSubmit}
        size={22}
        className="absolute right-10 text-blue cursor-pointer transition ease-out hover:scale-125"
      />
    </div>
  );
}

export default InputBox;

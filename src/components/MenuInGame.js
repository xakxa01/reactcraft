import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function MenuInGame() {
  const [show, setshow] = useState(false);

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Escape") setshow(!show);
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [show]);

  if (show)
    return (
      <div
        onClick={() => setshow(!show)}
        className="absolute top-0 left-0 bg-gray-800 bg-opacity-75 w-screen h-screen flex flex-col justify-center items-center"
      >
        <button className="text-center uppercase py-5 px-10 w-80 bg-gray-400 text-4xl my-1 hover:bg-green-600 font-semibold text-gray-800 border-4 border-gray-500 hover:text-white">
          guardar
        </button>

        <button className="text-center uppercase py-5 px-10 w-80 bg-gray-400 text-4xl my-1 hover:bg-green-600 font-semibold text-gray-800 border-4 border-gray-500 hover:text-white">
          resetear
        </button>

        <button className="text-center uppercase py-5 px-10 w-80 bg-gray-400 text-4xl my-1 hover:bg-green-600 font-semibold text-gray-800 border-4 border-gray-500 hover:text-white">
          controles
        </button>

        <NavLink
          to="/"
          className="text-center uppercase py-5 px-10 w-80 bg-gray-400 text-4xl my-1 hover:bg-green-600 font-semibold text-gray-800 border-4 border-gray-500 hover:text-white"
        >
          volver
        </NavLink>
      </div>
    );
}

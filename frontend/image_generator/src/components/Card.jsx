import React from "react";
import { download } from "../assets";
import { downloadImage } from "../utils";

const Card = ({ _id, name, prompt, photo }) => {
  return (
    <div className="relative group">
      <div className="rounded-xl overflow-hidden shadow-card hover:shadow-cardhover bg-slate-500 transition-all duration-300">
        <img
          className="w-full h-auto object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-300"
          src={photo}
          alt={prompt}
        />
        <div className="group-hover:flex flex-col items-center justify-center absolute inset-0 bg-black bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <h3 className="w-7 h-7 rounded-full object-cover bg-amber-500 flex justify-center items-center text-white text-xs font-bold">
            {name[0]}
          </h3>
          <h3 className="text-white text-center">{name}</h3>
          <p className="text-gray-300 text-center">{prompt}</p>
          <button
            type="button"
            onClick={() => downloadImage(_id, photo)}
            className="mt-2 px-4 py-2 text-white rounded-md transition-all duration-300"
          >
            <img
              className="w-10 h-10 object-contain invert"
              src="https://static.vecteezy.com/system/resources/previews/019/879/209/non_2x/download-button-on-transparent-background-free-png.png"
              alt="download"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

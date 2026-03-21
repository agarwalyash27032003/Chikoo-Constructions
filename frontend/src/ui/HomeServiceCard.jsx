import React, { useState } from "react";

const HomeServiceCard = ({ title, description, image }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="relative group aspect-[16/9] overflow-hidden cursor-pointer"
    >
      {/* Background */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/90"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">

        {/* Title */}
        <h2
          className={`text-xl font-semibold transition-all duration-500 ${
            open ? "-translate-y-6" : "group-hover:-translate-y-6"
          }`}
        >
          {title}
        </h2>

        {/* Description */}
        <p
          className={`mt-3 text-md max-w-md transition-all duration-500 jakarta-sans ${
            open
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0"
          }`}
        >
          {description}
        </p>

      </div>
    </div>
  );
};

export default HomeServiceCard;
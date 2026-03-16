import React from "react";

const HomeServiceCard = ({ title, description, image }) => {
  return (
    <div
      className="relative group h-64 bg-cover bg-center overflow-hidden flex items-center justify-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90"></div>

      {/* Content */}
      <div className="relative z-10 text-white text-center px-6 transition-all duration-500">

        {/* Title */}
        <h1 className="text-xl font-semibold transition-all duration-500 group-hover:-translate-y-4">
          {title}
        </h1>

        {/* Description */}
        <p className="mt-3 text-gray-200 text-justify opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          {description}
        </p>

      </div>
    </div>
  );
};

export default HomeServiceCard;
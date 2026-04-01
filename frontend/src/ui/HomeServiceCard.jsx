import React, { useState } from "react";

const HomeServiceCard = ({ title, description, image }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="relative group aspect-[16/9] overflow-hidden cursor-pointer bg-neutral-900 shadow-lg"
    >
      {/* Background Image: We use contrast and blur instead of pure darkness */}
      <img
        src={image}
        alt={title}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
          open 
            ? "scale-105 blur-[3px] brightness-[0.5] saturate-[0.8]" 
            : "group-hover:scale-105 brightness-[0.8]"
        }`}
      />

      {/* Modern Gradient Overlay: 
          When closed: bottom-heavy gradient to show title.
          When open: subtle uniform tint. 
      */}
      <div className={`absolute inset-0 transition-all duration-500 ${
        open 
          ? "bg-black/30" // 👈 Lowered from 60% to 30% so you can see the image
          : "bg-gradient-to-t from-black/80 via-transparent to-transparent"
      }`}></div>

      {/* Content Wrapper */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        
        {/* Title: Uses a text-shadow to stay readable even on lighter backgrounds */}
        <h2 className={`text-xl font-bold text-center drop-shadow-md transition-transform duration-500 ${
          open ? "-translate-y-1" : "translate-y-0"
        }`}>
          {title}
        </h2>

        {/* Scrollable Description Area */}
        <div 
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            open ? "max-h-[65%] opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="jakarta-sans text-sm leading-relaxed overflow-y-auto pr-2 max-h-[110px] custom-card-scroll overscroll-contain text-gray-100 font-medium"
            style={{ textShadow: "0px 1px 4px rgba(0,0,0,0.8)" }}
          >
            {description}
          </div>
        </div>

        {/* Subtle Button Hint */}
        <div className={`mt-3 text-center transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}>
           <span className="text-[10px] py-1 px-3 border border-white/30 rounded-full uppercase tracking-tighter bg-white/10 backdrop-blur-md">
              Close
           </span>
        </div>
      </div>
    </div>
  );
};

export default HomeServiceCard;
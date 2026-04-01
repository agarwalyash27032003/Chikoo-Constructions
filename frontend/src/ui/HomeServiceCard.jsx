import React, { useState } from "react";

const HomeServiceCard = ({ title, description, image }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="relative group aspect-[16/9] overflow-hidden cursor-pointer bg-neutral-900 shadow-lg touch-pan-y"
    >
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
          open 
            ? "scale-105 blur-[3px] brightness-[0.5] saturate-[0.8]" 
            : "group-hover:scale-105 brightness-[0.8]"
        }`}
      />

      {/* Gradient Overlay */}
      <div className={`absolute inset-0 transition-all duration-500 ${
        open 
          ? "bg-black/30" 
          : "bg-gradient-to-t from-black/90 via-black/20 to-transparent"
      }`}></div>

      {/* Content Wrapper */}
      <div className="absolute inset-0 flex flex-col justify-end p-5 text-white pointer-events-none">
        
        {/* Title */}
        <h2 className={`text-lg md:text-xl font-bold text-center transition-transform duration-500 pointer-events-auto ${
          open ? "-translate-y-1" : "translate-y-0"
        }`}>
          {title}
        </h2>

        {/* Scrollable Description Area */}
        <div 
          className={`transition-all duration-500 ease-in-out overflow-hidden pointer-events-auto ${
            open ? "max-h-[60%] opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <div 
            // 🛑 CRITICAL: stopPropagation prevents closing the card while scrolling
            onClick={(e) => e.stopPropagation()} 
            className="jakarta-sans text-sm leading-relaxed overflow-y-auto pr-2 max-h-[100px] custom-card-scroll overscroll-contain text-gray-100 font-medium"
            style={{ 
              textShadow: "0px 1px 4px rgba(0,0,0,0.8)",
              WebkitOverflowScrolling: "touch", // ✅ Enable momentum scrolling for iOS
              touchAction: "pan-y" // ✅ Explicitly allow vertical touch
            }}
          >
            {description}
          </div>
        </div>

        {/* Close Button Hint */}
        <div className={`mt-3 text-center transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}>
           <span className="text-[10px] py-1 px-3 border border-white/30 rounded-full uppercase bg-white/10 backdrop-blur-md pointer-events-auto">
              Close
           </span>
        </div>
      </div>
    </div>
  );
};

export default HomeServiceCard;
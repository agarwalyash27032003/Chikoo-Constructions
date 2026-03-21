import React from "react";

const TopStrip = () => {
  const text = "🌟 Emergency Repair and Maintenance Services 🌟";

  return (
    <div className="fixed top-0 w-full z-30 bg-[#8f2269] text-white overflow-hidden py-2">
      
      <div className="flex w-max animate-scroll gap-10 font-medium">
        
        {/* First set */}
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>

        {/* Duplicate set (IMPORTANT) */}
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>

      </div>

    </div>
  );
};

export default TopStrip;
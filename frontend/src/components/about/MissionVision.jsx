import React from "react";

const MissionVision = () => {
  return (
    <div className="bg-[#e87829] text-white mt-20 mb-16 mx-[5rem] rounded-lg p-6 md:p-10">

      <div className="flex flex-col md:flex-row gap-8">

        {/* Mission */}
        <div className="md:w-1/2 md:pr-8 border-b md:border-b-0 md:border-r border-white pb-6 md:pb-0">

          <h1 className="red-hat-display-hfont text-2xl md:text-3xl mb-4 md:mb-6">
            Mission
          </h1>

          <p className="text-sm md:text-base leading-relaxed jakarta-sans">
            To provide comprehensive design-and-build solutions that merge
            aesthetics with durability — while maintaining honesty, clear
            communication, and professionalism at every step.
          </p>

        </div>

        {/* Vision */}
        <div className="md:w-1/2 md:pl-8">

          <h1 className="red-hat-display-hfont text-2xl md:text-3xl mb-4 md:mb-6">
            Vision
          </h1>

          <p className="text-sm md:text-base leading-relaxed jakarta-sans">
            To redefine residential construction in London by offering
            client-first service, architectural finesse, and dependable
            workmanship under one roof.
          </p>

        </div>

      </div>

    </div>
  );
};

export default MissionVision;
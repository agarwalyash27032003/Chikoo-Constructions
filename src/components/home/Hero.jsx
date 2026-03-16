import React from "react";
import Navbar from "../../ui/Navbar";
import Button from "../../ui/Button";

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="https://ik.imagekit.io/bluepeakstudio/Chikoo%20Constructions/HeroVid.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-white">
        <Navbar />

        <div className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-28 md:pt-32 max-w-3xl gap-6">

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Building Dreams, One Project at a Time
          </h1>

          <h3 className="text-base md:text-lg text-gray-200">
            Chikoo Constructions LTD is a London-based construction company
            specializing in providing high-quality residential building services.
          </h3>

          <div className="pt-2">
            <Button title={"Get Quote!"} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
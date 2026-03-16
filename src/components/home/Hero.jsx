import React from "react";
import Navbar from "../../ui/Navbar";
import Button from "../../ui/Button";

const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden">

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

        <div className="h-screen flex flex-col justify-center px-4 pt-24 pl-16 w-[50%] gap-8">
          <h1 className="text-5xl font-bold">
            Building Dreams, One Project at a Time
          </h1>

          <h3 className="mt-4 text-lg">
            Chikoo Constructions LTD is a London-based construction company specializing in providing highquality residential building services.
          </h3>

          <Button title={"Get Quote!"} />
        </div>
      </div>

    </div>
  );
};

export default Hero;
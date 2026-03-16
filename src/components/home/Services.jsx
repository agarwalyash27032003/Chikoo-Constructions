import React from "react";
import HomeServiceCard from "../../ui/HomeServiceCard";
import Button from "../../ui/Button";

const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-gray-300">

      {/* LEFT CONTENT */}
      <div className="p-8 border-b md:border-b-0 md:border-r border-gray-300 flex flex-col justify-center gap-4">

        <h1 className="text-sm tracking-widest text-gray-500 font-semibold text-[#e87829]">
          Our Services
        </h1>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug text-gray-800 red-hat-display-hfont">
          Innovative Construction Services You Can Trust.
        </h2>

        <div className="pt-2">
          <Button title={"Explore More"} />
        </div>

      </div>

      {/* COLUMN 1 */}
      <div className="flex flex-col divide-y border-b md:border-b-0 md:border-r border-gray-300">

        <HomeServiceCard
          title="Loft Conversions"
          description="Unlock the hidden potential of your attic with bespoke loft conversions that add space, light, and value to your home."
          image="https://ik.imagekit.io/bluepeakstudio/Chikoo%20Constructions/Loft%20conversions.jpg"
        />

        <HomeServiceCard
          title="Rear Extensions"
          description="Expand your living space with stylish rear extensions tailored to your needs."
          image="https://ik.imagekit.io/bluepeakstudio/Chikoo%20Constructions/Rear%20Extension.jpg"
        />

      </div>

      {/* COLUMN 2 */}
      <div className="flex flex-col divide-y">

        <HomeServiceCard
          title="Garden Fencing"
          description="Secure and define your outdoor space with high-quality, durable fencing solutions."
          image="https://ik.imagekit.io/bluepeakstudio/Chikoo%20Constructions/Garden%20fencing.jpg"
        />

        <HomeServiceCard
          title="Renovations & Refurbishments"
          description="From single-room makeovers to full property refurbishments, we deliver smart upgrades."
          image="https://ik.imagekit.io/bluepeakstudio/Chikoo%20Constructions/Renovations%20&%20Refurbishments.jpg"
        />

      </div>

    </div>
  );
};

export default Services;
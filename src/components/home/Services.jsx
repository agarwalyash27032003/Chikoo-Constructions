import React from "react";
import HomeServiceCard from "../../ui/HomeServiceCard";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-gray-300">

      {/* HEADING */}
      <div className="p-8 border-b md:border-b md:col-span-2 lg:col-span-1 lg:row-span-2 lg:border-r border-gray-300 flex flex-col justify-center gap-4">

        <h1 className="text-sm tracking-widest text-[#e87829]">
          Our Services
        </h1>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug text-gray-800">
          Innovative Construction Services You Can Trust.
        </h2>

        <Link to="/services">
          <Button title={"Explore More"} />
        </Link>

      </div>


      {/* CARDS */}

      <HomeServiceCard
        title="Loft Conversions"
        description="Unlock the hidden potential of your attic with bespoke loft conversions that add space, light, and value to your home."
        image="https://ik.imagekit.io/bluepeakstudio/Chikoo%20Constructions/Loft%20conversions.jpg"
      />

      <HomeServiceCard
        title="Rear Extensions"
        description="Expand your living space with stylish rear extensions tailored to your needs — perfect for open-plan kitchens and dining areas."
        image="https://ik.imagekit.io/bluepeakstudio/Chikoo%20Constructions/Rear%20Extension.jpg"
      />

      <HomeServiceCard
        title="Garden Fencing"
        description="Secure and define your outdoor space with high-quality, durable fencing solutions available in a variety of styles."
        image="https://ik.imagekit.io/bluepeakstudio/Chikoo%20Constructions/Garden%20fencing.jpg"
      />

      <HomeServiceCard
        title="Renovations & Refurbishments"
        description="From single-room upgrades to full property refurbishments, we deliver smart, stylish transformations."
        image="https://ik.imagekit.io/bluepeakstudio/Chikoo%20Constructions/Renovations%20&%20Refurbishments.jpg"
      />

    </div>
  );
};

export default Services;
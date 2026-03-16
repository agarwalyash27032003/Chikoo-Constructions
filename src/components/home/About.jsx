import React from "react";
import HomeAbout from "../../assets/HomeAbout.jpg";

const About = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] bg-gray-100 flex items-center">

      <div className="w-full mx-auto grid lg:grid-cols-2 w-full">

        {/* LEFT SIDE */}
        <div className="p-10 flex flex-col justify-center">

          {/* Text */}
          <div>
            <h3 className="text-sm tracking-widest text-gray-500 font-semibold">
              ABOUT OUR COMPANY
            </h3>

            <h1 className="text-3xl md:text-4xl font-semibold mt-4 leading-snug text-gray-800">
              Bringing Your Vision to Life — Brick by Brick
            </h1>

            <p className="mt-6 text-gray-600 leading-relaxed max-w-xl">
              Chikoo Constructions LTD was founded with one goal: to deliver high-quality, trustworthy construction services with a design-first mindset. Based in London, our team combines architectural expertise and hands-on building experience to offer services that are both creative and structurally sound.

              From loft conversions and rear extensions to full refurbishments and garden spaces — we take pride in turning houses into homes. Every project we take on is built with transparency, care, and craftsmanship.
            </p>

            <button className="mt-8 bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition">
              READ MORE →
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 mt-12 border-t border-gray-300">

            <div className="text-center py-8 border-r border-gray-300">
              <h1 className="text-4xl font-semibold text-gray-800">48</h1>
              <p className="text-gray-500 text-sm mt-2">In-Progress Sites</p>
            </div>

            <div className="text-center py-8 border-r border-gray-300">
              <h1 className="text-4xl font-semibold text-gray-800">282</h1>
              <p className="text-gray-500 text-sm mt-2">Projects Completed</p>
            </div>

            <div className="text-center py-8">
              <h1 className="text-4xl font-semibold text-gray-800">35</h1>
              <p className="text-gray-500 text-sm mt-2">Business Partners</p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="p-6 lg:p-10 flex items-center">
          <img
            src={HomeAbout}
            alt="Construction"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

      </div>

    </section>
  );
};

export default About;
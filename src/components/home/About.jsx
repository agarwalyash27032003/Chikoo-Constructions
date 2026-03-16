import React from "react";
import HomeAbout from "../../assets/HomeAbout.jpg";
import Button from "../../ui/Button";

const About = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] bg-gray-100 flex items-center">

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-10 px-6 md:px-10 my-16">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center">

          {/* Text */}
          <div>
            <h3 className="text-sm tracking-widest font-semibold text-[#e87829]">
              ABOUT OUR COMPANY
            </h3>

            <h1 className="text-2xl md:text-4xl font-semibold mt-4 leading-snug text-gray-800 red-hat-display-hfont">
              Bringing Your Vision to Life — Brick by Brick
            </h1>

            <p className="mt-6 text-gray-600 leading-relaxed max-w-xl mb-6">
              Chikoo Constructions LTD was founded with one goal: to deliver
              high-quality, trustworthy construction services with a design-first
              mindset. Based in London, our team combines architectural expertise
              and hands-on building experience to offer services that are both
              creative and structurally sound.

              From loft conversions and rear extensions to full refurbishments and
              garden spaces — we take pride in turning houses into homes. Every
              project we take on is built with transparency, care, and craftsmanship.
            </p>

            <Button title={"Read More"} />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 mt-10 border-t border-gray-300 text-center">

            <div className="py-6 border-r border-gray-300">
              <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">48</h1>
              <p className="text-gray-500 text-sm mt-2">In-Progress Sites</p>
            </div>

            <div className="py-6 border-r border-gray-300">
              <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">282</h1>
              <p className="text-gray-500 text-sm mt-2">Projects Completed</p>
            </div>

            <div className="py-6">
              <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">35</h1>
              <p className="text-gray-500 text-sm mt-2">Business Partners</p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex items-center">
          <img
            src={HomeAbout}
            alt="Construction"
            className="w-full h-[300px] md:h-[450px] object-cover rounded-lg shadow-lg"
          />
        </div>

      </div>

    </section>
  );
};

export default About;
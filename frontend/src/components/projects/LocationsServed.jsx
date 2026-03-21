import React from "react";

const LocationsServed = () => {
  const locations = [
    "Mitcham",
    "Croydon",
    "North Finchley",
    "Kingsbury",
    "Hackney",
    "Brixton",
    "Wimbledon",
    "Beckenham",
  ];

  return (
    <section className="w-[90%] mx-auto my-16">

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 text-[#e87829]">
        Areas We Serve
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-6 gap-x-10">

        {locations.map((loc, i) => (
          <div
            key={i}
            className="
    flex items-center gap-3 
    border border-transparent 
    rounded-md px-3 py-2
    hover:border-[#8f2269] 
    transition
  "
          >

            {/* Fixed icon width */}
            <span className="w-5 text-[#e87829] text-lg flex justify-center">
              📍
            </span>

            {/* Text */}
            <span className="text-sm sm:text-base md:text-lg">
              {loc}
            </span>

          </div>
        ))}

      </div>

    </section>
  );
};

export default LocationsServed;
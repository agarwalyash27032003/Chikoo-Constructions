import React from "react";
import '../../index.css'

const Team = () => {
  const members = [
    {
      name: "John Anderson",
      role: "Founder",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      description:
        "John Anderson founded Chikoo Constructions and has over 20 years of experience delivering high-quality residential and commercial projects.",
    },
    {
      name: "Michael Carter",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      description:
        "Michael oversees project planning and execution, ensuring every construction project is delivered on time and with excellent craftsmanship.",
    },
  ];

  return (
    <section className=" bg-gray-100 flex flex-col justify-center px-8 py-12">

      {/* Heading */}
      <div className="text-center mb-12">
        <p className="red-hat-display-hfont text-[#e87829]">
          WHO MADE IT
        </p>
        <h2 className="text-4xl font-bold text-indigo-900">
          Meet The Team
        </h2>
      </div>

      <div className="space-y-16 max-w-6xl mx-auto">

        {members.map((member, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >

            {/* Portrait Image */}
            <div className="relative w-[260px] aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
              <img
                src={member.image}
                className="w-full h-full object-cover"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/70 to-transparent"></div>

              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm">{member.role}</p>
              </div>
            </div>

            {/* Text */}
            <div className="max-w-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {member.name}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {member.description}
              </p>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Team;
import React from "react";
import '../../index.css'

const Team = () => {
  const members = [
    {
      name: "Vidhi Pansari",
      role: "Co-founder & Design Lead",
      description: `With a background in architectural design and project planning, Vidhi brings creative vision and technical precision to every build. From planning drawings and layouts to interior detailing, she ensures each project is both functional and visually striking. Vidhi’s strength lies in understanding how people live — and turning that into spatial solutions that feel intuitive, beautiful, and timeless.`,
      quote: "Design is not just about how a space looks — it’s about how it makes you feel. At Chikoo, we build with both purpose and personality."
    },
    {
      name: "M. Sharif",
      role: "Co-founder & Construction Director",
      description: `With over 20 years of hands-on building experience, Sharif has worked on
      hundreds of residential projects across London. From foundation to finish, he
      understands every phase of the construction process. Known for his practical
      expertise, leadership on site, and commitment to quality, Sharif ensures that
      every Chikoo project is delivered with precision, speed, and care.`,
      quote: "A well-built home stands the test of time. We take pride in our work — becauseour clients deserve nothing less."
    },
  ];

  return (
    <section className="bg-[#f8f9fa] flex flex-col justify-center px-6 md:px-12 py-24 border-t border-gray-100">

      {/* Heading Section */}
      <div className="text-center mb-16 max-w-xl mx-auto">
        <p className="red-hat-display-hfont text-xs tracking-[0.2em] font-bold text-[#e87829] uppercase mb-3">
          Who We Are
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#8f2269] tracking-tight mb-5">
          Meet The Leadership
        </h2>
        <div className="h-1 w-12 bg-[#e87829] mx-auto rounded-full"></div>
      </div>

      {/* Grid of Team Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto w-full">

        {members.map((member, index) => (
          <div
            key={index}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col items-center md:items-start text-center md:text-left h-full"
          >

            {/* Initials Badge */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8 w-full border-b border-gray-50 pb-8">
              <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] flex items-center justify-center text-[#e87829] border border-gray-50">
                <span className="text-3xl font-bold red-hat-display-hfont">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>

              <div className="pt-2">
                <h3 className="text-2xl font-bold red-hat-display-hfont text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-bold jakarta-sans text-[#8f2269] uppercase tracking-widest">
                  {member.role}
                </p>
              </div>
            </div>

            {/* Biography Text */}
            <div className="flex-grow space-y-6">
              <p className="text-gray-500 leading-relaxed jakarta-sans text-base">
                {member.description}
              </p>

              {/* Quote Section on New Line */}
              {member.quote && (
                <div className="pt-4 border-t border-gray-50">
                  <p className="text-[#8f2269] italic font-medium jakarta-sans text-lg leading-relaxed relative">
                    <span className="text-4xl absolute -top-4 -left-2 opacity-10 font-serif">“</span>
                    {member.quote}
                  </p>
                </div>
              )}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Team;
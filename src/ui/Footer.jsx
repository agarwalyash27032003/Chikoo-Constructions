import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#e9e9e9] text-gray-700">

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">

        {/* LOGO */}
        <div className="mb-10 md:hidden flex justify-center">
          <img
            className="h-32"
            src="https://ik.imagekit.io/bluepeakstudio/Chikoo%20Constructions/Chikoo%20Constructions.jpeg?updatedAt=1773680845629"
            alt=""
          />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">

          {/* LOGO (desktop only) */}
          <div className="hidden md:block">
            <img
              className="h-48"
              src="https://ik.imagekit.io/bluepeakstudio/Chikoo%20Constructions/Chikoo%20Constructions.jpeg?updatedAt=1773680845629"
              alt=""
            />
          </div>

          {/* NAV */}
          <div>
            <ul className="space-y-4 md:space-y-6 text-sm md:text-base">
              <li className="text-orange-500">HOME</li>
              <li>SERVICES</li>
              <li>PROJECTS</li>
              <li>ABOUT US</li>
              <li>CONTACT US</li>
            </ul>
          </div>

          {/* HEAD OFFICE */}
          <div>
            <h4 className="font-semibold mb-4 md:mb-8 tracking-wider">
              HEAD OFFICE
            </h4>

            <p className="text-sm leading-6">
              500 Terry Francine St,<br />
              San Francisco, CA 94158
            </p>

            <div className="mt-4 md:mt-10 text-sm">
              <p>123-456-7890</p>
              <p>info@mysite.com</p>
            </div>
          </div>

          {/* SOCIALS */}
          <div>
            <h4 className="font-semibold mb-4 md:mb-8 tracking-wider">
              SOCIALS
            </h4>

            <ul className="space-y-3 md:space-y-6 underline text-sm">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ul>
          </div>

          {/* INQUIRIES */}
          <div>
            <h4 className="font-semibold mb-4 md:mb-8 tracking-wider">
              INQUIRIES
            </h4>

            <p className="text-sm">Looking for a quote?</p>

            <p className="mt-4 md:mt-10 underline text-sm">
              Become a subcontractor
            </p>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;
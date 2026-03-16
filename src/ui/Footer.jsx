import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="bg-[#e9e9e9] text-gray-700">

      {/* TOP FOOTER */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-16 px-10 py-16">

          <img className="h-48" src="https://ik.imagekit.io/bluepeakstudio/Chikoo%20Constructions/Chikoo%20Constructions.jpeg?updatedAt=1773680845629" alt="" />
        {/* LOGO + NAV */}
        <div>

          <ul className="space-y-6">
            <li className="text-orange-500">HOME</li>
            <li>SERVICES</li>
            <li>PROJECTS</li>
            <li>ABOUT US</li>
            <li>CONTACT US</li>
          </ul>
        </div>

        {/* HEAD OFFICE */}
        <div>
          <h4 className="font-semibold mb-8 tracking-wider">
            HEAD OFFICE
          </h4>

          <p className="leading-7">
            500 Terry Francine St,<br />
            San Francisco, CA 94158
          </p>

          <div className="mt-10">
            <p>123-456-7890</p>
            <p>info@mysite.com</p>
          </div>
        </div>

        {/* SOCIALS */}
        <div>
          <h4 className="font-semibold mb-8 tracking-wider">
            SOCIALS
          </h4>

          <ul className="space-y-8 underline">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
        </div>

        {/* INQUIRIES */}
        <div>
          <h4 className="font-semibold mb-8 tracking-wider">
            INQUIRIES
          </h4>

          <p className="mb-8">Looking for a quote?</p>

          <Button title={"Get Quote!"} />

          <p className="mt-10 underline">
            Become a subcontractor
          </p>
        </div>

      </div>

      {/* BOTTOM BAR */}
      

    </footer>
  );
};

export default Footer;
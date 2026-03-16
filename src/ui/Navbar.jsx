import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-20">

      {/* Blur Layer */}
      <div className="absolute inset-0 backdrop-blur-xl bg-gradient-to-b from-white/60 via-white/30 to-transparent"></div>

      {/* Navbar Content */}
      <div className="relative flex justify-between items-center px-6 md:px-10 py-3">

        {/* Logo */}
        <Link to="/">
          <img
            className="h-[5rem] md:h-[7rem]"
            src="https://ik.imagekit.io/bluepeakstudio/Chikoo%20Constructions/Chikoo%20Constructions.jpeg?updatedAt=1773680845629"
            alt="Chikoo Constructions Logo"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-medium text-black">
          <NavLink to="/about" className="hover:text-[#e87829]">
            About Us
          </NavLink>

          <NavLink to="/projects" className="hover:text-[#e87829]">
            Projects
          </NavLink>

          <NavLink to="/contact-us" className="hover:text-[#e87829]">
            Contact
          </NavLink>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Button title={"Get Quote!"} />
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-black text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-lg px-6 py-6 space-y-4 text-black">

          <NavLink
            to="/about"
            className="block hover:text-[#e87829]"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </NavLink>

          <NavLink
            to="/projects"
            className="block hover:text-[#e87829]"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </NavLink>

          <NavLink
            to="/contact-us"
            className="block hover:text-[#e87829]"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>

          <Button title={"Get Quote!"} />

        </div>
      )}
    </nav>
  );
};

export default Navbar;
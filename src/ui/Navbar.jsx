import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Button from "./Button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact-us" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-20">

      {/* Blur Layer */}
      <div className="absolute inset-0 bg-[#FAF9F6]"></div>

      {/* NAVBAR */}
      <div className="relative flex justify-between items-center px-6 md:px-10 py-3">

        {/* Logo */}
        <Link to="/">
          <img
            className="h-[4rem] md:h-[5rem]"
            src="https://ik.imagekit.io/bluepeakstudio/Chikoo%20Constructions/Logo%20without%20BG.png"
            alt="logo"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-medium text-black">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className="hover:text-[#e87829] transition"
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Button title="Get Quote!" />
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/90 backdrop-blur-lg px-6 py-6 space-y-5 text-black flex flex-col">

          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#e87829] transition"
            >
              {link.name}
            </NavLink>
          ))}

          <Button title="Get Quote!" />

        </div>
      </div>

    </nav>
  );
};

export default Navbar;
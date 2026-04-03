import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#e9e9e9] text-gray-700">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10 py-16">

        {/* LOGO (mobile) */}
        <div className="mb-10 md:hidden flex justify-center">
          <img
            className="h-36 md:h-40"
            src="https://ik.imagekit.io/bluepeakstudio/Chikoo%20Constructions/Chikoo%20Constructions.jpeg?updatedAt=1773680845629"
            alt="logo"
          />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-[1fr_1fr_1fr_2fr] md:gap-10">

          {/* LOGO (desktop) */}
          <div className="hidden md:block">
            <img
              className="h-40"
              src="https://ik.imagekit.io/bluepeakstudio/Chikoo%20Constructions/Chikoo%20Constructions.jpeg?updatedAt=1773680845629"
              alt="logo"
            />
          </div>

          {/* NAV */}
          <div className="text-center md:text-left">
            <ul className="space-y-4 text-sm md:text-base flex flex-col items-center md:items-start">
              {[
                { name: "HOME", path: "/" },
                { name: "ABOUT US", path: "/about" },
                { name: "PROJECTS", path: "/projects" },
                { name: "SERVICES", path: "/services" },
                { name: "CONTACT", path: "/contact-us" },
              ].map((item, i) => (
                <li key={i}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-orange-500"
                        : "text-gray-800 hover:text-orange-500 transition"
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIALS */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-4 tracking-wider text-orange-500">
              SOCIALS
            </h4>
            <ul className="space-y-3 text-sm flex flex-col items-center md:items-start">
              <li className="hover:text-orange-500 cursor-pointer transition">Facebook</li>
              <li className="hover:text-orange-500 cursor-pointer transition">Instagram</li>
              <li className="hover:text-orange-500 cursor-pointer transition">LinkedIn</li>
            </ul>
          </div>

          {/* HEAD OFFICE */}
          <div className="col-span-2 md:col-span-1 text-center md:text-left">
            <h4 className="font-semibold mb-4 tracking-wider text-orange-500">
              HEAD OFFICE
            </h4>

            <p className="text-sm leading-6 mb-4">
              18 Holden Avenue, NW9 8HR,<br />
              London, United Kingdom
            </p>

            <div className="space-y-3 text-sm">

              <div className="flex justify-center md:justify-start gap-2">
                <span className="font-medium shrink-0">M Sharif:</span>
                <span className="truncate">+44 7766 079007</span>
              </div>

              <div className="flex justify-center md:justify-start gap-2">
                <span className="font-medium shrink-0">Vidhi Pansari:</span>
                <span className="truncate">+44 7766 079008</span>
              </div>

              <div className="flex justify-center md:justify-start gap-2 min-w-0">
                <span className="font-medium shrink-0">Email:</span>
                <a
                  href="mailto:chikooconstructions@gmail.com"
                  className="truncate hover:underline"
                  title="chikooconstructions@gmail.com"
                >
                  chikooconstructions@gmail.com
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-12 pt-6 border-t text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Chikoo Constructions. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
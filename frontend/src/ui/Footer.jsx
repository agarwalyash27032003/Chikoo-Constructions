import React from "react";
import Button from "./Button";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#e9e9e9] text-gray-700">

      <div className="max-w-8xl mx-auto px-4 md:px-6 md:px-10 py-16">

        {/* LOGO */}
        <div className="mb-10 md:hidden flex justify-center">
          <img
            className="h-32"
            src="https://ik.imagekit.io/bluepeakstudio/Chikoo%20Constructions/Chikoo%20Constructions.jpeg?updatedAt=1773680845629"
            alt=""
          />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 gap-4 md:gap-10 md:grid-cols-5">

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

              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-orange-500" : "text-gray-800"
                  }
                >
                  HOME
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "text-orange-500" : "text-gray-800"
                  }
                >
                  ABOUT US
                </NavLink>
              </li>


              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    isActive ? "text-orange-500" : "text-gray-800"
                  }
                >
                  PROJECTS
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive ? "text-orange-500" : "text-gray-800"
                  }
                >
                  SERVICES
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact-us"
                  className={({ isActive }) =>
                    isActive ? "text-orange-500" : "text-gray-800"
                  }
                >
                  CONTACT
                </NavLink>
              </li>

            </ul>
          </div>

          {/* HEAD OFFICE */}
          <div>
            <h4 className="font-semibold mb-4 md:mb-8 tracking-wider text-orange-500">
              HEAD OFFICE
            </h4>

            <p className="text-sm leading-6 jakarta-sans">
              18 Holden Avenue, NW9 8HR,<br />
              London, United Kingdom
            </p>

            <div className="mt-4 md:mt-10 text-sm jakarta-sans">
              <p>M Sharif: +44 7766 079007</p>
              <p>Vidhi Pansari: +44 7766 079008</p>
              <a
                href="mailto:chikooconstructions@gmail.com"
                className="break-words hover:underline"
              >
                chikooconstructions@gmail.com
              </a>
            </div>
          </div>

          {/* SOCIALS */}
          <div>
            <h4 className="font-semibold mb-4 md:mb-8 tracking-wider text-orange-500">
              SOCIALS
            </h4>

            <ul className="space-y-3 md:space-y-6 underline text-sm jakarta-sans">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ul>
          </div>

          {/* INQUIRIES */}
          <div>
            <h4 className="font-semibold mb-4 md:mb-8 tracking-wider text-orange-500">
              INQUIRIES
            </h4>

            <p className="text-sm">Looking for a quote?</p>

            <div className="mt-8">
              <Link to="/contact-us">
                <Button title="Get Quote!" />
              </Link>
            </div>

            {/* <p className="mt-4 md:mt-10 underline text-sm">
              Become a subcontractor
            </p> */}
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;
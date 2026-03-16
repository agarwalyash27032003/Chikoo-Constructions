import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from './Button'

const Navbar = () => {
  return (

    <nav className="absolute top-0 left-0 w-full z-20">

      {/* Blur Layer */}
      <div className="absolute inset-0 backdrop-blur-xl bg-gradient-to-b from-white/60 via-white/30 to-transparent"></div>

      {/* Navbar Content */}
      <div className="relative flex justify-between items-center px-10 text-white">

        <img className='h-[7rem]' src="https://ik.imagekit.io/bluepeakstudio/Chikoo%20Constructions/Chikoo%20Constructions.jpeg?updatedAt=1773680845629" alt="" />

        <div className="flex gap-8 font-medium">
          <NavLink to="/about" className="hover:text-orange-400">
            About Us
          </NavLink>

          <NavLink to="/projects" className="hover:text-orange-400">
            Projects
          </NavLink>

          <NavLink to="/contact-us" className="hover:text-orange-400">
            Contact
          </NavLink>
        </div>

        <Button title={"Get Quote!"} />

      </div>

    </nav>

  )
}

export default Navbar
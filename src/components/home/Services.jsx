import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { FaRegBuilding } from "react-icons/fa";
import { LiaTapeSolid } from "react-icons/lia";
import { SiRenovate } from "react-icons/si";

const Services = () => {
  return (
    <div className="grid grid-cols-3 border border-gray-300">

      {/* LEFT */}
      <div className="p-8 border-r border-gray-300 flex flex-col justify-center">
        <h1 className="text-2xl font-semibold">Our Services</h1>

        <h2 className="mt-4 text-gray-600">
          Innovative Construction Services You Can Trust.
        </h2>

        <button className="mt-6 bg-black text-white px-5 py-2 rounded-full w-fit">
          Explore
        </button>
      </div>

      {/* MIDDLE */}
      <div className="flex flex-col divide-y border-r border-gray-300">

        <div className="px-4 py-16">
            <FaRegBuilding size={50} />
          <h1 className="text-xl font-semibold">Commercial</h1>
          <p className="mt-3 text-gray-600">
            Describe the service and how customers or clients can benefit from it.
          </p>
        </div>

        <div className="px-4 py-16">
            < IoHomeOutline size={50} />
          <h1 className="text-xl font-semibold">Residential</h1>
          <p className="mt-3 text-gray-600">
            Describe the service and how customers or clients can benefit from it.
          </p>
        </div>

      </div>

      {/* RIGHT */}
      <div className="flex flex-col divide-y">

        <div className="px-4 py-16">
            <LiaTapeSolid size={50}/>
          <h1 className="text-xl font-semibold">Infrastructure</h1>
          <p className="mt-3 text-gray-600">
            Describe the service and how customers or clients can benefit from it.
          </p>
        </div>

        <div className="px-4 py-16">
            <SiRenovate size={50} />
          <h1 className="text-xl font-semibold">Renovation</h1>
          <p className="mt-3 text-gray-600">
            Describe the service and how customers or clients can benefit from it.
          </p>
        </div>

      </div>

    </div>
  )
}

export default Services
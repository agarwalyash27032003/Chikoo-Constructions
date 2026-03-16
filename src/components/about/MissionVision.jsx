import React from 'react'

const MissionVision = () => {
  return (
    <div className='flex flex-row gap-8 text-white bg-[#e87829] mt-32 mb-16 w-[70%] mx-auto justify-center rounded-lg p-10'>
        <div className='border-r border-white'>
            <h1 className='red-hat-display-hfont text-3xl mb-8'>Mission</h1>
            <h2>To provide comprehensive design-and-build solutions that merge aesthetics with durability — while maintaining honesty, clear communication, and professionalism at every step.</h2>
        </div>
        <div>
            <h1 className='red-hat-display-hfont text-3xl mb-8'>Vision</h1>
            <h2>To redefine residential construction in London by offering client-first service, architectural finesse, and dependable workmanship under one roof.</h2>
        </div>
    </div>
  )
}

export default MissionVision
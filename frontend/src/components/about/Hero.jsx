import React from 'react'
import GalleryWithCarousel from '../../ui/GalleryWithCarousel'
import Button from '../../ui/Button'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='pt-48'>
        <div className='flex flex-col justify-center text-justify w-[90%] md:w-[80%] lg:w-[70%] items-center mx-auto gap-8 mb-8'>
            <h1 className='text-4xl red-hat-display-hfont'> <span className='text-[#e87829]'>Crafting Spaces, </span> <span className='text-[#8f2269]'>Shaping Futures</span> </h1>
            <p className='text-xl jakarta-sans'>Chikoo Constructions LTD was founded with one goal: to deliver high-quality, trustworthy construction services with a design-first mindset. Based in London, our team combines architectural expertise and hands-on building experience to offer services that are both creative and structurally sound.</p>
            
            <Link to="/services" >
              <Button title={"Our Services"} />
            </Link>
        </div>

        <GalleryWithCarousel />

    </div>
  )
}

export default Hero
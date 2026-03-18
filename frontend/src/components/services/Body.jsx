import React from 'react'
import HomeServiceCard from '../../ui/HomeServiceCard'

const Body = () => {
    return (
        <div>
            <div className='pt-36 flex flex-col justify-center items-center text-center w-[80%] mx-auto'>
                <h1 className='text-5xl text-[#e87829] red-hat-display-hfont mb-4'>What we can do for you!</h1>
                <p className='text-xl'>Quality services crafted carefully just for your convenience.</p>
            </div>
            <div className='mx-[1rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-[5rem] gap-[2rem]'>
                <HomeServiceCard
                    title="Loft Conversions"
                    description="Unlock the hidden potential of your attic with bespoke loft conversions that add space, light, and value to your home."
                    image="https://ik.imagekit.io/bluepeakstudio/Chikoo%20Constructions/Loft%20conversions.jpg"
                />

                <HomeServiceCard
                    title="Rear Extensions"
                    description="Expand your living space with stylish rear extensions tailored to your needs — perfect for open-plan kitchens and dining areas."
                    image="https://ik.imagekit.io/bluepeakstudio/Chikoo%20Constructions/Rear%20Extension.jpg"
                />

                <HomeServiceCard
                    title="Exterior Painting"
                    description="Give your property a fresh and lasting first impression with professional exterior painting using weather-resistant, premium-grade materials."
                    image="https://ik.imagekit.io/bluepeakstudio/Chikoo%20Constructions/Exterior%20Painting.jpg?updatedAt=1773682255227"
                />

                <HomeServiceCard
                    title="Roof Cleaning"
                    description="Protect your home and extend your roof’s lifespan with expert moss removal, power washing, and eco-friendly roof treatments."
                    image="https://ik.imagekit.io/bluepeakstudio/Chikoo%20Constructions/Roof%20cleaning.png?updatedAt=1773682262655"
                />

                <HomeServiceCard
                    title="Garden Fencing"
                    description="Secure and define your outdoor space with high-quality, durable fencing solutions available in a variety of styles."
                    image="https://ik.imagekit.io/bluepeakstudio/Chikoo%20Constructions/Garden%20fencing.jpg"
                />

                <HomeServiceCard
                    title="Garden Houses"
                    description="Transform your garden with custom-built houses ideal for work, leisure, or guests — fully insulated and designed to your specifications"
                    image="https://ik.imagekit.io/bluepeakstudio/Chikoo%20Constructions/Garden%20houses.jpeg?updatedAt=1773682254954"
                />

                <HomeServiceCard
                    title="Scaffolding"
                    description="Safe, reliable scaffolding solutions for residential and small commercial projects — fully compliant and quickly installed."
                    image="https://ik.imagekit.io/bluepeakstudio/Chikoo%20Constructions/Scaffolding.jpg?updatedAt=1773682257437"
                />


                <HomeServiceCard
                    title="Double Glazed Windows & Doors"
                    description="Enhance your home's insulation, security, and appearance with energy-efficient double-glazed windows and doors — complete with professional installation."
                    image="https://ik.imagekit.io/bluepeakstudio/Chikoo%20Constructions/Double%20Glazed%20Windows%20&%20Doors.jpg?updatedAt=1773682254711"
                />

                <HomeServiceCard
                    title="Renovations & Refurbishments"
                    description="From single-room upgrades to full property refurbishments, we deliver smart, stylish transformations."
                    image="https://ik.imagekit.io/bluepeakstudio/Chikoo%20Constructions/Renovations%20&%20Refurbishments.jpg"
                />
            </div>
        </div>
    )
}

export default Body
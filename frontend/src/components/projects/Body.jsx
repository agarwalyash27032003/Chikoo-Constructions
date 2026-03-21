import React from 'react'
import Slideshow from '../../ui/Slideshow'

const Body = () => {
  return (
    <div>
            <div className='py-48 mx-auto flex flex-col'>
                <h1 className='red-hat-display-hfont text-5xl mx-auto text-[#e87829]'>Our Work</h1>
                <p className='w-[80%] mx-auto jakarta-sans text-xl'>Discover how we transform ideas into reality through expert execution, high-quality construction, and a commitment to delivering results that exceed expectations.</p>
                
                <div className='mt-16'>
                    <h1 className='flex red-hat-display-hfont text-2xl justify-center items-center'>Kingsbury</h1>
                    <Slideshow />
                </div>
                <div className='mt-16'>
                    <h1 className='flex red-hat-display-hfont text-2xl justify-center items-center'>Kingsbury</h1>
                    <Slideshow />
                </div>
                <div className='mt-16'>
                    <h1 className='flex red-hat-display-hfont text-2xl justify-center items-center'>Kingsbury</h1>
                    <Slideshow />
                </div>
                <div className='mt-16'>
                    <h1 className='flex red-hat-display-hfont text-2xl justify-center items-center'>Kingsbury</h1>
                    <Slideshow />
                </div>
            </div>
    </div>
  )
}

export default Body
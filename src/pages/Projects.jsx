import React from 'react'
import Slideshow from '../ui/Slideshow'
import Footer from '../ui/Footer'
import Navbar from '../ui/Navbar'

const Projects = () => {
  return (
    <>
        <Navbar />
            <div className='my-48 mx-auto flex flex-col'>
                <h1 className='red-hat-display-hfont text-5xl mx-auto'>Our Work</h1>
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
        <Footer />
    </>
  )
}

export default Projects
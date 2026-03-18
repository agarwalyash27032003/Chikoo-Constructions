import React from 'react'
import Slideshow from '../../ui/Slideshow'

const Body = () => {
  return (
    <div>
            <div className='py-48 mx-auto flex flex-col'>
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
    </div>
  )
}

export default Body
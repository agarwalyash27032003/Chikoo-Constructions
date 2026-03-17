import React from 'react'
import Navbar from '../ui/Navbar'
import Footer from '../ui/Footer'
import { RiHomeOfficeLine } from "react-icons/ri";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { GrContactInfo } from "react-icons/gr";

const Contact = () => {
  return (
    <>
        <Navbar />
        <div className='flex flex-col justify-center mx-auto items-center'>
            <h1 className='text-5xl pt-48 red-hat-display-hfont text-[#e87829]'>We'd Love to Hear from You</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-[80%] mx-auto gap-16 justify-center items-center my-16'>
                <div>
                    <div className='mb-16 flex flex-col gap-8'>
                        <div className='flex gap-4'>
                            <RiHomeOfficeLine size={50} />
                            <div>
                                <h1>Office</h1>
                                <h2>18 Holden Avenue, NW9 8HR,
                                London, United Kingdom</h2>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <MdOutlineMarkEmailRead size={50} />
                            <div>
                                <h1>Email</h1>
                                <h2>chikooconstructions@gmail.com</h2>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <GrContactInfo  size={50}/>
                            <div>
                                <h1>Contact Number</h1>
                                <h2>M Sharif: +44 7766 079007 <br />
                                Vidhi Pansari: +44 7766 079008</h2>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-3xl red-hat-display-hfont text-[#8f2269]'>Office Hours</h1>
                        <h2>Monday-Friday: 09:00 - 17:00</h2>
                        <h2>Saturday-Sunday: Closed</h2>
                        <h2>We are closed on Bank Holidays.</h2>
                    </div>
                </div>
                <form action="" className='bg-[#e87829] px-8 py-8 rounded-lg flex flex-col gap-4 text-white h-full'>
                    
                    <div>
                        <h1>Name</h1>
                        <input type="text" placeholder='Jane Smith' className='bg-transparent border border-white rounded-lg px-2 py-2 w-full'/>
                    </div>
                    <div>
                        <h1>Contact Number</h1>
                        <input type="number" placeholder='+44 9999 999999' className='bg-transparent border border-white rounded-lg px-2 py-2 w-full'/>
                    </div>
                    <div>
                        <h1>Message</h1>
                        <textarea name="" id="" placeholder='Enter Your Message' className='bg-transparent border border-white rounded-lg px-2 py-2 w-full'></textarea>
                    </div>
                    
                    <button className='bg-[#8f2269] text- px-5 py-3 rounded-full hover:bg-orange-600 transition w-[10rem] text-white'>Submit</button>

                </form>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Contact
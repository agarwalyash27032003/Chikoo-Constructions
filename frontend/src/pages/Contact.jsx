import React, { useState } from 'react';
import Navbar from '../ui/Navbar';
import Footer from '../ui/Footer';
import { RiHomeOfficeLine } from "react-icons/ri";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { GrContactInfo } from "react-icons/gr";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const Contact = () => {
    const [name, setName] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = { name, contactNo, message };

        try {
            const res = await fetch(`${BASE_URL}/api/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                alert("Submitted!");
                setName("");
                setContactNo("");
                setMessage("");
            } else {
                alert("Something went wrong");
            }
        } catch (err) {
            console.error(err);
            alert("Server error");
        }
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            
            <div className='flex flex-col justify-center pt-44 pb-20 mx-auto items-center px-6'>
                
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className='text-4xl md:text-6xl font-bold red-hat-display-hfont text-[#e87829] mb-4 tracking-tight'>
                        We'd Love to Hear from You
                    </h1>
                    <div className="h-1.5 w-16 bg-[#8f2269] mx-auto rounded-full"></div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl gap-16 lg:gap-24 items-start'>

                    {/* LEFT SIDE: CONTACT INFO - Forced row alignment for all screens */}
                    <div className='flex flex-col items-center md:items-start w-full space-y-12'>
                        
                        <div className='space-y-10 w-full max-w-sm md:max-w-none'>
                            {/* Office */}
                            <div className='flex items-start gap-5 group text-left'>
                                <div className="flex-shrink-0 w-16 h-16 bg-white shadow-[0_4px_20px_rgb(0,0,0,0.08)] rounded-2xl flex items-center justify-center text-[#e87829] border border-gray-50">
                                    <RiHomeOfficeLine className="text-3xl" />
                                </div>
                                <div className="pt-1">
                                    <h3 className='text-xl font-bold red-hat-display-hfont text-gray-900'>Office</h3>
                                    <p className='jakarta-sans text-gray-500 leading-relaxed text-sm md:text-base'>
                                        18 Holden Avenue, NW9 8HR,<br />London, United Kingdom
                                    </p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className='flex items-start gap-5 group text-left'>
                                <div className="flex-shrink-0 w-16 h-16 bg-white shadow-[0_4px_20px_rgb(0,0,0,0.08)] rounded-2xl flex items-center justify-center text-[#e87829] border border-gray-50">
                                    <MdOutlineMarkEmailRead className="text-3xl" />
                                </div>
                                <div className="pt-1">
                                    <h3 className='text-xl font-bold red-hat-display-hfont text-gray-900'>Email</h3>
                                    <p className='jakarta-sans text-gray-500 text-sm md:text-base'>chikooconstructions@gmail.com</p>
                                </div>
                            </div>

                            {/* Contact Number */}
                            <div className='flex items-start gap-5 group text-left'>
                                <div className="flex-shrink-0 w-16 h-16 bg-white shadow-[0_4px_20px_rgb(0,0,0,0.08)] rounded-2xl flex items-center justify-center text-[#e87829] border border-gray-50">
                                    <GrContactInfo className="text-3xl" />
                                </div>
                                <div className="pt-1">
                                    <h3 className='text-xl font-bold red-hat-display-hfont text-gray-900'>Contact Number</h3>
                                    <div className='jakarta-sans text-gray-500 text-sm md:text-base'>
                                        <p>M Sharif: <span className="font-medium text-gray-700">+44 7766 079007</span></p>
                                        <p>Vidhi Pansari: <span className="font-medium text-gray-700">+44 7766 079008</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Office Hours Box */}
                        <div className='bg-[#fbfbfd] p-8 rounded-[2.5rem] border border-gray-100 w-full max-w-sm'>
                            <h3 className='text-2xl font-bold red-hat-display-hfont text-[#8f2269] mb-4 text-left'>Office Hours</h3>
                            <div className='jakarta-sans space-y-3'>
                                <div className="flex justify-between text-gray-600 text-sm md:text-base">
                                    <span>Monday-Friday:</span>
                                    <span className="font-bold text-gray-900">09:00 - 17:00</span>
                                </div>
                                <div className="flex justify-between text-gray-600 text-sm md:text-base">
                                    <span>Saturday-Sunday:</span>
                                    <span className="font-bold text-red-500">Closed</span>
                                </div>
                                <p className='text-xs text-gray-400 italic pt-2 text-left'>* We are closed on Bank Holidays.</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: FORM */}
                    <div className="w-full max-w-lg mx-auto">
                        <form
                            onSubmit={handleSubmit}
                            className='bg-[#e87829] p-8 md:p-10 rounded-[2.5rem] shadow-2xl flex flex-col gap-6 text-white text-left'
                        >
                            <div className="space-y-2">
                                <label className='jakarta-sans font-semibold text-xs uppercase tracking-widest ml-1'>Name</label>
                                <input
                                    type="text"
                                    value={name} required 
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder='Jane Smith'
                                    className='bg-white/10 border border-white/30 rounded-2xl px-5 py-4 w-full outline-none focus:bg-white/20 transition-all placeholder:text-white/40'
                                />
                            </div>

                            <div className="space-y-2">
                                <label className='jakarta-sans font-semibold text-xs uppercase tracking-widest ml-1'>Contact Number</label>
                                <input
                                    type="text"
                                    value={contactNo}
                                    onChange={(e) => setContactNo(e.target.value)}
                                    placeholder='+44 9999 999999'
                                    className='bg-white/10 border border-white/30 rounded-2xl px-5 py-4 w-full outline-none focus:bg-white/20 transition-all placeholder:text-white/40'
                                />
                            </div>

                            <div className="space-y-2">
                                <label className='jakarta-sans font-semibold text-xs uppercase tracking-widest ml-1'>Message</label>
                                <textarea
                                    rows="4"
                                    value={message} required
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder='Enter Your Message'
                                    className='bg-white/10 border border-white/30 rounded-2xl px-5 py-4 w-full outline-none focus:bg-white/20 transition-all placeholder:text-white/40 resize-none h-32'
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-[#8f2269] hover:bg-[#731b54] text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl uppercase tracking-widest mt-2 active:scale-95"
                            >
                                Submit Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
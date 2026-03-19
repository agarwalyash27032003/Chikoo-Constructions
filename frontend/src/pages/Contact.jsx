import React, { useState } from 'react'
import Navbar from '../ui/Navbar'
import Footer from '../ui/Footer'
import { RiHomeOfficeLine } from "react-icons/ri";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { GrContactInfo } from "react-icons/gr";

const Contact = () => {

    // ✅ STATE
    const [name, setName] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [message, setMessage] = useState("");

    // ✅ SUBMIT HANDLER
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            name,
            contactNo,
            message
        };

        try {
            const res = await fetch("http://localhost:8080/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                alert("Submitted!");

                // clear form
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
        <>
            <Navbar />
            <div className='flex flex-col justify-center pt-8 mx-auto items-center text-center'>
                <h1 className='text-5xl pt-36 red-hat-display-hfont text-[#e87829]'>We'd Love to Hear from You</h1>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-[80%] mx-auto gap-16 justify-center items-center my-16'>

                    {/* LEFT SIDE */}
                    <div>
                        <div className='mb-16 grid grid-cols-[20%_80%] lg:grid-cols-[10%_90%] gap-4 text-left'>

                            <RiHomeOfficeLine size={50} />
                            <div>
                                <h1 className='text-2xl red-hat-display-hfont'>Office</h1>
                                <h2>18 Holden Avenue, NW9 8HR,
                                    London, United Kingdom</h2>
                            </div>

                            <MdOutlineMarkEmailRead size={50} />
                            <div>
                                <h1 className='text-2xl red-hat-display-hfont'>Email</h1>
                                <h2>chikooconstructions@gmail.com</h2>
                            </div>

                            <GrContactInfo size={50} />
                            <div>
                                <h1 className='text-2xl red-hat-display-hfont'>Contact Number</h1>
                                <h2>M Sharif: +44 7766 079007 <br />
                                    Vidhi Pansari: +44 7766 079008</h2>
                            </div>

                        </div>

                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='text-3xl red-hat-display-hfont text-[#8f2269]'>Office Hours</h1>
                            <h2>Monday-Friday: 09:00 - 17:00</h2>
                            <h2>Saturday-Sunday: Closed</h2>
                            <h2>We are closed on Bank Holidays.</h2>
                        </div>
                    </div>

                    {/* FORM */}
                    <form
                        onSubmit={handleSubmit}
                        className='bg-[#e87829] px-8 py-8 rounded-lg flex flex-col gap-4 text-white h-full text-left'
                    >

                        <div>
                            <h1>Name</h1>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder='Jane Smith'
                                className='bg-transparent border border-white rounded-lg px-2 py-2 w-full'
                            />
                        </div>

                        <div>
                            <h1>Contact Number</h1>
                            <input
                                type="text"
                                value={contactNo}
                                onChange={(e) => setContactNo(e.target.value)}
                                placeholder='+44 9999 999999'
                                className='bg-transparent border border-white rounded-lg px-2 py-2 w-full'
                            />
                        </div>

                        <div>
                            <h1>Message</h1>
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder='Enter Your Message'
                                className='bg-transparent border border-white rounded-lg px-2 py-2 w-full'
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="mx-auto bg-[#8f2269] px-5 py-3 rounded-full transition w-[10rem] text-white"
                        >
                            Submit
                        </button>

                    </form>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact;
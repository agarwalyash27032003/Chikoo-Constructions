import React, { useState, useEffect } from 'react';
import { IoCloseOutline } from "react-icons/io5"; // Install react-icons if not already
import '../../index.css';

const ProjectGallery = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') setSelectedImg(null);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    const projectImages = [
        { id: 1, src: "https://ik.imagekit.io/bluepeakstudio/tr:q-auto,f-auto/Chikoo%20Constructions/IMG_1733%20(1).HEIC", title: "Modern Extension", location: "London" },
        { id: 2, src: "https://ik.imagekit.io/bluepeakstudio/tr:q-auto,f-auto/Chikoo%20Constructions/PHOTO-2026-04-09-14-13-26.jpg", title: "Minimalist Loft", location: "Chelsea" },
        { id: 3, src: "https://ik.imagekit.io/bluepeakstudio/tr:q-auto,f-auto/Chikoo%20Constructions/828391C6-3590-40B3-8AFC-AEF82C69E51B.JPG", title: "New Build", location: "Surrey" },
        { id: 4, src: "https://ik.imagekit.io/bluepeakstudio/tr:q-auto,f-auto/Chikoo%20Constructions/PHOTO-2026-04-09-14-13-31.jpg", title: "Luxury Reno", location: "Kensington" },
        { id: 5, src: "https://ik.imagekit.io/bluepeakstudio/tr:q-auto,f-auto/Chikoo%20Constructions/6AFA8779-9929-4585-B850-05F2D9768B92%20(2).JPG", title: "Eco Home", location: "Oxford" },
        { id: 6, src: "https://ik.imagekit.io/bluepeakstudio/tr:q-auto,f-auto/Chikoo%20Constructions/PHOTO-2026-03-17-15-44-16.jpg", title: "Open Living", location: "Hampstead" },
        { id: 7, src: "https://ik.imagekit.io/bluepeakstudio/tr:q-auto,f-auto/Chikoo%20Constructions/PHOTO-2026-01-31-22-07-20.jpg", title: "Commercial Fit", location: "The City" },
        { id: 8, src: "https://ik.imagekit.io/bluepeakstudio/tr:q-auto,f-auto/Chikoo%20Constructions/01C3C977-3C36-495C-8B4C-433DA74457D0.JPG", title: "Kitchen Install", location: "Greenwich" },
        { id: 9, src: "https://ik.imagekit.io/bluepeakstudio/tr:q-auto,f-auto/Chikoo%20Constructions/A738FAAA-CA8E-47F7-89A8-104BBF306BE7%20(1).JPG", title: "Bespoke Joinery", location: "Soho" },
        { id: 10, src: "https://ik.imagekit.io/bluepeakstudio/tr:q-auto,f-auto/Chikoo%20Constructions/B3DDA769-320F-4A5A-B910-9426C44A8E84.JPG", title: "Bathroom Suite", location: "Mayfair" },
    ];

    return (
        <div className="bg-white min-h-screen relative">
            <div className={`flex flex-col justify-center pt-36 pb-20 mx-auto items-center px-4 md:px-10 max-w-7xl transition-all duration-300 ${selectedImg ? 'blur-md brightness-50' : ''}`}>
                
                {/* Header */}
                <div className="text-center mb-12 md:mb-20">
                    <p className="red-hat-display-hfont text-xs tracking-[0.2em] font-bold text-gray-400 uppercase mb-3">Portfolio</p>
                    <h1 className='text-4xl md:text-6xl font-bold red-hat-display-hfont text-[#e87829] mb-6'>Project Gallery</h1>
                    <div className="h-1.5 w-16 bg-[#8f2269] mx-auto rounded-full mb-8"></div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-8 w-full">
                    {projectImages.map((image) => (
                        <div 
                            key={image.id} 
                            onClick={() => setSelectedImg(image)}
                            className="group relative bg-white rounded-2xl md:rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-2xl border border-gray-100 cursor-zoom-in"
                        >
                            <div className="aspect-square overflow-hidden">
                                <img 
                                    src={image.src} 
                                    alt={image.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />
                            </div>
                            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 md:p-6">
                                <h3 className="red-hat-display-hfont text-sm md:text-xl font-bold text-white mb-0.5">{image.title}</h3>
                                <p className="jakarta-sans text-[10px] md:text-sm text-gray-300 uppercase tracking-wider">{image.location}</p>
                            </div> */}
                        </div>
                    ))}
                </div>
            </div>

            {/* LIGHTBOX MODAL */}
            {selectedImg && (
                <div 
                    className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-10 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
                    onClick={() => setSelectedImg(null)}
                >
                    <button 
                        className="absolute top-6 right-6 text-white text-5xl hover:rotate-90 transition-transform duration-300 z-[1000]"
                        onClick={() => setSelectedImg(null)}
                    >
                        <IoCloseOutline />
                    </button>
                    
                    <div 
                        className="relative w-full h-full flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
                    >
                        <img 
                            src={selectedImg.src} 
                            alt={selectedImg.title}
                            className="w-full h-full object-contain rounded-xl shadow-2xl animate-in zoom-in-95 duration-300"
                        />
                        {/* <div className="mt-6 text-center text-white">
                            <h2 className="red-hat-display-hfont text-2xl md:text-4xl font-bold text-[#e87829]">{selectedImg.title}</h2>
                            <p className="jakarta-sans text-gray-300 mt-2 tracking-widest uppercase">{selectedImg.location}, UK</p>
                        </div> */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectGallery;
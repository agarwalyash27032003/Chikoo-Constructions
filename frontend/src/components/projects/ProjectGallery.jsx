import React from 'react';
import '../../index.css';

const ProjectGallery = () => {
    // 20 Curated high-quality construction/architecture photos
    const projectImages = [
        { id: 1, src: "https://images.unsplash.com/photo-1541976844346-f18aeac57b06?q=80&w=600&auto=format&fit=crop", title: "Modern Extension", location: "London" },
        { id: 2, src: "https://images.unsplash.com/photo-1503174971373-b1f69850bbd6?q=80&w=600&auto=format&fit=crop", title: "Minimalist Loft", location: "Chelsea" },
        { id: 3, src: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=600&auto=format&fit=crop", title: "New Build", location: "Surrey" },
        { id: 4, src: "https://images.unsplash.com/photo-1591389703635-e15a07b842d7?q=80&w=600&auto=format&fit=crop", title: "Luxury Reno", location: "Kensington" },
        { id: 5, src: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=600&auto=format&fit=crop", title: "Eco Home", location: "Oxford" },
        { id: 6, src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600&auto=format&fit=crop", title: "Open Living", location: "Hampstead" },
        { id: 7, src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop", title: "Commercial Fit", location: "The City" },
        { id: 8, src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop", title: "Kitchen Install", location: "Greenwich" },
        { id: 9, src: "https://images.unsplash.com/photo-1600566752355-35792bed3a88?q=80&w=600&auto=format&fit=crop", title: "Bespoke Joinery", location: "Soho" },
        { id: 10, src: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=600&auto=format&fit=crop", title: "Bathroom Suite", location: "Mayfair" },
        { id: 11, src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop", title: "Exterior Finish", location: "Shoreditch" },
        { id: 12, src: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=600&auto=format&fit=crop", title: "Attic Conversion", location: "Camden" },
        { id: 13, src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=600&auto=format&fit=crop", title: "Glass Facade", location: "Westminster" },
        { id: 14, src: "https://images.unsplash.com/photo-1613498382159-0972b7b4c9f1?q=80&w=600&auto=format&fit=crop", title: "Planning", location: "Office" },
        { id: 15, src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop", title: "Interior Design", location: "Fulham" },
        { id: 16, src: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=600&auto=format&fit=crop", title: "Heating Install", location: "Ealing" },
        { id: 17, src: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=600&auto=format&fit=crop", title: "Landscaping", location: "Richmond" },
        { id: 18, src: "https://images.unsplash.com/photo-1600573666724-c6b1a78c179b?q=80&w=600&auto=format&fit=crop", title: "Basement Build", location: "Islington" },
        { id: 19, src: "https://images.unsplash.com/photo-1618219740975-d429804e8531?q=80&w=600&auto=format&fit=crop", title: "Lighting Plan", location: "Hackney" },
        { id: 20, src: "https://images.unsplash.com/photo-1600585154526-990dcea4d0dd?q=80&w=600&auto=format&fit=crop", title: "Final Build", location: "Wimbledon" }
    ];

    return (
        <div className="bg-white min-h-screen">
            <div className='flex flex-col justify-center pt-36 pb-20 mx-auto items-center px-4 md:px-10 max-w-7xl'>
                
                {/* Header */}
                <div className="text-center mb-12 md:mb-20">
                    <p className="red-hat-display-hfont text-xs tracking-[0.2em] font-bold text-gray-400 uppercase mb-3">
                        Portfolio
                    </p>
                    <h1 className='text-4xl md:text-6xl font-bold red-hat-display-hfont text-[#e87829] mb-6'>
                        Project Gallery
                    </h1>
                    <div className="h-1.5 w-16 bg-[#8f2269] mx-auto rounded-full mb-8"></div>
                </div>

                {/* Updated Grid Logic */}
                {/* grid-cols-2 (Phone) | md:grid-cols-3 (Tablet) | lg:grid-cols-4 (Desktop) */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-8 w-full">
                    
                    {projectImages.map((image) => (
                        <div 
                            key={image.id} 
                            className="group relative bg-white rounded-2xl md:rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-2xl border border-gray-100"
                        >
                            {/* Image aspect ratio kept square for grid neatness */}
                            <div className="aspect-square overflow-hidden">
                                <img 
                                    src={image.src} 
                                    alt={image.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 md:p-6">
                                <h3 className="red-hat-display-hfont text-sm md:text-xl font-bold text-white mb-0.5">
                                    {image.title}
                                </h3>
                                <p className="jakarta-sans text-[10px] md:text-sm text-gray-300 uppercase tracking-wider">
                                    {image.location}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                {/* <button className="mt-16 md:mt-24 bg-[#8f2269] hover:bg-[#731b54] text-white py-4 px-10 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg uppercase tracking-widest active:scale-95">
                    Start Your Project
                </button> */}

            </div>
        </div>
    );
};

export default ProjectGallery;
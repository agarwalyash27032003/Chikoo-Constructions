import React, { useEffect, useState } from "react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09",
    title: "Modern Living Spaces",
    subtitle: "Designed with precision & elegance",
  },
  {
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607",
    title: "Luxury Interiors",
    subtitle: "Crafting comfort & style",
  },
  {
    image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
    title: "Smart Architecture",
    subtitle: "Innovation meets functionality",
  },
];

const Slideshow = () => {
  const [current, setCurrent] = useState(0);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto w-[80%] h-[50vh] md:h-[50vh] lg:h-[80vh] overflow-hidden rounded-lg">

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Text */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 text-white">

            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
              {slide.title}
            </h1>

            <p className="mt-3 text-sm md:text-lg text-gray-200">
              {slide.subtitle}
            </p>

          </div>
        </div>
      ))}

    </div>
  );
};

export default Slideshow;
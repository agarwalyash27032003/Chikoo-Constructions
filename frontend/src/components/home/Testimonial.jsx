import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "../../testimonials.css";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Raj S.",
      location: "Hounslow, London",
      text: "Chikoo did a flawless job on our loft. They were on time, communicative and affordable.",
    },
    {
      name: "M. Clarke",
      location: "Walthamstow",
      text: "Great finish on our Rear Extension. Would Use Again.",
    },
    {
      name: "Seema P",
      location: "Southall",
      text: "Very Professional. We Love our Garen House - it's now my Home Office.",
    },
    {
      name: "Jason L.",
      location: "Beckenham",
      text: "Fence installation was fast and neat. Quality materials too.",
    },
    {
      name: "Kiran R.",
      location: "Harrow",
      text: "We're really pleased with the double-glazing installation. Quiet and warm now.",
    },
  ];

  return (
    <div className="section-testmonials my-20 px-6 flex flex-col gap-12">

      <div className="column-testmonials w-full flex justify-center mb-6">

        <div className="text-center">

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-gray-800 red-hat-display-hfont">
            Client Feedback & Reviews
          </h1>

          <h2 className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed jakarta-sans">
            Discover what our satisfied clients say about our services,
            quality, professionalism, and commitment to delivering
            exceptional results.
          </h2>

        </div>

      </div>

      {/* SLIDER */}
      <div className="swiper-testmonials w-full">

        <Swiper
          modules={[Navigation]}
          loop={true}
          centeredSlides={true}
          grabCursor={true}
          navigation={{
            nextEl: ".swiper-button-testmonials-next",
            prevEl: ".swiper-button-testmonials-prev",
          }}
          breakpoints={{
            0: { slidesPerView: 1.1 },
            640: { slidesPerView: 1.4 },
            900: { slidesPerView: 1.8 },
            1200: { slidesPerView: 2.4 },
            1600: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition duration-300 h-full flex flex-col">

                {/* TOP */}
                <div className="flex items-center justify-between mb-4">

                  <div className="flex items-center gap-3">

                    {/* Avatar */}
                    <div className="w-12 h-12 rounded-full bg-orange-200 flex items-center justify-center font-semibold text-orange-600">
                      {item.name.charAt(0)}
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800">{item.name}</h4>
                      <h6 className="text-sm text-gray-500">{item.location}</h6>
                    </div>

                  </div>

                  <div className="text-3xl text-orange-400">❝</div>
                </div>

                {/* TEXT */}
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {item.text}
                </p>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="navigation-testmonials flex gap-4 justify-center mt-6">

          <div className="swiper-button-testmonials-prev bg-yellow-400 rounded-full px-4 py-2 cursor-pointer">
            ←
          </div>

          <div className="swiper-button-testmonials-next bg-yellow-400 rounded-full px-4 py-2 cursor-pointer">
            →
          </div>

        </div>

      </div>

    </div>
  );
}
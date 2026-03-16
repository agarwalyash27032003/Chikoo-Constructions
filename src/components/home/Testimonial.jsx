import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "../../testimonials.css";

export default function Testimonials() {
  const testimonials = [1, 2, 3, 4, 5];

  return (
    <div className="section-testmonials my-20 px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row gap-12">

      {/* LEFT CONTENT */}
      <div className="column-testmonials w-full lg:w-[30%]">

        <div className="p-6 md:p-8 lg:border-r border-gray-300 flex flex-col justify-center">

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug text-gray-800 red-hat-display-hfont">
            Client Feedback & Reviews
          </h1>

          <h2 className="mt-4 text-gray-600 text-sm md:text-base">
            Discover what our satisfied clients say about our services,
            quality, professionalism, and commitment to delivering
            exceptional results.
          </h2>

        </div>

        {/* NAVIGATION */}

      </div>

      {/* SLIDER */}
      <div className="swiper-testmonials w-full lg:w-[70%]">

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
              <div className="card-slide">

                <div className="head-slide">
                  <div className="header-slide">

                    <div className="avatar"></div>

                    <div className="title-slide">
                      <h4>Daniel Reed</h4>
                      <h6>Brand Strategist at Atlas Studio</h6>
                    </div>

                  </div>

                  <div className="quote-icon">❝</div>
                </div>

                <p className="text-slide">
                  Tasteful direction and clean delivery. Strategic,
                  well-structured, and elevated without overcomplicating.
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
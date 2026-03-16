import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "../../testimonials.css";

export default function Testimonials() {
  const testimonials = [1, 2, 3, 4, 5];

  return (
    <div className="section-testmonials my-32 px-[4rem]">

      <div className="column-testmonials">
        <div className="p-8 border-r border-gray-300 flex flex-col justify-center">
          <h1 className="text-2xl font-semibold">Client Feedback & Reviews</h1>

          <h2 className="mt-4 text-gray-600">
            Discover what our satisfied clients say about our services, quality, professionalism, and commitment to delivering exceptional results.
          </h2>
        </div>

        <div className="navigation-testmonials flex justify-center">
          <div className="swiper-button-testmonials-prev bg-yellow-400 rounded-full px-4 py-2">←</div>
          <div className="swiper-button-testmonials-next bg-yellow-400 rounded-full px-4 py-2">→</div>
        </div>
      </div>

      <div className="swiper-testmonials">

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
            500: { slidesPerView: 1.4 },
            780: { slidesPerView: 1.8 },
            1300: { slidesPerView: 2.6 },
            1630: { slidesPerView: 3.2 },
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

      </div>
    </div>
  );
}
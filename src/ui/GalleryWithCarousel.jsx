import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const images = [
  "https://ik.imagekit.io/bluepeakstudio/Chikoo%20Constructions/Loft%20conversions.jpg",
  "https://ik.imagekit.io/bluepeakstudio/Chikoo%20Constructions/Renovations%20&%20Refurbishments.jpg?updatedAt=1773682256272",
  "https://ik.imagekit.io/bluepeakstudio/Chikoo%20Constructions/Garden%20fencing.jpg?updatedAt=1773682262315",
];

export default function GalleryWithCarousel() {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="w-full h-[60vh] md:h-[70vh]"
    >
      {images.map((img, i) => (
        <SwiperSlide key={i} className="h-full">
          <img
            src={img}
            className="w-full h-full object-cover rounded-lg"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
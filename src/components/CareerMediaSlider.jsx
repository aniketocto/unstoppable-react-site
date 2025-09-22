import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCube } from "swiper/modules";
import "../assets/css/career.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const CareerMediaSlider = () => {
  return (
    <div className="career-media-slider">
      <Swiper
        modules={[Autoplay, EffectCube]}
        loop={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="mySwiper swiper-slide"
      >
        <SwiperSlide>
          <img src="/images/carrer-4.jpeg" alt="Career" />
        </SwiperSlide>
        <SwiperSlide>
          <video src="video/carrer-1.mp4" muted autoPlay loop />
        </SwiperSlide>
        <SwiperSlide>
          <video src="video/carrer-2.mp4" muted autoPlay loop />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CareerMediaSlider;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "../assets/css/carousel.css"; // adjust path to your project

const slides = [
  { id: 1, img: "/images_1/casestudy2.png", title: "My Nirvana Club" },
  { id: 2, img: "/images_1/casestudy2.png", title: "The Villa Express" },
  { id: 3, img: "/images_1/casestudy2.png", title: "CREDAI MCHI" },
  { id: 1, img: "/images_1/casestudy2.png", title: "My Nirvana Club" },
  { id: 2, img: "/images_1/casestudy2.png", title: "The Villa Express" },
  { id: 3, img: "/images_1/casestudy2.png", title: "CREDAI MCHI" },
  // add more slides as needed
];

export default function CarouselWithMask() {
  return (
    <div className="carousel-wrap">
      <div className="carousel-stage">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={5}
          centeredSlides={true}
          loop={true}
          spaceBetween={20}
          autoplay={{
            delay: 3200,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          className="carousel-swiper"
        >
          {slides.map((s) => (
            <SwiperSlide key={s.id} style={{ width: "640px" }}>
              <div className="ba-card">
                <div className="ba-media">
                  <img src={s.img} alt={s.title} />
                </div>
                <div className="ba-info">
                  <div className="ba-title">{s.title}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

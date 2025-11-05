import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "../assets/css/carousel.css"; // adjust path to your project

const slides = [
  {
    id: 1,
    img: "/images_1/casestudy2.png",
    title: "My Nirvana Club",
    list: [
      "Nirvana Realty",
      "Har Din Chutti",
      "Nirvana Realty",
      "Har Din Chutti",
    ],
  },
  {
    id: 2,
    img: "/images_1/casestudy2.png",
    title: "The Villa Express",
    list: [
      "Nirvana Realty",
      "Har Din Chutti",
      "Nirvana Realty",
      "Har Din Chutti",
    ],
  },
  {
    id: 3,
    img: "/images_1/casestudy2.png",
    title: "CREDAI MCHI",
    list: [
      "Nirvana Realty",
      "Har Din Chutti",
      "Nirvana Realty",
      "Har Din Chutti",
    ],
  },
  {
    id: 1,
    img: "/images_1/casestudy2.png",
    title: "My Nirvana Club",
    list: [
      "Nirvana Realty",
      "Har Din Chutti",
      "Nirvana Realty",
      "Har Din Chutti",
    ],
  },
  {
    id: 2,
    img: "/images_1/casestudy2.png",
    title: "The Villa Express",
    list: [
      "Nirvana Realty",
      "Har Din Chutti",
      "Nirvana Realty",
      "Har Din Chutti",
    ],
  },
  {
    id: 3,
    img: "/images_1/casestudy2.png",
    title: "CREDAI MCHI",
    list: [
      "Nirvana Realty",
      "Har Din Chutti",
      "Nirvana Realty",
      "Har Din Chutti",
    ],
  },
  {
    id: 1,
    img: "/images_1/casestudy2.png",
    title: "My Nirvana Club",
    list: [
      "Nirvana Realty",
      "Har Din Chutti",
      "Nirvana Realty",
      "Har Din Chutti",
    ],
  },
  {
    id: 2,
    img: "/images_1/casestudy2.png",
    title: "The Villa Express",
    list: [
      "Nirvana Realty",
      "Har Din Chutti",
      "Nirvana Realty",
      "Har Din Chutti",
    ],
  },
  {
    id: 3,
    img: "/images_1/casestudy2.png",
    title: "CREDAI MCHI",
    list: [
      "Nirvana Realty",
      "Har Din Chutti",
      "Nirvana Realty",
      "Har Din Chutti",
    ],
  },
  {
    id: 1,
    img: "/images_1/casestudy2.png",
    title: "My Nirvana Club",
    list: [
      "Nirvana Realty",
      "Har Din Chutti",
      "Nirvana Realty",
      "Har Din Chutti",
    ],
  },
  {
    id: 2,
    img: "/images_1/casestudy2.png",
    title: "The Villa Express",
    list: [
      "Nirvana Realty",
      "Har Din Chutti",
      "Nirvana Realty",
      "Har Din Chutti",
    ],
  },
  {
    id: 3,
    img: "/images_1/casestudy2.png",
    title: "CREDAI MCHI",
    list: [
      "Nirvana Realty",
      "Har Din Chutti",
      "Nirvana Realty",
      "Har Din Chutti",
    ],
  },
];

export default function CarouselWithMask() {
  return (
    <div className="carousel-wrap">
      <div className="carousel-stage">
        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          slidesPerView={"auto"}
          centeredSlides={true}
          effect="coverflow"
          loop={true}
          coverflowEffect={{
            rotate: 30,
            stretch: 30,
            depth: 110,
            modifier: 1,
            slideShadows: true,
          }}
          spaceBetween={25}
          // autoplay={{
          //   delay: 3200,
          //   disableOnInteraction: true,
          //   pauseOnMouseEnter: true,
          // }}
          className="carousel-swiper"
        >
          {slides.map((s) => (
            <SwiperSlide key={s.id} style={{ width: "640px" }}>
              <SwiperSlide key={s.id} style={{ width: "640px" }}>
                <div className="ba-card">
                  <div className="flip-inner">
                    {/* Front side */}
                    <div className="flip-front">
                      <img src={s.img} alt={s.title} />
                    </div>

                    {/* Back side */}
                    <div className="flip-back">
                      <img src={s.img} alt={s.title} className="ba-media" />
                      <div className="ba-content">
                        <p className="ba-title">{s.title}</p>
                        {s.list && (
                          <div className="ba-divider">
                            {s.list.map((item, index) => (
                              <p key={index} className="ba-item">
                                {item}
                              </p>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

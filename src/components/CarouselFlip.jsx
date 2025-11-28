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
  // handler to call with the swiper instance
  const applyNextNextClass = (swiper) => {
    if (!swiper || !swiper.slides) return;

    const slidesArr = Array.from(swiper.slides);

    // remove helper on every run
    slidesArr.forEach((s) => s.classList.remove("next-next-condition"));

    // find one of the DOM nodes that is currently active to read its logical index
    const activeNode = slidesArr.find((s) =>
      s.classList.contains("swiper-slide-active")
    );
    if (!activeNode) return;

    const logicalActive = Number(activeNode.dataset.swiperSlideIndex);

    // compute logical indices for next and next-next (wrap by realCount)
    // get realCount by reading max data-swiper-slide-index + 1
    const maxIndex = slidesArr.reduce((acc, el) => {
      const idx = Number(el.dataset.swiperSlideIndex);
      return Number.isFinite(idx) ? Math.max(acc, idx) : acc;
    }, -1);
    const realCount = maxIndex + 1 || 1;

    const logicalNext = (logicalActive + 1) % realCount;
    const logicalNextNext = (logicalActive + 2) % realCount;

    // check condition: there must exist DOM duplicates of logicalActive with active+visible+fully-visible
    const cond1 = slidesArr.some(
      (s) =>
        Number(s.dataset.swiperSlideIndex) === logicalActive &&
        s.classList.contains("swiper-slide-active") &&
        s.classList.contains("swiper-slide-visible") &&
        s.classList.contains("swiper-slide-fully-visible")
    );

    // check cond2: there must exist duplicates of logicalNext with next + visible + fully-visible
    const cond2 = slidesArr.some(
      (s) =>
        Number(s.dataset.swiperSlideIndex) === logicalNext &&
        s.classList.contains("swiper-slide-next") &&
        s.classList.contains("swiper-slide-visible") &&
        s.classList.contains("swiper-slide-fully-visible")
    );

    // if both conditions satisfied, add class to all duplicates of logicalNextNext
    if (cond1 && cond2) {
      slidesArr
        .filter((s) => Number(s.dataset.swiperSlideIndex) === logicalNextNext)
        .forEach((s) => s.classList.add("next-next-condition"));
    }
  };

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
            stretch: 10,
            depth: 110,
            modifier: 1,
            slideShadows: true,
          }}
          spaceBetween={25}
          autoplay={{
            delay: 3200,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          className="carousel-swiper"
          onSwiper={(swiper) => {
            // initial run
            applyNextNextClass(swiper);
          }}
          onSlideChange={(swiper) => {
            applyNextNextClass(swiper);
          }}
          onTransitionEnd={(swiper) => {
            // sometimes classes finalize on transition end — keep it robust
            applyNextNextClass(swiper);
          }}
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

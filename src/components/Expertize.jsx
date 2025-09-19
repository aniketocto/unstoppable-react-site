import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { expertiseData } from "../utils/data";
import "../assets/css/expertize.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import FormModal from "../layouts/FormModal";

gsap.registerPlugin(ScrollTrigger);

const Expertize = () => {
  const cardsRef = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 600);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return; // skip animation on slider
    gsap.fromTo(
      cardsRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".expertize-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile) {
      gsap.to(".decoImg1", {
        x: 50, // side to side
        y: 20, // up/down
        rotation: 15,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }, [isMobile]);

  return (
    <section className="expertize-section" id="experties">
      <h4>Our Expertise</h4>
      <h2>
        Design, Strategy & Content All Wired to our Motherboard of Creativity
      </h2>

      {isMobile ? (
        // 👉 Swiper on mobile
        <Swiper
          spaceBetween={20}
          slidesPerView={1.2}
          centeredSlides={true}
          grabCursor={true}
          loop={true}
          autoplay={{ delay: 3000 }}
        >
          {expertiseData.map((exp, index) => (
            <SwiperSlide key={index}>
              <div className="glass-card">
                <img src={exp.imageSrc} alt={exp.alt} />
                <p className="service-header">{exp.heading}</p>
                {exp.isNew && <span className="new-experties">New</span>}
                <p className="service-content">{exp.content}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        // 👉 Grid on desktop/tablet
        <div className="service-cards">
          {expertiseData.map((exp, index) => (
            <div
              className="glass-card"
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <img src={exp.imageSrc} alt={exp.alt} />
              <p className="service-header">{exp.heading}</p>
              {exp.isNew && <span className="new-experties">New</span>}
              <p className="service-content">{exp.content}</p>
            </div>
          ))}
          <img
            src="images/deco_2.webp"
            alt="Satellite orbiting in space used by Unstoppable Creative Agency to depict expertise."
            className="decoImg1"
          />
          <img src="images/deco_3.png" id="deco3" alt="" />

          <FormModal buttonTitle="START A PROJECT" />
        </div>
      )}
    </section>
  );
};

export default Expertize;

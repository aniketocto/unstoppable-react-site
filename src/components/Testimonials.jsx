import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../assets/css/testimonials.css";
import { testimonialData } from "../utils/data";
import { Autoplay } from "swiper/modules";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>

      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        className="swiper testimonial"
      >
        <div className="swiper-wrapper">
          {testimonialData.map((item, i) => (
            <SwiperSlide key={i} className="swiper-slide">
              <div className="testimonial-card">
                <div className="testimonial-image">
                  <div className="placeholder">{item.placeholder}</div>
                </div>
                <div className="card-content">
                  <div className="testimonial-text">
                    <img
                      src="images/quotes.svg"
                      className="quotes"
                      alt="Testimonial"
                    />
                    <p className="quote">{item.quote}</p>
                    <strong>{item.author}</strong>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </section>
  );
};

export default Testimonials;

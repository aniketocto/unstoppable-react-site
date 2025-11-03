import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../assets/css/testimonials.css";
import { testimonialData } from "../utils/data";
import { Autoplay, Pagination } from "swiper/modules";

const Testimonials = () => {
  return (
    <>
      <section className="testimonials">
        <h1 className="testimonials-heading">
          Words for the Un<span>stop</span>pable
        </h1>
        <p className="testimonials-text">
          Growth isn't claimed, it's proven. <br /> Here's what our partners say
          about working with us.
        </p>

        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          // autoplay={{ delay: 3000, disableOnInteraction: false }}
          slidesPerView={"auto"}
          spaceBetween={10}
          centeredSlides={true}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1.2, spaceBetween: 10 },
            640: { slidesPerView: 1.5, spaceBetween: 15 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 2.2, spaceBetween: 20 },
          }}
          className="swiper testimonial"
        >
          <div className="swiper-wrapper">
            {testimonialData.map((item, i) => (
              <SwiperSlide key={i} className="swiper-slide">
                <div className="testimonial-card">
                  <div className="testimonial-image">
                    <img
                      src={item.imgSrc}
                      className="profileimg"
                      alt={item.author}
                    />
                    <div className="h-10"></div>
                    <img
                      src="/images_1/serviceCover.png"
                      className="coverimg"
                      alt=""
                    />
                    <p className="author">{item.author}</p>
                    <span className="designation">{item.designation}</span>
                  </div>
                  <div className="card-content">
                    <div className="testimonial-text">
                      <p className="quote">{item.quote}</p>

                      <div className="growth-metrics">
                        <div className="growth-metric">
                          <p className="value">{item.growth}</p>
                          <p className="valuetitle">YoY Sales Growth</p>
                        </div>
                        <div className="growth-metric">
                          <p className="value">{item.retention}</p>
                          <p className="valuetitle">Customer Retention</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </section>
      <div className="h-20 bg-[#030303]"></div>
    </>
  );
};

export default Testimonials;

import PageLayout from "../layouts/PageLayout";
import "../assets/css/career.css";
import { careerServices } from "../utils/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import CareerForm from "../components/careerForm";

const Career = () => {
  return (
    <PageLayout>
      <section className="career-hero">
        <h1>Why Build Your Career with Unstoppable?</h1>

        <section className="career-service">
          <div className="service-cards">
            {careerServices.map((service, index) => (
              <div className="glass-card" key={index}>
                <p className="service-header">{service.header}</p>
                <p className="service-content">{service.content}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mob-career-service">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
            {careerServices.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="glass-card">
                  <p className="service-header">{service.header}</p>
                  <p className="service-content">{service.content}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </section>

      <CareerForm />
      
      <section class="career-cta">
      <div class="career-container">
        <h1>Work With Us. Grow With Us.</h1>
        <p class="career-intro">
          At <span class="highlight">Unstoppable</span>, your work will go
          beyond campaigns – it will help shape brands, build legacies, and
          leave a lasting mark.
        </p>

        <p class="apply-info">
          To apply, send your CV and portfolio to
          <a href="mailto:connect@getunstoppable.in"
            >connect@getunstoppable.in</a
          >
          Let’s create, innovate, and grow together.
        </p>
      </div>
    </section>
    </PageLayout>
  );
};

export default Career;

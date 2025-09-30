import PageLayout from "../layouts/PageLayout";
import "../assets/css/career.css";
import { careerServices } from "../utils/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import CareerForm from "../components/CareerForm";
import { Helmet } from "react-helmet-async";
const Career = () => {
  return (
    <PageLayout>
      {/* Meta data */}
      <Helmet>
        <title>Join Our Team | Careers at Unstoppable Creative Agency</title>
        <meta
          name="description"
          content="Leading creative agency with expertise in branding, strategy, social media marketing, lead generation, content, photoshoots, brand films, and UI/UX design. Want to work at the leading creative agency in Mumbai? Unstoppable Creative Agency is searching for talent like you! Apply now!"
        />
        <meta name="robots" content="max-image-preview:large" />
        <link rel="canonical" href="https://getunstoppable.in/careers" />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Careers at Unstoppable Creative Agency",
              url: "https://getunstoppable.in/careers",
              description:
                "Discover career opportunities at Unstoppable Creative Agency, a Mumbai-based creative firm. Join a collaborative team of designers, strategists, and innovators working on impactful, multi-industry projects.",
              mainEntity: {
                "@type": "Organization",
                name: "Unstoppable Creative Agency",
                url: "https://getunstoppable.in",
                logo: "https://getunstoppable.in/images/logo.webp",
                description:
                  "Unstoppable is a Mumbai-based creative agency specialising in branding, design, strategy, and digital storytelling. We help brands scale through bold creativity and collaborative innovation.",
                sameAs: [
                  "https://www.facebook.com/getunstoppable/",
                  "https://www.instagram.com/get_unstoppable/",
                  "https://www.linkedin.com/company/getunstoppable/",
                ],
                address: {
                  "@type": "PostalAddress",
                  streetAddress:
                    "B/50, 5th Floor, Off New Link Rd, Andheri West",
                  addressLocality: "Mumbai",
                  addressRegion: "Maharashtra",
                  postalCode: "400053",
                  addressCountry: "IN",
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+91-9833022443",
                  email: "connect@getunstoppable.in",
                  contactType: "hr",
                },
              },
            }),
          }}
        />
      </Helmet>
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
            <a href="mailto:connect@getunstoppable.in">
              connect@getunstoppable.in
            </a>
            Let’s create, innovate, and grow together.
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default Career;

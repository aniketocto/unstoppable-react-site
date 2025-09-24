import PageLayout from "../../layouts/PageLayout";
import "../../assets/css/common-service.css";
import FormModal from "../../layouts/FormModal";
import { IoMdArrowDown, IoMdArrowForward, IoMdCall } from "react-icons/io";
import { useState } from "react";

const faqData = [
  {
    question:
      "What sets Unstoppable apart from other experiential advertising agencies?",
    answer: `Unstoppable stands out among experiential advertising agencies due to our deep focus on innovation, storytelling, and measurable results. As a full-service experiential marketing agency, we go beyond traditional methods by combining immersive technology with creative storytelling to deliver unique brand experiences. Compared to other experiential marketing companies, our approach is more emotionally driven and results-oriented, making us a preferred choice for brands seeking impact.`,
  },
  {
    question:
      "How does an experiential marketing agency like Unstoppable measure success?",
    answer: `Our experiential marketing agency believes that real success goes beyond buzz. We’re not just one of the many experiential marketing companies doing flashy campaigns—we define KPIs and track metrics such as engagement, lead generation, social shares, and ROI. Most experiential advertising agencies focus on the event alone, but our team ensures post-campaign evaluation is baked into every experiential advertising effort.`,
  },
  {
    question:
      "What kind of services do experiential marketing companies like Unstoppable provide?",
    answer: `As one of India’s most innovative experiential marketing companies, we offer a wide range of services including live events, branded environments, AR/VR activations, and digital campaigns. We’re more than just an experiential advertising agency; we’re a strategic partner who blends experiential strategy with technology to create meaningful connections. Whether you need experiential event companies or a long-term experiential marketing strategy, Unstoppable delivers.`,
  },
  {
    question:
      "Why should brands invest in experiential advertising campaigns today?",
    answer: `With consumer attention at an all-time premium, experiential advertising campaigns help brands stand out. Unlike traditional ads, campaigns created by leading experiential advertising agencies like Unstoppable create emotional engagement. An experiential marketing agency focuses on building relationships, and that’s why more brands are turning to experiential marketing companies to deepen loyalty and brand recall.`,
  },
  {
    question:
      "What industries benefit most from working with top experiential marketing agencies?",
    answer: `The beauty of working with experiential advertising agencies is their versatility. From tech and FMCG to fashion and automotive, industries across the board benefit from partnering with an experiential marketing agency like Unstoppable. We’re trusted by brands that value innovation and want to collaborate with experiential marketing companies that understand how to create the best experiential marketing campaigns with lasting impact.`,
  },
];

const ExpertialMarketingAgency = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="service-hero">
        <h1>Experiential Marketing At Its Finest</h1>

        <div className="service-cta-container">
          <FormModal buttonTitle="Book Appointment" />
          <a href="tel:+" className="service-cta">
            <IoMdCall className="size-5" /> 9833022443
          </a>
        </div>
      </section>

      {/* 2nd Section */}
      <section className="intro-section">
        <p className="sub-content">
          In a world that is overwhelmed with digital noise, brands need more
          than just ads, they need experiences. We at Unstoppable are some of
          the most innovative experiential advertising agencies that India has
          to offer, delivering immersive brand experiences that engage people
          and create loyalty beyond the consumerism norms.
        </p>
        <p className="sub-content">
          We are a full-service experiential marketing agency that helps brands
          cut through the clutter and form emotional connections. We create the
          best experiential marketing campaigns, be it live events, digital
          activations, or branded environments, that leave a long-lasting
          impression.
        </p>
      </section>

      {/* Why us section */}
      <section className="why-us-section">
        <h2 className="sub-head">Why Choose Unstoppable?</h2>
        <p className="sub-content">
          When it comes to establishing and growing a brand in Mumbai, it is
          crucial to work with the right creative agency. That's why it is
          crucial to consider various factors before you choose an agency that
          can help you make the most of your brand.
        </p>

        <div className="why-us-grid">
          <div className="why-us-card">
            <h3>Strategic Storytelling</h3>
            <p className="sub">
              For us, the first part of creating a successful experience is
              telling a good story. Besides organising events, we also design
              brand experiences. Every interaction a customer has with your
              brand directly reflects its story to preserve consistency, stay
              memorable and arouse emotion.
            </p>
          </div>
          <div className="why-us-card">
            <h3>Innovative Execution</h3>
            <p>
              Being one of the top experiential advertising agencies, we focus
              on new ideas with everything we do. As an experiential events
              agency, we merge creativity with technology when incorporating
              AR/VR and using immersive tech, giving people experiences they
              will remember for a lifetime.
            </p>
          </div>
          <div className="why-us-card">
            <h3>Measurable Results</h3>
            <p>
              It’s not just about creating buzz; we ensure our work delivers
              real results. As an experiential marketing agency that uses data,
              we define what success looks like by setting clear KPIs and
              benchmarks. Whatever the metric—lead generation, social media
              coverage or brand interactions, we keep an eye on it to confirm
              the ROI we provide.
            </p>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="our-process">
        <h2 className="sub-head">Our Experiential Advertising Process</h2>

        <div className="process-grid">
          <div className="process-img">
            <img src="/images/services-imgs/why-need.webp" alt="" />
          </div>
          <div className="process-content">
            <div>
              <p className="process-head">Discovery</p>
              <p className="process-points">
                As a leading experiential marketing agency, we start by
                understanding your brand, audience, and campaign goals to create
                immersive experiences that resonate.
              </p>
            </div>
            <div>
              <p className="process-head">Ideation</p>
              <p className="process-points">
                Our team, backed by years of expertise in experiential
                advertising, develops bold, creative concepts tailored to your
                brand’s vision and market positioning.
              </p>
            </div>
            <div>
              <p className="process-head">Execution</p>
              <p className="process-points">
                We bring ideas to life with seamless execution, delivering
                powerful brand moments that set us apart from other experiential
                marketing companies.
              </p>
            </div>
            <div>
              <p className="process-head">Evaluation</p>
              <p className="process-points">
                After each activation, we assess performance, audience
                engagement, and ROI, ensuring your experiential marketing
                strategy keeps evolving.
              </p>
            </div>

            <FormModal buttonTitle="Get Started Now" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-accordion">
        <div className="container">
          <div className="accordion">
            <div className="faq-heading">
              <h2 id="faqHeading">Frequently Asked Questions</h2>
            </div>

            {faqData.map((item, i) => (
              <div
                className={`accordion-item ${
                  activeIndex === i ? "active" : ""
                }`}
                key={i}
              >
                <a
                  className="accordion-link"
                  onClick={() => toggleFAQ(i)}
                  href="#!"
                >
                  <h3>{item.question}</h3>
                  <IoMdArrowForward className="icon ion-md-arrow-forward" />
                  <IoMdArrowDown className="icon ion-md-arrow-down" />
                </a>
                <div className="answer">
                  <p>{item.answer}</p>
                </div>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub Footer */}
      <section className="sub-footer">
        <div>
          <h3>Let’s Make You Unstoppable Together</h3>
          <p>
            Are you ready to maximise your brand’s ROI with the top graphic
            design agency?
          </p>
          <p>
            Call us at{" "}
            <span>
              <a href="tel:+919833022443">+919833022443</a>
            </span>{" "}
            now and find out how we can help you achieve your brand’s full
            potential.
          </p>
        </div>
        <div>
          <FormModal buttonTitle="SCHEDULE A MEETing" />
        </div>
      </section>
    </PageLayout>
  );
};

export default ExpertialMarketingAgency;

import "../assets/css/hero.css";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="hero">
      {/* keep your content above the effect */}
      <div className="hero-content">
        <div className="hero-text-container">
          <h1>
            Your St<span>ra</span>tegic Growth <br />
            Partner in Bussiness
          </h1>
          <p className="subheading">
            Marketing & Branding Solutions for <br /> Growth Focused Businesses
          </p>
          <button className="cta">
            Book Strategy Call <FaArrowRightLong />
          </button>
        </div>

        <div className="partner-logo">
          <p>Partnered with</p>
          <div className="partner-logos">
            <p>TOI</p>
            <p>Meta</p>
            <p>JioHotstar</p>
            <p>EZIPP</p>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images_1/bnner.png" alt="" />
      </div>
    </section>
  );
};

export default Hero;

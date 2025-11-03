import { FaArrowRightLong } from "react-icons/fa6";
import "../assets/css/growthSection.css";

const GrowthSection = () => {
  return (
    <section className="growth-section">
      <h1 className="growth-heading">
        Growth Is Not About Size <br /> It’s About M<span>in</span>dset
      </h1>
      <p className="growth-text">
        We collaborate with brands that share our hunger for progress from
        startups building tomorrow, to family businesses redefining legacy, to
        enterprises engineering scale.
      </p>

      <div className="growth-detail">
        <div className="card">
          <h3 className="card-title">Startups</h3>
          <div className="card-media">
            <img src="/images_1/startups.png" alt="Startups illustration" />
          </div>
        </div>

        <div className="card">
          <h3 className="card-title">Family Businesses</h3>
          <div className="card-media">
            <img
              src="/images_1/familybusiness.png"
              alt="Family businesses illustration"
            />
          </div>
        </div>

        <div className="card">
          <h3 className="card-title">Enterprises</h3>
          <div className="card-media">
            <img
              src="/images_1/enterprises.png"
              alt="Enterprises illustration"
            />
          </div>
        </div>
      </div>
      <button className="cta">
        Book Strategy Call <FaArrowRightLong />
      </button>
    </section>
  );
};

export default GrowthSection;

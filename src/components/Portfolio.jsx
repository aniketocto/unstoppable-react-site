import { useEffect, useRef, useState } from "react";
import "../assets/css/portfolio.css";
import { portfolioData } from "../utils/data";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import FormModal from "../layouts/FormModal";

const Portfolio = () => {
  const rotatorRef = useRef(null);
  const [direction, setDirection] = useState(1);
  const angleRef = useRef(0);
  const pausedRef = useRef(false);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const rotator = rotatorRef.current;
    if (!rotator) return;

    const rotateSmoothly = () => {
      if (!pausedRef.current) {
        angleRef.current += direction * 0.09;
        rotator.style.transform = `perspective(1000px) rotateX(-16deg) rotateY(${angleRef.current}deg)`;
      }
      animationFrameRef.current = requestAnimationFrame(rotateSmoothly);
    };

    rotateSmoothly();
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [direction]);

  return (
    <div className="banner-portfolio" id="our-work">
      <div className="portfolio-content">
        <h4>Our Portfolio</h4>
        <h2>Explore Our Unstoppable Creations</h2>
      </div>

      {/* Rotating Slider */}
      <div
        className="slider-portfolio"
        style={{ "--quantity-portfolio": portfolioData.length }}
        ref={rotatorRef}
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => (pausedRef.current = false)}
      >
        {portfolioData.map((project, i) => (
          <div
            className="item-portfolio"
            style={{ "--position-portfolio": i + 1 }}
            key={i}
          >
            <a
              href={project.link || "#"}
              target={project.link ? "_blank" : "_self"}
              rel="noreferrer"
            >
              <img src={project.img} alt={project.alt} />
            </a>
          </div>
        ))}
      </div>

      {/* Floating Astronaut */}
      <div className="portfolio_model">
        <img src="/images/astronaut-2.webp" alt="" />
      </div>

      <div className="rotation-btn">
        <FaArrowLeftLong
          className="size-7 cursor-pointer"
          onClick={() => setDirection(-1)} // rotate left
        />
        <FaArrowRightLong
          className="size-7 cursor-pointer"
          onClick={() => setDirection(1)} // rotate right
        />
      </div>

      <div class="portfolio-bottom-content">
        <div>
          <p>
            At Unstoppable Creative Agency, we&rsquo;ve launched multiple brands
            into new galaxies. Spanning across diverse sectors, each project is
            like a &lsquo;Universe Conquered&rsquo; or a &lsquo;Mission
            Accomplished&rsquo; For Mynirvana Stays, we crafted a serene brand
            universe where hospitality meets harmony. For Abbo, a bold and
            energetic fashion brand, we built a launch-ready identity packed
            with flair, edge, and movement. For Nirvana Realty, we developed a
            brand grounded in purpose yet expansive in vision. With Today
            Global, we engineered a brand that speaks the language of modernity
            and scale, future-ready and rooted in trust.
          </p>
        </div>
        <div className="portfolio-cta">
          <FormModal buttonTitle="START A PROJECT" />{" "}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

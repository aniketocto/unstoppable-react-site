import "../../assets/css/hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <picture>
          {/* mobile image for small viewports */}
          <source
            srcSet="images/mob-moon.webp 440w"
            media="(max-width: 768px)"
            type="image/webp"
          />
          {/* fallback/default (desktop) */}
          <img
            src="images/brightMoon.webp"
            srcSet="images/mob-moon.webp 440w, images/brightMoon.webp 1440w"
            sizes="(max-width: 900px) 100vw, 1440px"
            width="1440"
            height="353"
            loading="lazy"
            decoding="async"
            alt="Moon surface visual used by Unstoppable Creative Agency."
            className="moon"
            fetchPriority="low"
          />
        </picture>

        <div className="hero-text" id="hero-text">
          <img src="images/lens.webp" id="lens" alt="Lens Effect" />
          <p>Infinite Possibilities & Limitless Growth</p>
          <h2>UNSTOPPABLE</h2>
        </div>
      </div>
    </section>
  );
}

export default Hero;

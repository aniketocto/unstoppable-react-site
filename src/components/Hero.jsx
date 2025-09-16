import { useEffect, useRef } from "react";
import "../assets/css/hero.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef(null);
  const moonRef = useRef(null);
  const mergeRef = useRef(null);
  const overlayRef = useRef(null);
  const heroTextRef = useRef(null);
  const unstoppableRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Kill existing ScrollTriggers
    ScrollTrigger.getAll().forEach((t) => t.kill());

    const isMobile = window.matchMedia("(max-width: 900px)").matches;

    const moonMove = isMobile ? -90 : -240;
    const mergeMove = isMobile ? -50 : -140;
    const overlayMove = isMobile ? -70 : -180;
    const unstoppableMove = isMobile ? 40 : 220;
    const heroTextSlow = isMobile ? 10 : 30;

    // Wait for next frame to ensure DOM is ready
    const initAnimation = () => {
      const ctx = gsap.context(() => {
        // Set initial positions to avoid flash
        gsap.set(
          [
            moonRef.current,
            mergeRef.current,
            overlayRef.current,
            unstoppableRef.current,
            heroTextRef.current,
          ],
          {
            y: 0,
          }
        );

        // Create timeline with ScrollTrigger
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.7,
            invalidateOnRefresh: true, // Recalculate on window resize
            // markers: true, // Uncomment for debugging
          },
        });

        // Add animations to timeline
        tl.to(moonRef.current, { y: moonMove, ease: "none" }, 0)
          .to(mergeRef.current, { y: mergeMove, ease: "none" }, 0)
          .to(overlayRef.current, { y: overlayMove, ease: "none" }, 0)
          .to(unstoppableRef.current, { y: unstoppableMove, ease: "none" }, 0)
          .to(heroTextRef.current, { y: heroTextSlow, ease: "none" }, 0);

        // Refresh ScrollTrigger after setup
        ScrollTrigger.refresh();
      }, sectionRef);

      return ctx;
    };

    // Initialize after a small delay to ensure all refs are set
    const timeoutId = setTimeout(() => {
      const ctx = initAnimation();

      return () => {
        clearTimeout(timeoutId);
        ctx.revert();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    }, 100);

    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="hero" ref={sectionRef}>
      <div className="hero-content">
        <picture>
          <source
            srcSet="images/mob-moon.webp 440w"
            media="(max-width: 768px)"
            type="image/webp"
          />
          <img
            ref={moonRef}
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

        <div className="hero-text" id="hero-text" ref={heroTextRef}>
          <img src="images/lens.webp" id="lens" alt="Lens Effect" />
          <p ref={unstoppableRef}>Infinite Possibilities & Limitless Growth</p>
          <h2 ref={unstoppableRef}>UNSTOPPABLE</h2>
        </div>

        <div
          className="overlay-text"
          id="overlay-text"
          ref={overlayRef}
          aria-hidden={false}
        >
          <h2>
            Strategy <span>l</span> Creativity <span>l</span> Impact
          </h2>
          <p>unlock new realms</p>
          <a
            href="#dna_form"
            className="overlay-btn"
            aria-label="Go to DNA form"
          >
            <img src="images/dArrow.webp" alt="down arrow" />
          </a>
        </div>
      </div>

      <div className="moon-merge" id="merge" ref={mergeRef}></div>
    </section>
  );
};

export default Hero;

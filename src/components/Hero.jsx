import { useEffect, useRef } from "react";
import "../assets/css/hero.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Hero = ({ triggerAnimation = false }) => {
  const sectionRef = useRef(null);
  const moonRef = useRef(null);
  const mergeRef = useRef(null);
  const overlayRef = useRef(null);
  const heroTextRef = useRef(null);
  const unstoppableWrapperRef = useRef(null);

  useEffect(() => {
    if (!triggerAnimation) return; // 🚀 only animate after splash is done

    gsap.fromTo(
      sectionRef.current,
      { autoAlpha: 0 }, // hidden
      { autoAlpha: 1, duration: 1.2, ease: "power2.out" }
    );
    if (typeof window === "undefined") return;

    ScrollTrigger.getAll().forEach((t) => t.kill());

    const isMobile = window.matchMedia("(max-width: 900px)").matches;
    const moonMove = isMobile ? -90 : -240;
    const overlayMove = isMobile ? -70 : -180;
    const unstoppableMove = isMobile ? 40 : 220;
    const heroTextSlow = isMobile ? 10 : 30;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        [moonRef.current, mergeRef.current, overlayRef.current],
        { y: 300 },
        { y: 0, duration: 1.5, ease: "power3.out" }
      );

      gsap.fromTo(
        unstoppableWrapperRef.current,
        { scale: 0.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: "back.out(1.7)" }
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.7,
          invalidateOnRefresh: true,
        },
      });

      tl.to(
        [moonRef.current, mergeRef.current],
        { y: moonMove, ease: "none" },
        0
      )
        .to(overlayRef.current, { y: overlayMove, ease: "none" }, 0)
        .to(
          unstoppableWrapperRef.current,
          { y: unstoppableMove, ease: "none" },
          0
        )
        .to(heroTextRef.current, { y: heroTextSlow, ease: "none" }, 0);

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [triggerAnimation]);
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
            srcSet="/images/mob-moon.webp 440w"
            media="(max-width: 768px)"
            type="image/webp"
          />
          <img
            ref={moonRef}
            src="/images/brightMoon.webp"
            srcSet="/images/mob-moon.webp 440w, /images/brightMoon.webp 1440w"
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
          <img src="/images/lens.webp" id="lens" alt="Lens Effect" />
          <div ref={unstoppableWrapperRef} className="unstoppable-wrapper">
            <p>Infinite Possibilities & Limitless Growth</p>
            <h2>UNSTOPPABLE</h2>
          </div>
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
            onClick={(e) => {
              e.preventDefault();
              gsap.to(window, {
                duration: 1.5,
                scrollTo: "#dna_form",
                ease: "power2.inOut",
              });
            }}
          >
            <img src="/images/dArrow.webp" alt="down arrow" />
          </a>
        </div>
      </div>

      <div className="moon-merge" id="merge" ref={mergeRef}></div>
    </section>
  );
};

export default Hero;

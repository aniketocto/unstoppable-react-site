import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "../assets/css/sectionSnap.css";
import { FaArrowRightLong } from "react-icons/fa6";
import LazyVideo from "./LazyVideo";

const SectionSnap = () => {
  const cursorRef = useRef(null);
  const observerRef = useRef(null);
  const activeSectionRef = useRef(null);
  const scrollRef = useRef(null);
  const isAnimatingRef = useRef(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const cursor = cursorRef.current;
    const scrollEl = scrollRef.current;
    if (!scrollEl) return; // guard

    const sections = Array.from(document.querySelectorAll(".snap_section"));
    const total = sections.length;

    const scrollToIndex = (idx) => {
      if (!scrollEl || isAnimatingRef.current) return;
      if (idx === currentIndex) return;

      const h = scrollEl.clientHeight;
      const target = idx * h;

      isAnimatingRef.current = true;
      const prevSnap = scrollEl.style.scrollSnapType;
      scrollEl.style.scrollSnapType = "none";

      const targetSection = sections[idx];
      const prevSection = sections[currentIndex];

      const img =
        targetSection && targetSection.querySelector("img.img-animate");
      const prevImg =
        prevSection && prevSection.querySelector("img.img-animate");

      const fromBottom =
        targetSection && targetSection.querySelector(".from-bottom");
      const prevFromBottom =
        prevSection && prevSection.querySelector(".from-bottom");

      if (img) gsap.killTweensOf(img);
      if (prevImg) gsap.killTweensOf(prevImg);
      if (fromBottom) gsap.killTweensOf(fromBottom);
      if (prevFromBottom) gsap.killTweensOf(prevFromBottom);
      const ease = "power2.inOut";
      const tl = gsap.timeline({
        onComplete: () => {
          scrollEl.style.scrollSnapType = prevSnap || "y mandatory";
          setCurrentIndex(idx);
          isAnimatingRef.current = false;
        },
      });

      // animate scroll (GSAP)
      tl.to(
        scrollEl,
        {
          scrollTop: target,
          duration: 1.2,
          ease,
        },
        0
      );

      if (img) {
        tl.fromTo(
          img,
          { scale: 0.2, y: -8, opacity: 0.9 },
          { scale: 1, y: 0, opacity: 1, duration: 1.2, ease },
          0
        );
      }

      if (fromBottom) {
        tl.fromTo(
          fromBottom,
          { scale: 0.09, y: 24, opacity: 0.85 },
          { scale: 1, y: 0, opacity: 1, duration: 1.5, ease },
          0
        );
      }
    };

    // click handler -> keep the animated advance
    const onClickAdvance = (e) => {
      if (!activeSectionRef.current || isAnimatingRef.current) return;
      const next = currentIndex === total - 1 ? 0 : currentIndex + 1;
      scrollToIndex(next);
    };

    const moveCursor = (e) => {
      if (!activeSectionRef.current) return;
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.12,
        ease: "power2.out",
      });
    };

    const onWheel = (e) => {
      if (isAnimatingRef.current) {
        e.preventDefault();
        return;
      }
    };

    scrollEl.addEventListener("wheel", onWheel, { passive: false });
    scrollEl.addEventListener("click", onClickAdvance);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            activeSectionRef.current = entry.target;
            const idx = sections.indexOf(entry.target);
            if (idx >= 0) setCurrentIndex(idx);

            if (window.matchMedia("(pointer: fine)").matches) {
              gsap.to(cursor, { opacity: 1, scale: 1, duration: 0.25 });
              window.addEventListener("mousemove", moveCursor);
            }
          } else if (
            activeSectionRef.current === entry.target &&
            !entry.isIntersecting
          ) {
            activeSectionRef.current = null;
            gsap.to(cursor, { opacity: 0, scale: 0.6, duration: 0.2 });
            window.removeEventListener("mousemove", moveCursor);
          }
        });
      },
      { root: null, threshold: [0.6] }
    );

    sections.forEach((s) => observerRef.current.observe(s));

    const onResize = () => {
      // keep position stable on resize (instant)
      scrollEl.scrollTo({
        top: currentIndex * scrollEl.clientHeight,
        behavior: "auto",
      });
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      scrollEl.removeEventListener("click", onClickAdvance);
      scrollEl.removeEventListener("wheel", onWheel);
      window.removeEventListener("resize", onResize);
      if (observerRef.current) {
        sections.forEach((s) => observerRef.current.unobserve(s));
        observerRef.current.disconnect();
      }
    };
  }, [currentIndex]);

  return (
    <section className="main_snap_container">
      <div ref={scrollRef} className="snap_scroll">
        {/* Section 1 */}
        <div className="snap_section snap_container_1">
          <img src="/images_1/snap1.png" alt="" />
          <h1 className="snap_container_1-heading">
            Not a Service Provider, <br />
            Your true G<span>ro</span>wth Partner
          </h1>
          <p className="snap_container_1-text">
            Between where you are and where you're meant to be lies a GAP of
            visibility, acquisition, and structure.
          </p>
        </div>

        {/* Section 2 */}
        <div className="snap_section snap_container_2">
          <img src="/images_1/snap2.png" className="img-animate" alt="" />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <p className="snap_container_2-text">
            That's where we operate. We combine strategy, creativity, and
            technology to bridge that distance turning hidden potential into
            visible momentum and sustained growth. We're the catalyst that helps
            businesses evolve from ambition to achievement.
          </p>
          <br />
          <p className="snap_container_2-text-2">
            We don't just build brands, we build legacies.
          </p>
          <br />
          <button className="cta cta-snap">
            Let's Build Together <FaArrowRightLong />
          </button>
        </div>

        {/* Section 3 */}
        <div className="snap_section snap_container_3">
          <div className="video-snap from-bottom">
            <LazyVideo />
          </div>
        </div>
      </div>

      {/* Custom CTA Cursor */}
      <div ref={cursorRef} className="cta-cursor">
        Please Click Anywhere
      </div>
    </section>
  );
};

export default SectionSnap;

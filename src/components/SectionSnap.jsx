import { useEffect, useRef } from "react";
import gsap from "gsap";
import "../assets/css/sectionSnap.css";
import { FaArrowRightLong } from "react-icons/fa6";
import LazyVideo from "./LazyVideo";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionSnap = () => {
  const rootRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const sec3Ref = useRef(null); // ref for 3rd section

  useEffect(() => {
    const root = rootRef.current;
    const left = leftRef.current;
    const right = rightRef.current;
    const sec3 = sec3Ref.current;

    if (!root || !left || !right || !sec3) return;

    // --- existing section 2 animations ---
    const sec2 = root.querySelector(".snap_container_2");
    const headingEl = root.querySelector(".snap_container_1-content");
    if (!sec2) return;

    const commonST = {
      trigger: sec2,
      start: "top 85%",
      end: "top 35%",
      scrub: 0.8,
      // markers: true,
    };

    const leftAnim = gsap.to(left, {
      rotationY: 10,
      transformOrigin: "left center",
      xPercent: -2,
      yPercent: -19,
      ease: "none",
      scrollTrigger: commonST,
      immediateRender: false,
    });

    const rightAnim = gsap.to(right, {
      rotationY: -10,
      transformOrigin: "right center",
      xPercent: 2,
      yPercent: -19,
      ease: "none",
      scrollTrigger: commonST,
      immediateRender: false,
    });

    if (headingEl) {
      gsap.to(headingEl, {
        yPercent: -100,
        opacity: 1,
        ease: "none",
        immediateRender: false,
        scrollTrigger: {
          trigger: headingEl,
          start: "top 10%",
          end: "top 45%",
          scrub: 0.8,
        },
      });
    }

    const sec2Items = sec2.querySelectorAll(
      ".snap_container_2-text, .snap_container_2-text-2"
    );

    if (sec2Items && sec2Items.length) {
      const t2 = gsap.timeline({
        scrollTrigger: {
          trigger: sec2,
          start: "top 30%",
          // markers: true,
        },
      });
      t2.fromTo(
        sec2Items,
        {
          y: 502,
          opacity: 0,
          scale: 0.96,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1.35,
          duration: 0.18,
          stagger: 0.102,
          ease: "power2.out",
        }
      ).to(sec2Items, {
        scale: 1,
        duration: 0.18,
        stagger: 0.12,
        ease: "power2.out",
      });

      const curtainHolder = root.querySelector(".curtain_holder");
      if (curtainHolder) {
        gsap.to(curtainHolder, {
          scale: 1.05,
          transformOrigin: "center center",
          ease: "none",
          scrollTrigger: {
            trigger: sec2,
            start: "top 35%",
            end: "top 35%",
            scrub: 0.8,
            // markers: true,
          },
        });
      }
    }

    // --- NEW: animation for Section 3 (video) ---
    // We'll animate the whole section container from small & slightly offset to full size.
    const sec3Container = sec3; // ref points to .snap_container_3
    const videoEl = sec3Container.querySelector("video") || null;

    const sec3TL = gsap.timeline({
      scrollTrigger: {
        trigger: sec3Container,
        start: "top 80%", // tweak to taste
        end: "top 30%",
        scrub: 0.9,
        // markers: true,
      },
    });

    // container scale + vertical offset to create the "pop into center then grow" effect
    sec3TL.fromTo(
      sec3Container,
      {
        scale: 0.62,
        yPercent: 18,
        opacity: 0.95,
        transformOrigin: "center center",
      },
      {
        scale: 1,
        yPercent: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1,
        immediateRender: false,
      }
    );

    // subtle pop on the video element itself for perceived smoothness
    if (videoEl) {
      gsap.fromTo(
        videoEl,
        { scale: 0.98 },
        {
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sec3Container,
            start: "top 76%",
            end: "top 35%",
            scrub: 0.9,
            // markers: true,
          },
        }
      );
    }

    // --- cleanup ---
    return () => {
      try {
        leftAnim && leftAnim.kill && leftAnim.kill();
        rightAnim && rightAnim.kill && rightAnim.kill();
        sec3TL && sec3TL.kill && sec3TL.kill();
        ScrollTrigger.getAll().forEach((st) => st.kill());
      } catch (e) {
        // ignore cleanup errors
      }
    };
  }, []); // run once on mount

  return (
    <section className="main_snap_container" ref={rootRef}>
      <div className="snap_scroll">
        {/* Section 1 */}
        <div className="snap_section snap_container_1">
          <div className="curtain_holder">
            <div className="curtain curtain-1" ref={leftRef}></div>
            <div className="curtain curtain-2" ref={rightRef}></div>
          </div>
          <div className="snap_container_1-content z-10 flex justify-center items-center flex-col w-full">
            <h1 className="snap_container_1-heading">
              Not a Service Provider, <br />
              Your true G<span>ro</span>wth Partner
            </h1>
            <p className="snap_container_1-text">
              Between where you are and where you're meant to be lies a GAP of
              visibility, acquisition, and structure.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="snap_section snap_container_2">
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="snap_container_2-content z-10 flex justify-center items-center flex-col w-full">
            <p className="snap_container_2-text">
              That's where we operate. We combine strategy, creativity, and
              technology to bridge that distance turning hidden potential into
              visible momentum and sustained growth. We're the catalyst that
              helps businesses evolve from ambition to achievement.
            </p>
            <br />
            <p className="snap_container_2-text-2">
              We don't just build brands, we build legacies.
            </p>
          </div>
          <br />
        </div>

        {/* Section 3 (video) - NOTE: use consistent class name snap_container_3 */}
        <div
          className="snap_section snap_container_3"
          ref={sec3Ref}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LazyVideo />
        </div>
      </div>
    </section>
  );
};

export default SectionSnap;

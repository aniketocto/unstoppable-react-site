import { useRef, useEffect } from "react";
import gsap from "gsap";
import "../assets/css/caseStudies.css";
import CarouselFlip from "./CarouselFlip";

const CaseStudies = () => {
  const btnRef = useRef(null);
  const pointerIdRef = useRef(null);
  const origin = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    // make sure initial transform origin and rotation are consistent
    gsap.set(btn, { x: 0, y: 0, rotation: 10 });

    function onPointerDown(e) {
      // capture pointer so move/up still fire outside the element
      pointerIdRef.current = e.pointerId;
      btn.setPointerCapture(pointerIdRef.current);

      // record origin (current transforms considered zero)
      origin.current = { x: 0, y: 0 };

      // stop any current snap-back tween
      gsap.killTweensOf(btn);

      btn.classList.add("dragging");
    }

    function onPointerMove(e) {
      if (pointerIdRef.current !== e.pointerId) return;

      // compute drag relative to origin; limit drag amount for nicer feel
      const max = 120; // px
      const dx = Math.max(Math.min(e.movementX + (btn._dragX || 0), max), -max);
      const dy = Math.max(
        Math.min(e.movementY + (btn._dragY || 0), max / 2),
        -max / 2
      );

      // store cumulative so movementX adds each move
      btn._dragX = (btn._dragX || 0) + e.movementX;
      btn._dragY = (btn._dragY || 0) + e.movementY;

      // small rotation change based on x
      const rot = 10 + (btn._dragX || 0) * 0.08;

      // set without easing for instant follow
      gsap.set(btn, { x: btn._dragX, y: btn._dragY, rotation: rot });
    }

    function onPointerUp(e) {
      if (pointerIdRef.current !== e.pointerId) return;

      try {
        btn.releasePointerCapture(pointerIdRef.current);
      } catch (err) {
        // do nothing
        console.log(err);
      }
      pointerIdRef.current = null;
      btn.classList.remove("dragging");

      // snap back to original position with an elastic ease
      gsap.to(btn, {
        duration: 1.1,
        x: 0,
        y: 0,
        rotation: 10,
        ease: "elastic.out(1, 0.6)",
        onComplete: () => {
          // clear stored movement
          btn._dragX = 0;
          btn._dragY = 0;
        },
      });
    }

    // pointer events
    btn.addEventListener("pointerdown", onPointerDown);
    btn.addEventListener("pointermove", onPointerMove);
    btn.addEventListener("pointerup", onPointerUp);
    btn.addEventListener("pointercancel", onPointerUp);
    btn.addEventListener("pointerleave", onPointerUp);

    // cleanup
    return () => {
      btn.removeEventListener("pointerdown", onPointerDown);
      btn.removeEventListener("pointermove", onPointerMove);
      btn.removeEventListener("pointerup", onPointerUp);
      btn.removeEventListener("pointercancel", onPointerUp);
      btn.removeEventListener("pointerleave", onPointerUp);
    };
  }, []);

  return (
    <>
      <section className="case_study-section">
        <h1 className="case_study-heading">
          From V<span>is</span>ion to Velocity
          <button
            ref={btnRef}
            className="cta-interact"
            aria-label="Case Studies"
          >
            Case Studies
          </button>
        </h1>
        <p className="case_study-text">
          Real stories of businesses that closed their GAP and became
          unstoppable.
        </p>
      </section>
      <CarouselFlip />
    </>
  );
};

export default CaseStudies;

import React, { useEffect, useState } from "react";

const SplashScreen = ({ onComplete }) => {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const styleSheet = document.createElement("style");
    document.head.appendChild(styleSheet);

    const logoSpans = document.querySelectorAll(".logo1");

    // Step 1: Activate letters one by one with stagger effect
    logoSpans.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (idx + 1) * 120);
    });

    // Step 2: Hold the logo for a moment, then fade letters
    setTimeout(() => {
      logoSpans.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, idx * 80);
      });
    }, 2200);

    // Step 3: Trigger theater reveal effect
    setTimeout(() => {
      setIsComplete(true);
      const intro = document.querySelector(".intro");
      if (intro) {
        intro.classList.add("reveal");
      }
    }, 3800);

    // Step 4: Call completion callback after animation
    setTimeout(() => {
      if (onComplete) {
        onComplete();
      }
    }, 5300);

    // Cleanup styles on unmount
    return () => {
      if (styleSheet && styleSheet.parentNode) {
        styleSheet.parentNode.removeChild(styleSheet);
      }
    };
  }, [onComplete]);

  return (
    <div className={`intro ${isComplete ? "reveal" : ""}`}>
      <div className="background-pattern"></div>

      <div className="logo-container">
        <h1 className="logo-header">
          <span className="logo1 brand-red">Un</span>
          <span className="logo1">stoppable</span>
        </h1>

        <div className="tagline">
          <span className="tagline-text">Creative Agency</span>
        </div>
      </div>

      <div className="loading-indicator">
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;

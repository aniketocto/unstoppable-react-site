import React, { useRef } from "react";
import "../assets/css/companies.css";

const Companies = () => {
  const logos = [
    "images_1/logo1.png",
    "images_1/logo2.png",
    "images_1/logo3.png",
    "images_1/logo4.png",
    "images_1/logo5.png",
    "images_1/logo6.png",
    "images_1/logo7.png",
  ];

  const trackRef = useRef(null);

  const setPlaybackRate = (rate) => {
    const el = trackRef.current;
    if (!el) return;
    const anims = el.getAnimations?.() || [];
    if (anims.length) {
      anims.forEach((anim) => {
        anim.playbackRate = rate;
      });
    } else {
      el.style.animationDuration = rate === 1 ? "35s" : `${35 / rate}s`;
    }
  };
  return (
    <div
      className="logos"
      onMouseEnter={() => setPlaybackRate(0.5)}
      onMouseLeave={() => setPlaybackRate(2)}
    >
      <div className="logos-track" ref={trackRef}>
        {logos.map((src, i) => (
          <img key={`a-${i}`} src={src} alt={`logo-${i}`} />
        ))}
        {logos.map((src, i) => (
          <img key={`b-${i}`} src={src} alt={`logo-dup-${i}`} />
        ))}
      </div>
    </div>
  );
};

export default Companies;

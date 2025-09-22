import React, { useEffect, useState } from "react";
import { FaArrowUp, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="floating-buttons">
          <a
            href="https://wa.me/919833022443?text=Hi%20there%2C%20I%20visited%20your%20website!"
            target="_blank"
            rel="noopener noreferrer"
            className="floating-btn whatsapp-btn"
          >
            <FaWhatsapp />
          </a>
        </div>
      )}
    </>
  );
};

export default FloatingButtons;

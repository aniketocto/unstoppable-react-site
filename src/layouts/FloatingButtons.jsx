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
    <div className="floating-buttons">
      {/* <a href="tel:9833022443" className="floating-btn phone-btn">
        <FaPhoneAlt />
      </a> */}

      <a
        href="https://wa.me/919833022443"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn whatsapp-btn"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default FloatingButtons;

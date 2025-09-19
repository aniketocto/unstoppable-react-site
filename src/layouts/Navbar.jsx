import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import "../assets/css/header.css";
import { FaXmark } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef(null);
  const playPauseBtnRef = useRef(null);

  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;
    const triggerAudio = () => {
      if (audio.paused) {
        audio.play().catch(() => {});
      }
      document.removeEventListener("click", triggerAudio);
      document.removeEventListener("scroll", triggerAudio);
    };

    document.addEventListener("click", triggerAudio);
    document.addEventListener("scroll", triggerAudio, { passive: true });

    return () => {
      document.removeEventListener("click", triggerAudio);
      document.removeEventListener("scroll", triggerAudio);
    };
  }, []);

  const smoothScroll = (e, target) => {
    e.preventDefault();
    setIsMenuOpen(false);
    gsap.to(window, {
      duration: 1.5,
      scrollTo: target,
      ease: "power2.inOut",
    });
  };

  return (
    <header className={`header ${isHidden ? "hide" : ""}`}>
      <nav className="navbar">
        <Link to="/">
          <img
            src="images/Logo.webp"
            alt="Unstoppable Creative Agency logo in bold modern font."
            className="logo"
            width={250}
            height={100}
          />
        </Link>

        <ul className="nav-links">
          <li>
            <NavLink to="/" className="nav-item">
              {({ isActive }) => (
                <>
                  <span className={`text ${isActive ? "active" : ""}`}>
                    Home
                  </span>
                  <span className="text-hover">Home</span>
                </>
              )}
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className="nav-item">
              {({ isActive }) => (
                <>
                  <span className={`text ${isActive ? "active" : ""}`}>
                    About Us
                  </span>
                  <span className="text-hover">About Us</span>
                </>
              )}
            </NavLink>
          </li>

          <li>
            <a
              className="nav-item"
              href="#our-work"
              onClick={(e) => smoothScroll(e, "#our-work")}
            >
              <span className="text">Our Work</span>
              <span className="text-hover">Our Work</span>
            </a>
          </li>

          <li>
            <a
              className="nav-item"
              href="#experties"
              onClick={(e) => smoothScroll(e, "#experties")}
            >
              <span className="text">Expertise</span>
              <span className="text-hover">Expertise</span>
            </a>
          </li>
          <li>
            <NavLink to="/blogs" className="nav-item">
              {({ isActive }) => (
                <>
                  <span className={`text ${isActive ? "active" : ""}`}>
                    Blogs
                  </span>
                  <span className="text-hover">Blogs</span>
                </>
              )}
            </NavLink>
          </li>
        </ul>

        <div className="navbar-right">
          <a className="nav-cta" href="tel:9833022443">
            <img
              src="/images/btncta.webp"
              width="21"
              height="20"
              alt="CTA button with Strategy, Creativity, Impact by Unstoppable Creative Agency."
            />
            9833022443
          </a>
          <div
            ref={playPauseBtnRef}
            id="playPauseBtn"
            className={isAudioPlaying ? "playing" : "paused"}
            onClick={() => {
              const audio = audioRef.current;
              if (!audio) return;
              if (audio.paused) {
                audio.play();
              } else {
                audio.pause();
              }
            }}
          >
            <div className="bar bar1"></div>
            <div className="bar bar2"></div>
            <div className="bar bar3"></div>
          </div>
          <div className="toggle_btn" onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaXmark className="menu-bar" />
            ) : (
              <HiMenu className="menu-bar" />
            )}
          </div>
        </div>
      </nav>

      <audio
        ref={audioRef}
        preload="none"
        loop
        onPlay={() => setIsAudioPlaying(true)}
        onPause={() => setIsAudioPlaying(false)}
      >
        <source src="/audio/femaleAudio.mp3" type="audio/mpeg" />
      </audio>

      <div className={`dropdown-menu ${isMenuOpen ? "active" : ""}`}>
        <li>
          <Link
            to="/"
            className="nav-item"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="nav-item"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
        </li>
        <li>
          <a
            href="#ourworks"
            className="nav-item"
            onClick={() => setIsMenuOpen(false)}
          >
            Our work
          </a>
        </li>
        <li>
          <a
            href="#experties"
            className="nav-item"
            onClick={(e) => {
              e.preventDefault();
              setIsMenuOpen(false);
              gsap.to(window, {
                duration: 1.5, // scroll speed (seconds)
                scrollTo: "#dna_form", // target section
                ease: "power2.inOut", // smooth easing
              });
            }}
          >
            Expertise
          </a>
        </li>
        <li>
          <Link
            to="/blogs"
            className="nav-item"
            onClick={() => setIsMenuOpen(false)}
          >
            Blogs
          </Link>
        </li>
      </div>
    </header>
  );
};

export default Navbar;

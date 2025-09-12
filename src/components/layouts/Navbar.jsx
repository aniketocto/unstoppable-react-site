import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import "../../assets/css/header.css";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef(null);
  const playPauseBtnRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const audio = audioRef.current;
    const playPauseBtn = playPauseBtnRef.current;

    if (!audio || !playPauseBtn) return;
    const triggerAudio = () => {
      if (audio.paused) {
        audio.play().catch(() => {});
      }
      document.removeEventListener("click", triggerAudio);
      document.removeEventListener("scroll", triggerAudio);
    };

    document.addEventListener("click", triggerAudio);
    document.addEventListener("scroll", triggerAudio, { passive: true });

    const handlePlayPause = () => {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    };
    playPauseBtn.addEventListener("click", handlePlayPause);

    const handlePause = () => {
      setIsAudioPlaying(false);
      playPauseBtn.classList.remove("playing");
      playPauseBtn.classList.add("paused");
    };

    const handlePlay = () => {
      setIsAudioPlaying(true);
      playPauseBtn.classList.add("playing");
      playPauseBtn.classList.remove("paused");
    };

    audio.addEventListener("pause", handlePause);
    audio.addEventListener("play", handlePlay);

    return () => {
      document.removeEventListener("click", triggerAudio);
      document.removeEventListener("scroll", triggerAudio);
      playPauseBtn?.removeEventListener("click", handlePlayPause);
      audio?.removeEventListener("pause", handlePause);
      audio?.removeEventListener("play", handlePlay);
    };
  }, []);

  return (
    <header className="header">
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
            <a href="#our-work" className="nav-item">
              <span className="text">Our Work</span>
              <span className="text-hover">Our Work</span>
            </a>
          </li>

          <li>
            <a href="#experties" className="nav-item">
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
          <div ref={playPauseBtnRef} id="playPauseBtn">
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

      <audio ref={audioRef} preload="none" loop>
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
            onClick={() => setIsMenuOpen(false)}
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

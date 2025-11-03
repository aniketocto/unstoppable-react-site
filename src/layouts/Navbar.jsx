import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import "../assets/css/header.css";
import { FaXmark } from "react-icons/fa6";
import gsap from "gsap";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let hideTimeout;

    const handleScroll = () => {
      if (window.scrollY === 0) {
        // At the very top → always show
        setIsHidden(false);
        if (hideTimeout) clearTimeout(hideTimeout);
        return;
      }

      if (window.scrollY > lastScrollY) {
        // scrolling down → hide immediately
        setIsHidden(true);
      } else {
        // scrolling up → show first
        setIsHidden(false);

        // clear any old timer
        if (hideTimeout) clearTimeout(hideTimeout);

        // auto-hide after 3s
        hideTimeout = setTimeout(() => {
          setIsHidden(true);
        }, 3000);
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (hideTimeout) clearTimeout(hideTimeout);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const smoothScroll = (target) => {
    navigate("/");
    setIsMenuOpen(false);
    setTimeout(() => {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: target,
        ease: "power2.inOut",
      });
    }, 100);
  };

  return (
    <header className={`header ${isHidden ? "hide" : ""}`}>
      <nav className="navbar">
        <Link to="/">
          <img
            src="/images_1/usp_logo.png"
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
            <NavLink to="/about-us" className="nav-item">
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
            Login
          </a>
          <a className="nav-cta" style={{backgroundColor: "#AF0300"}} href="tel:9833022443">
            Register
            <FaUser />
          </a>
          <div className="toggle_btn" onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaXmark className="menu-bar" />
            ) : (
              <HiMenu className="menu-bar" />
            )}
          </div>
        </div>
      </nav>

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
            to="/about-us"
            className="nav-item"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
        </li>
        <li>
          <a
            href="/#ourworks"
            className="nav-item"
            onClick={() => setIsMenuOpen(false)}
          >
            Our work
          </a>
        </li>
        <li>
          <a
            href="/#experties"
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

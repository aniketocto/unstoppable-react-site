import { Link } from "react-router-dom";
import "../assets/css/footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { BsEnvelopeAt } from "react-icons/bs";
import gsap from "gsap";
import { FormWrapper } from "../components/FormWrapper";

const Footer = () => {
  const smoothScroll = (e, target) => {
    e.preventDefault();
    gsap.to(window, {
      duration: 1.5,
      scrollTo: target,
      ease: "power2.inOut",
    });
  };

  return (
    <footer>
      <div className="footer-main">
        <div className="social-row">
          <img
            src="/images_1/usp_logo.png"
            alt="Unstoppable Creative Agency logo in bold modern font."
            className="logo"
            width={250}
            height={100}
          />
          <p>
            B/50, 5th Floor, Off New Link Rd, Andheri West, Mumbai, Maharashtra
            400053
          </p>
          <div className="contacts">
            <a href="tel:+919833022443">
              <FaPhoneAlt />
              <span> +91 9833022443</span>
            </a>
            <a href="mailto:connect@getunstoppable.in">
              <BsEnvelopeAt />
              <span>connect@getunstoppable.in</span>
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://www.facebook.com/getunstoppable/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/get_unstoppable/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/getunstoppable/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="menu-row">
          <h3>Quick Links</h3>
          <Link to="/about-us">About Us</Link>
          <a href="#our-work" onClick={(e) => smoothScroll(e, "#our-work")}>
            Our Work
          </a>
          <a href="#experties" onClick={(e) => smoothScroll(e, "#experties")}>
            Expertise
          </a>
          <Link to="/career">Career</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/" className=" hidden md:block opacity-0">
            Terms & Conditions
          </Link>
        </div>

        <div className="menu-row">
          <h3>Accessibility</h3>
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Disclaimer</Link>
          <Link to="/">Terms & Conditions</Link>
          <Link to="/" className=" opacity-0 hidden md:block">
            Terms & Conditions
          </Link>
          <Link to="/" className=" opacity-0 hidden md:block">
            Terms & Conditions
          </Link>
          <Link to="/" className=" opacity-0 hidden md:block">
            Terms & Conditions
          </Link>
        </div>

        <div className="form-row">
          <FormWrapper />
        </div>
        <div className="copyright">
          <p>&copy; 2025 Unstoppable Creative Agency. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

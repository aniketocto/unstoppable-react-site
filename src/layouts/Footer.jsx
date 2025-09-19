import { Link } from "react-router-dom";
import "../assets/css/footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { BsEnvelopeAt } from "react-icons/bs";
import { useState } from "react";
import toast from "react-hot-toast";
import gsap from "gsap";

const Footer = () => {
  const [formData, setFormData] = useState({
    newsletter_email: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const smoothScroll = (e, target) => {
    e.preventDefault();
    gsap.to(window, {
      duration: 1.5,
      scrollTo: target,
      ease: "power2.inOut",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!e.target.checkValidity()) {
      e.target.reportValidity();
      return;
    }

    setIsSubmitting(true);

    const formDataToSend = new FormData();
    formDataToSend.append("newsletter_email", formData.newsletter_email);
    formDataToSend.append("formType", "newsletterForm");

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwG-XttXFbFUwHC1HDyHujNsSlhrSI3B7-USKEwPamukk2Ooza7TSdWwF1Yy-SqCoKjqg/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: formDataToSend,
        }
      );

      // Navigate to thank you page or show success message
      toast.success("Thank you for subscribing to our newsletter!");
      setFormData({ newsletter_email: "" });
    } catch (error) {
      toast.error("Error submitting form. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer>
      <hr />
      <div className="footer-main">
        <div className="social-row">
          <img
            src="images/Logo.webp"
            alt="Unstoppable Creative Agency logo in bold modern font."
            className="logo"
            width={250}
            height={100}
          />
          <div className="links">
            <p>
              B/50, 5th Floor, Off New Link Rd, Andheri West, Mumbai,
              Maharashtra 400053
            </p>
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
        </div>

        <div className="menu-row">
          <h3>Quick Links</h3>
          <Link to="/about">About Us</Link>
          <a href="#our-work" onClick={(e) => smoothScroll(e, "#our-work")}>
            Our Work
          </a>
          <a href="#experties" onClick={(e) => smoothScroll(e, "#experties")}>
            Expertise
          </a>
          <Link to="/career">Career</Link>
          <Link to="/blogs">Blogs</Link>
        </div>

        <div className="form-row">
          <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
          <form className="footer-form" onSubmit={handleSubmit}>
            <input
              className="footer-email"
              type="email"
              autoComplete="on"
              name="newsletter_email"
              required
              placeholder="Enter Your Email"
              value={formData.newsletter_email}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="footer-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting" : "Submit"}
            </button>
          </form>
        </div>
      </div>
      <hr className="footer-hr" />
      <div className="copyright">
        <p>
          &copy; Copyright 2025, All Rights Reserved by
          <span className="text-[#e43941]"> Unstoppable</span> Solutions LLP.
        </p>
        <Link to="/privacy-policy">Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;

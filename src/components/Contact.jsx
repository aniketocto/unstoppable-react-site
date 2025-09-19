import { useState } from "react";
import "../assets/css/contact.css";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    fname: "",
    company: "",
    email: "",
    contact: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    formDataToSend.append("fname", formData.fname);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("contact", formData.contact);
    formDataToSend.append("company", formData.company);
    formDataToSend.append("formType", "mainContactForm");

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwG-XttXFbFUwHC1HDyHujNsSlhrSI3B7-USKEwPamukk2Ooza7TSdWwF1Yy-SqCoKjqg/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: formDataToSend,
        }
      );

      toast.success("Thank you, we will get back to you!");
      setFormData({ fname: "", email: "", contact: "", company: "" });
    } catch (error) {
      toast.error("Error submitting form. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="home-cta">
      <div className="form-container">
        <div className="form-section">
          <h2 className="contact-header">Let us be your co-pilot</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                autoComplete="name"
                name="fname"
                required
                placeholder="Full Name"
                value={formData.fname}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="company">Company Name</label>
              <input
                type="text"
                autoComplete="name"
                name="company"
                required
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                placeholder="Phone Number"
                autoComplete="tel"
                name="contact"
                pattern="[6-9]{1}[0-9]{9}"
                maxLength="10"
                required
                onInvalid={(e) =>
                  e.target.setCustomValidity(
                    "Enter a valid 10-digit Indian mobile number"
                  )
                }
                onInput={(e) => e.target.setCustomValidity("")}
                value={formData.contact}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="emailAddress">Email Address</label>
              <input
                type="email"
                autoComplete="email"
                name="email"
                placeholder="Enter your email"
                required
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                onInvalid={(e) =>
                  e.target.setCustomValidity(
                    "Enter a valid email like name@example.com"
                  )
                }
                onInput={(e) => e.target.setCustomValidity("")}
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="cta-button"
              disabled={isSubmitting}
            >
              <p className="uppercase">{isSubmitting ? "Submitting..." : "Fly me to the moon"}</p>
              <img
                src="images/rocket.webp"
                alt="CTA form under Know Your DNA section by Unstoppable Creative Agency."
                width="25px"
              />
            </button>
          </form>
        </div>
      </div>
      <div class="form-img">
        <img
          src="images/astro1.webp"
          loading="lazy"
          width="749"
          height="440"
          alt="Astronaut playing guitar in a flower field under Contact section of Unstoppable Creative Agency."
        />
      </div>
    </section>
  );
};

export default Contact;

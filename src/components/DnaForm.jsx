import { useState } from "react";
import "../assets/css/dnaForm.css";
import toast from "react-hot-toast";

const DnaForm = () => {
  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    contact: "",
    company: "",
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
    formDataToSend.append("formType", "dnaForm");

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
    <section id="dna_form" className="dna-section">
      <div className="dna-section_content">
        <h4>The Unstoppable DNA</h4>
        <h2>
          Powered by vision and fuelled by curiosity, we are dedicated to
          exploring ideas that land with creative velocity. As a leading
          Creative Agency in Mumbai, we have no limits - it&apos;s a race beyond
          infinity.
        </h2>
      </div>

      <div className="form_container dna-form">
        <h2>
          Drop Your Idea
          <br />
          <span>We will Follow Up Soon.</span>
        </h2>
        <form className="dna_form" id="dnaForm" onSubmit={handleSubmit}>
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
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              placeholder="Company Name"
              autoComplete="organization"
              name="company"
              required
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="cta-button" disabled={isSubmitting}>
            <p>{isSubmitting ? "Submitting..." : "GET STARTED NOW"}</p>
            <img
              src="images/rocket.webp"
              alt="CTA form under Know Your DNA section by Unstoppable Creative Agency."
              width="25px"
            />
          </button>
        </form>
      </div>
    </section>
  );
};

export default DnaForm;

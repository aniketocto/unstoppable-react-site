import { useState } from "react";
import "../assets/css/career.css";
import CareerMediaSlider from "./CareerMediaSlider";
import toast from "react-hot-toast";
const CareerForm = () => {
  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    phoneNumber: "",
    resume: null, // File object
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value, // if file input, store File object
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!e.target.checkValidity()) {
      e.target.reportValidity();
      return;
    }

    if (!formData.resume || formData.resume.type !== "application/pdf") {
      toast.error("Please upload a PDF resume.");
      return;
    }

    setIsSubmitting(true);

    // Convert file → base64
    const toBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result.split(",")[1]); // only base64
        reader.onerror = reject;
      });

    try {
      const base64Resume = await toBase64(formData.resume);

      const formDataToSend = new FormData();
      formDataToSend.append("formType", "careerForm"); // identifier
      formDataToSend.append("fname", formData.fname);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phoneNumber", formData.phoneNumber);
      formDataToSend.append("resume", base64Resume);

      await fetch(
        "https://script.google.com/macros/s/AKfycbxsNRPAG3qKpmy5h7h3iB6VJAWE3TxddrkpwA6o8ELCLVPAiuU99DpycgijKMvTkpul/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: formDataToSend,
        }
      );

      toast.success("Thank you, your application has been submitted!");
      setFormData({ fname: "", email: "", phoneNumber: "", resume: null });
      e.target.reset();
    } catch (error) {
      toast.error("Error submitting form. Please try again.");
      console.error("Submission failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="career-form-section">
      <div className="career-form-container">
        <form onSubmit={handleSubmit} className="career-form">
          <h2>Join the Unstoppable Team</h2>
          <p>
            At Unstoppable Creative Agency, we’re more than a workplace - we’re
            a collective of thinkers, designers, strategists, and innovators
            passionate about pushing creative boundaries. If you’re looking for
            an environment where ideas thrive, talent is celebrated, and your
            work can truly make an impact, you’ve found your place.
          </p>

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
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              placeholder="Phone Number"
              autoComplete="tel"
              name="phoneNumber"
              pattern="[6-9]{1}[0-9]{9}"
              maxLength="10"
              required
              onInvalid={(e) =>
                e.target.setCustomValidity(
                  "Enter a valid 10-digit Indian mobile number"
                )
              }
              onInput={(e) => e.target.setCustomValidity("")}
              value={formData.phoneNumber}
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
            <label htmlFor="resume">Upload Resume</label>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              required
              onChange={handleChange}
            />
          </div>
          <span class="file-note">
            * Max file size: 500KB. Allowed formats: PDF only
          </span>

          <button type="submit" className="cta-button" disabled={isSubmitting}>
            <p className="uppercase">
              {isSubmitting ? "Submitting..." : "Fly me to the moon"}
            </p>
            <img
              src="/images/rocket.webp"
              alt="CTA form under Know Your DNA section by Unstoppable Creative Agency."
              width="25px"
            />
          </button>
        </form>
      </div>
      <div class="divider"></div>
      <CareerMediaSlider />
    </section>
  );
};

export default CareerForm;

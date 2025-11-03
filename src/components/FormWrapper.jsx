import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import "../assets/css/formWrapper.css";
import { useState } from "react";

export const FormWrapper = () => {
  //   const [formData, setFormData] = useState({
  //     newsletter_email: "",
  //   });

  //   const [isSubmitting, setIsSubmitting] = useState(false);
  //   const handleChange = (e) => {
  //     setFormData({
  //       ...formData,
  //       [e.target.name]: e.target.value,
  //     });
  //   };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     if (!e.target.checkValidity()) {
  //       e.target.reportValidity();
  //       return;
  //     }

  //     setIsSubmitting(true);

  //     const formDataToSend = new FormData();
  //     formDataToSend.append("newsletter_email", formData.newsletter_email);
  //     formDataToSend.append("formType", "newsletterForm");

  //     try {
  //       await fetch(
  //         "https://script.google.com/macros/s/AKfycbwG-XttXFbFUwHC1HDyHujNsSlhrSI3B7-USKEwPamukk2Ooza7TSdWwF1Yy-SqCoKjqg/exec",
  //         {
  //           method: "POST",
  //           mode: "no-cors",
  //           body: formDataToSend,
  //         }
  //       );

  //       // Navigate to thank you page or show success message
  //       toast.success("Thank you for subscribing to our newsletter!");
  //       setFormData({ newsletter_email: "" });
  //     } catch (error) {
  //       toast.error("Error submitting form. Please try again.");
  //       console.error(error);
  //     } finally {
  //       setIsSubmitting(false);
  //     }
  //   };

  const [open, setOpen] = useState(false);

  return (
    <div className="form-wrapper">
      <div className="form-heading">
        <p className="let-s-build-what-s">
          <span className="text-wrapper">Let’s </span>
          <span className="text-wrapper font-display">B</span>
          <span className="text-wrapper-2">ui</span>
          <span className="text-wrapper">
            ld <br />
            What’s Next
          </span>
        </p>

        <p className="label-text">
          Tell us your biggest challenge and we’ll help you close the GAP.
        </p>
      </div>

      <div className="form">
        <input placeholder="Name" type="text" required />
        <input placeholder="Email" type="email" required />
        <input placeholder="Phone Number" type="tel" required />
        <div className="relative w-full">
          <select
            name="service"
            id="service"
            onFocus={() => setOpen(true)}
            onBlur={() => setOpen(false)}
            required
          >
            <option value="" disabled selected>
              Select Service
            </option>
            <option value="web-development">Web Development</option>
            <option value="mobile-app-development">
              Mobile App Development
            </option>
          </select>
          <span
            className={`absolute right-4 top-1/2 -translate-y-1/2 text-black transition-transform duration-300 ease-in-out ${
              open ? "rotate-180" : "rotate-0"
            }`}
          >
            <FaCaretDown />
          </span>
        </div>
        <textarea placeholder="Your Message" rows="4" required></textarea>
        <a className="nav-cta w-full" style={{backgroundColor: "#AF0300"}}  href="tel:9833022443">
          Start a Project
        </a>
      </div>
    </div>
  );
};

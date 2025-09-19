import { useState } from "react";
import "../assets/css/formModal.css";
import toast from "react-hot-toast";

const FormModal = ({ buttonTitle = "Open Form" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    fname: "",
    whatsappNumber: "",
    email: "",
    contact: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sameAsContact, setSameAsContact] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // If user is editing contact and checkbox is checked → update whatsappNumber too
    if (name === "contact" && sameAsContact) {
      setFormData({
        ...formData,
        contact: value,
        whatsappNumber: value,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    setSameAsContact(checked);

    if (checked) {
      setFormData((prev) => ({
        ...prev,
        whatsappNumber: prev.contact,
      }));
    }
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
    formDataToSend.append("whatsappNumber", formData.whatsappNumber);
    formDataToSend.append("formType", "homePopupForm");

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
      setFormData({ fname: "", email: "", contact: "", whatsappNumber: "" });
      setSameAsContact(false);
    } catch (error) {
      toast.error("Error submitting form. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="form-button">
        {buttonTitle}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="modal-form">
            <button onClick={() => setIsOpen(false)} className="form-close">
              ✕
            </button>

            <h2>
              Share Your Requirement
              <br />
              <span>We Will Get Back to You Soon.</span>
            </h2>
            <form onSubmit={handleSubmit}>
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
                  pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
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
              <div className="form-group checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    checked={sameAsContact}
                    onChange={handleCheckboxChange}
                  />{" "}
                  Same as Contact Number
                </label>
              </div>

              <div className="form-group">
                <label htmlFor="whatsappNumber">Whatsapp Number</label>
                <input
                  type="tel"
                  id="whatsappNumber"
                  name="whatsappNumber"
                  placeholder="Enter your Whatsapp Number"
                  pattern="[6-9]{1}[0-9]{9}"
                  maxLength="10"
                  required
                  disabled={sameAsContact}
                  onInvalid={(e) =>
                    e.target.setCustomValidity(
                      "Enter a valid 10-digit Indian mobile number"
                    )
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                  value={formData.whatsappNumber}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="cta-button"
                disabled={isSubmitting}
              >
                <p>{isSubmitting ? "Submitting..." : "Submit"}</p>
                <img
                  src="images/rocket.webp"
                  alt="CTA form under Know Your DNA section by Unstoppable Creative Agency."
                  width="25px"
                />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;

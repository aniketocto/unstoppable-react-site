import { useState } from "react";
import { IoMdArrowForward, IoMdArrowDown } from "react-icons/io";
import "../assets/css/faq.css";
import { faqData } from "../utils/data";

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-accordion">
      <div className="container">
        <div className="accordion">
          <div className="faq-heading">
            <h2 id="faqHeading">Frequently Asked Questions</h2>
          </div>

          {faqData.map((item, i) => (
            <div
              className={`accordion-item ${activeIndex === i ? "active" : ""}`}
              key={i}
            >
              <a
                className="accordion-link"
                onClick={() => toggleFAQ(i)}
                href="#!"
              >
                <h3>{item.question}</h3>
                <IoMdArrowForward className="icon ion-md-arrow-forward" />
                <IoMdArrowDown className="icon ion-md-arrow-down" />
              </a>
              <div className="answer">
                <p>{item.answer}</p>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;

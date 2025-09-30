import { useNavigate } from "react-router-dom";
import "../assets/css/thank.css";
import PageLayout from "../layouts/PageLayout";

const Thank = () => {
  const navigate = useNavigate();
  return (
    <PageLayout>
      <div class="thankyou-container">
        <div>
          <h1>Thank You!</h1>
          <p>
            Your message has been sent successfully. We will get back to you
            soon.
          </p>
        </div>
        <button onClick={() => navigate(-1)} className="neon-pulse">
          Go Back
        </button>
      </div>
    </PageLayout>
  );
};

export default Thank;

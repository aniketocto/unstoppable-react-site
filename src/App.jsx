import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Home from "./pages/Home";
import Career from "./pages/career";
import About from "./pages/About";
import { Toaster } from "react-hot-toast";
import Blogs from "./pages/Blogs";
import BlogPage from "./pages/BlogPage";
import ScrollTop from "./layouts/ScrollTop";
import EperientialMarketingAgency from "./pages/services/ExpertialMarketingAgency";
import FloatingButtons from "./layouts/FloatingButtons";
import Privacy from "./pages/Privacy";
import Thank from "./pages/Thank";
// import { useState } from "react";
// import SplashScreen from "./layouts/SplashScreen";

// App.jsx
function App() {
  // const [showSplash, setShowSplash] = useState(() => {
  //   return !sessionStorage.getItem("splashShown");
  // });

  // const handleSplashComplete = () => {
  //   setShowSplash(false);

  //   sessionStorage.setItem("splashShown", "true");
  // };

  return (
    <>
      {/* Splash screen overlay */}
      {/* {showSplash && (
        <div className="fixed inset-0 z-50 bg-transparent">
          <SplashScreen onComplete={handleSplashComplete} />
        </div>
      )} */}

      {/* Main app always mounted */}
      <HelmetProvider>
        <Router>
          <ScrollTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/career" element={<Career />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:slug" element={<BlogPage />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/thank-you" element={<Thank />} />
            <Route path="*" element={<Navigate to="/" replace />} />

            {/*  Hidden pages Routes */}
            <Route
              path="/services/experiential-marketing-agency"
              element={<EperientialMarketingAgency />}
            />
          </Routes>
          <Toaster
            toastOptions={{
              className: "",
              duration: 3000,
              style: { fontSize: "13px" },
            }}
          />
          <FloatingButtons />
        </Router>
      </HelmetProvider>
    </>
  );
}

export default App;

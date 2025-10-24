import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
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
import { useEffect } from "react";

import {
  initGTM,
  initMixpanel,
  initGA,
  trackPageView,
} from "./utils/tracking.js";
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

  useEffect(() => {
    if (import.meta.env.PROD) {
      initGTM(import.meta.env.VITE_GTM_ID);
      initMixpanel(import.meta.env.VITE_MIXPANEL_TOKEN);
      initGA(import.meta.env.VITE_GA_MEASUREMENT_ID);
    }
  }, []);

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
          <RouteListener />
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

const RouteListener = () => {
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      trackPageView({ pathname: location.pathname, search: location.search });
    }, 50);
  }, [location]);

  return null; // no UI
};

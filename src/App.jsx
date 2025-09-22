import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Career from "./pages/career";
import About from "./pages/About";
import { Toaster } from "react-hot-toast";
import Blogs from "./pages/Blogs";
import BlogPage from "./pages/BlogPage";
import ScrollTop from "./layouts/ScrollTop";
import ScrollToTop from "./layouts/ScrollToTop";
import FloatingButtons from "./layouts/FloatingButtons";
import { useState } from "react";
import SplashScreen from "./layouts/SplashScreen";

// App.jsx
function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <>
      {/* Splash screen overlay */}
      {showSplash && (
        <div className="fixed inset-0 z-50 bg-transparent">
          <SplashScreen onComplete={handleSplashComplete} />
        </div>
      )}

      {/* Main app always mounted */}
      <Router>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:slug" element={<BlogPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
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
    </>
  );
}

export default App;

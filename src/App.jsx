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
import BlogPage from "./pages/BLogPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:slug" element={<BlogPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        {/* fallback */}
      </Routes>
      <Toaster
        toastOptions={{
          className: "",
          duration: 3000,
          style: {
            fontSize: "13px",
          },
        }}
      />
    </Router>
  );
}

export default App;

import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Career from "./pages/career";
import Blogs from "./pages/blogs";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        {/* fallback */}
      </Routes>
    </Router>
  );
}

export default App;

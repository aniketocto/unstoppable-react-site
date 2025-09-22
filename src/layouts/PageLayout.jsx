import Footer from "./Footer";
import Navbar from "./Navbar";

const PageLayout = ({ children, showNavbar = true }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {showNavbar && <Navbar />}
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;

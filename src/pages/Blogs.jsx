import "../assets/css/blogs.css";
import PageLayout from "../layouts/PageLayout";
import { Link } from "react-router-dom";
import { blogs } from "../utils/blogs";
import { useEffect } from "react";

const Blogs = () => {
  useEffect(() => {
    document.title =
      "Branding & Strategy Blog by Mumbai’s Top Creative Agency";

    const metaDesc = document.querySelector("meta[name='description']");
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Explore expert insights on branding, strategy, digital marketing, content, and design from Unstoppable creative agency in India. Stay inspired and informed."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Explore expert insights on branding, strategy, digital marketing, content, and design from Unstoppable creative agency in India. Stay inspired and informed.";
      document.head.appendChild(meta);
    }
  }, []);
  return (
    <PageLayout>
      {/* Header Section */}
      <div className="new-blog_header">
        <h1>LOst in The AdveRtisinG MultiVerse?</h1>
        <img src="/images/saturn.png" className="planet" alt="" />
        <img src="/images/Galaxy 1.webp" className="galaxy" alt="" />
        <video autoPlay loop muted playsInline className="gifVideo">
          <source src="/video/BB3.webm" type="video/webm" />
        </video>
      </div>

      {/* Blog Grid Section */}
      <section className="blog-grid">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <Link to={blog.link}>
              <img src={blog.image} alt={blog.title} className="blog-image" />
              <div className="blog-content">
                <h2 className="blog-title">{blog.title}</h2>
                <p className="blog-excerpt">{blog.excerpt}</p>
                <p className="blog-meta">{blog.date}</p>
                <span className="read-more">Read More →</span>
              </div>
            </Link>
          </div>
        ))}
      </section>
    </PageLayout>
  );
};

export default Blogs;

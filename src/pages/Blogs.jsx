import "../assets/css/blogs.css";
import PageLayout from "../layouts/PageLayout";
import { Link } from "react-router-dom";
import { blogs } from "../utils/blogs";
import { Helmet } from "react-helmet-async";

const Blogs = () => {
  return (
    <PageLayout>
      <Helmet>
        <title>Branding & Strategy Blog by Mumbai’s Top Creative Agency</title>
        <meta
          name="description"
          content="Explore expert insights on branding, strategy, digital marketing, content, and design from Unstoppable Creative Agency in India. Stay inspired and informed."
        />
        <meta name="robots" content="max-image-preview:large" />
        <link rel="canonical" href="https://getunstoppable.in/blogs" />

        {/* OpenGraph for social sharing */}
        <meta
          property="og:title"
          content="Branding & Strategy Blog by Mumbai’s Top Creative Agency"
        />
        <meta
          property="og:description"
          content="Explore creative insights, brand strategy, and marketing trends from Unstoppable Creative Agency."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://getunstoppable.in/blogs" />
        <meta
          property="og:image"
          content="https://getunstoppable.in/images/logo.webp"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Branding & Strategy Blog by Mumbai’s Top Creative Agency"
        />
        <meta
          name="twitter:description"
          content="Stay inspired with insights on branding, marketing, and digital innovation from Unstoppable Creative Agency."
        />
        <meta
          name="twitter:image"
          content="https://getunstoppable.in/images/logo.webp"
        />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              name: "Unstoppable Creative Agency Blog",
              url: "https://getunstoppable.in/blogs",
              description:
                "Explore creative insights, brand strategy, and marketing trends from Unstoppable Creative Agency. Stay inspired with content that fuels innovation and growth.",
              publisher: {
                "@type": "Organization",
                name: "Unstoppable Creative Agency",
                url: "https://getunstoppable.in",
                logo: {
                  "@type": "ImageObject",
                  url: "https://getunstoppable.in/images/logo.webp", // ✅ update with real path
                },
              },
              author: {
                "@type": "Organization",
                name: "Unstoppable Creative Agency",
              },
            }),
          }}
        />
      </Helmet>
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

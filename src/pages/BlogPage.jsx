import { useParams, Link } from "react-router-dom";
import { blogs } from "../utils/blogs";
import PageLayout from "../layouts/PageLayout";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";

import "../assets/css/single-blog.css";
import { FaFacebook, FaInstagram, FaBehance } from "react-icons/fa";

const BlogPage = () => {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.link.endsWith(slug));
  const [content, setContent] = useState("");

  useEffect(() => {
    if (blog?.file) {
      fetch(blog.file)
        .then((res) => res.text())
        .then(setContent)
        .catch(() => setContent("Failed to load blog content."));
    }
  }, [blog]);

  if (!blog) return <h2>Blog not found</h2>;

  // Get 3 recent blogs excluding the current one
  const recentBlogs = blogs.filter((b) => b.link !== blog.link).slice(0, 3);

  return (
    <PageLayout>
      <section className="blog-container">
        <article className="mx-auto py-10 single-blog z-10">
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>

        {/* Follow Us */}
        <div className="recent-section">
          <p className="follow-copy">Follow Us</p>
          <div className="blog_social-links">
            <a
              href="https://www.facebook.com/getunstoppable/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/get_unstoppable/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.behance.net/getunstoppable"
              target="_blank"
              rel="noreferrer"
            >
              <FaBehance />
            </a>
          </div>

          {/* Recent Blogs */}
          <div className="recent-blogs">
            {recentBlogs.map((recent, index) => (
              <Link to={recent.link} key={index} className="recent-card">
                <img
                  src={`/${recent.image}`}
                  alt={recent.title}
                  className="recent-img"
                />
                <div className="recent-info">
                  <h3 className="recent-title">{recent.title}</h3>
                  <p className="recent-date">{recent.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default BlogPage;

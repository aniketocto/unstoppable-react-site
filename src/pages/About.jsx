import Marquee from "react-fast-marquee";
import "../assets/css/about.css";
import PageLayout from "../layouts/PageLayout";
import Companies from "../components/Companies";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <PageLayout>
      {/* Meta data */}
      <Helmet>
        <title>Unstoppable Creative Agency | India’s Top Branding Agency</title>
        <meta
          name="description"
          content="Unstoppable is a Global Creative Agency specializing in Brand Identity and Strategy, Website Development, Content Development, Coffee Table Books, Brochures, Catalogues."
        />
        <meta name="robots" content="max-image-preview:large" />
        <link rel="canonical" href="https://getunstoppable.in/about-us" />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              name: "About Us - Unstoppable Creative Agency",
              url: "https://getunstoppable.in/about", // ✅ match canonical
              description:
                "Learn more about Unstoppable Creative Agency, a creative agency in Mumbai that builds bold brands through strategy, storytelling, design, and digital innovation. Led by Deepika Hirwey, Unstoppable Creative Agency helps brands break through the ordinary.",
              mainEntity: {
                "@type": "Organization",
                name: "Unstoppable Creative Agency",
                alternateName: "Unstoppable",
                url: "https://getunstoppable.in",
                logo: "https://getunstoppable.in/images/logo.webp", // ✅ update with real path
                founder: {
                  "@type": "Person",
                  name: "Deepika Hirwey",
                  jobTitle: "Founder & Creative Director",
                },
                description:
                  "Unstoppable Creative Agency is a Mumbai-based creative-first agency offering branding, storytelling, strategy, design, and digital marketing services. We launch businesses into new dimensions with bold, emotion-driven marketing.",
                address: {
                  "@type": "PostalAddress",
                  streetAddress:
                    "B/50, 5th Floor, Off New Link Rd, Andheri West",
                  addressLocality: "Mumbai",
                  addressRegion: "Maharashtra",
                  postalCode: "400053",
                  addressCountry: "IN",
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+91-9833022443",
                  email: "connect@getunstoppable.in",
                  contactType: "customer support",
                },
                sameAs: [
                  "https://www.facebook.com/getunstoppable/",
                  "https://www.instagram.com/get_unstoppable/",
                  "https://www.linkedin.com/company/getunstoppable/",
                ],
                foundingLocation: {
                  "@type": "Place",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Mumbai",
                    addressCountry: "IN",
                  },
                },
                knowsAbout: [
                  "Branding",
                  "Storytelling",
                  "Creative Strategy",
                  "Website Design",
                  "App Development",
                  "Video Production",
                  "Influencer Marketing",
                  "Social Media Marketing",
                  "Experiential Marketing",
                  "Lead Generation",
                ],
                areaServed: "IN",
              },
            }),
          }}
        />
      </Helmet>

      {/* Banner & Intro */}
      <section className="about_banner-container">
        <img src="/images/Astronautimagenew.webp" alt="" />
        <div className="main-heading">
          <h2>Unstoppable</h2>
          <div className="sub-head">
            <p>
              From Lift-off
              <br />
              to Legacy
            </p>
            <p>
              Creative agency
              <br />
              Based in Mumbai
            </p>
          </div>
        </div>
      </section>

      <h2 className="about-h2 desc">
        Unstoppable is a creative agency fuelling brands to reach for the stars.
        With a creative-first approach, we dream big and bold, launching
        businesses in new dimensions. This allows brands to defy the competitive
        gravity through our incredible creatives while blazing through every
        orbit, turning brands into legends.
      </h2>

      {/* Mission */}
      <section className="mission-section">
        <h1 className="about-h1">Our Mission</h1>
        <div>
          <h2 className="about-content">
            We believe creativity is a force of nature and we're here to unleash
            it.
          </h2>
          <p className="about-h2">
            Every brand is carefully engineered with visionary strategy, powered
            by stunning visuals, and launched into orbits of influence. We chart
            bold, creative trajectories for our clients through our creative
            tools, ready to leave Earth's atmosphere and build legacies that
            shine across the universe.
          </p>
        </div>
        <img src="/images/about-deco.png" id="about-deco-1" alt="" />
        <img src="/images/about-deco-2.webp" id="about-deco-2" alt="" />
        {/* <img src="/images/deco_2.webp" id="about-deco-3" alt="" /> */}
      </section>

      {/* Purpose */}
      <section className="purpose-section">
        <img
          src="/images/aboutPurpose.webp"
          id="purpose"
          alt="Floating astronaut image in Purpose section of Unstoppable Creative Agency."
        />
        <div style={{ zIndex: 1 }}>
          <h1 className="about-h1">Our Purpose</h1>
          <p className="about-content">The Starmap of Unstoppable</p>
          <div className="purpose-section_container">
            <div className="purpose-inner">
              <p>
                To be the launchpad for brands ready to break through the
                gravitational pull of the ordinary.
              </p>
            </div>
            <div className="purpose-inner">
              <p>
                To craft solutions through design, strategy, and storytelling.
              </p>
            </div>
            <div className="purpose-inner">
              <p>
                To equip every project with the creative fuel it needs to reach
                infinity
              </p>
            </div>
            <div className="purpose-inner">
              <p>
                To navigate alongside our clients like mission control, steady,
                trustworthy, and always pushing past the boundaries
              </p>
            </div>
          </div>
        </div>
        {/* <img src="/images/main-deco.png" id="about-deco-4" alt="" /> */}
      </section>

      {/* Industry Presence */}
      <section className="industry-section">
        <h1 className="about-h1">Industry Presence</h1>
        <div className="industry-container">
          <div className="industry-box">
            <img src="/images/real-estate.svg" alt="real-estate" />
            <p>real Estate</p>
          </div>
          <div className="industry-box">
            <img src="/images/hospitality.svg" alt="Hospitality" />
            <p>Hospitality</p>
          </div>
          <div className="industry-box">
            <img src="/images/bfsi.svg" alt="bfsi" />
            <p>BSFI</p>
          </div>
          <div className="industry-box">
            <img src="/images/fmcg.svg" alt="fmcg" />
            <p>FMCG</p>
          </div>
          <div className="industry-box">
            <img src="/images/healthcare.svg" alt="healthcare" />
            <p>healthcare</p>
          </div>
        </div>
      </section>

      {/* Slider Section */}
      <br className="block md:hidden" />
      <br className="block md:hidden" />
      <br className="block md:hidden" />

      <h4 className="ourClients">Our Clients</h4>
      <Marquee className="h-fit relative z-10" speed={50} gradient={false}>
        <Companies />
      </Marquee>
      <br />
      <br />

      {/* Founder Section */}
      <section className="the-founder">
        <div className="the-founder_content">
          <div className="heading-inline">
            <h1>Meet Our Captain</h1>
          </div>
          <p>
            Deepika Hirwey firmly believes in the notion of emotion-driven
            marketing: ”Tapping the subconscious mind is true branding."
            <br />
            <br />
            This isn’t just a quote she lives by; it’s the foundation of how
            Unstoppable sees marketing, communication, and advertising in
            today’s hyperstimulated world.
            <br />
            <br />
            At Unstoppable Creative Agency, we combine radical creativity, bold
            ideas, and data-driven precision to unlock your brand’s true
            potential. She asserts that creative branding is built brick by
            brick – by understanding how people think, feel, and act; attraction
            is achieved and action is guaranteed.
          </p>
          <div className="social-links_the-founder">
            <a
              href="https://www.linkedin.com/in/deepika-hirwey-78ab36135/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/unstoppabledp/profilecard/?igsh=MXZicDJybHJ5MTIzeA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="the-founder_image">
          <img
            src="/images/r2.webp"
            style={{ filter: "grayscale(1)" }}
            alt="Founder image in the Founder section of Unstoppable Creative Agency."
          />
        </div>
      </section>
      <hr />
    </PageLayout>
  );
};

export default About;

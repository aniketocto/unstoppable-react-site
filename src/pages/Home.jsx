import Hero from "../components/Hero";
import DnaForm from "../components/DnaForm";
import PageLayout from "../layouts/PageLayout";
import MarqueText from "../components/MarqueText";
import LazyVideo from "../components/LazyVideo";
import Expertize from "../components/Expertize";
import Portfolio from "../components/Portfolio";
import Companies from "../components/Companies";
import Testimonials from "../components/Testimonials";
import FAQAccordion from "../components/FAQAccordion";
import Contact from "../components/Contact";
import Marquee from "react-fast-marquee";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <PageLayout>
      ;
      <Helmet>
        <title>Unstoppable Creative Agency in Mumbai</title>
        <meta
          name="description"
          content="Leading creative agency with expertise in branding, strategy, social media marketing, lead generation, content, photoshoots, brand films, and UI/UX design."
        />
        <meta
          name="keywords"
          content="creative design agency in mumbai, creative advertising agency in mumbai, creative branding agency in mumbai, creative digital agency in mumbai, creative digital marketing agency in mumbai, designing agency in mumbai, graphic design agency in mumbai, mumbai based advertising agency, top creative agency in mumbai, best creative agency in mumbai"
        />
        <meta name="robots" content="max-image-preview:large" />
        <link rel="canonical" href="https://getunstoppable.in/" />

        {/* Meta Schema Start For SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Unstoppable Creative Agency",
              url: "https://getunstoppable.in",
              logo: "https://getunstoppable.in/assets/image/Logo.webp",
              description:
                "Unstoppable creative agency is the best creative agency in Mumbai crafting bold, visionary brand strategies, designs, and storytelling solutions that launch businesses into new dimensions.",
              founder: {
                "@type": "Person",
                name: "Deepika Hirwey",
              },
              foundingLocation: {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  streetAddress:
                    "B/50, 5th Floor, Off New Link Rd, Andheri West",
                  addressLocality: "Mumbai",
                  addressRegion: "Maharashtra",
                  postalCode: "400053",
                  addressCountry: "IN",
                },
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9833022443",
                email: "connect@getunstoppable.in",
                contactType: "customer support",
                areaServed: "IN",
              },
              sameAs: [
                "https://www.facebook.com/getunstoppable/",
                "https://www.instagram.com/get_unstoppable/",
                "https://www.linkedin.com/company/getunstoppable/",
              ],
            }),
          }}
        />
      </Helmet>
      <Hero triggerAnimation={true} />
      <DnaForm />
      <Marquee className="h-14 bg-white relative z-10">
        <MarqueText />
        <MarqueText />
        <MarqueText />
      </Marquee>
      <LazyVideo />
      <Expertize />
      <Portfolio />
      <h4 className="ourClients">Our Clients</h4>
      <Marquee className="h-fit relative z-10" speed={50} gradient={false}>
        <Companies />
      </Marquee>
      <Testimonials />
      <Contact />
      <FAQAccordion />
    </PageLayout>
  );
};

export default Home;

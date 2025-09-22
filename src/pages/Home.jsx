import { useEffect, useState } from "react";

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
import SplashScreen from "../layouts/SplashScreen";

const Home = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [animateHero, setAnimateHero] = useState(false);

  useEffect(() => {
    document.title = "Unstoppable Creative Agency in Mumbai";

    const metaDesc = document.querySelector("meta[name='description']");
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Leading creative agency with expertise in branding, strategy, social media marketing, lead generation, content, photoshoots, brand films, and UI/UX design."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Leading creative agency with expertise in branding, strategy, social media marketing, lead generation, content, photoshoots, brand films, and UI/UX design.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <>
      {showSplash ? (
        <SplashScreen
          onComplete={() => {
            setShowSplash(false);
            setAnimateHero(true); // start hero animation
          }}
        />
      ) : (
        <PageLayout>
          <Hero triggerAnimation={animateHero} />
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
      )}
    </>
  );
};

export default Home;

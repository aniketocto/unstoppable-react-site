import Marquee from "react-fast-marquee";
import DnaForm from "../components/DnaForm";
import Hero from "../components/Hero";
import PageLayout from "../layouts/PageLayout";
import MarqueText from "../components/MarqueText";
import LazyVideo from "../components/LazyVideo";
import Expertize from "../components/Expertize";
import Portfolio from "../components/Portfolio";
import Companies from "../components/Companies";
import Testimonials from "../components/Testimonials";
import FAQAccordion from "../components/FAQAccordion";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <PageLayout>
      <Hero />
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
      <br />
      <br />

      <Testimonials />
      <Contact />
      <FAQAccordion />
    </PageLayout>
  );
};

export default Home;

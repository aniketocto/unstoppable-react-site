import Marquee from "react-fast-marquee";
import DnaForm from "../components/DnaForm";
import Hero from "../components/Hero";
import PageLayout from "../layouts/PageLayout";
import MarqueText from "../components/MarqueText";
import LazyVideo from "../components/LazyVideo";
import Expertize from "../components/Expertize";

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
    </PageLayout>
  );
};

export default Home;

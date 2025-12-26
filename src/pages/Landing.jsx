import Navbar from "../components/layout/Navbar";
import Hero from "../components/landing/Hero";
import HowItWorks from "../components/landing/HowItWorks";
import EmotionModes from "../components/landing/EmotionModes";
import UseCases from "../components/landing/UseCases";
import CTA from "../components/landing/CTA";
import Footer from "../components/layout/Footer";

const Landing = () => {
  return (
    <div className="bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <EmotionModes />
      <UseCases />
      <CTA />
      <Footer />
    </div>
  );
};

export default Landing;

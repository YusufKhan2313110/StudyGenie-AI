import Navbar from "../components/Navbar";
import LandingHero from "../components/LandingHero";
import ProductPreview from "../components/ProductPreview";
import FeatureGrid from "../components/FeatureGrid";
import HowItWorks from "../components/HowItWorks";
import WhyStudyGenie from "../components/WhyStudyGenie";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Navbar />
      <LandingHero />
      <ProductPreview />
      <FeatureGrid />
      <HowItWorks />
      <WhyStudyGenie />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default LandingPage;
import Navbar from "@/components/Bootcamp/Navbar";
import HeroSection from "@/components/Bootcamp/AnimatedHero";
import Footer from "@/components/Bootcamp/Footer";
import ContentSection from "@/components/Bootcamp/SE/SEBody";

export default function SoftwareEngineeringBootcampPage() {
  return (
    <div className="bg-white text-[#161a25]">
      <Navbar />
      <HeroSection />
      <ContentSection />

      <Footer />
    </div>
  );
}

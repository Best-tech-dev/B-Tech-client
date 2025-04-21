import Navbar from "@/components/Bootcamp/Navbar";
import BootcampOverlay from "@/components/Bootcamp/BootcampOverlay";
import { FaLaptopCode } from "react-icons/fa";
import Footer from "@/components/Bootcamp/Footer";
import ContentSection from "@/components/Bootcamp/FED/FEDBody";

export default function SoftwareEngineeringBootcampPage() {
  return (
    <div className="bg-white text-[#161a25]">
      <Navbar />
      <BootcampOverlay
        title="Frontend Development"
        description="Master the art of frontend development through hands-on training and real-world projects designed to prepare you for the tech industry"
        icon={<FaLaptopCode className="text-white text-base md:text-2xl" />}
        backgroundImage="/bootcamp/frontend.jpg"
      />
      <ContentSection />

      <Footer />
    </div>
  );
}

import Navbar from "@/components/Bootcamp/Navbar";
import BootcampOverlay from "@/components/Bootcamp/BootcampOverlay";
import { FaLaptopCode } from "react-icons/fa";
import Footer from "@/components/Bootcamp/Footer";
import ContentSection from "@/components/Bootcamp/SE/SEBody";

export default function SoftwareEngineeringBootcampPage() {
  return (
    <div className="bg-white text-[#161a25]">
      <Navbar />
      <BootcampOverlay
        title="Software Engineering"
        description="Master the art of software development through hands-on training and real-world projects designed to prepare you for the tech industry"
        icon={<FaLaptopCode className="text-white text-base md:text-2xl" />}
        backgroundImage="/bootcamp/software-development.jpg"
      />
      <ContentSection />

      <Footer />
    </div>
  );
}

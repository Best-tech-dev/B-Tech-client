"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Bootcamp/Navbar";
import BootcampOverlay from "@/components/Bootcamp/BootcampOverlay";
import { FaLaptopCode } from "react-icons/fa";
import Footer from "@/components/Bootcamp/Footer";
import ContentSection from "@/components/Bootcamp/FED/FEDBody";
import PricingModal from "@/components/Bootcamp/PricingModal";

export default function FrontendBootcampPage() {
  const [showPricingModal, setShowPricingModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPricingModal(true);
    }, 2000); // Show modal 2 seconds after page loads

    return () => clearTimeout(timer);
  }, []);

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

      <PricingModal
        isOpen={showPricingModal}
        onClose={() => setShowPricingModal(false)}
      />
    </div>
  );
}

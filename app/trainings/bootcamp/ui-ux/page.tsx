"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Bootcamp/Navbar";
import BootcampOverlay from "@/components/Bootcamp/BootcampOverlay";
import { Palette } from "lucide-react";
import Footer from "@/components/Bootcamp/Footer";
import ContentSection from "@/components/Bootcamp/UIUX/UIUXBody";
import PricingModal from "@/components/Bootcamp/PricingModal";

export default function UiUxBootcampPage() {
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
        title="UI/UX Design"
        description="Master the art of user interface and user experience design through hands-on training and real-world projects designed to prepare you for the tech industry"
        icon={<Palette className="text-white text-base md:text-2xl" />}
        backgroundImage="/bootcamp/ui-ux.jpg"
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

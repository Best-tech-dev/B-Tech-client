"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Bootcamp/Navbar";
import BootcampOverlay from "@/components/Bootcamp/BootcampOverlay";
import { Smartphone } from "lucide-react";
import Footer from "@/components/Footer/Footer";
import PricingModal from "@/components/Bootcamp/PricingModal";
import ContentSection from "@/components/Bootcamp/MAD/MADBody";

export default function MobileAppDevBootcampPage() {
  const [showPricingModal, setShowPricingModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPricingModal(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white text-[#161a25]">
      <Navbar />
      <BootcampOverlay
        title="Mobile App Development"
        description="Build native and cross-platform mobile applications using React Native, Flutter, and modern mobile development practices"
        icon={<Smartphone className="text-white text-base md:text-2xl" />}
        backgroundImage="/bootcamp/mobile.jpg"
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

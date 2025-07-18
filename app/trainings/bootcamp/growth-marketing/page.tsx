"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Bootcamp/Navbar";
import BootcampOverlay from "@/components/Bootcamp/BootcampOverlay";
import { TrendingUp } from "lucide-react";
import Footer from "@/components/Footer/Footer";
import ContentSection from "@/components/Bootcamp/GM/GMBody";
import PricingModal from "@/components/Bootcamp/PricingModal";

export default function GrowthMarketingBootcampPage() {
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
        title="Growth Marketing"
        description="Learn What Drives Real Growth - Not Just Clicks. A 12-week, cohort-based experience for professionals who want to master full-funnel marketing, run data-driven campaigns, and scale revenue."
        icon={<TrendingUp className="text-white text-base md:text-2xl" />}
        backgroundImage="/bootcamp/growth-marketing.jpg"
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

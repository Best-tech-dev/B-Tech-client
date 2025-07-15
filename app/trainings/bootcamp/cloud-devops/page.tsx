"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Bootcamp/Navbar";
import BootcampOverlay from "@/components/Bootcamp/BootcampOverlay";
import { Cloud } from "lucide-react";
import Footer from "@/components/Footer/Footer";
import ContentSection from "@/components/Bootcamp/CD/CDBody";
import PricingModal from "@/components/Bootcamp/PricingModal";

export default function CloudDevOpsBootcampPage() {
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
        title="Cloud & DevOps"
        description="Master cloud computing and DevOps practices with hands-on training in AWS, Azure, Docker, Kubernetes, and CI/CD pipelines"
        icon={<Cloud className="text-white text-base md:text-2xl" />}
        backgroundImage="/bootcamp/cloud-devops.jpg"
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

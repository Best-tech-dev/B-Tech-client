"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Bootcamp/Navbar";
import BootcampOverlay from "@/components/Bootcamp/BootcampOverlay";
import { Shield } from "lucide-react";
import Footer from "@/components/Footer/Footer";
import ContentSection from "@/components/Bootcamp/Cybersecurity/CybersecurityBody";
import PricingModal from "@/components/Bootcamp/PricingModal";

export default function CybersecurityBootcampPage() {
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
        title="Cybersecurity"
        description="Master ethical hacking and digital defense through hands-on training in threat analysis, penetration testing, and security operations designed to prepare you for the cybersecurity industry"
        icon={<Shield className="text-white text-base md:text-2xl" />}
        backgroundImage="/bootcamp/cybersecurity.jpg"
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

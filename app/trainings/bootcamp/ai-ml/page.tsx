"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Bootcamp/Navbar";
import BootcampOverlay from "@/components/Bootcamp/BootcampOverlay";
import { Brain } from "lucide-react";
import Footer from "@/components/Footer/Footer";
import ContentSection from "@/components/Bootcamp/AIML/AIMLBody";
import PricingModal from "@/components/Bootcamp/PricingModal";

export default function AiMlBootcampPage() {
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
        title="AI & Machine Learning"
        description="Join the AI revolution by mastering machine learning. From algorithms to real-world AI applications, our program prepares you to build intelligent systems that power everything from recommendations to self-driving tech."
        icon={<Brain className="text-white text-base md:text-2xl" />}
        backgroundImage="/bootcamp/ai-ml.jpg"
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

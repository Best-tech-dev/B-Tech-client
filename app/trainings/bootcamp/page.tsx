"use client";

// import React, { useState, useEffect } from "react";
import AnimatedHero from "@/components/Bootcamp/AnimatedHero";
import FeaturedCourses from "@/components/Bootcamp/FeaturedCourses";
import LogoCloud from "@/ui/Bootcamp/logocloud";
import OutlineSection from "@/components/Bootcamp/OutlineSection";
import TuitionDatesSection from "@/components/Bootcamp/TuitionAndDates";
import Accreditation from "@/components/Bootcamp/Accreditation";
import { BootcampFAQs } from "@/components/Bootcamp/FAQs";
import Footer from "@/components/Bootcamp/Footer";
import Navbar from "@/components/Bootcamp/Navbar";

export default function BootcampLanding() {
  // const [showBanner, setShowBanner] = useState(true);
  // const [timeLeft, setTimeLeft] = useState<Record<string, number>>({});

  // useEffect(() => {
  //   const countdownDate = new Date("2025-05-02T00:00:00").getTime();
  //   const interval = setInterval(() => {
  //     const now = new Date().getTime();
  //     const distance = countdownDate - now;
  //     setTimeLeft({
  //       days: Math.floor(distance / (1000 * 60 * 60 * 24)),
  //       hours: Math.floor(
  //         (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //       ),
  //       minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
  //       seconds: Math.floor((distance % (1000 * 60)) / 1000),
  //     });
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="bg-[#161a25] text-white min-h-screen">
      {/* Banner */}
      {/* {showBanner && (
        <div className="bg-[#2bcd15] text-white flex items-center justify-between px-4 py-2">
          <div className="flex gap-4 items-center flex-wrap">
            {Object.entries(timeLeft).map(([key, value]) => (
              <div key={key} className="border px-2 py-1 border-white rounded">
                {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
              </div>
            ))}
            <span>
              Save ₦20,000 on registration when you enroll before our bootcamp
              starts by 02/05/2025
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button className="bg-white text-[#2bcd15] px-4 py-2 rounded shadow hover:bg-[#a4cd39]">
              Secure Your ₦20,000 Discount
            </button>
            <button
              onClick={() => setShowBanner(false)}
              className="text-xl font-bold"
            >
              ×
            </button>
          </div>
        </div>
      )} */}

      {/* Fixed Header that adjusts based on banner visibility */}
      <div className={`fixed w-full z-50 transition-all duration-300 top-0`}>
        <Navbar />
      </div>

      {/* Push content down by height of header (+ banner if visible) */}
      {/* <div className={showBanner ? "pt-[136px]" : "pt-[80px]"}></div> */}
      <div className="pt-8 lg:pt-18">
        {/* Hero Section */}
        <AnimatedHero />

        {/* Featured Courses Section */}
        <FeaturedCourses />

        {/* Learning Outline Section */}
        <LogoCloud />
        <OutlineSection />

        {/* Tuition and Dates Section */}
        <TuitionDatesSection />

        {/* Accreditation Section */}
        <Accreditation />

        {/* FAQs Section */}
        <BootcampFAQs />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import React from "react";
import Navbar from "@/components/Bootcamp/Navbar";
import Footer from "@/components/Bootcamp/Footer";
import Hero from "@/components/Trainings/Hero";
import WhyChooseUs from "@/components/Trainings/WhyChooseUs";
import ExploreTrainings from "@/components/Trainings/ExploreTrainings";
// import StudentSpotlightCarousel from "@/components/Trainings/StudentSpotlightCarousel";
import MeetTheTeam from "@/components/Trainings/MeetTheTeam";
import { TrainingsFAQ } from "@/components/Bootcamp/FAQs";

// Dynamically import the client-only carousel
const StudentSpotlightCarousel = dynamic(
  () => import("@/components/Trainings/StudentSpotlightCarousel"),
  { ssr: false }
);

export default function TrainingsPage() {
  return (
    <div className="bg-white text-[#161a25]">
      <Navbar />
      <Hero />
      <WhyChooseUs />

      {/* Category Tabs */}
      <ExploreTrainings />

      {/* Spotlight */}
      <Suspense fallback={null}>
        <StudentSpotlightCarousel />
      </Suspense>

      {/* Meet the Team */}
      <MeetTheTeam />

      {/* FAQs */}
      <TrainingsFAQ />

      <Footer />
    </div>
  );
}

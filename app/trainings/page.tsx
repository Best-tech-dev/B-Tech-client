// "use client";

// import Link from "next/link";
import React from "react";
import Navbar from "@/components/Bootcamp/Navbar";
import Footer from "@/components/Bootcamp/Footer";
import Hero from "@/components/Trainings/Hero";
import WhyChooseUs from "@/components/Trainings/WhyChooseUs";
import ExploreTrainings from "@/components/Trainings/ExploreTrainings";
import StudentSpotlightCarousel from "@/components/Trainings/StudentSpotlightCarousel";

const trainingCategories = [
  "All",
  "Bootcamp",
  "Internship",
  "Masterclass",
  "Online Courses",
];

export default function TrainingsPage() {
  return (
    <div className="bg-white text-[#161a25]">
      <Navbar />
      <Hero />
      <WhyChooseUs />

      {/* Category Tabs */}
      <ExploreTrainings />

      {/* Spotlight */}
      <StudentSpotlightCarousel />

      <Footer />
    </div>
  );
}

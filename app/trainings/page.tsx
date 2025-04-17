"use client";

// import Link from "next/link";
import React from "react";
import Navbar from "@/components/Bootcamp/Navbar";
import Footer from "@/components/Bootcamp/Footer";
import Hero from "@/components/Trainings/Hero";
import WhyChooseUs from "@/components/Trainings/WhyChooseUs";

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

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-brand-primary">
          Explore Our Trainings
        </h1>

        {/* Category Tabs */}
        <div className="overflow-x-auto whitespace-nowrap mb-10 pb-2 scrollbar-hide border-b border-gray-200">
          <div className="inline-flex space-x-4">
            {trainingCategories.map((category) => (
              <button
                key={category}
                className="text-sm sm:text-base px-4 py-2 border border-gray-300 rounded-full hover:bg-[#161a25] hover:text-white transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Trainings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder for training cards - populate from your data file */}
          {/* Example usage: trainings.map(training => <TrainingCard key={training.id} {...training} />) */}
        </div>
      </section>

      <Footer />
    </div>
  );
}

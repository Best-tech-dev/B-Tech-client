"use client";

import { trainings } from "@/constants/trainings";
import TrainingCard from "@/components/Trainings/TrainingCard";
import { useState } from "react";

const trainingCategories = [
  "All",
  "Bootcamp",
  "Internship",
  "Masterclass",
  "Online Course",
];

export default function ExploreTrainings() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTrainings =
    selectedCategory === "All"
      ? trainings
      : trainings.filter((t) => t.category === selectedCategory);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 text-center">
        Explore Our{" "}
        <span className="bg-gradient-to-r from-brand-accent via-brand-primary to-brand-accent bg-clip-text text-transparent">
          Trainings
        </span>
      </h1>

      {/* Category Tabs */}
      <div className="overflow-x-auto whitespace-nowrap mb-10 pb-2 scrollbar-hide border-b md:border-0 border-gray-200">
        <div className="inline-flex md:flex justify-center space-x-4">
          {trainingCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`text-sm sm:text-base px-4 py-2 border rounded-full transition-colors ${
                selectedCategory === category
                  ? "bg-[#161a25] text-white border-[#161a25]"
                  : "border-gray-300 hover:bg-[#161a25] hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Trainings Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTrainings.map((training) => (
          <TrainingCard key={training.id} {...training} />
        ))}
      </div>
    </section>
  );
}

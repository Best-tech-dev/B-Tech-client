"use client";

import React, { useState } from "react";

const DailySchedule = () => {
  const [activeTab, setActiveTab] = useState("review");

  const scheduleData = {
    review: {
      time: "10:00AM - 10:30AM",
      title: "Review",
      description:
        "Your morning starts with a self-led review of notes and other learning materials to prepare for class.",
    },
    "live-instruction": {
      time: "10:30AM - 12:30PM",
      title: "Live Instruction & Demo",
      description:
        "You'll receive live instruction from a Best Technologies Ltd. instructor, followed by a real-time demonstration of each new tool or technology and a live Q&A.",
    },
    "guided-practice": {
      time: "1:30PM - 2:00PM",
      title: "Guided Practice & Workshop",
      description:
        "Work through coding exercises with guidance from instructors. Apply what you've learned through hands-on workshops and collaborative problem-solving.",
    },
    break: {
      time: "2:00PM - 3:00PM",
      title: "Break",
      description: "You'll take an hour-long break to recharge and refuel.",
    },
    support: {
      time: "3:00PM - 6:00PM",
      title: "Open Instructional Support",
      description:
        "Get help with challenging concepts, work on assignments, or collaborate with peers during open support hours with teaching assistants and instructors available.",
    },
  };

  const tabs = Object.entries(scheduleData);

  return (
    <section
      id="daily-schedule"
      className="py-12 px-4 sm:px-6 lg:px-12 scroll-mt-28"
    >
      <h2 className="text-3xl font-bold mb-6">
        Full-Time Frontend Development Immersive Daily Schedule
      </h2>

      <p className="text-sm md:text-base text-gray-700 mb-10 max-w-3xl">
        Every day in our Frontend Development Bootcamp is a little different,
        but you can count on a lively on-site classroom with your classmates,
        instructors, and teaching assistants. You&apos;ll learn through a mix of
        live lessons, coding practice, and team projects. Here's a sample of
        what a typical day involves.
      </p>

      <div className="border border-gray-300 rounded-lg overflow-hidden shadow-sm">
        {/* Tab Navigation */}
        <div className="flex overflow-x-auto scrollbar-hide border-b border-b-gray-300 bg-gray-100">
          {tabs.map(([key, value]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`whitespace-nowrap px-4 sm:px-6 py-3 text-sm sm:text-base transition-colors duration-300 border-b-2 ${
                activeTab === key
                  ? "border-brand-primary text-brand-primary bg-white font-medium"
                  : "border-transparent text-gray-600 hover:text-brand-primary hover:cursor-pointer"
              }`}
            >
              {value.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-2">
            <span className="text-gray-500 text-sm uppercase tracking-wider">
              Timeline (WAT)
            </span>
            <div className="bg-brand-primary text-white text-sm px-4 py-2 rounded-full shadow inline-block">
              {scheduleData[activeTab as keyof typeof scheduleData].time}
            </div>
          </div>

          <h3 className="text-base font-semibold mb-4">
            {scheduleData[activeTab as keyof typeof scheduleData].title}
          </h3>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            {scheduleData[activeTab as keyof typeof scheduleData].description}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 mt-16"></div>
    </section>
  );
};

export default DailySchedule;

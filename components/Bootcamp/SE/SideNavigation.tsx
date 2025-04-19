"use client";

import React from "react";
import { Button } from "@/ui/Bootcamp/button";

interface SideNavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const SideNavigation: React.FC<SideNavigationProps> = ({
  activeSection,
  onSectionChange,
}) => {
  const sections = [
    { id: "fullstack-experience", title: "The Fullstack Experience" },
    { id: "what-youll-learn", title: "What You'll Learn" },
    { id: "tuition-dates", title: "Tuition and Dates" },
    { id: "projects", title: "Projects" },
    { id: "daily-schedule", title: "Daily Schedule" },
    { id: "pair-programming", title: "Pair Programming" },
    { id: "career-prep", title: "Career Prep" },
    { id: "admissions", title: "Admissions" },
    { id: "testimonials", title: "Testimonials" },
    { id: "faqs", title: "FAQs" },
  ];

  return (
    <aside className="sticky top-24">
      <div className="mb-4 uppercase tracking-wider text-gray-600 text-sm font-semibold px-2">
        Learn More
      </div>
      <div className="bg-white shadow rounded-lg overflow-hidden border border-gray-200">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`w-full text-left px-4 py-3 text-sm font-medium hover:bg-gray-100 transition-colors border-b border-b-gray-200 ${
              activeSection === section.id
                ? "bg-gray-100 text-brand-primary font-semibold border-l-4 border-brand-primary"
                : "text-gray-700"
            }`}
            onClick={() => onSectionChange(section.id)}
          >
            {section.title}
          </button>
        ))}
        <div className="p-4">
          <Button className="w-full bg-brand-primary hover:bg-brand-primary/85 text-white">
            GET MY SYLLABUS
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default SideNavigation;

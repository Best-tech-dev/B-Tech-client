"use client";

import React from "react";
import { Button } from "@/ui/button";

interface SideNavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

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

const SideNavigation: React.FC<SideNavigationProps> = ({
  activeSection,
  onSectionChange,
}) => {
  return (
    <>
      {/* Horizontal scrollable nav for mobile/tablet */}
      {/* <nav className="lg:hidden sticky top-20 bg-white z-10 border-b border-gray-200 overflow-x-auto">
        <ul className="flex space-x-6 px-4 py-2 whitespace-nowrap overflow-x-scroll scrollbar-hide">
          {sections.map((section) => (
            <li
              key={section.id}
              className={`cursor-pointer pb-2 border-b-2 transition-colors duration-300 ${
                activeSection === section.id
                  ? "text-brand-primary border-brand-primary font-semibold"
                  : "border-transparent text-gray-700 hover:text-brand-primary"
              }`}
              onClick={() => onSectionChange(section.id)}
            >
              {section.title}
            </li>
          ))}
        </ul>
      </nav> */}

      {/* Horizontal scrollable nav for mobile/tablet */}
      <nav className="lg:hidden sticky top-20 bg-white z-50 border-b border-gray-200 shadow-sm overflow-x-auto">
        <ul className="flex space-x-6 px-4 py-2 whitespace-nowrap overflow-x-scroll scrollbar-hide">
          {sections.map((section) => (
            <li
              key={section.id}
              className={`cursor-pointer pb-2 border-b-2 transition-colors duration-300 ${
                activeSection === section.id
                  ? "text-brand-primary border-brand-primary font-semibold"
                  : "border-transparent text-gray-700 hover:text-brand-primary"
              }`}
              onClick={() => onSectionChange(section.id)}
            >
              {section.title}
            </li>
          ))}
        </ul>
      </nav>

      {/* Stacked nav for desktop */}
      <aside className="hidden lg:block sticky top-24 lg:top-[116px]">
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
            <Button
              href="/trainings/curriculum"
              className="w-full bg-brand-primary hover:bg-brand-primary/85 text-white"
            >
              GET MY SYLLABUS
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideNavigation;

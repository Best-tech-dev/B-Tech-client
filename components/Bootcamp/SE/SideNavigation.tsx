"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/ui/button";
import { ChevronRight } from "lucide-react";

interface SideNavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const sections = [
  { id: "fullstack-experience", title: "Full-Stack Development Experience" },
  { id: "what-youll-learn", title: "What You'll Learn" },
  { id: "tuition-dates", title: "Tuition & Dates" },
  { id: "projects", title: "Projects" },
  { id: "daily-schedule", title: "Daily Schedule" },
  { id: "career-prep", title: "Career Prep" },
  { id: "admissions", title: "Admissions" },
  { id: "testimonials", title: "Testimonials" },
  { id: "faqs", title: "FAQs" },
];

const SideNavigation: React.FC<SideNavigationProps> = ({
  activeSection,
  onSectionChange,
}) => {
  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Adjust for header
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    onSectionChange(sectionId);
  };
  return (
    <>
      {/* Horizontal scrollable nav for mobile/tablet */}
      <nav className="lg:hidden sticky top-20 bg-white z-50 border-b border-gray-200 shadow-sm overflow-x-auto">
        <ul className="flex space-x-6 px-4 py-2 whitespace-nowrap overflow-x-scroll scrollbar-hide">
          {sections.map((section) => (
            <li
              key={section.id}
              className={`cursor-pointer pb-2 border-b-2 transition-colors duration-300 ${
                activeSection === section.id
                  ? "text-blue-600 border-blue-600 font-semibold"
                  : "border-transparent text-gray-700 hover:text-blue-600"
              }`}
              onClick={() => handleSectionClick(section.id)}
            >
              {section.title}
            </li>
          ))}
        </ul>
      </nav>

      {/* Stacked nav for desktop */}
      <aside className="hidden lg:block sticky top-24 lg:top-[116px]">
        <div className="mb-4 uppercase tracking-wider text-gray-600 text-sm font-semibold px-2">
          Contents
        </div>
        <div className="bg-white shadow rounded-lg overflow-hidden border border-gray-200">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`w-full text-left px-4 py-3 text-sm font-medium hover:bg-gray-50 transition-colors border-b border-b-gray-100 flex items-center justify-between group cursor-pointer ${
                activeSection === section.id
                  ? "bg-blue-50 text-blue-700 font-semibold border-l-4 border-blue-600"
                  : "text-gray-700"
              }`}
              onClick={() => handleSectionClick(section.id)}
            >
              <span>{section.title}</span>
              <ChevronRight
                className={`h-4 w-4 transition-colors ${
                  activeSection === section.id
                    ? "text-blue-600"
                    : "text-gray-400 group-hover:text-gray-600"
                }`}
              />
            </button>
          ))}
          <div className="p-4">
            <Button
              asChild
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Link href="/trainings/curriculum">GET MY SYLLABUS</Link>
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideNavigation;

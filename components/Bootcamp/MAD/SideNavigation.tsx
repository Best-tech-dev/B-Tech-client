"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

interface SideNavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const sections = [
  { id: "mobile-experience", title: "Mobile Experience" },
  { id: "what-youll-learn", title: "What You'll Learn" },
  { id: "tuition-dates", title: "Tuition & Dates" },
  // Add more sections as they're created
  // { id: "projects", title: "Projects" },
  // { id: "daily-schedule", title: "Daily Schedule" },
  // { id: "career-prep", title: "Career Prep" },
  // { id: "admissions", title: "Admissions" },
  // { id: "faqs", title: "FAQs" },
];

const SideNavigation: React.FC<SideNavigationProps> = ({
  activeSection,
  onSectionChange,
}) => {
  const handleSectionClick = (sectionId: string) => {
    onSectionChange(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 shadow-sm overflow-y-auto z-10">
      <div className="p-6">
        <h3 className="font-semibold text-gray-900 mb-6">Navigation</h3>
        <nav>
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => handleSectionClick(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-md transition-colors duration-200 flex items-center justify-between group ${
                    activeSection === section.id
                      ? "bg-green-50 text-green-700 font-medium"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <span className="text-sm">{section.title}</span>
                  <ChevronRight
                    className={`h-4 w-4 transition-transform duration-200 ${
                      activeSection === section.id
                        ? "text-green-700"
                        : "text-gray-400 group-hover:text-gray-600"
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideNavigation;

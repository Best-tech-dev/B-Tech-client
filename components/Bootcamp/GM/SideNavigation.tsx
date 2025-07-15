"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

interface SideNavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const SideNavigation: React.FC<SideNavigationProps> = ({
  activeSection,
  onSectionChange,
}) => {
  const navigationItems = [
    { id: "growth-experience", label: "Growth Marketing Experience" },
    { id: "what-youll-learn", label: "What You'll Learn" },
    { id: "tuition-dates", label: "Tuition & Dates" },
    { id: "projects", label: "Projects" },
    { id: "daily-schedule", label: "Daily Schedule" },
    { id: "career-prep", label: "Career Preparation" },
    { id: "admissions", label: "Admissions" },
    { id: "testimonials", label: "Testimonials" },
    { id: "faqs", label: "FAQs" },
  ];

  return (
    <div className="sticky top-8">
      <nav className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
        <h3 className="font-semibold text-gray-900 mb-4">Contents</h3>
        <ul className="space-y-2">
          {navigationItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onSectionChange(item.id)}
                className={`w-full text-left px-3 py-2 rounded-md transition-colors duration-200 flex items-center justify-between group ${
                  activeSection === item.id
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <span className="text-sm">{item.label}</span>
                <ChevronRight
                  className={`h-4 w-4 transition-transform duration-200 ${
                    activeSection === item.id
                      ? "text-blue-700"
                      : "text-gray-400 group-hover:text-gray-600"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideNavigation;

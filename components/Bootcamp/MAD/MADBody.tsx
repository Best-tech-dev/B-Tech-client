"use client";

import React, { useState, useEffect } from "react";
import SideNavigation from "./SideNavigation";
import MobileExperience from "./sections/MobileExperience";
import WhatYoullLearn from "./sections/WhatYoullLearn";
import TuitionDates from "./sections/TuitionDates";
// Import other sections when created
// import Projects from "./sections/Projects";
// import DailySchedule from "./sections/DailySchedule";
// import CareerPrep from "./sections/CareerPrep";
// import Admissions from "./sections/Admissions";
// import FAQs from "./sections/FAQs";

// const sections = [
//   { id: "mobile-experience", title: "Mobile Experience" },
//   { id: "what-youll-learn", title: "What You'll Learn" },
//   { id: "tuition-dates", title: "Tuition & Dates" },
//   // Add more sections as they're created
//   // { id: "projects", title: "Projects" },
//   // { id: "daily-schedule", title: "Daily Schedule" },
//   // { id: "career-prep", title: "Career Prep" },
//   // { id: "admissions", title: "Admissions" },
//   // { id: "faqs", title: "FAQs" },
// ];

const ContentSection: React.FC = () => {
  const [activeSection, setActiveSection] = useState("mobile-experience");

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "mobile-experience",
        "what-youll-learn",
        "tuition-dates",
        // Add more sections as they're created
      ];

      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container mx-auto px-2 md:px-6 lg:px-8 pb-16">
      <div className="flex flex-col lg:flex-row gap-8 mt-8">
        <div className="w-full lg:w-1/4">
          <SideNavigation
            activeSection={activeSection}
            onSectionChange={handleSectionChange}
          />
        </div>
        <div className="w-full lg:w-3/4 lg:ps-16">
          <MobileExperience />
          <WhatYoullLearn />
          <TuitionDates />
          {/* Add more sections as they're created */}
          {/* <Projects />
          <DailySchedule />
          <CareerPrep />
          <Admissions />
          <FAQs /> */}
        </div>
      </div>
    </div>
  );
};

export default ContentSection;

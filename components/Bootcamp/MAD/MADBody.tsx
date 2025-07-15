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

export const MADBody = () => {
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

      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex">
      <SideNavigation
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />

      <main className="flex-1 ml-64 px-6">
        <MobileExperience />
        <WhatYoullLearn />
        <TuitionDates />
        {/* Add more sections as they're created */}
        {/* <Projects />
        <DailySchedule />
        <CareerPrep />
        <Admissions />
        <FAQs /> */}
      </main>
    </div>
  );
};

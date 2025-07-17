"use client";

import React, { useState, useEffect } from "react";
import SideNavigation from "./SideNavigation";
import FullstackExperience from "./sections/FullstackExperience";
import WhatYoullLearn from "./sections/WhatYoullLearn";
import TuitionDates from "./sections/TuitionDates";
import Projects from "./sections/Projects";
import DailySchedule from "./sections/DailySchedule";
import CareerPrep from "./sections/CareerPrep";
import Admissions from "./sections/Admissions";
import Testimonials from "./sections/Testimonials";
import FAQs from "./sections/FAQs";

const ContentSection: React.FC = () => {
  const [activeSection, setActiveSection] = useState("fullstack-experience");

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
        "fullstack-experience",
        "what-youll-learn",
        "tuition-dates",
        "projects",
        "daily-schedule",
        "career-prep",
        "admissions",
        "testimonials",
        "faqs",
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
          <FullstackExperience />
          <WhatYoullLearn />
          <TuitionDates />
          <Projects />
          <DailySchedule />
          <CareerPrep />
          <Admissions />
          <Testimonials />
          <FAQs />
        </div>
      </div>
    </div>
  );
};

export default ContentSection;

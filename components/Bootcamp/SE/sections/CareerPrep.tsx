"use client";

import React from "react";
import { FileText, Github, Briefcase, Linkedin } from "lucide-react";

const careerHighlights = [
  {
    icon: <FileText className="h-6 w-6 text-primary-one" />,
    title: "Portfolio of Apps",
    description:
      "The projects and prototypes you build throughout bootcamp come together to form a comprehensive coding portfolio.",
  },
  {
    icon: <Linkedin className="h-6 w-6 text-primary-one" />,
    title: "LinkedIn Profile",
    description:
      "We’ll help you write and optimize a profile to jumpstart the networking process and demo your web applications for employer visibility.",
  },
  {
    icon: <Github className="h-6 w-6 text-primary-one" />,
    title: "GitHub Profile",
    description:
      "Tech employers across the board want to see a strong GitHub profile—and that is exactly what you will have by the end of the program.",
  },
  {
    icon: <Briefcase className="h-6 w-6 text-primary-one" />,
    title: "Resume",
    description:
      "You’ll work with your career coach to craft an effective resume that shows off your skills as a full stack software engineer.",
  },
];

const hiringCompanies = [
  "Google",
  "Amazon",
  "Facebook",
  "Apple",
  "Microsoft",
  "Netflix",
  "Uber",
  "Twitter",
  "LinkedIn",
  "Airbnb",
  "Salesforce",
  "Adobe",
];

const CareerPrep = () => {
  return (
    <section id="career-prep" className="py-16 px-4 sm:px-6 lg:px-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Prepare for a Career in Coding
      </h2>

      <p className="text-base md:text-lg text-gray-700 mb-12 max-w-3xl">
        Throughout bootcamp and for up to a year following graduation, you'll
        receive professional career coaching to power your job search and land a
        rewarding web developer role.
      </p>

      <div className="grid md:grid-cols-2 gap-10 mb-16">
        {careerHighlights.map((item, idx) => (
          <div key={idx}>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gray-100 rounded-full">{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>
            <p className="text-gray-700 text-base">{item.description}</p>
          </div>
        ))}
      </div>

      <p className="text-base md:text-lg text-gray-700 mb-16 max-w-3xl">
        Our career coaches will also help you prepare for job interviews with
        group sessions, events, presentations, and more!
      </p>

      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Fullstack Academy Graduates Get Hired
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 items-center mb-16">
        {hiringCompanies.map((company) => (
          <div
            key={company}
            className="flex items-center justify-center py-4 px-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow h-20 text-center"
          >
            <span className="font-medium text-sm md:text-base">{company}</span>
          </div>
        ))}
      </div>

      <div className="h-px bg-gray-200" />
    </section>
  );
};

export default CareerPrep;

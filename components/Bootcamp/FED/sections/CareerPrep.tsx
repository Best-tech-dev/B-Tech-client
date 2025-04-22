"use client";

import React from "react";
import { FileText, Github, Briefcase } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";

const careerHighlights = [
  {
    icon: <FileText className="h-6 w-6 text-white" />,
    title: "Portfolio of Apps",
    description:
      "Throughout bootcamp, you'll build projects and prototypes that assemble into a comprehensive coding portfolio.",
  },
  {
    icon: <FaLinkedinIn className="h-6 w-6 text-white" />,
    title: "LinkedIn Profile",
    description:
      "We provide support in writing and optimizing your profile, enabling you to effectively network and demo your web applications to employers.",
  },
  {
    icon: <Github className="h-6 w-6 text-white" />,
    title: "GitHub Profile",
    description:
      "The program will equip you with a strong GitHub profile, a crucial asset that tech employers consistently look for.",
  },
  {
    icon: <Briefcase className="h-6 w-6 text-white" />,
    title: "Resumé",
    description:
      "Your career coach will work with you to design a compelling resumé that demonstrates your full-stack software engineering capabilities.",
  },
];

const hiringCompanies = [
  "Upwork",
  "GSoC",
  "Outreachy",
  "Freelancer",
  "Fiverr",
  "Toptal",
  "Moniepoint",
  "Flutterwave",
  "Andela",
  "LinkedIn",
  "Nvidia",
  "Turing",
];

const CareerPrep = () => {
  return (
    <section
      id="career-prep"
      className="py-16 px-4 sm:px-6 lg:px-12 scroll-mt-28"
    >
      <h2 className="text-sm md:text-3xl font-bold mb-6">
        Prepare for a Career in Coding
      </h2>

      <p className="text-sm md:text-base text-gray-700 mb-12 max-w-3xl">
        Throughout bootcamp and for up to a year following graduation,
        you&apos;ll receive professional career coaching to power your job
        search and land a rewarding web developer role.
      </p>

      <div className="grid md:grid-cols-2 gap-10 mb-16">
        {careerHighlights.map((item, idx) => (
          <div key={idx}>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-full bg-brand-primary text-white">
                {item.icon}
              </div>
              <h3 className="text-lg text-brand-primary font-semibold">
                {item.title}
              </h3>
            </div>
            <p className="text-gray-700 text-sm md:text-base">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <p className="text-sm md:text-base text-gray-700 mb-16 max-w-3xl">
        Our career coaches will also help you prepare for job interviews with
        group sessions, events, presentations, and more!
      </p>

      <h2 className="text-base md:text-3xl font-bold mb-6">
        Best Technologies Ltd. Graduates Get Hired
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 items-center mb-16">
        {hiringCompanies.map((company) => (
          <div
            key={company}
            className="flex items-center justify-center py-4 px-6 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow h-20 text-center"
          >
            <span className="font-medium text-sm md:text-base">{company}</span>
          </div>
        ))}
      </div>

      <p className="text-sm md:text-base text-gray-700 mb-12 max-w-3xl">
        Lucrative coding careers are abundant across Nigeria, with companies in
        every industry hiring for software engineering roles, both remote and
        in-person. Tech hubs such as Ibadan, Port-Harcourt, Abuja and Lagos
        continue to be especially prominent centers for these opportunities.
      </p>

      {/* Divider */}
      <div className="border-t border-gray-200 mt-16"></div>
    </section>
  );
};

export default CareerPrep;

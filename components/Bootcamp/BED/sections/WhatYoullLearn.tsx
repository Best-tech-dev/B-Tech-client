"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";

const WhatYoullLearn = () => {
  const [expandedUnit, setExpandedUnit] = useState<string | null>(null);

  const toggleExpand = (unit: string) => {
    setExpandedUnit((prev) => (prev === unit ? null : unit));
  };

  return (
    <section id="what-youll-learn" className="py-12 scroll-mt-28">
      <h2 className="text-lg md:text-3xl font-bold mb-6">
        What You&apos;ll Learn
      </h2>

      <div className="mb-8">
        <p className="text-sm md:text-base text-gray-700 mb-4">
          Best Technologies Ltd.&apos;s Backend Development Bootcamp features an
          in-demand, JavaScript-based core curriculum.
        </p>
        <p className="text-sm md:text-base text-gray-700">
          You&apos;ll also have the opportunity to learn generative AI
          applications in web development through a free elective course,
          exploring tools such as ChatGPT and Bing AI.
        </p>
      </div>

      <div className="space-y-8">
        {/* Accordion Unit Block */}
        {[
          {
            id: "unit1",
            title: "Back-End Foundations",
            unit: "Unit 1",
            content: [
              "Node.js fundamentals",
              "Express.js framework",
              "RESTful API development",
              "Authentication and authorization",
              "Database design (SQL & NoSQL)",
              "ORM tools (Sequelize, Mongoose)",
              "Server-side rendering",
              "Version control with Git",
            ],
          },
          {
            id: "unit2",
            title: "Back-End Core",
            unit: "Unit 2",
            content: [
              "Capstone project development",
              "Performance optimization",
              "Deployment strategies",
              "CI/CD pipelines",
              "Cloud services (AWS, Firebase)",
              "Containerization with Docker",
              "Microservices architecture",
            ],
          },
        ].map(({ id, title, unit, content }) => (
          <div
            key={id}
            className="relative border border-gray-200 rounded-lg overflow-hidden"
          >
            <header
              role="button"
              tabIndex={0}
              aria-expanded={expandedUnit === id}
              onClick={() => toggleExpand(id)}
              onKeyDown={(e) => e.key === "Enter" && toggleExpand(id)}
              className="flex flex-col-reverse items-start md:flex-row md:items-center md:justify-between p-6 cursor-pointer focus:outline-none rounded-lg"
            >
              <div className="flex items-center space-x-8">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-primary/10 shrink-0">
                  <Plus
                    className={`w-6 h-6 text-brand-primary transition-transform duration-300 ${
                      expandedUnit === id ? "rotate-45" : ""
                    }`}
                  />
                </div>
                <h3 className="text-sm md:text-xl font-medium">{title}</h3>
              </div>
              <div className="rounded-full px-4 py-1 border border-brand-primary text-brand-primary text-xs md:text-sm mb-4 md:mb-0">
                {unit}
              </div>
            </header>

            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                expandedUnit === id
                  ? "max-h-[1000px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-6 border-t border-gray-200">
                <header>
                  <h4 className="text-sm md:text-lg font-semibold mb-2">
                    In this unit, you will learn:
                  </h4>
                </header>
                <ul className="list-disc pl-6 space-y-2">
                  {content.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-lg md:text-3xl font-semibold mt-12 mb-6">
        Backend Development Immersive Tools and Technologies
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          "JavaScript",
          "Node.js",
          "Express.js",
          "SQL",
          "Git",
          "GitHub",
          "MongoDB",
          "NPM/PNPM",
          "ORMs",
        ].map((tech) => (
          <div
            key={tech}
            className="border border-gray-200 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow"
          >
            {tech}
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 mt-16"></div>
    </section>
  );
};

export default WhatYoullLearn;

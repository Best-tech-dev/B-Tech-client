"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";

const WhatYoullLearn = () => {
  const [expandedUnit, setExpandedUnit] = useState<string | null>(null);

  const toggleExpand = (unit: string) => {
    setExpandedUnit((prev) => (prev === unit ? null : unit));
  };

  return (
    <section id="what-youll-learn" className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">What You'll Learn</h2>

      <div className="mb-8">
        <p className="text-lg text-gray-700 mb-4">
          The Fullstack Academy Software Engineering Bootcamp utilizes an
          in-demand, JavaScript-based core curriculum.
        </p>
        <p className="text-lg text-gray-700">
          You'll also learn how to apply generative AI in web development using
          ChatGPT, Bing AI, and more with a free elective course.
        </p>
      </div>

      <div className="space-y-8">
        {/* Accordion Unit Block */}
        {[
          {
            id: "unit1",
            title: "Front-End Foundations",
            unit: "Unit 1",
            content: [
              "HTML & CSS fundamentals",
              "JavaScript programming basics",
              "DOM manipulation",
              "Responsive web design principles",
              "CSS frameworks (Bootstrap, Tailwind)",
              "Version control with Git",
            ],
          },
          {
            id: "unit2",
            title: "Front-End Development",
            unit: "Unit 2",
            content: [
              "Advanced JavaScript concepts",
              "ES6+ features",
              "React fundamentals",
              "Component-based architecture",
              "State management",
              "React Router",
              "API integration",
            ],
          },
          {
            id: "unit34",
            title: "Development Libraries and Back-End Engineering",
            unit: "Units 3 & 4",
            content: [
              "Node.js fundamentals",
              "Express.js framework",
              "RESTful API development",
              "Authentication and authorization",
              "Database design (SQL & NoSQL)",
              "ORM tools (Sequelize, Mongoose)",
              "Server-side rendering",
              "Testing and debugging",
            ],
          },
          {
            id: "unit5",
            title: "Full Stack Development",
            unit: "Unit 5",
            content: [
              "Capstone project development",
              "Advanced state management",
              "Performance optimization",
              "Deployment strategies",
              "CI/CD pipelines",
              "Cloud services (AWS, Firebase)",
              "Containerization with Docker",
              "Microservices architecture",
            ],
          },
        ].map(({ id, title, unit, content }) => (
          <div key={id} className="relative border rounded-lg overflow-hidden">
            <header
              role="button"
              tabIndex={0}
              aria-expanded={expandedUnit === id}
              onClick={() => toggleExpand(id)}
              onKeyDown={(e) => e.key === "Enter" && toggleExpand(id)}
              className="flex items-center justify-between p-6 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-primary rounded-lg transition-colors"
            >
              <div className="flex items-center space-x-8">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-primary/10">
                  <Plus
                    className={`w-6 h-6 text-brand-primary transition-transform duration-300 ${
                      expandedUnit === id ? "rotate-45" : ""
                    }`}
                  />
                </div>
                <h3 className="text-xl font-medium">{title}</h3>
              </div>
              <div className="rounded-full px-4 py-1 border border-brand-primary text-brand-primary text-sm">
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
              <div className="p-6 pt-0 border-t">
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

      <h3 className="text-2xl font-semibold mt-12 mb-6">
        Software Engineering Immersive Tools and Technologies
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          "JavaScript",
          "React",
          "Node.js",
          "Express",
          "SQL",
          "MongoDB",
          "Git",
          "GitHub",
          "Redux",
          "HTML5",
          "CSS3",
          "Webpack",
          "TypeScript",
          "Jest",
          "AWS",
          "Docker",
        ].map((tech) => (
          <div
            key={tech}
            className="border rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow"
          >
            {tech}
          </div>
        ))}
      </div>

      <div className="section-divider"></div>
    </section>
  );
};

export default WhatYoullLearn;

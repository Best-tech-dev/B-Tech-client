import React from "react";
import { CheckCircle } from "lucide-react";

const WhatYoullLearn: React.FC = () => {
  const learningModules = [
    {
      category: "Growth Frameworks & Strategy",
      skills: [
        "Apply full-funnel growth frameworks to real products",
        "Create growth roadmaps aligned with business goals",
        "Build scalable, repeatable growth systems",
        "Develop hypothesis-driven growth strategies",
        "Strategic growth thinking and planning",
      ],
    },
    {
      category: "Campaign Management & Optimization",
      skills: [
        "Launch paid and organic acquisition campaigns that convert",
        "Optimize landing pages, email flows, and user journeys",
        "Track and interpret performance metrics that actually matter",
        "Run growth experiments and A/B tests with clear hypotheses",
        "Cross-channel growth campaign optimization",
      ],
    },
    {
      category: "Cross-Functional Collaboration",
      skills: [
        "Collaborate cross-functionally with product and sales teams",
        "Present insights backed by real data",
        "Align marketing efforts with business objectives",
        "Build cross-departmental growth processes",
        "Lead growth initiatives across teams",
      ],
    },
    {
      category: "Tools & Analytics",
      skills: [
        "Practical exposure to paid media tools",
        "Analytics and landing page testing platforms",
        "CRM and experimentation tools",
        "Growth stack optimization",
        "Data-driven decision making tools",
      ],
    },
  ];

  return (
    <section id="what-youll-learn" className="mb-12 lg:mb-16">
      <div className="max-w-4xl">
        <h2
          className="font-bold text-gray-900 mb-4 lg:mb-6"
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
            lineHeight: "1.3",
          }}
        >
          What You&apos;ll Learn
        </h2>
        <p
          className="text-gray-700 mb-6 lg:mb-8 leading-relaxed"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.125rem)",
            lineHeight: "1.6",
          }}
        >
          Our curriculum is designed by growth operators from leading companies
          and covers the complete growth marketing process. You&apos;ll master
          data-driven strategies from experimentation to scaling.
        </p>

        <div className="space-y-6 lg:space-y-8">
          {learningModules.map((module, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4 lg:p-6"
            >
              <h3
                className="font-semibold text-gray-900 mb-3 lg:mb-4"
                style={{
                  fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
                  lineHeight: "1.4",
                }}
              >
                {module.category}
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {module.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center space-x-2 sm:space-x-3"
                  >
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
                    <span
                      className="text-gray-700"
                      style={{
                        fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
                        lineHeight: "1.5",
                      }}
                    >
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 lg:mt-8 bg-green-50 p-4 lg:p-6 rounded-lg border border-green-100 shadow-md">
          <h3
            className="font-semibold text-green-900 mb-2 lg:mb-3"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.125rem)",
              lineHeight: "1.4",
            }}
          >
            Project-Driven Learning
          </h3>
          <p
            className="text-green-800"
            style={{
              fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
              lineHeight: "1.6",
            }}
          >
            Every strategy you learn becomes part of your professional
            portfolio. By graduation, you&apos;ll have a capstone growth project
            showcasing your strategic thinking, experimentation process, and
            results that you can confidently present to employers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatYoullLearn;

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
    <section id="what-youll-learn" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          What You&apos;ll Learn
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Our curriculum is designed by growth operators from leading companies
          and covers the complete growth marketing process. You&apos;ll master
          data-driven strategies from experimentation to scaling.
        </p>

        <div className="space-y-8">
          {learningModules.map((module, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {module.category}
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {module.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-green-50 p-6 rounded-xl border border-green-100">
          <h3 className="text-lg font-semibold text-green-900 mb-3">
            Project-Driven Learning
          </h3>
          <p className="text-green-800">
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

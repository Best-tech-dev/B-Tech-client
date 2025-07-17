import React from "react";
import { CheckCircle } from "lucide-react";

const WhatYoullLearn: React.FC = () => {
  const learningModules = [
    {
      category: "Design Fundamentals",
      skills: [
        "HTML5 semantic structure",
        "CSS Grid and Flexbox layouts",
        "Responsive design principles",
        "Web accessibility standards",
      ],
    },
    {
      category: "JavaScript & Programming",
      skills: [
        "JavaScript fundamentals and ES6+",
        "DOM manipulation and events",
        "Asynchronous programming",
        "API integration and HTTP requests",
      ],
    },
    {
      category: "Modern Frameworks & Libraries",
      skills: [
        "React components and hooks",
        "State management with Redux",
        "Single Page Applications (SPAs)",
        "Component testing and debugging",
      ],
    },
    {
      category: "Development Tools & Workflow",
      skills: [
        "Git version control",
        "Package managers (npm/yarn)",
        "Build tools and bundlers",
        "Browser developer tools",
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
          Our curriculum is designed by senior engineers from top tech companies
          and covers both fundamental and advanced concepts. You&apos;ll master
          the complete frontend development stack from basic web technologies to
          modern frameworks.
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
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-blue-50 p-6 rounded-xl border border-blue-100">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">
            Portfolio-Driven Learning
          </h3>
          <p className="text-blue-800">
            Every project you complete becomes part of your professional
            portfolio. By graduation, you&apos;ll have 4-6 real-world
            applications showcasing your development skills and problem-solving
            abilities that you can confidently present to employers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatYoullLearn;

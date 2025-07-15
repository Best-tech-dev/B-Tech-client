import React from "react";
import { CheckCircle } from "lucide-react";

const WhatYoullLearn: React.FC = () => {
  const learningModules = [
    {
      category: "Design Fundamentals",
      skills: [
        "Design thinking methodology",
        "Color theory and psychology",
        "Typography and layout principles",
        "Visual hierarchy and composition",
        "Accessibility and inclusive design",
      ],
    },
    {
      category: "User Research & Testing",
      skills: [
        "User interviews and surveys",
        "Persona development",
        "User journey mapping",
        "Usability testing methods",
        "A/B testing for design",
      ],
    },
    {
      category: "UI Design & Prototyping",
      skills: [
        "Wireframing and mockups",
        "Interactive prototyping",
        "Micro-interactions design",
        "Responsive design principles",
        "Mobile-first design approach",
      ],
    },
    {
      category: "Design Tools & Technologies",
      skills: [
        "Figma (advanced features)",
        "Adobe XD and Creative Suite",
        "Sketch and InVision",
        "Principle for animations",
        "Design handoff and collaboration",
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
          Our curriculum is designed by senior designers from leading companies
          and covers both UI and UX disciplines. You&apos;ll master the complete
          design process from research to final implementation.
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
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-purple-50 p-6 rounded-xl border border-purple-100">
          <h3 className="text-lg font-semibold text-purple-900 mb-3">
            Portfolio-Driven Learning
          </h3>
          <p className="text-purple-800">
            Every project you complete becomes part of your professional
            portfolio. By graduation, you&apos;ll have 5-7 case studies
            showcasing your design process, problem-solving skills, and final
            solutions that you can confidently present to employers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatYoullLearn;

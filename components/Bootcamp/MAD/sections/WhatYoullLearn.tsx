import React from "react";
import { CheckCircle } from "lucide-react";

const WhatYoullLearn: React.FC = () => {
  const learningModules = [
    {
      category: "Development Fundamentals",
      skills: [
        "Mobile app architecture patterns",
        "UI/UX principles for mobile",
        "Touch gestures and interactions",
        "Mobile performance optimization",
        "Cross-platform development concepts",
      ],
    },
    {
      category: "React Native Development",
      skills: [
        "React Native fundamentals",
        "Navigation and routing",
        "State management with Redux",
        "Native modules integration",
        "Expo development platform",
      ],
    },
    {
      category: "Flutter Development",
      skills: [
        "Dart programming language",
        "Flutter widget system",
        "State management solutions",
        "Platform-specific implementations",
        "Firebase integration",
      ],
    },
    {
      category: "Mobile Tools & Deployment",
      skills: [
        "App store publishing process",
        "TestFlight and Play Console",
        "Push notifications setup",
        "Analytics and crash reporting",
        "CI/CD for mobile apps",
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
          Our curriculum is designed by mobile development experts from leading
          tech companies and covers both native and cross-platform development.
          You&apos;ll master the complete mobile development lifecycle from
          concept to app store deployment.
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
            Portfolio-Driven Learning
          </h3>
          <p className="text-green-800">
            Every app you develop becomes part of your professional portfolio.
            By graduation, you&apos;ll have 4-5 published mobile applications
            demonstrating your coding skills, design thinking, and ability to
            solve real-world problems that you can showcase to employers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatYoullLearn;

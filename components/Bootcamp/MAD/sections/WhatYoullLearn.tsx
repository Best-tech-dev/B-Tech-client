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
          Our curriculum is designed by mobile development experts from leading
          tech companies and covers both native and cross-platform development.
          You&apos;ll master the complete mobile development lifecycle from
          concept to app store deployment.
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
            Portfolio-Driven Learning
          </h3>
          <p
            className="text-green-800"
            style={{
              fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
              lineHeight: "1.6",
            }}
          >
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

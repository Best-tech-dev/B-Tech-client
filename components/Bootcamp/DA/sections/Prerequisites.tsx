import React from "react";
import { GraduationCap, Calculator, Users, Clock } from "lucide-react";

const Prerequisites: React.FC = () => {
  const requirements = [
    {
      icon: <GraduationCap className="h-6 w-6 text-blue-600" />,
      title: "Educational Background",
      description: "Minimum of OND/HND or Bachelor's degree in any field",
      required: true,
    },
    {
      icon: <Calculator className="h-6 w-6 text-green-600" />,
      title: "Basic Math Skills",
      description: "Comfortable with basic mathematics and statistics",
      required: true,
    },
    {
      icon: <Users className="h-6 w-6 text-purple-600" />,
      title: "Analytical Mindset",
      description: "Curiosity about data and problem-solving approach",
      required: true,
    },
    {
      icon: <Clock className="h-6 w-6 text-orange-600" />,
      title: "Time Commitment",
      description: "15-20 hours per week for 12 weeks",
      required: true,
    },
  ];

  const beneficial = [
    "Basic Excel knowledge (helpful but not required)",
    "Any programming experience (Python, R, SQL)",
    "Business or analytical work experience",
    "Interest in business intelligence or data science",
  ];

  return (
    <section id="prerequisites" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Prerequisites</h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Our Data Analytics bootcamp is designed for beginners. Here&apos;s
          what you need to get started:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {requirements.map((requirement, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-6 bg-white border border-gray-200 rounded-xl"
            >
              <div className="flex-shrink-0 p-2 bg-gray-50 rounded-lg">
                {requirement.icon}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {requirement.title}
                  {requirement.required && (
                    <span className="text-red-500 ml-1">*</span>
                  )}
                </h4>
                <p className="text-gray-600">{requirement.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-green-50 p-6 rounded-xl border border-green-200">
          <h3 className="text-lg font-semibold text-green-900 mb-4">
            Beneficial but Not Required
          </h3>
          <div className="space-y-2">
            {beneficial.map((item, index) => (
              <div key={index} className="flex items-center text-green-800">
                <div className="h-1.5 w-1.5 bg-green-600 rounded-full mr-3"></div>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center text-gray-600">
          <p className="text-sm">
            <span className="text-red-500">*</span> Required for admission
          </p>
        </div>
      </div>
    </section>
  );
};

export default Prerequisites;

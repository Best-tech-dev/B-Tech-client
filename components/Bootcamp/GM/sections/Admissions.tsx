import React from "react";
import { GraduationCap, Clock, FileCheck, TrendingUp } from "lucide-react";

const Admissions: React.FC = () => {
  const requirements = [
    {
      title: "Marketing Background",
      description:
        "Interest in growth marketing, digital marketing, or business development (portfolio not required)",
      icon: <TrendingUp className="h-6 w-6 text-green-600" />,
    },
    {
      title: "Time Commitment",
      description: "Ability to dedicate 15-20 hours per week for 12 weeks",
      icon: <Clock className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Application Materials",
      description:
        "Completed application form, CV, and growth marketing motivation letter",
      icon: <FileCheck className="h-6 w-6 text-green-600" />,
    },
    {
      title: "Educational Background",
      description: "Minimum of OND/HND or equivalent marketing experience",
      icon: <GraduationCap className="h-6 w-6 text-orange-600" />,
    },
  ];

  return (
    <section id="admissions" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Admissions Process
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          We welcome motivated individuals from all backgrounds. No prior growth
          marketing experience is required - just passion for driving business
          growth and data-driven decision making.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
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
                </h4>
                <p className="text-gray-600">{requirement.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-green-50 p-6 rounded-xl border border-green-200">
          <h4 className="font-semibold text-green-900 mb-4">
            What We Look For in Applicants
          </h4>
          <div className="space-y-2 text-green-800">
            <p>
              • <strong>Growth curiosity</strong> and willingness to learn
            </p>
            <p>
              • <strong>Data-driven mindset</strong> and analytical thinking
            </p>
            <p>
              • <strong>Problem-solving approach</strong> and user empathy
            </p>
            <p>
              • <strong>Commitment</strong> to completing the intensive program
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;

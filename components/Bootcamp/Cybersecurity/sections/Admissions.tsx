import React from "react";
import { GraduationCap, Clock, FileCheck, Shield } from "lucide-react";

const Admissions: React.FC = () => {
  const requirements = [
    {
      title: "Technical Interest",
      description:
        "Interest in cybersecurity, technology, or problem-solving (security experience not required)",
      icon: <Shield className="h-6 w-6 text-red-600" />,
    },
    {
      title: "Time Commitment",
      description: "Ability to dedicate 15-20 hours per week for 25 weeks",
      icon: <Clock className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Application Materials",
      description:
        "Completed application form, CV, and cybersecurity motivation letter",
      icon: <FileCheck className="h-6 w-6 text-green-600" />,
    },
    {
      title: "Educational Background",
      description: "Minimum of OND/HND or equivalent technical experience",
      icon: <GraduationCap className="h-6 w-6 text-orange-600" />,
    },
  ];

  const criteria = [
    "Creative curiosity and willingness to learn",
    "Attention to detail and aesthetic sensibility",
    "Problem-solving mindset and user empathy",
    "Commitment to completing the intensive program",
  ];

  return (
    <section id="admissions" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Admissions Process
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          We welcome aspiring cybersecurity professionals from all backgrounds.
          No prior security experience is required - just passion for protecting
          digital systems and curiosity about ethical hacking.
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

        <div className="bg-red-50 p-6 rounded-xl border border-red-200">
          <h4 className="font-semibold text-red-900 mb-4">
            What We Look For in Applicants
          </h4>
          <div className="space-y-2 text-red-800">
            {criteria.map((criterion, index) => (
              <p key={index}>
                • <strong>{criterion.split(" and ")[0]}</strong>
                {criterion.includes(" and ")
                  ? ` and ${criterion.split(" and ").slice(1).join(" and ")}`
                  : ""}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;

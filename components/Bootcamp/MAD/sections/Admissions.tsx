import React from "react";
import { Brain, Clock } from "lucide-react";

const Admissions: React.FC = () => {
  const requirements = [
    {
      title: "Technical Foundation",
      description:
        "Basic programming knowledge or logical thinking ability (mobile experience not required)",
      icon: <Brain className="h-6 w-6 text-green-600" />,
    },
    {
      title: "Time Commitment",
      description: "Ability to dedicate 20-25 hours per week for 6 months",
      icon: <Clock className="h-6 w-6 text-blue-600" />,
    },
    // {
    //   title: "Application Materials",
    //   description:
    //     "Completed application form, CV, and mobile app idea proposal",
    //   icon: <FileCheck className="h-6 w-6 text-purple-600" />,
    // },
    // {
    //   title: "Educational Background",
    //   description: "Minimum of SSCE with strong analytical skills",
    //   icon: <GraduationCap className="h-6 w-6 text-orange-600" />,
    // },
  ];

  const criteria = [
    "Creative problem-solving and innovative thinking",
    "Attention to detail and user-focused mindset",
    "Collaborative approach and teamwork skills",
    "Commitment to completing the intensive program",
  ];

  return (
    <section id="admissions" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
          Admissions Process
        </h2>
        <p className="text-base text-gray-700 mb-8 leading-relaxed">
          We welcome aspiring mobile developers from all backgrounds. No prior
          mobile development experience is required - just passion for creating
          innovative mobile solutions and problem-solving mindset.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {requirements.map((requirement, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-6 bg-white border border-gray-200 rounded-xl"
            >
              <div className="flex-shrink-0 p-2 bg-gray-50 rounded-lg w-10 h-10 flex items-center justify-center sm:w-12 sm:h-12">
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

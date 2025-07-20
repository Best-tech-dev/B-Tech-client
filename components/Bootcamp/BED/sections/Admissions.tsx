import React from "react";
import { GraduationCap, Clock, FileCheck, Code } from "lucide-react";

const Admissions: React.FC = () => {
  const requirements = [
    {
      title: "Technical Background",
      description:
        "Interest in backend development, programming, or system architecture (portfolio not required)",
      icon: <Code className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Time Commitment",
      description: "Ability to dedicate 25-30 hours per week for 6 months",
      icon: <Clock className="h-6 w-6 text-green-600" />,
    },
    {
      title: "Application Materials",
      description:
        "Completed application form, CV, and programming motivation letter",
      icon: <FileCheck className="h-6 w-6 text-purple-600" />,
    },
    {
      title: "Educational Background",
      description: "Minimum of OND/HND or equivalent technical experience",
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
          We welcome technical individuals from all backgrounds. No prior
          backend experience is required - just passion for creating robust,
          scalable server-side applications.
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

        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
          <h4 className="font-semibold text-blue-900 mb-4">
            What We Look For in Applicants
          </h4>
          <div className="space-y-2 text-blue-800">
            <p>
              • <strong>Technical curiosity</strong> and willingness to learn
            </p>
            <p>
              • <strong>Problem-solving mindset</strong> and logical thinking
            </p>
            <p>
              • <strong>System thinking</strong> and backend architecture
              interest
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

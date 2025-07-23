import React from "react";
import { Brain, Clock } from "lucide-react";

const Admissions: React.FC = () => {
  const requirements = [
    {
      title: "Mathematical Foundation",
      description:
        "Basic understanding of mathematics and analytical thinking (programming experience helpful but not required)",
      icon: <Brain className="h-6 w-6 text-green-600" />,
    },
    {
      title: "Time Commitment",
      description: "Ability to dedicate 15-20 hours per week for 8 months",
      icon: <Clock className="h-6 w-6 text-blue-600" />,
    },
    // {
    //   title: "Application Materials",
    //   description:
    //     "Completed application form, CV, and AI/ML motivation letter",
    //   icon: <FileCheck className="h-6 w-6 text-green-600" />,
    // },
    // {
    //   title: "Educational Background",
    //   description:
    //     "Minimum of OND/HND or equivalent technical/analytical experience",
    //   icon: <GraduationCap className="h-6 w-6 text-orange-600" />,
    // },
  ];

  return (
    <section id="admissions" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
          Admissions Process
        </h2>
        <p className="text-base text-gray-700 mb-8 leading-relaxed">
          We welcome individuals with analytical mindsets from all backgrounds.
          No prior AI experience is required - just curiosity about machine
          learning and commitment to building intelligent systems.
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
            <p>
              • <strong>Creative curiosity</strong> and willingness to learn
            </p>
            <p>
              • <strong>Attention to detail</strong> and analytical mindset
            </p>
            <p>
              • <strong>Problem-solving approach</strong> and logical thinking
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

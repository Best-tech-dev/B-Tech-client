import React from "react";
import { Shield, Bug, Lock } from "lucide-react";

const CareerPrep: React.FC = () => {
  const careerPaths = [
    {
      title: "Security Analyst",
      salary: "₦3M – ₦6M annually",
      icon: <Shield className="h-6 w-6 text-red-600" />,
      description: "Monitor systems, analyze threats, and respond to incidents",
    },
    {
      title: "Penetration Tester (Ethical Hacker)",
      salary: "₦4M – ₦9M annually",
      icon: <Bug className="h-6 w-6 text-orange-600" />,
      description:
        "Simulate attacks to uncover system vulnerabilities and help companies patch them",
    },
    {
      title: "Security Engineer",
      salary: "₦5M – ₦11M annually",
      icon: <Lock className="h-6 w-6 text-blue-600" />,
      description:
        "Design and implement robust security architectures across cloud and on-prem systems",
    },
  ];

  return (
    <section id="career-prep" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
          Career Preparation
        </h2>
        <p className="text-base text-gray-700 mb-8 leading-relaxed">
          Get industry-ready with resume reviews, red-team/blue-team scenarios,
          and security certification guidance. We help you showcase your skills
          and land your first role in cybersecurity operations or consulting.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {careerPaths.map((path, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gray-100 rounded-full">{path.icon}</div>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {path.title}
              </h4>
              <p className="text-red-600 font-medium mb-3">{path.salary}</p>
              <p className="text-gray-600 text-sm">{path.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-red-50 p-8 rounded-xl border border-red-200">
          <h3 className="text-xl font-semibold text-red-900 mb-4">
            Security Career Support
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-red-900 mb-2">
                Portfolio Reviews
              </h4>
              <p className="text-red-800 text-sm">
                One-on-one walkthroughs of your security reports, assessments,
                and red-team results
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-red-900 mb-2">
                Interview Preparation
              </h4>
              <p className="text-red-800 text-sm">
                Mock technical interviews and scenario-based problem solving
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-red-900 mb-2">
                Industry Connections
              </h4>
              <p className="text-red-800 text-sm">
                Connect with cybersecurity recruiters, firms, and compliance
                consultants
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-red-900 mb-2">
                Ongoing Support
              </h4>
              <p className="text-red-800 text-sm">
                Continuous updates, mentorship, and job hunting assistance after
                graduation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerPrep;

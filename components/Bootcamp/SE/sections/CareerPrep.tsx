import React from "react";
import { Briefcase, FileText, Award } from "lucide-react";

const CareerPrep: React.FC = () => {
  const careerPaths = [
    {
      title: "Full-Stack Developer",
      salary: "₦4M - ₦10M annually",
      icon: <Award className="h-6 w-6 text-blue-600" />,
      description:
        "Build end-to-end web applications with frontend and backend expertise",
    },
    {
      title: "Software Engineer",
      salary: "₦5M - ₦12M annually",
      icon: <Briefcase className="h-6 w-6 text-blue-600" />,
      description:
        "Design and develop scalable software solutions for enterprises",
    },
    {
      title: "Technical Lead",
      salary: "₦6M - ₦15M annually",
      icon: <FileText className="h-6 w-6 text-green-600" />,
      description:
        "Lead development teams and architect complex technical solutions",
    },
  ];
  return (
    <section id="career-prep" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Career Preparation
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Our comprehensive career support prepares you for success in the
          competitive tech industry with portfolio reviews, interview
          preparation, and job placement assistance.
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
              <p className="text-blue-600 font-medium mb-3">{path.salary}</p>
              <p className="text-gray-600 text-sm">{path.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 p-8 rounded-xl border border-blue-200">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Portfolio Development Support
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-blue-900 mb-2">
                Portfolio Reviews
              </h4>
              <p className="text-blue-800 text-sm">
                Regular one-on-one sessions with senior developers to refine
                your portfolio
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-900 mb-2">
                Interview Preparation
              </h4>
              <p className="text-blue-800 text-sm">
                Mock technical challenges and coding interview training
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-900 mb-2">
                Industry Connections
              </h4>
              <p className="text-blue-800 text-sm">
                Access to our network of hiring managers and tech leaders
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-900 mb-2">
                Ongoing Support
              </h4>
              <p className="text-blue-800 text-sm">
                Career guidance and mentorship even after graduation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerPrep;

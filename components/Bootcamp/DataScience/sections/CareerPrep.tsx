import React from "react";
import { BarChart3, TrendingUp, Database } from "lucide-react";

const CareerPrep: React.FC = () => {
  const careerPaths = [
    {
      title: "Data Analyst",
      salary: "₦3M - ₦6M annually",
      icon: <BarChart3 className="h-6 w-6 text-purple-600" />,
      description:
        "Analyze datasets and communicate insights through reports and dashboards",
    },
    {
      title: "Data Scientist",
      salary: "₦5M - ₦10M annually",
      icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
      description:
        "Build predictive models and support decision-making with machine learning",
    },
    {
      title: "Machine Learning Engineer",
      salary: "₦6M - ₦13M annually",
      icon: <Database className="h-6 w-6 text-green-600" />,
      description:
        "Design and deploy ML models into scalable production environments",
    },
  ];

  return (
    <section id="career-prep" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
          Career Preparation
        </h2>
        <p className="text-base text-gray-700 mb-8 leading-relaxed">
          Our comprehensive career support prepares you for success in the
          competitive data science industry with portfolio reviews, interview
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
              <p className="text-purple-600 font-medium mb-3">{path.salary}</p>
              <p className="text-gray-600 text-sm">{path.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-purple-50 p-8 rounded-xl border border-purple-200">
          <h3 className="text-xl font-semibold text-purple-900 mb-4">
            Portfolio Development Support
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-purple-900 mb-2">
                Portfolio Reviews
              </h4>
              <p className="text-purple-800 text-sm">
                Regular one-on-one sessions with senior data scientists to
                refine your data portfolio
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-900 mb-2">
                Interview Preparation
              </h4>
              <p className="text-purple-800 text-sm">
                Mock data challenges, SQL tests, and technical interview
                training
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-900 mb-2">
                Industry Connections
              </h4>
              <p className="text-purple-800 text-sm">
                Access to our network of hiring managers and data science
                leaders
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-900 mb-2">
                Ongoing Support
              </h4>
              <p className="text-purple-800 text-sm">
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

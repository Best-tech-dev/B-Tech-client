import React from "react";
import { Smartphone, Code, Globe } from "lucide-react";

const CareerPrep: React.FC = () => {
  const careerPaths = [
    {
      title: "Mobile App Developer",
      salary: "₦2.5M - ₦6M annually",
      icon: <Smartphone className="h-6 w-6 text-green-600" />,
      description:
        "Build native and cross-platform mobile applications for various industries",
    },
    {
      title: "iOS Developer",
      salary: "₦3M - ₦7M annually",
      icon: <Code className="h-6 w-6 text-blue-600" />,
      description:
        "Specialize in cross-platform iOS development using React Native and Flutter",
    },
    {
      title: "Android Developer",
      salary: "₦3M - ₦7M annually",
      icon: <Globe className="h-6 w-6 text-purple-600" />,
      description:
        "Focus on cross-platform Android development with React Native and Flutter",
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
          competitive mobile development industry with portfolio reviews,
          interview preparation, and job placement assistance.
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
              <p className="text-green-600 font-medium mb-3">{path.salary}</p>
              <p className="text-gray-600 text-sm">{path.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-green-50 p-8 rounded-xl border border-green-200">
          <h3 className="text-xl font-semibold text-green-900 mb-4">
            Portfolio Development Support
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-green-900 mb-2">
                Portfolio Reviews
              </h4>
              <p className="text-green-800 text-sm">
                Regular one-on-one sessions with senior mobile developers to
                refine your portfolio
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-900 mb-2">
                Interview Preparation
              </h4>
              <p className="text-green-800 text-sm">
                Mock technical interviews and coding challenges specific to
                mobile development
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-900 mb-2">
                Industry Connections
              </h4>
              <p className="text-green-800 text-sm">
                Access to our network of mobile-focused companies and startups
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-900 mb-2">
                Ongoing Support
              </h4>
              <p className="text-green-800 text-sm">
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

import React from "react";
import { Cloud, Server, Cog, Shield } from "lucide-react";

const CloudExperience: React.FC = () => {
  const highlights = [
    {
      icon: <Cloud className="h-6 w-6 text-blue-600" />,
      title: "Cloud Infrastructure",
      description:
        "Learn to deploy and manage scalable systems using AWS, Azure, and other leading cloud platforms.",
    },
    {
      icon: <Server className="h-6 w-6 text-green-600" />,
      title: "Containers & Orchestration",
      description:
        "Master Docker and Kubernetes to build, ship, and run applications efficiently across environments.",
    },
    {
      icon: <Cog className="h-6 w-6 text-purple-600" />,
      title: "CI/CD & Automation",
      description:
        "Implement continuous integration and delivery pipelines for faster, more reliable software releases.",
    },
    {
      icon: <Shield className="h-6 w-6 text-orange-600" />,
      title: "Monitoring & Security",
      description:
        "Gain skills in infrastructure monitoring, logging, and securing cloud-native applications and services.",
    },
  ];

  return (
    <section id="cloud-experience" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Cloud & DevOps Experience
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Gain practical expertise in cloud computing and DevOps through
          hands-on training in leading platforms and tools. This program equips
          you with real-world skills in AWS, Azure, Docker, Kubernetes, and
          CI/CD pipelines preparing you to build, deploy, and manage modern,
          scalable infrastructure with confidence.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl"
            >
              <div className="flex-shrink-0">{highlight.icon}</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl border border-blue-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Why Choose Cloud & DevOps?
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Cloud & DevOps is one of the most in-demand skills in the tech
            industry. As businesses increasingly adopt cloud technologies and
            automation, the need for skilled professionals who can build,
            deploy, and manage reliable infrastructure continues to grow. Our
            program prepares you for this exciting field with hands-on projects
            and industry-standard tools.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CloudExperience;

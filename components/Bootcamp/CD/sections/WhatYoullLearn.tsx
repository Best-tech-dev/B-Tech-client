import React from "react";
import { CheckCircle } from "lucide-react";

const WhatYoullLearn: React.FC = () => {
  const learningModules = [
    {
      category: "Cloud Fundamentals",
      skills: [
        "Cloud computing concepts and models",
        "AWS, Azure, and GCP platforms",
        "Infrastructure as a Service (IaaS)",
        "Platform as a Service (PaaS)",
        "Serverless and microservices architecture",
      ],
    },
    {
      category: "Containerization & Orchestration",
      skills: [
        "Docker containerization",
        "Kubernetes cluster management",
        "Container registry and images",
        "Pod and service deployment",
        "Helm charts and package management",
      ],
    },
    {
      category: "CI/CD & Automation",
      skills: [
        "Jenkins pipeline development",
        "GitLab CI and GitHub Actions",
        "Infrastructure as Code (IaC)",
        "Terraform and CloudFormation",
        "Automated testing and deployment",
      ],
    },
    {
      category: "Monitoring & Security",
      skills: [
        "Application and infrastructure monitoring",
        "Log aggregation and analysis",
        "Security best practices",
        "Identity and access management",
        "Incident response and troubleshooting",
      ],
    },
  ];

  return (
    <section id="what-youll-learn" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          What You&apos;ll Learn
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Our curriculum is designed by senior DevOps engineers from leading
          companies and covers both cloud infrastructure and automation
          disciplines. You&apos;ll master the complete DevOps lifecycle from
          development to production deployment.
        </p>

        <div className="space-y-8">
          {learningModules.map((module, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {module.category}
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {module.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-blue-50 p-6 rounded-xl border border-blue-100">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">
            Portfolio-Driven Learning
          </h3>
          <p className="text-blue-800">
            Every project you complete becomes part of your professional
            portfolio. By graduation, you&apos;ll have 5-7 case studies
            showcasing your DevOps process, problem-solving skills, and final
            solutions that you can confidently present to employers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatYoullLearn;

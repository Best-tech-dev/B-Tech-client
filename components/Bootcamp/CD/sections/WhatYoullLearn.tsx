import React from "react";
import { FaAws, FaDocker } from "react-icons/fa";
import { SiKubernetes, SiTerraform, SiJenkins } from "react-icons/si";

const WhatYoullLearn = () => {
  const skills = [
    {
      category: "Cloud Platforms",
      icon: <FaAws className="h-8 w-8 text-blue-600" />,
      technologies: [
        {
          name: "Amazon Web Services (AWS)",
          description: "EC2, S3, RDS, Lambda, and more",
        },
        {
          name: "Microsoft Azure",
          description: "Virtual Machines, Storage, App Services",
        },
        {
          name: "Google Cloud Platform",
          description: "Compute Engine, Cloud Storage, BigQuery",
        },
        {
          name: "Multi-Cloud Strategies",
          description: "Hybrid and multi-cloud architectures",
        },
      ],
    },
    {
      category: "Containerization & Orchestration",
      icon: <FaDocker className="h-8 w-8 text-blue-600" />,
      technologies: [
        { name: "Docker", description: "Container creation and management" },
        {
          name: "Kubernetes",
          description: "Container orchestration and scaling",
        },
        {
          name: "Docker Compose",
          description: "Multi-container application deployment",
        },
        {
          name: "Container Security",
          description: "Best practices for secure containers",
        },
      ],
    },
    {
      category: "Infrastructure as Code",
      icon: <SiTerraform className="h-8 w-8 text-blue-600" />,
      technologies: [
        {
          name: "Terraform",
          description: "Infrastructure provisioning and management",
        },
        {
          name: "AWS CloudFormation",
          description: "AWS-native infrastructure as code",
        },
        {
          name: "Azure Resource Manager",
          description: "Azure infrastructure templates",
        },
        {
          name: "Ansible",
          description: "Configuration management and automation",
        },
      ],
    },
    {
      category: "CI/CD & DevOps Tools",
      icon: <SiJenkins className="h-8 w-8 text-blue-600" />,
      technologies: [
        {
          name: "Jenkins",
          description: "Continuous integration and deployment",
        },
        { name: "GitLab CI/CD", description: "Git-based CI/CD pipelines" },
        {
          name: "GitHub Actions",
          description: "Automated workflows and deployments",
        },
        {
          name: "Monitoring & Logging",
          description: "Prometheus, Grafana, ELK Stack",
        },
      ],
    },
  ];

  return (
    <section
      id="what-youll-learn"
      className="py-12 scroll-mt-28"
      aria-labelledby="what-youll-learn-title"
    >
      <h2
        id="what-youll-learn-title"
        className="text-lg md:text-3xl font-bold mb-6"
      >
        What You&apos;ll Learn in Cloud & DevOps
      </h2>
      <p className="text-sm md:text-base text-gray-700 mb-10">
        Master enterprise-grade cloud technologies and DevOps practices that
        drive modern software development and infrastructure management.
      </p>

      <div className="grid lg:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-blue-50 rounded-lg p-6 border border-blue-200"
          >
            <div className="flex items-center mb-4">
              {skill.icon}
              <h3 className="text-xl font-bold text-gray-900 ml-3">
                {skill.category}
              </h3>
            </div>
            <div className="space-y-4">
              {skill.technologies.map((tech, techIndex) => (
                <div
                  key={techIndex}
                  className="border-l-4 border-blue-600 pl-4"
                >
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {tech.name}
                  </h4>
                  <p className="text-sm text-gray-600">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Projects Section */}
      <div className="mt-12 bg-white rounded-lg p-8 border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Cloud Infrastructure You&apos;ll Build
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <FaAws className="h-12 w-12 text-blue-600 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">
              Multi-Tier Web App
            </h4>
            <p className="text-sm text-gray-600">
              Scalable web application with load balancers, auto-scaling, and
              RDS
            </p>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <SiKubernetes className="h-12 w-12 text-blue-600 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">
              Kubernetes Cluster
            </h4>
            <p className="text-sm text-gray-600">
              Production-ready container orchestration with monitoring
            </p>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <SiTerraform className="h-12 w-12 text-blue-600 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">IaC Pipeline</h4>
            <p className="text-sm text-gray-600">
              Complete infrastructure automation with Terraform and CI/CD
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYoullLearn;

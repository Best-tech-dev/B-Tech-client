import React from "react";

const Curriculum: React.FC = () => {
  const modules = [
    {
      week: "Weeks 1-2",
      title: "Cloud Fundamentals",
      topics: [
        "Cloud computing concepts",
        "AWS/Azure basics",
        "Virtual machines",
        "Storage solutions",
      ],
    },
    {
      week: "Weeks 3-4",
      title: "Containerization",
      topics: [
        "Docker fundamentals",
        "Container orchestration",
        "Kubernetes basics",
        "Microservices architecture",
      ],
    },
    {
      week: "Weeks 5-6",
      title: "Infrastructure as Code",
      topics: [
        "Terraform basics",
        "Ansible automation",
        "Infrastructure provisioning",
        "Configuration management",
      ],
    },
    {
      week: "Weeks 7-8",
      title: "CI/CD Pipelines",
      topics: [
        "Jenkins setup",
        "GitLab CI/CD",
        "GitHub Actions",
        "Deployment strategies",
      ],
    },
    {
      week: "Weeks 9-10",
      title: "Monitoring & Security",
      topics: [
        "Prometheus & Grafana",
        "Log management",
        "Security best practices",
        "DevSecOps",
      ],
    },
    {
      week: "Weeks 11-12",
      title: "Capstone Project",
      topics: [
        "End-to-end deployment",
        "Production environment",
        "Performance optimization",
        "Portfolio development",
      ],
    },
  ];

  return (
    <section id="curriculum" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Curriculum Overview
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Our 12-week intensive program covers everything from cloud
          fundamentals to advanced DevOps practices.
        </p>

        <div className="space-y-6">
          {modules.map((module, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {module.title}
                </h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {module.week}
                </span>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {module.topics.map((topic, idx) => (
                  <div key={idx} className="flex items-center text-gray-600">
                    <div className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-3"></div>
                    {topic}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;

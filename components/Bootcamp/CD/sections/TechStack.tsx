import React from "react";

const TechStack: React.FC = () => {
  const technologies = [
    {
      category: "Cloud Platforms",
      tools: [
        "Amazon Web Services (AWS)",
        "Microsoft Azure",
        "Google Cloud Platform",
        "DigitalOcean",
      ],
    },
    {
      category: "Containerization",
      tools: ["Docker", "Kubernetes", "Docker Compose", "Container Registry"],
    },
    {
      category: "Infrastructure as Code",
      tools: ["Terraform", "Ansible", "CloudFormation", "ARM Templates"],
    },
    {
      category: "CI/CD Tools",
      tools: ["Jenkins", "GitLab CI", "GitHub Actions", "Azure DevOps"],
    },
    {
      category: "Monitoring & Logging",
      tools: ["Prometheus", "Grafana", "ELK Stack", "CloudWatch"],
    },
    {
      category: "Version Control",
      tools: ["Git", "GitHub", "GitLab", "Bitbucket"],
    },
  ];

  return (
    <section id="tech-stack" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Technology Stack
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Master the most in-demand cloud and DevOps technologies used by
          leading companies worldwide.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {tech.category}
              </h3>
              <div className="space-y-2">
                {tech.tools.map((tool, idx) => (
                  <div key={idx} className="flex items-center text-gray-600">
                    <div className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-3"></div>
                    {tool}
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

export default TechStack;

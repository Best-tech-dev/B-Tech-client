import React from "react";
import { Database, Server, Shield, Globe } from "lucide-react";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "E-commerce API Gateway",
      description:
        "Build a scalable e-commerce backend with microservices architecture, payment processing, and real-time inventory management.",
      icon: <Server className="h-6 w-6 text-blue-600" />,
      duration: "Weeks 3-5",
      deliverables: [
        "RESTful API endpoints",
        "Payment gateway integration",
        "Inventory management system",
        "Microservices architecture",
      ],
    },
    {
      title: "Social Media Dashboard API",
      description:
        "Develop a social media analytics backend with user authentication, data aggregation, and real-time notifications.",
      icon: <Database className="h-6 w-6 text-green-600" />,
      duration: "Weeks 6-8",
      deliverables: [
        "User authentication system",
        "Real-time data aggregation",
        "WebSocket notifications",
        "Analytics dashboard API",
      ],
    },
    {
      title: "Secure Banking System",
      description:
        "Create a secure banking API with advanced encryption, two-factor authentication, and transaction monitoring.",
      icon: <Shield className="h-6 w-6 text-red-600" />,
      duration: "Weeks 9-11",
      deliverables: [
        "Security architecture",
        "Two-factor authentication",
        "Transaction monitoring",
        "Audit logging system",
      ],
    },
  ];

  return (
    <section id="projects" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Hands-on Projects
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Build a portfolio of real-world backend projects that demonstrate your
          development skills and problem-solving abilities. Each project follows
          industry standards and best practices.
        </p>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-gray-50 rounded-lg">
                  {project.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {project.duration}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Key Deliverables:
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {project.deliverables.map((deliverable, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-gray-600"
                        >
                          <div className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-3"></div>
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

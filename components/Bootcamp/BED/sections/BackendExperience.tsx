import React from "react";
import { Server, Database, Shield, Layers } from "lucide-react";

const BackendExperience: React.FC = () => {
  const highlights = [
    {
      icon: <Server className="h-6 w-6 text-blue-600" />,
      title: "API Development",
      description:
        "Master RESTful and GraphQL APIs with authentication and security best practices",
    },
    {
      icon: <Database className="h-6 w-6 text-green-600" />,
      title: "Database Architecture",
      description:
        "Design and optimize relational and NoSQL databases for high-performance applications",
    },
    {
      icon: <Layers className="h-6 w-6 text-purple-600" />,
      title: "Server Infrastructure",
      description:
        "Build scalable server systems using Node.js, microservices, and cloud technologies",
    },
    {
      icon: <Shield className="h-6 w-6 text-orange-600" />,
      title: "System Security",
      description:
        "Implement authentication, authorization, and data protection in enterprise-grade applications",
    },
  ];

  return (
    <section id="backend-experience" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Backend Development Experience
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Build powerful server-side systems and become a professional backend
          engineer. Our immersive bootcamp takes you from API fundamentals to
          scalable system architecture, preparing you for impactful roles at
          leading tech companies and high-growth startups.
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

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Why Choose Backend Development?
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Backend development powers every digital application behind the
            scenes. From processing payments to managing user data, backend
            engineers build the foundation that makes modern software possible.
            As businesses scale digitally, the demand for skilled backend
            developers who can create secure, efficient, and scalable systems
            continues to surge across all industries.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BackendExperience;

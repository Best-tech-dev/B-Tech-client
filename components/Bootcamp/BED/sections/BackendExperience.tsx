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
    <section id="backend-experience" className="mb-12 lg:mb-16">
      <div className="max-w-4xl">
        <h2
          className="font-bold text-gray-900 mb-4 lg:mb-6"
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
            lineHeight: "1.3",
          }}
        >
          Backend Development Experience
        </h2>
        <p
          className="text-gray-700 mb-6 lg:mb-8 leading-relaxed"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.125rem)",
            lineHeight: "1.6",
          }}
        >
          Build powerful server-side systems and become a professional backend
          engineer. Our immersive bootcamp takes you from API fundamentals to
          scalable system architecture, preparing you for impactful roles at
          leading tech companies and high-growth startups.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 lg:gap-6 mb-6 lg:mb-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex items-start space-x-3 sm:space-x-4 p-4 lg:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="flex-shrink-0">{highlight.icon}</div>
              <div>
                <h3
                  className="font-semibold text-gray-900 mb-2"
                  style={{
                    fontSize: "clamp(1rem, 2vw, 1.125rem)",
                    lineHeight: "1.4",
                  }}
                >
                  {highlight.title}
                </h3>
                <p
                  className="text-gray-600"
                  style={{
                    fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
                    lineHeight: "1.5",
                  }}
                >
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 lg:p-8 rounded-lg border border-blue-100 shadow-md">
          <h3
            className="font-semibold text-gray-900 mb-3 lg:mb-4"
            style={{
              fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
              lineHeight: "1.4",
            }}
          >
            Why Choose Backend Development?
          </h3>
          <p
            className="text-gray-700 leading-relaxed"
            style={{
              fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
              lineHeight: "1.6",
            }}
          >
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

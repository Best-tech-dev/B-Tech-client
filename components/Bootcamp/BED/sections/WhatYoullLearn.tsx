import React from "react";
import { CheckCircle } from "lucide-react";

const WhatYoullLearn: React.FC = () => {
  const learningModules = [
    {
      category: "Server-Side Programming",
      skills: [
        "Node.js and Express.js fundamentals",
        "Asynchronous programming and event loops",
        "Error handling and logging best practices",
        "Performance optimization techniques",
      ],
    },
    {
      category: "API Design & Development",
      skills: [
        "RESTful API architecture and design",
        "GraphQL implementation and optimization",
        "API versioning and documentation",
        "Rate limiting and caching strategies",
      ],
    },
    {
      category: "Database Systems & Management",
      skills: [
        "SQL databases with PostgreSQL and MySQL",
        "NoSQL databases with MongoDB and Redis",
        "Database design and normalization",
        "Query optimization and indexing",
      ],
    },
    {
      category: "Security & Authentication",
      skills: [
        "JWT tokens and session management",
        "OAuth and third-party authentication",
        "Data encryption and secure communication",
        "Input validation and SQL injection prevention",
      ],
    },
  ];

  return (
    <section id="what-youll-learn" className="mb-12 lg:mb-16">
      <div className="max-w-4xl">
        <h2
          className="font-bold text-gray-900 mb-4 lg:mb-6"
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
            lineHeight: "1.3",
          }}
        >
          What You&apos;ll Learn
        </h2>
        <p
          className="text-gray-700 mb-6 lg:mb-8 leading-relaxed"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.125rem)",
            lineHeight: "1.6",
          }}
        >
          Our curriculum is built by senior backend engineers from top tech
          companies and takes you through the complete server-side development
          lifecycle—from building your first API to architecting distributed
          systems that handle millions of requests.
        </p>

        <div className="space-y-6 lg:space-y-8">
          {learningModules.map((module, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4 lg:p-6"
            >
              <h3
                className="font-semibold text-gray-900 mb-3 lg:mb-4"
                style={{
                  fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
                  lineHeight: "1.4",
                }}
              >
                {module.category}
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {module.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center space-x-2 sm:space-x-3"
                  >
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
                    <span
                      className="text-gray-700"
                      style={{
                        fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
                        lineHeight: "1.5",
                      }}
                    >
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 lg:mt-8 bg-blue-50 p-4 lg:p-6 rounded-lg border border-blue-100 shadow-md">
          <h3
            className="font-semibold text-blue-900 mb-2 lg:mb-3"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.125rem)",
              lineHeight: "1.4",
            }}
          >
            Portfolio-Driven Learning
          </h3>
          <p
            className="text-blue-800"
            style={{
              fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
              lineHeight: "1.6",
            }}
          >
            Every API, service, or system you build contributes to a
            professional-grade backend portfolio. By graduation, you&apos;ll
            have 5–7 production-ready backend systems—including APIs,
            microservices, and database architectures—that demonstrate your
            server-side expertise to future employers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatYoullLearn;

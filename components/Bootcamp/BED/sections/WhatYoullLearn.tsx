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
    <section id="what-youll-learn" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          What You&apos;ll Learn
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Our curriculum is built by senior backend engineers from top tech
          companies and takes you through the complete server-side development
          lifecycle—from building your first API to architecting distributed
          systems that handle millions of requests.
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

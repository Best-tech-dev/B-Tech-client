import React from "react";
import { CheckCircle } from "lucide-react";

const WhatYoullLearn = () => {
  const modules = [
    {
      title: "Frontend Foundations",
      skills: [
        "HTML5 & CSS3 fundamentals",
        "JavaScript ES6+ features",
        "React.js and component architecture",
        "Responsive design and CSS frameworks",
        "State management and hooks",
      ],
    },
    {
      title: "Backend Architecture",
      skills: [
        "Node.js server development",
        "Express.js framework mastery",
        "RESTful API design and implementation",
        "Authentication and authorization",
        "Server deployment strategies",
      ],
    },
    {
      title: "Database Management",
      skills: [
        "SQL fundamentals with PostgreSQL",
        "NoSQL databases with MongoDB",
        "Database design and modeling",
        "Query optimization techniques",
        "Data relationships and migrations",
      ],
    },
    {
      title: "Full-Stack Integration",
      skills: [
        "Frontend-backend communication",
        "Version control with Git/GitHub",
        "Testing strategies and frameworks",
        "Cloud deployment and DevOps",
        "Performance optimization",
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
          Our comprehensive curriculum covers everything needed to become a
          job-ready full-stack developer, from frontend interfaces to backend
          systems and database management.
        </p>

        <div className="space-y-8">
          {modules.map((module, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {module.title}
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
            Every concept you learn is immediately applied to building
            real-world applications for your professional portfolio. By
            graduation, you&apos;ll have 5+ complete full-stack projects
            demonstrating your capabilities to potential employers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatYoullLearn;

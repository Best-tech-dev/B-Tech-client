import React from "react";
import { Code, Database, Globe, Zap } from "lucide-react";

const FullstackExperience = () => {
  const highlights = [
    {
      icon: <Code className="h-8 w-8 text-green-600" />,
      title: "Frontend Mastery",
      description:
        "Build responsive, interactive user interfaces with React and modern CSS",
    },
    {
      icon: <Database className="h-8 w-8 text-purple-600" />,
      title: "Backend Development",
      description:
        "Create robust APIs and server-side logic with Node.js and Express",
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "Full-Stack Integration",
      description: "Connect frontend and backend for complete web applications",
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-600" />,
      title: "Modern Deployment",
      description: "Deploy production-ready applications with cloud platforms",
    },
  ];

  return (
    <section id="fullstack-experience" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Complete Full-Stack Development Experience
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Master both frontend and backend development to build complete web
          applications from conception to deployment. Graduate with the skills
          to work on any part of the technology stack.
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

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Why Choose Full-Stack Development?
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Full-stack development is one of the most versatile and in-demand
            skills in the tech industry. As companies need developers who can
            work across the entire technology stack, full-stack developers are
            highly valued for their ability to build complete applications from
            frontend to backend. Our program prepares you for this exciting
            field with hands-on projects and industry-standard technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FullstackExperience;

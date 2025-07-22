import React from "react";
import { Code, Smartphone, Wrench, Layers } from "lucide-react";

const FrontendExperience: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="h-6 w-6 text-blue-600" />,
      title: "Modern Web Technologies",
      description:
        "Learn HTML5, CSS3, and JavaScript ES6+ with modern development practices",
    },
    {
      icon: <Layers className="h-6 w-6 text-green-600" />,
      title: "React & Component Architecture",
      description:
        "Master React hooks, state management, and component-based development",
    },
    {
      icon: <Smartphone className="h-6 w-6 text-purple-600" />,
      title: "Responsive Design",
      description:
        "Build mobile-first, accessible websites that work across all devices",
    },
    {
      icon: <Wrench className="h-6 w-6 text-orange-600" />,
      title: "Development Tools",
      description:
        "Use Git, npm, webpack, and professional development workflows",
    },
  ];

  return (
    <section id="frontend-experience" className="mb-12 lg:mb-16">
      <div className="max-w-4xl">
        <h2
          className="font-bold text-gray-900 mb-4 lg:mb-6"
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
            lineHeight: "1.3",
          }}
        >
          Frontend Development Bootcamp
        </h2>
        <p
          className="text-gray-700 mb-6 lg:mb-8 leading-relaxed"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.125rem)",
            lineHeight: "1.6",
          }}
        >
          Transform your passion for technology into a lucrative career in
          frontend development. Our comprehensive bootcamp covers everything
          from HTML fundamentals to modern React frameworks, preparing you for
          roles at leading tech companies and innovative startups.
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

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 lg:p-8 rounded-lg border border-blue-100 shadow-md">
          <h3
            className="font-semibold text-gray-900 mb-3 lg:mb-4"
            style={{
              fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
              lineHeight: "1.4",
            }}
          >
            Why Choose Frontend Development?
          </h3>
          <p
            className="text-gray-700 leading-relaxed"
            style={{
              fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
              lineHeight: "1.6",
            }}
          >
            Frontend development is one of the fastest-growing fields in tech.
            As businesses prioritize user experience and digital presence, the
            demand for skilled developers who can create fast, interactive, and
            visually appealing web applications continues to surge. Our program
            prepares you for this dynamic field with real-world projects and
            industry-standard practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FrontendExperience;

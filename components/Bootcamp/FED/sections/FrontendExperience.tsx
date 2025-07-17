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
    <section id="frontend-experience" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Frontend Development Bootcamp
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Transform your passion for technology into a lucrative career in
          frontend development. Our comprehensive bootcamp covers everything
          from HTML fundamentals to modern React frameworks, preparing you for
          roles at leading tech companies and innovative startups.
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

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl border border-blue-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Why Choose Frontend Development?
          </h3>
          <p className="text-gray-700 leading-relaxed">
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

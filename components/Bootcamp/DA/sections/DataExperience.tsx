import React from "react";
import { BarChart, Database, TrendingUp, Brain } from "lucide-react";

const DataExperience: React.FC = () => {
  const highlights = [
    {
      icon: <BarChart className="h-6 w-6 text-blue-600" />,
      title: "Statistical Analysis Mastery",
      description:
        "Learn statistical methods, hypothesis testing, and data interpretation",
    },
    {
      icon: <Database className="h-6 w-6 text-green-600" />,
      title: "Data Engineering Skills",
      description:
        "Master SQL, Python, and data pipeline creation for real-world applications",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-purple-600" />,
      title: "Business Intelligence",
      description:
        "Build dashboards and create data visualizations that drive decisions",
    },
    {
      icon: <Brain className="h-6 w-6 text-orange-600" />,
      title: "Machine Learning",
      description:
        "Implement predictive models and automated analytics solutions",
    },
  ];

  return (
    <section id="data-experience" className="mb-12 lg:mb-16">
      <div className="max-w-4xl">
        <h2
          className="font-bold text-gray-900 mb-4 lg:mb-6"
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
            lineHeight: "1.3",
          }}
        >
          Data Analysis Experience
        </h2>
        <p
          className="text-gray-700 mb-6 lg:mb-8 leading-relaxed"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.125rem)",
            lineHeight: "1.6",
          }}
        >
          Transform your analytical thinking into a rewarding career in data
          analysis. Our comprehensive bootcamp covers everything from
          statistical foundations to advanced machine learning, preparing you
          for roles at top tech companies and data-driven organizations.
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
            Why Choose Data Analysis?
          </h3>
          <p
            className="text-gray-700 leading-relaxed"
            style={{
              fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
              lineHeight: "1.6",
            }}
          >
            Data analysis is one of the most in-demand skills in the modern
            economy. As businesses increasingly rely on data-driven decisions,
            the need for skilled analysts who can extract insights from complex
            datasets continues to grow exponentially. Our program prepares you
            for this exciting field with hands-on projects and industry-standard
            tools.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DataExperience;

import React from "react";
import { BarChart3, Brain, Database, TrendingUp } from "lucide-react";

const DataScienceExperience: React.FC = () => {
  const highlights = [
    {
      icon: <BarChart3 className="h-6 w-6 text-purple-600" />,
      title: "Data Analysis & Visualization",
      description:
        "Master Python, Pandas, and visualization tools to uncover insights from data",
    },
    {
      icon: <Brain className="h-6 w-6 text-blue-600" />,
      title: "Machine Learning Mastery",
      description:
        "Build predictive models and understand algorithms that power modern AI",
    },
    {
      icon: <Database className="h-6 w-6 text-green-600" />,
      title: "Data Engineering Skills",
      description:
        "Learn SQL, data pipelines, and cloud platforms for scalable solutions",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-orange-600" />,
      title: "Business Intelligence",
      description:
        "Transform data into actionable business insights and strategic decisions",
    },
  ];

  return (
    <section id="data-science-experience" className="mb-12 lg:mb-16">
      <div className="max-w-4xl">
        <h2
          className="font-bold text-gray-900 mb-4 lg:mb-6"
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
            lineHeight: "1.3",
          }}
        >
          Data Science Experience
        </h2>
        <p
          className="text-gray-700 mb-6 lg:mb-8 leading-relaxed"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.125rem)",
            lineHeight: "1.6",
          }}
        >
          Transform your analytical mindset into a rewarding career in data
          science. Our comprehensive bootcamp covers everything from statistical
          analysis to machine learning, preparing you for roles at leading
          companies across finance, tech, healthcare, and beyond.
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

        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 lg:p-8 rounded-lg border border-purple-100 shadow-md">
          <h3
            className="font-semibold text-gray-900 mb-3 lg:mb-4"
            style={{
              fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
              lineHeight: "1.4",
            }}
          >
            Why Choose Data Science?
          </h3>
          <p
            className="text-gray-700 leading-relaxed"
            style={{
              fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
              lineHeight: "1.6",
            }}
          >
            Data science is one of the most sought-after skills in the modern
            economy. As businesses increasingly rely on data-driven decisions,
            the demand for professionals who can extract insights from complex
            datasets continues to soar. Our program prepares you for this
            exciting field with hands-on projects using real Nigerian business
            data and industry-standard tools.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DataScienceExperience;

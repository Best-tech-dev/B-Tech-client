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
    <section id="data-experience" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Data Analysis Experience
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Transform your analytical thinking into a rewarding career in data
          analysis. Our comprehensive bootcamp covers everything from
          statistical foundations to advanced machine learning, preparing you
          for roles at top tech companies and data-driven organizations.
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
            Why Choose Data Analysis?
          </h3>
          <p className="text-gray-700 leading-relaxed">
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

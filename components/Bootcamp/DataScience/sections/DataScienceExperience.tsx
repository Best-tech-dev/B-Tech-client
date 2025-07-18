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
    <section id="data-science-experience" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Data Science Experience
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Transform your analytical mindset into a rewarding career in data
          science. Our comprehensive bootcamp covers everything from statistical
          analysis to machine learning, preparing you for roles at leading
          companies across finance, tech, healthcare, and beyond.
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

        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-xl border border-purple-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Why Choose Data Science?
          </h3>
          <p className="text-gray-700 leading-relaxed">
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

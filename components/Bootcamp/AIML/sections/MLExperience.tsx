import React from "react";
import { Brain, Cpu, Database, Zap } from "lucide-react";

const MLExperience: React.FC = () => {
  const highlights = [
    {
      icon: <Brain className="h-6 w-6 text-green-600" />,
      title: "ML Algorithms & Models",
      description:
        "Understand and implement key ML algorithms like decision trees and neural nets.",
    },
    {
      icon: <Cpu className="h-6 w-6 text-blue-600" />,
      title: "AI Problem Solving",
      description:
        "Apply ML to real-world challenges in vision, language, and prediction.",
    },
    {
      icon: <Database className="h-6 w-6 text-green-600" />,
      title: "Model Training & Optimization",
      description:
        "Learn hyperparameter tuning, overfitting prevention, and model evaluation.",
    },
    {
      icon: <Zap className="h-6 w-6 text-orange-600" />,
      title: "Deep Learning & Frameworks",
      description:
        "Explore TensorFlow and PyTorch to build cutting-edge AI applications.",
    },
  ];

  return (
    <section id="ml-experience" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          AI & Machine Learning Experience
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Join the AI revolution by mastering machine learning. From algorithms
          to real-world AI applications, our program prepares you to build
          intelligent systems that power everything from recommendations to
          self-driving tech.
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

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-xl border border-green-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Why Choose Machine Learning / AI?
          </h3>
          <p className="text-gray-700 leading-relaxed">
            AI is reshaping how the world works—from personalized
            recommendations to autonomous systems. As businesses invest in
            intelligent solutions, demand for ML professionals is exploding. Our
            hands-on program helps you build real AI models and prepares you to
            lead the future of technology and automation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MLExperience;

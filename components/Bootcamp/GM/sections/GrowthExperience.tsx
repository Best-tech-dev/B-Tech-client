import React from "react";
import { TrendingUp, Users, Target, BarChart3 } from "lucide-react";

const GrowthExperience: React.FC = () => {
  const highlights = [
    {
      icon: <TrendingUp className="h-6 w-6 text-green-600" />,
      title: "Exponential Growth Strategies",
      description: "Learn data-driven approaches to scale businesses rapidly",
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "Customer Acquisition",
      description:
        "Master the art of acquiring and retaining customers cost-effectively",
    },
    {
      icon: <Target className="h-6 w-6 text-purple-600" />,
      title: "Performance Marketing",
      description: "Execute high-ROI campaigns across digital channels",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-orange-600" />,
      title: "Analytics & Optimization",
      description:
        "Use data to make informed marketing decisions and optimize funnels",
    },
  ];

  return (
    <section id="growth-experience" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Growth Marketing Experience
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Dive into the world of growth marketing where data meets creativity.
          Our comprehensive bootcamp is designed to transform you into a growth
          marketing expert capable of driving sustainable business growth
          through innovative strategies and data-driven decision making.
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

        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl border border-green-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Why Choose Growth Marketing?
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Growth marketing is at the heart of every successful startup and
            scale-up. It combines traditional marketing with product
            development, data analysis, and customer psychology to create
            sustainable growth engines. Our program prepares you for high-demand
            roles in the fastest-growing companies worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GrowthExperience;

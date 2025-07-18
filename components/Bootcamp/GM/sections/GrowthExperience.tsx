import React from "react";
import { TrendingUp, Users, Target, BarChart3 } from "lucide-react";

const GrowthExperience: React.FC = () => {
  const highlights = [
    {
      icon: <TrendingUp className="h-6 w-6 text-green-600" />,
      title: "Full-Funnel Growth Frameworks",
      description:
        "Apply proven growth frameworks to real products and scale revenue systematically",
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "Data-Driven Campaigns",
      description:
        "Launch paid and organic acquisition campaigns that convert with clear performance metrics",
    },
    {
      icon: <Target className="h-6 w-6 text-purple-600" />,
      title: "Growth Experimentation",
      description:
        "Run growth experiments and A/B tests with clear hypotheses and actionable insights",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-orange-600" />,
      title: "Cross-Functional Collaboration",
      description:
        "Collaborate effectively with product and sales teams to drive business growth",
    },
  ];

  return (
    <section id="growth-experience" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Growth Marketing Experience
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Transform your marketing approach into a systematic growth engine. Our
          comprehensive bootcamp covers everything from acquisition strategies
          to optimization tactics used by modern growth teams.
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
            Growth marketing isn't about guesswork - it's a system. Whether
            you're working at a startup, scaling an existing product, or
            pivoting into a performance-driven role, this program equips you
            with proven frameworks, channel strategies, and optimization tactics
            used by modern growth teams.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GrowthExperience;

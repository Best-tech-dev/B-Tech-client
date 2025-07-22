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
    <section id="growth-experience" className="mb-12 lg:mb-16">
      <div className="max-w-4xl">
        <h2
          className="font-bold text-gray-900 mb-4 lg:mb-6"
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
            lineHeight: "1.3",
          }}
        >
          Growth Marketing Experience
        </h2>
        <p
          className="text-gray-700 mb-6 lg:mb-8 leading-relaxed"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.125rem)",
            lineHeight: "1.6",
          }}
        >
          Transform your marketing approach into a systematic growth engine. Our
          comprehensive bootcamp covers everything from acquisition strategies
          to optimization tactics used by modern growth teams.
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

        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 lg:p-8 rounded-lg border border-green-100 shadow-md">
          <h3
            className="font-semibold text-gray-900 mb-3 lg:mb-4"
            style={{
              fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
              lineHeight: "1.4",
            }}
          >
            Why Choose Growth Marketing?
          </h3>
          <p
            className="text-gray-700 leading-relaxed"
            style={{
              fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
              lineHeight: "1.6",
            }}
          >
            Growth marketing isn&apos;t about guesswork - it&apos;s a system.
            Whether you&apos;re working at a startup, scaling an existing
            product, or pivoting into a performance-driven role, this program
            equips you with proven frameworks, channel strategies, and
            optimization tactics used by modern growth teams.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GrowthExperience;

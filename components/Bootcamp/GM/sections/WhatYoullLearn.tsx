import React from "react";
import { CheckCircle } from "lucide-react";

const WhatYoullLearn: React.FC = () => {
  const learningModules = [
    {
      category: "Growth Fundamentals",
      skills: [
        "Growth hacking methodologies",
        "Customer acquisition funnels",
        "Retention and churn analysis",
        "Product-market fit validation",
        "Viral marketing strategies",
      ],
    },
    {
      category: "Digital Marketing Channels",
      skills: [
        "Search Engine Optimization (SEO)",
        "Pay-Per-Click (PPC) advertising",
        "Social media marketing",
        "Email marketing automation",
        "Content marketing strategy",
      ],
    },
    {
      category: "Analytics & Data",
      skills: [
        "Google Analytics 4 & GTM",
        "Conversion rate optimization",
        "A/B testing methodologies",
        "Cohort analysis",
        "Marketing attribution models",
      ],
    },
    {
      category: "Tools & Technologies",
      skills: [
        "Marketing automation platforms",
        "CRM systems (HubSpot, Salesforce)",
        "Analytics tools (Mixpanel, Amplitude)",
        "Design tools (Figma, Canva)",
        "Landing page builders",
      ],
    },
  ];

  return (
    <section id="what-youll-learn" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          What You&apos;ll Learn
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Our curriculum is designed by industry experts and covers everything
          you need to become a proficient growth marketer. From strategy to
          execution, you&apos;ll master the complete growth marketing toolkit.
        </p>

        <div className="space-y-8">
          {learningModules.map((module, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {module.category}
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {module.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-blue-50 p-6 rounded-xl border border-blue-100">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">
            Hands-on Learning Approach
          </h3>
          <p className="text-blue-800">
            Every concept is reinforced through practical exercises, real
            campaign analysis, and live project work. You&apos;ll graduate with
            a portfolio of actual growth marketing campaigns and measurable
            results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatYoullLearn;

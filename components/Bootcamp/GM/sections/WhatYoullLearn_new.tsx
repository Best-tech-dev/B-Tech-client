import React from "react";
import { Target, BarChart3, Users, Zap, TrendingUp } from "lucide-react";

const WhatYoullLearn: React.FC = () => {
  const learningModules = [
    {
      icon: <Target className="h-6 w-6 text-green-600" />,
      category: "Growth Frameworks & Strategy",
      skills: [
        "Apply full-funnel growth frameworks to real products",
        "Create growth roadmaps aligned with business goals",
        "Build scalable, repeatable growth systems",
        "Develop hypothesis-driven growth strategies",
      ],
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-blue-600" />,
      category: "Campaign Management & Optimization",
      skills: [
        "Launch paid and organic acquisition campaigns that convert",
        "Optimize landing pages, email flows, and user journeys",
        "Track and interpret performance metrics that actually matter",
        "Run growth experiments and A/B tests with clear hypotheses",
      ],
    },
    {
      icon: <Users className="h-6 w-6 text-purple-600" />,
      category: "Cross-Functional Collaboration",
      skills: [
        "Collaborate cross-functionally with product and sales teams",
        "Build and optimize cross-channel growth campaigns",
        "Present insights backed by real data",
        "Align marketing efforts with business objectives",
      ],
    },
    {
      icon: <Zap className="h-6 w-6 text-orange-600" />,
      category: "Tools & Analytics",
      skills: [
        "Practical exposure to paid media tools",
        "Analytics and landing page testing platforms",
        "CRM and experimentation tools",
        "Growth stack optimization",
      ],
    },
  ];

  const outcomes = [
    "Build and optimize cross-channel growth campaigns",
    "Create growth roadmaps aligned with business goals",
    "Confidently present insights backed by real data",
    "Join a peer network of professionals across continents",
    "Add a capstone project to your portfolio that demonstrates strategic growth thinking",
    "Earn a Certificate of Completion to showcase on LinkedIn and your resume",
  ];

  return (
    <section id="what-youll-learn" className="py-16 bg-gray-50">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          What You&apos;ll Learn
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          We don&apos;t expose the full lesson plan here - but you&apos;ll leave
          this bootcamp able to drive real growth. The program is hands-on and
          each week builds toward a final growth sprint project tailored to your
          industry or a simulated scenario.
        </p>

        <div className="space-y-8 mb-12">
          {learningModules.map((module, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
            >
              <div className="flex items-center space-x-3 mb-4">
                {module.icon}
                <h3 className="text-xl font-semibold text-gray-900">
                  {module.category}
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {module.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl border border-green-100">
          <div className="flex items-center space-x-3 mb-6">
            <TrendingUp className="h-6 w-6 text-green-600" />
            <h3 className="text-xl font-semibold text-gray-900">
              What You&apos;ll Walk Away With
            </h3>
          </div>
          <p className="text-gray-700 mb-6">
            After 12 weeks, you&apos;ll be able to:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {outcomes.map((outcome, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0">
                  ✓
                </div>
                <span className="text-gray-700 text-sm">{outcome}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 bg-white p-8 rounded-xl border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Learning Format & Schedule
          </h3>
          <p className="text-gray-700 mb-6">
            This is a remote-first, global-friendly program structured for
            working professionals.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="font-medium text-gray-900">Start Date:</span>
                <span className="text-gray-700">August 2025</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-900">Length:</span>
                <span className="text-gray-700">6 weeks</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="font-medium text-gray-900">
                  Capstone Project:
                </span>
                <span className="text-gray-700">Final 2 weeks</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-900">
                  Time Commitment:
                </span>
                <span className="text-gray-700">~ 6–8 hours/week</span>
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-4">
            Other information will be communicated after registration is
            confirmed
          </p>
        </div>

        <div className="mt-10 bg-gray-900 text-white p-8 rounded-xl">
          <h3 className="text-xl font-semibold mb-4">
            Who You&apos;ll Learn From
          </h3>
          <p className="text-gray-300 mb-4">
            Your instructors are growth operators, not theorists. They&apos;ve
            built and scaled marketing engines at startups, marketplaces, SaaS
            platforms, and VC-backed tech companies across Africa, US, UAE, and
            Europe.
          </p>
          <p className="text-gray-300">
            You&apos;ll also get access to our curated guest sessions from
            experienced growth marketers in product-led companies, agencies, and
            high-growth verticals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatYoullLearn;

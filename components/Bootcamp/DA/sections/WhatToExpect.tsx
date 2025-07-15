import React from "react";
import { CheckCircle } from "lucide-react";

const WhatToExpect: React.FC = () => {
  const expectations = [
    "Hands-on training with real datasets from Nigerian businesses",
    "Master Excel, SQL, Python, and R for data analysis",
    "Build interactive dashboards using Tableau and Power BI",
    "Learn statistical analysis and machine learning fundamentals",
    "Work on capstone projects with measurable business impact",
    "Receive industry certifications from Microsoft and Google",
    "Access to job placement support and career guidance",
    "Lifetime access to our alumni network and resources",
  ];

  return (
    <section id="what-to-expect" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          What to Expect
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Our Data Analytics bootcamp will be a comprehensive 12-week program
          designed to take you from beginner to job-ready data analyst.
          Here&apos;s what you can expect:
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {expectations.map((expectation, index) => (
            <div key={index} className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{expectation}</span>
            </div>
          ))}
        </div>

        <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
          <h3 className="text-lg font-semibold text-yellow-900 mb-3">
            Industry-Relevant Training
          </h3>
          <p className="text-yellow-800">
            Our curriculum is being developed in partnership with leading
            Nigerian fintech companies, banks, and e-commerce platforms to
            ensure you learn the most relevant skills for the local job market.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatToExpect;

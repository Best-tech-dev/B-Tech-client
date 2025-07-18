import React from "react";
import { CheckCircle } from "lucide-react";

const WhatYoullLearn: React.FC = () => {
  const learningModules = [
    {
      category: "Programming & Analysis",
      skills: [
        "Python Programming",
        "Data manipulation and analysis with Python",
        "SQL & Databases",
        "Database querying and data extraction",
        "Jupyter Notebooks",
        "Interactive data analysis environment",
      ],
    },
    {
      category: "Data Visualization",
      skills: [
        "Power BI",
        "Business intelligence and dashboards",
        "Matplotlib & Seaborn",
        "Python data visualization libraries",
        "Excel Advanced",
        "Advanced spreadsheet analytics",
      ],
    },
    {
      category: "Statistical Analysis",
      skills: [
        "Descriptive and inferential statistics",
        "Hypothesis testing and confidence intervals",
        "Regression analysis and modeling",
        "Data cleaning and preprocessing",
        "Business intelligence fundamentals",
      ],
    },
    {
      category: "Business Intelligence",
      skills: [
        "Report writing and presentation",
        "Dashboard design and development",
        "KPI identification and tracking",
        "Data storytelling techniques",
        "Business insights delivery",
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
          Master the complete data analysis toolkit with hands-on training in
          statistical analysis, programming, and business intelligence
          platforms.
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
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-blue-50 p-6 rounded-xl border border-blue-100">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">
            Portfolio-Driven Learning
          </h3>
          <p className="text-blue-800">
            Every project you complete becomes part of your professional
            portfolio. By graduation, you&apos;ll have 4-6 data analysis
            projects showcasing your skills in data visualization, statistical
            analysis, and business intelligence that you can confidently present
            to employers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatYoullLearn;

import React from "react";
import { CheckCircle } from "lucide-react";

const WhatYoullLearn: React.FC = () => {
  const learningModules = [
    {
      category: "Data Science Core Skills",
      skills: [
        "Data cleaning and manipulation with Pandas",
        "Exploratory data analysis and visualization",
        "Statistical modeling and inference",
        "Machine learning with Scikit-learn",
        "Communicating findings with dashboards and reports",
      ],
    },
    {
      category: "Data Collection & Evaluation",
      skills: [
        "Conducting data interviews and surveys",
        "Identifying key variables and KPIs",
        "Data sourcing and collection strategies",
        "Data validation and cleaning techniques",
        "Experimental design and A/B testing",
      ],
    },
    {
      category: "Dashboarding & Reporting",
      skills: [
        "Creating visual mockups for dashboards",
        "Building interactive data prototypes (e.g., Streamlit, Tableau)",
        "Designing metrics and KPIs for clarity",
        "Responsive data visualization design",
        "Automating reports for mobile/web use",
      ],
    },
    {
      category: "Data Science Tools & Libraries",
      skills: [
        "Jupyter Notebook and Google Colab",
        "Pandas, NumPy, Matplotlib, and Seaborn",
        "SQL and database tools (PostgreSQL, MongoDB)",
        "BI tools like Power BI and Tableau",
        "Collaborative notebooks and code sharing (Kaggle, GitHub)",
      ],
    },
  ];

  return (
    <section id="what-youll-learn" className="mb-12 lg:mb-16">
      <div className="max-w-4xl">
        <h2
          className="font-bold text-gray-900 mb-4 lg:mb-6"
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
            lineHeight: "1.3",
          }}
        >
          What You&apos;ll Learn – Data Science
        </h2>
        <p
          className="text-gray-700 mb-6 lg:mb-8 leading-relaxed"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.125rem)",
            lineHeight: "1.6",
          }}
        >
          Our program is crafted by data professionals and analysts to teach you
          the full pipeline—from data collection to storytelling with insights.
          You&apos;ll gain hands-on experience with tools used in industry.
        </p>

        <div className="space-y-6 lg:space-y-8">
          {learningModules.map((module, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4 lg:p-6"
            >
              <h3
                className="font-semibold text-gray-900 mb-3 lg:mb-4"
                style={{
                  fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
                  lineHeight: "1.4",
                }}
              >
                {module.category}
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {module.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center space-x-2 sm:space-x-3"
                  >
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600 flex-shrink-0" />
                    <span
                      className="text-gray-700"
                      style={{
                        fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
                        lineHeight: "1.5",
                      }}
                    >
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 lg:mt-8 bg-purple-50 p-4 lg:p-6 rounded-lg border border-purple-100 shadow-md">
          <h3
            className="font-semibold text-purple-900 mb-2 lg:mb-3"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.125rem)",
              lineHeight: "1.4",
            }}
          >
            Insight-Driven Portfolio
          </h3>
          <p
            className="text-purple-800"
            style={{
              fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
              lineHeight: "1.6",
            }}
          >
            Your completed projects will serve as powerful evidence of your
            ability to derive insights from data. By graduation, you&apos;ll
            have 5–7 polished case studies featuring exploratory analysis,
            visualizations, and machine learning models—ideal for impressing
            data teams and recruiters.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatYoullLearn;

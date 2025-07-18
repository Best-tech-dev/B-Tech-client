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
    <section id="what-youll-learn" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          What You&apos;ll Learn – Data Science
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Our program is crafted by data professionals and analysts to teach you
          the full pipeline—from data collection to storytelling with insights.
          You&apos;ll gain hands-on experience with tools used in industry.
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
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-purple-50 p-6 rounded-xl border border-purple-100">
          <h3 className="text-lg font-semibold text-purple-900 mb-3">
            Insight-Driven Portfolio
          </h3>
          <p className="text-purple-800">
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

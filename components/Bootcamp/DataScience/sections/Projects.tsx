import React from "react";
import { BarChart3, TrendingUp, Database } from "lucide-react";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Exploratory Data Analysis (EDA)",
      description:
        "Analyze a public dataset and create a data-driven narrative.",
      icon: <BarChart3 className="h-6 w-6 text-purple-600" />,
      duration: "Weeks 3-5",
      deliverables: [
        "Data cleaning and transformation",
        "EDA report with visualizations",
        "Key trends and outlier analysis",
        "Python notebook with documentation",
      ],
    },
    {
      title: "Sales Forecasting Model",
      description:
        "Build and evaluate a time-series forecasting model for a retail dataset.",
      icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
      duration: "Weeks 6-8",
      deliverables: [
        "Feature engineering",
        "ARIMA or regression model",
        "Forecast visualization",
        "Model evaluation metrics (RMSE, MAE)",
      ],
    },
    {
      title: "Interactive Dashboard",
      description:
        "Design a business intelligence dashboard for data storytelling.",
      icon: <Database className="h-6 w-6 text-green-600" />,
      duration: "Weeks 9-11",
      deliverables: [
        "Power BI or Tableau dashboard",
        "Metrics and KPIs setup",
        "Interactivity with filters and drill-downs",
        "Executive summary of insights",
      ],
    },
  ];

  return (
    <section id="projects" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Hands-on Projects
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Build practical, insight-driven projects that showcase your ability to
          work with data, build models, and tell compelling stories with
          results.
        </p>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-gray-50 rounded-lg">
                  {project.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {project.duration}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Key Deliverables:
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {project.deliverables.map((deliverable, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-gray-600"
                        >
                          <div className="h-1.5 w-1.5 bg-purple-600 rounded-full mr-3"></div>
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

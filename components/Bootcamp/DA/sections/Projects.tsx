import React from "react";
import { BarChart, Database, FileSpreadsheet } from "lucide-react";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Sales Analysis Dashboard",
      description:
        "Build comprehensive sales dashboards using Power BI to analyze revenue trends, customer behavior, and sales performance metrics.",
      icon: <BarChart className="h-6 w-6 text-blue-600" />,
      duration: "Weeks 3-5",
      deliverables: [
        "Data collection and cleaning",
        "Interactive Power BI dashboard",
        "Revenue trend analysis",
        "Customer behavior insights",
      ],
    },
    {
      title: "Customer Data Analysis",
      description:
        "Analyze customer datasets to identify patterns, segment customers, and provide actionable business insights using Python and SQL.",
      icon: <Database className="h-6 w-6 text-green-600" />,
      duration: "Weeks 6-8",
      deliverables: [
        "Customer segmentation model",
        "Python data analysis scripts",
        "Statistical insights report",
        "Business recommendations",
      ],
    },
    {
      title: "Financial Reporting System",
      description:
        "Create automated financial reports and KPI dashboards that track business performance and provide data-driven recommendations.",
      icon: <FileSpreadsheet className="h-6 w-6 text-blue-600" />,
      duration: "Weeks 9-11",
      deliverables: [
        "Automated reporting system",
        "KPI tracking dashboard",
        "Financial performance metrics",
        "Executive summary reports",
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
          Build a portfolio of real-world data analysis projects that
          demonstrate your analytical skills and problem-solving abilities. Each
          project follows industry standards and best practices.
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
                          <div className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-3"></div>
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

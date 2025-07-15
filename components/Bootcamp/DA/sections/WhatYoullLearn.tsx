import React from "react";
import { FaPython, FaDatabase, FaChartBar } from "react-icons/fa";
import { SiTableau, SiScikitlearn } from "react-icons/si";

const WhatYoullLearn = () => {
  const skills = [
    {
      category: "Programming & Analysis",
      icon: <FaPython className="h-8 w-8 text-blue-600" />,
      technologies: [
        {
          name: "Python Programming",
          description: "Data manipulation and analysis with Python",
        },
        {
          name: "SQL & Databases",
          description: "Database querying and data extraction",
        },
        {
          name: "R Programming",
          description: "Statistical analysis and modeling",
        },
        {
          name: "Jupyter Notebooks",
          description: "Interactive data analysis environment",
        },
      ],
    },
    {
      category: "Data Visualization",
      icon: <FaChartBar className="h-8 w-8 text-blue-600" />,
      technologies: [
        {
          name: "Power BI",
          description: "Business intelligence and dashboards",
        },
        { name: "Tableau", description: "Advanced data visualization" },
        {
          name: "Matplotlib & Seaborn",
          description: "Python data visualization libraries",
        },
        {
          name: "Excel Advanced",
          description: "Advanced spreadsheet analytics",
        },
      ],
    },
    {
      category: "Machine Learning",
      icon: <SiScikitlearn className="h-8 w-8 text-blue-600" />,
      technologies: [
        {
          name: "Scikit-learn",
          description: "Machine learning algorithms and models",
        },
        {
          name: "TensorFlow/Keras",
          description: "Deep learning and neural networks",
        },
        {
          name: "Predictive Modeling",
          description: "Forecasting and prediction techniques",
        },
        {
          name: "Statistical Analysis",
          description: "Hypothesis testing and statistical inference",
        },
      ],
    },
    {
      category: "Data Engineering",
      icon: <FaDatabase className="h-8 w-8 text-blue-600" />,
      technologies: [
        {
          name: "Pandas & NumPy",
          description: "Data manipulation and numerical computing",
        },
        {
          name: "Data Cleaning",
          description: "Data preprocessing and transformation",
        },
        {
          name: "ETL Processes",
          description: "Extract, Transform, Load workflows",
        },
        {
          name: "Big Data Tools",
          description: "Introduction to Spark and Hadoop",
        },
      ],
    },
  ];

  return (
    <section
      id="what-youll-learn"
      className="py-12 scroll-mt-28"
      aria-labelledby="what-youll-learn-title"
    >
      <h2
        id="what-youll-learn-title"
        className="text-lg md:text-3xl font-bold mb-6"
      >
        What You&apos;ll Learn in Data Analytics
      </h2>
      <p className="text-sm md:text-base text-gray-700 mb-10">
        Master the complete data analytics toolkit with hands-on training in
        statistical analysis, machine learning, and business intelligence
        platforms.
      </p>

      <div className="grid lg:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-blue-50 rounded-lg p-6 border border-blue-200"
          >
            <div className="flex items-center mb-4">
              {skill.icon}
              <h3 className="text-xl font-bold text-gray-900 ml-3">
                {skill.category}
              </h3>
            </div>
            <div className="space-y-4">
              {skill.technologies.map((tech, techIndex) => (
                <div
                  key={techIndex}
                  className="border-l-4 border-blue-600 pl-4"
                >
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {tech.name}
                  </h4>
                  <p className="text-sm text-gray-600">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Projects Section */}
      <div className="mt-12 bg-white rounded-lg p-8 border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Data Analytics Projects You&apos;ll Build
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <FaChartBar className="h-12 w-12 text-blue-600 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">
              Sales Dashboard
            </h4>
            <p className="text-sm text-gray-600">
              Interactive business intelligence dashboard with KPIs and insights
            </p>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <FaPython className="h-12 w-12 text-blue-600 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">
              Predictive Model
            </h4>
            <p className="text-sm text-gray-600">
              Machine learning model for customer behavior prediction
            </p>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <SiTableau className="h-12 w-12 text-blue-600 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">Data Story</h4>
            <p className="text-sm text-gray-600">
              Comprehensive data analysis with compelling visualizations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYoullLearn;

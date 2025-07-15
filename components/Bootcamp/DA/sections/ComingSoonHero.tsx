import React from "react";
import { BarChart3, TrendingUp, Database, Brain } from "lucide-react";

const ComingSoonHero: React.FC = () => {
  return (
    <section id="coming-soon" className="mb-16">
      <div className="max-w-4xl">
        <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 p-12 rounded-xl border border-blue-200">
          <div className="mb-6">
            <BarChart3 className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Data Analytics Bootcamp
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Transform raw data into actionable insights. Our comprehensive Data
            Analytics bootcamp is being crafted by industry experts to prepare
            you for high-demand roles in data science, business intelligence,
            and analytics.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col items-center p-4 bg-white rounded-lg border border-blue-100">
              <TrendingUp className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Business Intelligence
              </h3>
              <p className="text-gray-600 text-sm text-center">
                Create dashboards and reports that drive business decisions
              </p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg border border-blue-100">
              <Database className="h-8 w-8 text-green-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Data Management
              </h3>
              <p className="text-gray-600 text-sm text-center">
                Master SQL, data cleaning, and database optimization
              </p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg border border-blue-100">
              <Brain className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Predictive Analytics
              </h3>
              <p className="text-gray-600 text-sm text-center">
                Build models that forecast trends and outcomes
              </p>
            </div>
          </div>

          <div className="bg-blue-600 text-white p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              🚀 Expected Launch: Q2 2025
            </h3>
            <p className="mb-4">
              Be among the first to master data analytics with hands-on training
            </p>
            <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Join Early Access
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonHero;

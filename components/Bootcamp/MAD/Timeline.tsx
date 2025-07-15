import React from "react";
import { Calendar, Clock, AlertCircle } from "lucide-react";

export const Timeline = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "Foundation (Weeks 1-6)",
      duration: "6 weeks",
      status: "coming-soon",
      milestones: [
        "Mobile development basics",
        "UI/UX design principles",
        "Development environment setup",
        "First simple app",
      ],
    },
    {
      phase: "Phase 2",
      title: "Cross-Platform (Weeks 7-14)",
      duration: "8 weeks",
      status: "coming-soon",
      milestones: [
        "React Native mastery",
        "Flutter development",
        "State management",
        "Cross-platform project",
      ],
    },
    {
      phase: "Phase 3",
      title: "Native Development (Weeks 15-20)",
      duration: "6 weeks",
      status: "coming-soon",
      milestones: [
        "iOS development with Swift",
        "Android development with Kotlin",
        "Platform-specific features",
        "Native performance optimization",
      ],
    },
    {
      phase: "Phase 4",
      title: "Capstone Project (Weeks 21-24)",
      duration: "4 weeks",
      status: "coming-soon",
      milestones: [
        "Project planning and design",
        "Full-stack mobile app development",
        "Testing and debugging",
        "App store deployment",
      ],
    },
  ];

  return (
    <section id="timeline" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Learning Timeline
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            24-week structured learning path from mobile development basics to
            deployment
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {phases.map((phase, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <AlertCircle className="h-6 w-6 text-green-600" />
                  </div>
                  {index < phases.length - 1 && (
                    <div className="w-px h-16 bg-gray-300 mx-auto mt-4"></div>
                  )}
                </div>

                <div className="flex-1 bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {phase.phase}: {phase.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <Clock className="h-4 w-4 mr-1" />
                        {phase.duration}
                      </div>
                    </div>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                      Coming Soon
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {phase.milestones.map((milestone, milestoneIndex) => (
                      <div
                        key={milestoneIndex}
                        className="flex items-center text-gray-700"
                      >
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-sm">{milestone}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-green-50 rounded-lg p-8 border border-green-200">
              <Calendar className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🚀 Expected Launch: Q4 2025
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Be among the first to experience our comprehensive mobile app
                development bootcamp
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Join Early Access List
                </button>
                <button className="border border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                  Get Course Updates
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

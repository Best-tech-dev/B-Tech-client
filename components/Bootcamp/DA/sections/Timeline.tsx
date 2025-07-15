import React from "react";
import { Calendar, Clock } from "lucide-react";

const Timeline: React.FC = () => {
  const milestones = [
    {
      date: "Q1 2025",
      title: "Curriculum Development",
      description: "Finalizing course content with industry partners",
      status: "in-progress",
    },
    {
      date: "March 2025",
      title: "Instructor Recruitment",
      description: "Onboarding senior data analysts and scientists",
      status: "upcoming",
    },
    {
      date: "April 2025",
      title: "Beta Testing",
      description: "Testing curriculum with select participants",
      status: "upcoming",
    },
    {
      date: "May 2025",
      title: "Official Launch",
      description: "First cohort begins training",
      status: "upcoming",
    },
  ];

  return (
    <section id="timeline" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Launch Timeline
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          We&apos;re working diligently to bring you the best data analytics
          training program. Here&apos;s our roadmap to launch:
        </p>

        <div className="space-y-6">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div
                  className={`w-4 h-4 rounded-full mt-2 ${
                    milestone.status === "in-progress"
                      ? "bg-blue-600"
                      : "bg-gray-300"
                  }`}
                ></div>
                {index < milestones.length - 1 && (
                  <div className="w-0.5 h-16 bg-gray-200 ml-1.5 mt-2"></div>
                )}
              </div>
              <div className="flex-1 pb-8">
                <div className="flex items-center mb-2">
                  <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-500">
                    {milestone.date}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {milestone.title}
                </h3>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 text-center">
          <Clock className="h-8 w-8 text-blue-600 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            Stay Updated
          </h3>
          <p className="text-blue-800">
            Join our waitlist to receive updates on our progress and be the
            first to know when registration opens.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

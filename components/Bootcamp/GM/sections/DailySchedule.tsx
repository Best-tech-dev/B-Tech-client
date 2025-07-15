import React from "react";
import { Clock, Coffee, Users, BookOpen } from "lucide-react";

const DailySchedule: React.FC = () => {
  const scheduleItems = [
    {
      time: "6:00 PM - 6:15 PM",
      activity: "Check-in & Daily Standup",
      description: "Review progress, discuss challenges, and set daily goals",
      icon: <Users className="h-5 w-5 text-blue-600" />,
    },
    {
      time: "6:15 PM - 7:30 PM",
      activity: "Core Learning Session",
      description:
        "Interactive lessons on growth marketing concepts and strategies",
      icon: <BookOpen className="h-5 w-5 text-green-600" />,
    },
    {
      time: "7:30 PM - 7:45 PM",
      activity: "Break",
      description: "Networking and informal discussions with peers",
      icon: <Coffee className="h-5 w-5 text-orange-600" />,
    },
    {
      time: "7:45 PM - 8:45 PM",
      activity: "Hands-on Workshop",
      description: "Practical exercises, case studies, and tool demonstrations",
      icon: <Clock className="h-5 w-5 text-purple-600" />,
    },
    {
      time: "8:45 PM - 9:00 PM",
      activity: "Q&A & Wrap-up",
      description: "Address questions and preview next session",
      icon: <Users className="h-5 w-5 text-red-600" />,
    },
  ];

  const weeklyStructure = [
    {
      day: "Monday",
      focus: "Strategy & Planning",
      topics: "Growth frameworks, customer research, market analysis",
    },
    {
      day: "Tuesday",
      focus: "Acquisition Channels",
      topics: "SEO, PPC, social media, content marketing",
    },
    {
      day: "Wednesday",
      focus: "Conversion & Optimization",
      topics: "Landing pages, A/B testing, funnel optimization",
    },
    {
      day: "Thursday",
      focus: "Analytics & Measurement",
      topics: "Data analysis, attribution, reporting, insights",
    },
    {
      day: "Friday",
      focus: "Project Work & Review",
      topics: "Apply concepts, project presentations, peer feedback",
    },
  ];

  return (
    <section id="daily-schedule" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Daily Schedule
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Our structured daily schedule ensures comprehensive learning while
          maintaining work-life balance. Each session combines theory with
          practical application.
        </p>

        {/* Daily Timeline */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Typical Daily Timeline (Mon-Fri, 3 hours)
          </h3>
          <div className="space-y-4">
            {scheduleItems.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 bg-white border border-gray-200 rounded-lg"
              >
                <div className="flex-shrink-0 p-2 bg-gray-50 rounded-lg">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">
                      {item.activity}
                    </h4>
                    <span className="text-sm text-gray-500 font-mono">
                      {item.time}
                    </span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Structure */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Weekly Learning Focus
          </h3>
          <div className="grid gap-4">
            {weeklyStructure.map((day, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100"
              >
                <div className="md:w-1/4 mb-2 md:mb-0">
                  <span className="font-semibold text-blue-900">{day.day}</span>
                </div>
                <div className="md:w-1/3 mb-2 md:mb-0">
                  <span className="font-medium text-gray-900">{day.focus}</span>
                </div>
                <div className="md:w-1/2">
                  <span className="text-gray-700">{day.topics}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 bg-green-50 p-6 rounded-xl border border-green-200">
          <h4 className="font-semibold text-green-900 mb-3">
            Flexible Learning Environment
          </h4>
          <div className="space-y-2 text-green-800">
            <p>• All sessions are recorded for later review</p>
            <p>• Make-up sessions available for missed classes</p>
            <p>• Weekend optional study groups and project work</p>
            <p>• One-on-one mentorship sessions scheduled separately</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailySchedule;

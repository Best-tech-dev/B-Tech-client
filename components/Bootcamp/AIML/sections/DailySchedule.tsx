import React from "react";
import { Clock, Coffee, Users, BookOpen } from "lucide-react";

const DailySchedule: React.FC = () => {
  const scheduleItems = [
    {
      time: "6:00 PM - 6:15 PM",
      activity: "Check-in & Daily Standup",
      description:
        "Review progress, discuss ML challenges, and set daily goals",
      icon: <Users className="h-5 w-5 text-green-600" />,
    },
    {
      time: "6:15 PM - 7:30 PM",
      activity: "Core ML Session",
      description:
        "Interactive lessons on ML algorithms, theory, and mathematical foundations",
      icon: <BookOpen className="h-5 w-5 text-blue-600" />,
    },
    {
      time: "7:30 PM - 7:45 PM",
      activity: "Break",
      description: "Networking and model critiques with peers",
      icon: <Coffee className="h-5 w-5 text-orange-600" />,
    },
    {
      time: "7:45 PM - 8:45 PM",
      activity: "Hands-on Coding",
      description:
        "Implementing algorithms, building models, and practical ML work",
      icon: <Clock className="h-5 w-5 text-green-600" />,
    },
    {
      time: "8:45 PM - 9:00 PM",
      activity: "Review & Feedback",
      description: "Model evaluation and preview of next session",
      icon: <Users className="h-5 w-5 text-red-600" />,
    },
  ];

  return (
    <section id="daily-schedule" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Daily Schedule
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Our structured approach ensures comprehensive learning while balancing
          theory with practical ML work. Each session is carefully crafted to
          build upon previous knowledge.
        </p>

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
    </section>
  );
};

export default DailySchedule;

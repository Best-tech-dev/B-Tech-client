import React from "react";
import { Clock, Coffee, Users, BookOpen } from "lucide-react";

const DailySchedule: React.FC = () => {
  const scheduleItems = [
    {
      time: "6:00 PM - 6:15 PM",
      activity: "Check-in & Daily Standup",
      description:
        "Review progress, discuss data challenges, and set daily goals",
      icon: <Users className="h-5 w-5 text-blue-600" />,
    },
    {
      time: "6:15 PM - 7:30 PM",
      activity: "Core Data Session",
      description:
        "Interactive lessons on data analysis principles, tools, and methodologies",
      icon: <BookOpen className="h-5 w-5 text-blue-600" />,
    },
    {
      time: "7:30 PM - 7:45 PM",
      activity: "Break",
      description: "Networking and data insights discussion with peers",
      icon: <Coffee className="h-5 w-5 text-orange-600" />,
    },
    {
      time: "7:45 PM - 8:45 PM",
      activity: "Hands-on Workshop",
      description:
        "Data analysis exercises, tool tutorials, and practical data work",
      icon: <Clock className="h-5 w-5 text-blue-600" />,
    },
    {
      time: "8:45 PM - 9:00 PM",
      activity: "Review & Feedback",
      description: "Data insights review and preview of next session",
      icon: <Users className="h-5 w-5 text-red-600" />,
    },
  ];

  return (
    <section id="daily-schedule" className="mb-16">
      <div className="max-w-4xl">
        <h2
          className="font-bold text-gray-900 mb-6"
          style={{
            fontSize: "clamp(1.25rem, 4vw, 1.875rem)",
            lineHeight: "1.2",
          }}
        >
          Daily Schedule
        </h2>
        <p
          className="text-gray-700 mb-8 leading-relaxed"
          style={{
            fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
            lineHeight: "1.6",
          }}
        >
          Our structured approach ensures comprehensive learning while balancing
          theory with practical data analysis work. Each session is carefully
          crafted to build upon previous knowledge.
        </p>

        <div className="space-y-4">
          {scheduleItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 p-4 bg-white border border-gray-200 rounded-lg"
            >
              <div className="flex-shrink-0 p-2 bg-gray-50 rounded-lg mb-2 sm:mb-0">
                {item.icon}
              </div>
              <div className="flex-1 w-full">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h4
                    className="font-semibold text-gray-900"
                    style={{
                      fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
                      lineHeight: "1.4",
                    }}
                  >
                    {item.activity}
                  </h4>
                  <span
                    className="text-gray-500 font-mono mt-1 sm:mt-0"
                    style={{
                      fontSize: "clamp(0.75rem, 1.2vw, 0.875rem)",
                      lineHeight: "1.4",
                    }}
                  >
                    {item.time}
                  </span>
                </div>
                <p
                  className="text-gray-600"
                  style={{
                    fontSize: "clamp(0.75rem, 1.2vw, 0.875rem)",
                    lineHeight: "1.5",
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DailySchedule;

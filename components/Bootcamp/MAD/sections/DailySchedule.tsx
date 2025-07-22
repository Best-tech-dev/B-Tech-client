import React from "react";
import { Clock, Code, Users, BookOpen, HelpCircle } from "lucide-react";

const DailySchedule: React.FC = () => {
  const scheduleItems = [
    {
      time: "9:00 AM - 10:00 AM",
      activity: "Morning Review & Planning",
      description: "Daily standup, code review, and project planning session",
      icon: <Clock className="h-5 w-5 text-green-600" />,
    },
    {
      time: "10:00 AM - 12:30 PM",
      activity: "Core Learning Session",
      description:
        "Interactive lectures on mobile development concepts and live coding",
      icon: <BookOpen className="h-5 w-5 text-blue-600" />,
    },
    {
      time: "1:30 PM - 4:00 PM",
      activity: "Hands-on Development",
      description: "Individual and pair programming on mobile app projects",
      icon: <Code className="h-5 w-5 text-purple-600" />,
    },
    {
      time: "4:00 PM - 4:30 PM",
      activity: "Team Collaboration",
      description:
        "Group discussions, peer code reviews, and knowledge sharing",
      icon: <Users className="h-5 w-5 text-orange-600" />,
    },
    {
      time: "4:30 PM - 5:00 PM",
      activity: "Open Support Hours",
      description: "Q&A sessions, one-on-one mentoring, and additional help",
      icon: <HelpCircle className="h-5 w-5 text-red-600" />,
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
          Our structured daily schedule balances intensive learning with
          hands-on practice, ensuring you get the most out of your mobile
          development education.
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

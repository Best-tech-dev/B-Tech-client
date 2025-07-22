import React from "react";
import { Clock, Coffee, Users, BookOpen, Code } from "lucide-react";

const DailySchedule: React.FC = () => {
  const scheduleItems = [
    {
      time: "10:00 AM - 10:30 AM",
      activity: "Morning Review & Standup",
      description:
        "Self-led review of notes and learning materials to prepare for the day's coding sessions",
      icon: <Users className="h-5 w-5 text-blue-600" />,
    },
    {
      time: "10:30 AM - 12:30 PM",
      activity: "Live Instruction & Demo",
      description:
        "Interactive lessons on frontend technologies, live coding demonstrations, and real-time Q&A",
      icon: <BookOpen className="h-5 w-5 text-green-600" />,
    },
    {
      time: "1:30 PM - 2:00 PM",
      activity: "Guided Practice & Workshop",
      description:
        "Hands-on coding exercises with instructor guidance and collaborative problem-solving",
      icon: <Code className="h-5 w-5 text-purple-600" />,
    },
    {
      time: "2:00 PM - 3:00 PM",
      activity: "Break",
      description:
        "Networking with peers and recharge time for the afternoon sessions",
      icon: <Coffee className="h-5 w-5 text-orange-600" />,
    },
    {
      time: "3:00 PM - 6:00 PM",
      activity: "Open Instructional Support",
      description:
        "Work on assignments, get help with challenging concepts, and collaborate with teaching assistants",
      icon: <Clock className="h-5 w-5 text-red-600" />,
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
          Every day in our Frontend Development Bootcamp is a little different,
          but you can count on a lively on-site classroom with your classmates,
          instructors, and teaching assistants. You&apos;ll learn through a mix
          of live lessons, coding practice, and team projects.
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

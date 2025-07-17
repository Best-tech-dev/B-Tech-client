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
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Daily Schedule
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Every day in our Frontend Development Bootcamp is a little different,
          but you can count on a lively on-site classroom with your classmates,
          instructors, and teaching assistants. You'll learn through a mix of
          live lessons, coding practice, and team projects.
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

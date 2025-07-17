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
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Daily Schedule
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Our structured daily schedule balances intensive learning with
          hands-on practice, ensuring you get the most out of your mobile
          development education.
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

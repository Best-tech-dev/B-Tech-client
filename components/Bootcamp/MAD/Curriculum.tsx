import React from "react";
import { BookOpen, Users, Code, Rocket, Award, Clock } from "lucide-react";

export const Curriculum = () => {
  const modules = [
    {
      icon: <BookOpen className="h-6 w-6 text-green-600" />,
      title: "Mobile Development Fundamentals",
      duration: "4 weeks",
      topics: [
        "Mobile app architecture patterns",
        "User interface design principles",
        "Mobile-first design approach",
        "Performance optimization basics",
      ],
    },
    {
      icon: <Code className="h-6 w-6 text-green-600" />,
      title: "Cross-Platform Development",
      duration: "6 weeks",
      topics: [
        "React Native development",
        "Flutter framework",
        "State management (Redux, Provider)",
        "Navigation and routing",
      ],
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-600" />,
      title: "Native Development",
      duration: "5 weeks",
      topics: [
        "iOS development with Swift",
        "Android development with Kotlin",
        "Platform-specific features",
        "Native performance optimization",
      ],
    },
    {
      icon: <Users className="h-6 w-6 text-green-600" />,
      title: "Advanced Topics",
      duration: "4 weeks",
      topics: [
        "Push notifications",
        "Authentication and security",
        "Database integration",
        "API integration and REST",
      ],
    },
    {
      icon: <Award className="h-6 w-6 text-green-600" />,
      title: "Project Development",
      duration: "5 weeks",
      topics: [
        "Capstone project planning",
        "Full-stack mobile app",
        "Testing and debugging",
        "App store deployment",
      ],
    },
  ];

  return (
    <section id="curriculum" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Comprehensive Curriculum Preview
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            24-week intensive program covering all aspects of mobile app
            development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                {module.icon}
                <div className="ml-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {module.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {module.duration}
                  </div>
                </div>
              </div>
              <ul className="space-y-2">
                {module.topics.map((topic, topicIndex) => (
                  <li
                    key={topicIndex}
                    className="flex items-start text-sm text-gray-700"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-green-50 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              What You&apos;ll Build
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="space-y-2">
                <p className="text-gray-700">📱 Social media app</p>
                <p className="text-gray-700">🛒 E-commerce mobile app</p>
                <p className="text-gray-700">📊 Data visualization app</p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-700">🎮 Mobile game</p>
                <p className="text-gray-700">📝 Productivity app</p>
                <p className="text-gray-700">🎯 Personal capstone project</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

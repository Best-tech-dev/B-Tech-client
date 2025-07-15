import React from "react";
import { FaMobile, FaReact, FaApple, FaAndroid } from "react-icons/fa";

const WhatYoullLearn = () => {
  const skills = [
    {
      category: "Cross-Platform Development",
      icon: <FaReact className="h-8 w-8 text-green-600" />,
      technologies: [
        {
          name: "React Native",
          description: "Build native apps with JavaScript",
        },
        { name: "Flutter", description: "Google's UI toolkit for mobile" },
        {
          name: "Expo",
          description: "Platform for universal React applications",
        },
        { name: "TypeScript", description: "Type-safe mobile development" },
      ],
    },
    {
      category: "Native iOS Development",
      icon: <FaApple className="h-8 w-8 text-green-600" />,
      technologies: [
        { name: "Swift", description: "Apple's programming language" },
        { name: "SwiftUI", description: "Modern iOS user interface framework" },
        {
          name: "Xcode",
          description: "Apple's integrated development environment",
        },
        { name: "iOS SDK", description: "Native iOS development tools" },
      ],
    },
    {
      category: "Native Android Development",
      icon: <FaAndroid className="h-8 w-8 text-green-600" />,
      technologies: [
        { name: "Kotlin", description: "Modern Android programming language" },
        { name: "Jetpack Compose", description: "Android's modern UI toolkit" },
        { name: "Android Studio", description: "Official Android IDE" },
        {
          name: "Android SDK",
          description: "Native Android development tools",
        },
      ],
    },
    {
      category: "Mobile Development Tools",
      icon: <FaMobile className="h-8 w-8 text-green-600" />,
      technologies: [
        { name: "Firebase", description: "Backend services for mobile apps" },
        { name: "REST APIs", description: "Mobile app data integration" },
        { name: "Push Notifications", description: "User engagement tools" },
        {
          name: "App Store Deployment",
          description: "Publishing to app stores",
        },
      ],
    },
  ];

  return (
    <section
      id="what-youll-learn"
      className="py-12 scroll-mt-28"
      aria-labelledby="what-youll-learn-title"
    >
      <h2
        id="what-youll-learn-title"
        className="text-lg md:text-3xl font-bold mb-6"
      >
        What You&apos;ll Learn in Mobile App Development
      </h2>
      <p className="text-sm md:text-base text-gray-700 mb-10">
        Master the complete mobile development stack with hands-on training in
        both cross-platform and native development approaches.
      </p>

      <div className="grid lg:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-green-50 rounded-lg p-6 border border-green-200"
          >
            <div className="flex items-center mb-4">
              {skill.icon}
              <h3 className="text-xl font-bold text-gray-900 ml-3">
                {skill.category}
              </h3>
            </div>
            <div className="space-y-4">
              {skill.technologies.map((tech, techIndex) => (
                <div
                  key={techIndex}
                  className="border-l-4 border-green-600 pl-4"
                >
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {tech.name}
                  </h4>
                  <p className="text-sm text-gray-600">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Projects Section */}
      <div className="mt-12 bg-white rounded-lg p-8 border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Mobile Apps You&apos;ll Build
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <FaReact className="h-12 w-12 text-green-600 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">
              Social Media App
            </h4>
            <p className="text-sm text-gray-600">
              Cross-platform social networking app with real-time messaging
            </p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <FaApple className="h-12 w-12 text-green-600 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">
              E-commerce iOS App
            </h4>
            <p className="text-sm text-gray-600">
              Native iOS shopping app with payment integration
            </p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <FaAndroid className="h-12 w-12 text-green-600 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">
              Fitness Tracker
            </h4>
            <p className="text-sm text-gray-600">
              Native Android app with health data integration
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYoullLearn;

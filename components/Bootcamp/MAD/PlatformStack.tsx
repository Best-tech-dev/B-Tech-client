import React from "react";
import { Smartphone, Tablet, Monitor, Code2 } from "lucide-react";

export const PlatformStack = () => {
  const platforms = [
    {
      icon: <Smartphone className="h-8 w-8 text-green-600" />,
      title: "React Native",
      description: "Cross-platform development with JavaScript/TypeScript",
      features: [
        "iOS & Android",
        "Code Reusability",
        "Native Performance",
        "Hot Reload",
      ],
    },
    {
      icon: <Tablet className="h-8 w-8 text-green-600" />,
      title: "Flutter",
      description: "Google's UI toolkit for beautiful, natively compiled apps",
      features: [
        "Dart Language",
        "Material Design",
        "Cupertino Widgets",
        "Fast Development",
      ],
    },
    {
      icon: <Monitor className="h-8 w-8 text-green-600" />,
      title: "Native iOS",
      description: "Swift and SwiftUI for iOS app development",
      features: ["Swift Language", "SwiftUI", "Xcode", "iOS SDK"],
    },
    {
      icon: <Code2 className="h-8 w-8 text-green-600" />,
      title: "Native Android",
      description: "Kotlin and Jetpack Compose for Android development",
      features: [
        "Kotlin",
        "Jetpack Compose",
        "Android Studio",
        "Material Design",
      ],
    },
  ];

  return (
    <section id="platforms" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Development Platforms
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Master multiple mobile development platforms and choose the best
            approach for your projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="bg-green-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-center mb-4">{platform.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                {platform.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 text-center">
                {platform.description}
              </p>
              <ul className="space-y-2">
                {platform.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-700"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

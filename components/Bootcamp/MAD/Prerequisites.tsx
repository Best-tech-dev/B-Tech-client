import React from "react";
import { GraduationCap, Code, Smartphone, CheckCircle } from "lucide-react";

export const Prerequisites = () => {
  const requirements = [
    {
      category: "Technical Background",
      icon: <Code className="h-6 w-6 text-green-600" />,
      items: [
        "Basic programming knowledge (any language)",
        "Understanding of HTML, CSS, JavaScript fundamentals",
        "Familiarity with object-oriented programming concepts",
        "Experience with version control (Git) preferred but not required",
      ],
    },
    {
      category: "Educational Background",
      icon: <GraduationCap className="h-6 w-6 text-green-600" />,
      items: [
        "Bachelor's degree in Computer Science, Engineering, or related field",
        "Coding bootcamp graduate with 6+ months experience",
        "Self-taught developers with demonstrable projects",
        "Strong problem-solving and analytical thinking skills",
      ],
    },
    {
      category: "Equipment & Tools",
      icon: <Smartphone className="h-6 w-6 text-green-600" />,
      items: [
        "MacBook (for iOS development) or Windows/Linux machine",
        "Android device for testing (smartphone or tablet)",
        "Reliable internet connection for online collaboration",
        "Willingness to install development environments (Xcode, Android Studio)",
      ],
    },
  ];

  return (
    <section id="prerequisites" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Prerequisites & Requirements
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ensure you&apos;re ready for our intensive mobile app development
            program
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {requirements.map((req, index) => (
              <div
                key={index}
                className="bg-green-50 rounded-lg p-6 border border-green-200"
              >
                <div className="flex items-center mb-4">
                  {req.icon}
                  <h3 className="text-xl font-semibold text-gray-900 ml-3">
                    {req.category}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {req.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start text-gray-700"
                    >
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Not Sure If You&apos;re Ready?
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    💡 Recommended Preparation
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Complete a JavaScript fundamentals course
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Build 2-3 small web projects
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Familiarize yourself with React basics
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Learn Git version control fundamentals
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    📞 Get Assessment
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Schedule a free consultation to assess your readiness and
                    get personalized preparation recommendations.
                  </p>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Schedule Assessment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

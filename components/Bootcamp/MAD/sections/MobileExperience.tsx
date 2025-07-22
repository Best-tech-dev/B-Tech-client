import React from "react";
import { Smartphone, Code, Palette, Store } from "lucide-react";

const MobileExperience: React.FC = () => {
  const highlights = [
    {
      icon: <Smartphone className="h-6 w-6 text-green-600" />,
      title: "Cross-Platform Development",
      description:
        "Master React Native and Flutter to build apps for both iOS and Android simultaneously",
    },
    {
      icon: <Code className="h-6 w-6 text-blue-600" />,
      title: "Modern Development Tools",
      description:
        "Learn industry-standard tools like Expo, Firebase, and REST API integration",
    },
    {
      icon: <Palette className="h-6 w-6 text-purple-600" />,
      title: "Mobile UI/UX Design",
      description:
        "Create intuitive, touch-friendly interfaces optimized for mobile devices",
    },
    {
      icon: <Store className="h-6 w-6 text-orange-600" />,
      title: "App Store Deployment",
      description:
        "Navigate publishing processes and app store optimization strategies",
    },
  ];

  return (
    <section id="mobile-experience" className="mb-12 lg:mb-16">
      <div className="max-w-4xl">
        <h2
          className="font-bold text-gray-900 mb-4 lg:mb-6"
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
            lineHeight: "1.3",
          }}
        >
          Mobile App Development Bootcamp
        </h2>
        <p
          className="text-gray-700 mb-6 lg:mb-8 leading-relaxed"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.125rem)",
            lineHeight: "1.6",
          }}
        >
          Transform your innovative ideas into profitable mobile applications.
          Our comprehensive bootcamp covers everything from native iOS and
          Android development to cross-platform solutions, preparing you for
          roles at top tech companies and enabling you to launch your own app
          ventures.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 lg:gap-6 mb-6 lg:mb-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex items-start space-x-3 sm:space-x-4 p-4 lg:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="flex-shrink-0">{highlight.icon}</div>
              <div>
                <h3
                  className="font-semibold text-gray-900 mb-2"
                  style={{
                    fontSize: "clamp(1rem, 2vw, 1.125rem)",
                    lineHeight: "1.4",
                  }}
                >
                  {highlight.title}
                </h3>
                <p
                  className="text-gray-600"
                  style={{
                    fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
                    lineHeight: "1.5",
                  }}
                >
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 lg:p-8 shadow-md">
          <h3
            className="font-semibold text-green-900 mb-3 lg:mb-4"
            style={{
              fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
              lineHeight: "1.4",
            }}
          >
            Why Choose Mobile App Development?
          </h3>
          <p
            className="text-green-800 leading-relaxed"
            style={{
              fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
              lineHeight: "1.6",
            }}
          >
            Mobile app development is at the forefront of the digital
            revolution. With over 6 billion smartphone users worldwide,
            businesses and entrepreneurs need skilled developers who can create
            engaging, performant mobile experiences. Our program prepares you
            for this lucrative field with hands-on projects and
            industry-standard development practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MobileExperience;

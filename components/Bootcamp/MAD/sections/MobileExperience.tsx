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
    <section id="mobile-experience" className="mb-16">
      <div className="max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Mobile App Development Bootcamp
        </h1>
        <p className="text-lg text-gray-700 mb-12 leading-relaxed">
          Transform your innovative ideas into profitable mobile applications.
          Our comprehensive bootcamp covers everything from native iOS and
          Android development to cross-platform solutions, preparing you for
          roles at top tech companies and enabling you to launch your own app
          ventures.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl"
            >
              <div className="flex-shrink-0">{highlight.icon}</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-green-900 mb-3">
            Why Choose Mobile App Development?
          </h3>
          <p className="text-green-800 leading-relaxed">
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

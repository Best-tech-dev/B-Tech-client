import React from "react";
import { Palette, Users, Smartphone, Eye } from "lucide-react";

const DesignExperience: React.FC = () => {
  const highlights = [
    {
      icon: <Palette className="h-6 w-6 text-purple-600" />,
      title: "Visual Design Mastery",
      description:
        "Learn color theory, typography, and visual hierarchy principles",
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "User-Centered Design",
      description:
        "Master research methods and create designs that solve real user problems",
    },
    {
      icon: <Smartphone className="h-6 w-6 text-green-600" />,
      title: "Interactive Prototyping",
      description: "Build clickable prototypes and conduct usability testing",
    },
    {
      icon: <Eye className="h-6 w-6 text-orange-600" />,
      title: "Design Systems",
      description:
        "Create scalable design systems and maintain design consistency",
    },
  ];

  return (
    <section id="design-experience" className="mb-12 lg:mb-16">
      <div className="max-w-4xl">
        <h2
          className="font-bold text-gray-900 mb-4 lg:mb-6"
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
            lineHeight: "1.3",
          }}
        >
          UI/UX Design Experience
        </h2>
        <p
          className="text-gray-700 mb-6 lg:mb-8 leading-relaxed"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.125rem)",
            lineHeight: "1.6",
          }}
        >
          Transform your creative passion into a rewarding career in UI/UX
          design. Our comprehensive bootcamp covers everything from design
          fundamentals to advanced prototyping, preparing you for roles at top
          tech companies and design agencies.
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

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 lg:p-8 rounded-lg border border-purple-100 shadow-md">
          <h3
            className="font-semibold text-gray-900 mb-3 lg:mb-4"
            style={{
              fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
              lineHeight: "1.4",
            }}
          >
            Why Choose UI/UX Design?
          </h3>
          <p
            className="text-gray-700 leading-relaxed"
            style={{
              fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
              lineHeight: "1.6",
            }}
          >
            UI/UX design is one of the most in-demand skills in the tech
            industry. As businesses increasingly focus on digital experiences,
            the need for skilled designers who can create intuitive, beautiful,
            and functional interfaces continues to grow. Our program prepares
            you for this exciting field with hands-on projects and
            industry-standard tools.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DesignExperience;

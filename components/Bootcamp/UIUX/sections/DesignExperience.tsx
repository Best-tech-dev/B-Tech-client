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
    <section id="design-experience" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          UI/UX Design Experience
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Transform your creative passion into a rewarding career in UI/UX
          design. Our comprehensive bootcamp covers everything from design
          fundamentals to advanced prototyping, preparing you for roles at top
          tech companies and design agencies.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
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

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Why Choose UI/UX Design?
          </h3>
          <p className="text-gray-700 leading-relaxed">
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

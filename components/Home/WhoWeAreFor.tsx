import React from "react";
import { Code, PenTool, Megaphone, GraduationCap } from "lucide-react";

const WhoWeAreFor = () => {
  const targetAudience = [
    {
      icon: Code,
      title: "Developers",
      description:
        "Export components for your favorite frontend frameworks with full control.",
    },
    {
      icon: PenTool,
      title: "Designers",
      description:
        "Design rich, animated presentations visually - no coding required.",
    },
    {
      icon: Megaphone,
      title: "Marketers",
      description:
        "Create product showcases, launch slides, and campaign explainers fast.",
    },
    {
      icon: GraduationCap,
      title: "Educators & Creators",
      description:
        "Deliver content step-by-step with beautiful transitions and layouts.",
    },
  ];

  return (
    <section className="relative py-24 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Who We Are{" "}
            <span className="bg-gradient-to-r from-[#9ef01a] to-[#70e000] bg-clip-text text-transparent">
              For
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Made for makers of all kinds
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {targetAudience.map((audience, index) => {
            const IconComponent = audience.icon;
            return (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-8 border border-gray-800 hover:border-[#9ef01a]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#9ef01a]/10 text-left"
              >
                <div className="text-[#9ef01a] mb-6">
                  <IconComponent size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {audience.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {audience.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreFor;

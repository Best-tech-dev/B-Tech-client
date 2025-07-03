import React from "react";
import { Code, PenTool, Megaphone, GraduationCap } from "lucide-react";

const WhoWeAreFor = () => {
  const targetAudience = [
    {
      icon: Code,
      title: "Businesses & Startups",
      description:
        "Empowering companies to build scalable digital products and innovative solutions.",
    },
    {
      icon: PenTool,
      title: "Brands & Marketers",
      description:
        "Helping brands grow with creative campaigns, digital marketing, and impactful storytelling.",
    },
    {
      icon: Megaphone,
      title: "Enterprises",
      description:
        "Delivering robust, enterprise-grade web and mobile applications for large organizations.",
    },
    {
      icon: GraduationCap,
      title: "Nonprofits & Educators",
      description:
        "Supporting nonprofits and educators with accessible, engaging digital experiences.",
    },
  ];

  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Wireframe mesh pattern */}
          <svg
            className="absolute inset-0 w-full h-full opacity-5"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="mesh"
                x="0"
                y="0"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#mesh)"
              className="text-brand-primary"
            />
          </svg>
        </div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-brand-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-brand-primary/5 to-transparent rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-heading">
            Who We Are For
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Crafted for businesses, brands, enterprises, and educators seeking
            innovative digital solutions.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {targetAudience.map((audience, index) => {
            const IconComponent = audience.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-brand-primary/20 hover:border-brand-primary/40 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/10 text-left group"
              >
                <div className="text-brand-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg lg:text-xl font-semibold mb-4 text-white group-hover:text-brand-primary transition-colors duration-300">
                  {audience.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
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

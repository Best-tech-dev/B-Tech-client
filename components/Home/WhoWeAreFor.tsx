"use client";

import React from "react";
import Link from "next/link";
import { Building2, Zap, Users, TrendingUp } from "lucide-react";

const WhoWeAreFor = () => {
  const targetAudiences = [
    {
      icon: Building2,
      title: "Enterprise Companies",
      description:
        "Large organizations looking to modernize their legacy systems and embrace digital transformation.",
      features: [
        "Legacy System Modernization",
        "Enterprise Architecture",
        "Scalable Cloud Solutions",
        "Custom ERP Systems",
      ],
    },
    {
      icon: Users,
      title: "Educators",
      description:
        "Educational institutions and professionals seeking to enhance learning experiences through technology.",
      features: [
        "E-Learning Platforms",
        "Student Information Systems",
        "Virtual Classrooms",
        "Education Analytics",
      ],
    },
    {
      icon: TrendingUp,
      title: "Government",
      description:
        "Government agencies aiming to improve public services and operational efficiency with digital solutions.",
      features: [
        "E-Government Services",
        "Data Security & Compliance",
        "Citizen Portals",
        "Process Automation",
      ],
    },
    {
      icon: Zap,
      title: "NGOs",
      description:
        "Non-governmental organizations leveraging technology to maximize impact and streamline operations.",
      features: [
        "Donor Management Systems",
        "Impact Analytics",
        "Collaboration Platforms",
        "Mobile Outreach Solutions",
      ],
    },
  ];

  return (
    <section className="relative py-16 md:py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
            Who We Serve
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We partner with businesses of all sizes, from startups to enterprise
            organizations, helping them achieve their digital transformation
            goals.
          </p>
        </div>

        {/* Target Audience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {targetAudiences.map((audience, index) => {
            const IconComponent = audience.icon;
            return (
              <div
                key={index}
                className="group bg-gray-800/40 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-gray-700/50 hover:border-brand-primary/30 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-brand-primary to-brand-accent rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4 group-hover:text-brand-primary transition-colors">
                  {audience.title}
                </h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4 md:mb-6">
                  {audience.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {audience.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-xs md:text-sm text-gray-400"
                    >
                      <div className="w-1.5 h-1.5 bg-brand-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8">
            Ready to transform your business with cutting-edge technology?
          </p>
          <Link
            href="#get-in-touch-form"
            className="bg-brand-primary text-white px-6 md:px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-primary/30 inline-block text-sm md:text-base"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById("get-in-touch-form");
              if (element) {
                const offsetTop = element.offsetTop - 100; // 100px offset
                window.scrollTo({
                  top: offsetTop,
                  behavior: "smooth",
                });
              }
            }}
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreFor;

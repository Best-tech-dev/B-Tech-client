"use client";

import React from "react";

import NewHeader from "@/components/Header/NewHeader";
import Footer from "@/components/Footer/Footer";

import {
  Code,
  Cloud,
  Zap,
  Settings,
  Shield,
  Users,
  Smartphone,
  Database,
  Globe,
} from "lucide-react";

const services = [
  {
    title: "Custom Software Development",
    description:
      "Tailored applications and systems designed to meet your specific business requirements and operational workflows.",
    icon: Code,
    features: [
      "Web Applications",
      "Desktop Software",
      "Legacy System Modernization",
      "API Development",
    ],
  },
  {
    title: "Cloud Solutions",
    description:
      "Seamless migration to cloud platforms, infrastructure optimization, and managed cloud services for enhanced scalability.",
    icon: Cloud,
    features: [
      "Cloud Migration",
      "Infrastructure as Code",
      "DevOps Implementation",
      "Cloud Security",
    ],
  },
  {
    title: "Digital Transformation",
    description:
      "Strategic guidance and implementation support to modernize your operations and embrace digital-first approaches.",
    icon: Zap,
    features: [
      "Process Automation",
      "Digital Strategy",
      "Change Management",
      "Technology Roadmaps",
    ],
  },
  {
    title: "System Integration",
    description:
      "Connecting disparate systems and applications to create unified, efficient workflows across your organization.",
    icon: Settings,
    features: [
      "API Integration",
      "Data Migration",
      "Workflow Automation",
      "Third-party Integrations",
    ],
  },
  {
    title: "Cybersecurity",
    description:
      "Comprehensive security assessments, implementation of robust security measures, and ongoing monitoring and support.",
    icon: Shield,
    features: [
      "Security Audits",
      "Penetration Testing",
      "Compliance Management",
      "24/7 Monitoring",
    ],
  },
  {
    title: "Technology Consulting",
    description:
      "Expert advisory services to help you make informed technology decisions and optimize your IT investment strategy.",
    icon: Users,
    features: [
      "IT Strategy",
      "Vendor Selection",
      "Risk Assessment",
      "Performance Optimization",
    ],
  },
  {
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
    icon: Smartphone,
    features: [
      "iOS Development",
      "Android Development",
      "React Native",
      "Flutter Development",
    ],
  },
  {
    title: "Database Solutions",
    description:
      "Database design, optimization, and management services to ensure your data is secure, accessible, and performant.",
    icon: Database,
    features: [
      "Database Design",
      "Performance Tuning",
      "Data Analytics",
      "Backup & Recovery",
    ],
  },
  {
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications built with the latest technologies and best practices.",
    icon: Globe,
    features: [
      "Responsive Design",
      "E-commerce Solutions",
      "CMS Development",
      "Progressive Web Apps",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Dark theme background with SVG patterns */}
      <div className="fixed inset-0 z-[-2]">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

        {/* SVG Circuit Pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="circuit"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 10,0 L 10,10 M 0,10 L 20,10 M 15,5 L 20,5 M 5,15 L 15,15"
                stroke="#9ef01a"
                strokeWidth="0.5"
                fill="none"
                opacity="0.3"
              />
              <circle cx="10" cy="10" r="1" fill="#9ef01a" opacity="0.4" />
              <circle cx="5" cy="15" r="0.5" fill="#70e000" opacity="0.6" />
              <circle cx="15" cy="5" r="0.5" fill="#70e000" opacity="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>

        {/* Animated gradients */}
        <div
          className="absolute inset-0 animate-pulse duration-[8s]"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, rgba(158, 240, 26, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(112, 224, 0, 0.12) 0%, transparent 50%),
              radial-gradient(circle at 60% 20%, rgba(158, 240, 26, 0.08) 0%, transparent 60%)
            `,
          }}
        ></div>
      </div>

      <NewHeader />

      <main className="pt-32 relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-8 text-center relative">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-brand-primary to-brand-accent bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
              Comprehensive technology solutions designed to transform your
              business and drive sustainable growth
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-8 relative">
          {/* Additional SVG background for services section */}
          <div className="absolute inset-0 overflow-hidden">
            <svg
              className="absolute w-full h-full opacity-5"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="hexagons"
                  x="0"
                  y="0"
                  width="10"
                  height="10"
                  patternUnits="userSpaceOnUse"
                >
                  <polygon
                    points="5,1 8.66,3 8.66,7 5,9 1.34,7 1.34,3"
                    stroke="#9ef01a"
                    strokeWidth="0.3"
                    fill="none"
                    opacity="0.4"
                  />
                  <circle cx="5" cy="5" r="0.5" fill="#70e000" opacity="0.3" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hexagons)" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-primary/20 border border-gray-700/50 hover:border-brand-primary/30 hover:bg-gray-800/60"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-brand-primary to-brand-accent rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-brand-primary/30">
                    <service.icon className="w-8 h-8 text-gray-900" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-brand-primary">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-400"
                      >
                        <div className="w-1.5 h-1.5 bg-brand-primary rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-8 relative overflow-hidden">
          {/* Animated background for CTA */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary via-gray-800 to-brand-secondary">
            <div className="absolute inset-0 opacity-20">
              <svg
                className="w-full h-full"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <radialGradient id="ctaGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#9ef01a" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#70e000" stopOpacity="0.1" />
                  </radialGradient>
                </defs>
                <circle
                  cx="20"
                  cy="30"
                  r="15"
                  fill="url(#ctaGlow)"
                  className="animate-pulse"
                >
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="0,0; 10,5; 0,0"
                    dur="6s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle
                  cx="80"
                  cy="70"
                  r="20"
                  fill="url(#ctaGlow)"
                  className="animate-pulse"
                  style={{ animationDelay: "2s" }}
                >
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="0,0; -8,-3; 0,0"
                    dur="8s"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-10 text-gray-300">
              Let&apos;s discuss how our services can help you achieve your
              technology goals
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.location.href = "/#contact";
                }
              }}
              className="bg-brand-primary text-gray-900 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-primary/40 hover:bg-brand-accent"
            >
              Get Started Today
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;

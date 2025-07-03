"use client";

import React from "react";

import NavBar from "@/components/Header/NavBar";
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
  ArrowRight,
  CheckCircle,
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <NavBar />

      {/* Background Effects */}
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

        {/* Subtle tech pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          viewBox="0 0 100 100"
        >
          <defs>
            <pattern
              id="techGrid"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="10" cy="10" r="1" fill="#9ef01a" opacity="0.3" />
              <path
                d="M10,0 L10,20 M0,10 L20,10"
                stroke="#9ef01a"
                strokeWidth="0.3"
                opacity="0.2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#techGrid)" />
        </svg>
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-brand-primary to-brand-accent bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Comprehensive technology solutions designed to drive your business
              forward. From custom software development to digital
              transformation, we have the expertise to deliver results.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="group bg-gray-800/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-brand-primary/30 transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-brand-primary to-brand-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-primary transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-gray-400"
                        >
                          <CheckCircle className="w-4 h-4 text-brand-primary mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button className="w-full bg-gray-700/50 hover:bg-brand-primary/20 text-white py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-gray-900">
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-brand-secondary/20 via-gray-800/80 to-brand-secondary/20 rounded-3xl p-12 border border-brand-primary/20 text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let&apos;s discuss how our services can help transform your
                business and drive growth through innovative technology
                solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-brand-primary text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-primary/30">
                  Start Your Project
                </button>
                <button className="bg-gray-700/50 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-gray-600/50 border border-gray-600">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;

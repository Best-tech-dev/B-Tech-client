"use client";

import React from "react";

import NewHeader from "@/components/Header/NewHeader";
import Footer from "@/components/Footer/Footer";

import BackgroundAnimation from "@/components/Home/BackgroundAnimation";
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
    <div className="min-h-screen relative bg-white">
      <BackgroundAnimation />
      <NewHeader />

      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-20 px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-brand-primary to-brand-primary-dark bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
              Comprehensive technology solutions designed to transform your
              business and drive sustainable growth
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-8 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="bg-white rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-primary/10 border border-gray-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-brand-primary to-brand-primary-dark rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-brand-primary/30">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-brand-primary">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-500"
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
        <section className="py-20 px-8 bg-gradient-to-r from-brand-primary to-brand-primary-dark text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-10 opacity-90">
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
              className="bg-white text-brand-primary px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/20"
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

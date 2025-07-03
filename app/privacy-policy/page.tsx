"use client";

import React from "react";
import NavBar from "@/components/Header/NavBar";
import Footer from "@/components/Footer/Footer";
import GetInTouch from "@/components/Footer/GetInTouch";
import { Shield, Eye, Lock, FileText, Clock, Globe } from "lucide-react";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Information We Collect",
      icon: FileText,
      content: [
        "Personal information you provide when contacting us or using our services",
        "Technical information about your device and how you use our website",
        "Communication records when you interact with our support team",
        "Business information when engaging our professional services",
      ],
    },
    {
      title: "How We Use Your Information",
      icon: Eye,
      content: [
        "To provide and improve our technology services",
        "To communicate with you about projects and updates",
        "To ensure the security and functionality of our systems",
        "To comply with legal obligations and protect our rights",
      ],
    },
    {
      title: "Data Protection",
      icon: Shield,
      content: [
        "We implement industry-standard security measures",
        "Your data is encrypted both in transit and at rest",
        "Access to personal information is restricted to authorized personnel",
        "Regular security audits and updates to our protection systems",
      ],
    },
    {
      title: "Your Rights",
      icon: Lock,
      content: [
        "Right to access your personal information",
        "Right to correct or update your data",
        "Right to request deletion of your information",
        "Right to object to processing of your data",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <NavBar />

      {/* Background Effects */}
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

        {/* Animated legal document pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          viewBox="0 0 100 100"
        >
          <defs>
            <pattern
              id="legalPattern"
              x="0"
              y="0"
              width="25"
              height="25"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="2"
                y="2"
                width="21"
                height="21"
                rx="2"
                stroke="#9ef01a"
                strokeWidth="0.5"
                fill="none"
                opacity="0.3"
              />
              <line
                x1="5"
                y1="8"
                x2="20"
                y2="8"
                stroke="#9ef01a"
                strokeWidth="0.3"
                opacity="0.4"
              />
              <line
                x1="5"
                y1="12"
                x2="18"
                y2="12"
                stroke="#9ef01a"
                strokeWidth="0.3"
                opacity="0.4"
              />
              <line
                x1="5"
                y1="16"
                x2="19"
                y2="16"
                stroke="#9ef01a"
                strokeWidth="0.3"
                opacity="0.4"
              />
              <circle cx="6" cy="20" r="0.5" fill="#70e000" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#legalPattern)" />
        </svg>

        {/* Floating elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-20 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-brand-primary to-brand-accent rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-brand-primary/30">
              <Shield className="w-10 h-10 text-gray-900" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-brand-primary to-brand-accent bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Your privacy is fundamental to our relationship. This policy
              explains how we collect, use, and protect your personal
              information when you interact with Best Technologies Ltd.
            </p>
            <div className="flex items-center justify-center mt-8 text-gray-400">
              <Clock className="w-5 h-5 mr-2" />
              <span>Last updated: January 2025</span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {sections.map((section, index) => (
                <div
                  key={section.title}
                  className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-brand-primary/30 transition-all duration-500 hover:transform hover:scale-105 group"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-brand-primary to-brand-accent rounded-xl flex items-center justify-center mr-4 group-hover:shadow-lg group-hover:shadow-brand-primary/30 transition-all duration-300">
                      <section.icon className="w-6 h-6 text-gray-900" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">
                      {section.title}
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {section.content.map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary/20 via-gray-800/50 to-brand-secondary/20"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Questions About Our Privacy Policy?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're committed to transparency. If you have any questions about
              how we handle your data, please don't hesitate to reach out to our
              team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-brand-primary text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-primary/40"
              >
                Contact Us
              </a>
              <a
                href="mailto:privacy@besttechnologies.com"
                className="bg-transparent border-2 border-brand-primary text-brand-primary px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-brand-primary hover:text-gray-900"
              >
                Email Privacy Team
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="scroll-m-24">
        <GetInTouch />
        <Footer />
      </footer>
    </div>
  );
};

export default PrivacyPolicy;

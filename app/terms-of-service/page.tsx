"use client";

import React from "react";
import Link from "next/link";
import NavBar from "@/components/Header/NavBar";
import Footer from "@/components/Footer/Footer";

import {
  FileText,
  Scale,
  AlertTriangle,
  Shield,
  Clock,
  CheckCircle,
} from "lucide-react";

const TermsOfService = () => {
  const terms = [
    {
      title: "Service Agreement",
      icon: FileText,
      content: [
        "By using our services, you agree to be bound by these terms",
        "We reserve the right to modify these terms with notice",
        "Continued use constitutes acceptance of updated terms",
        "These terms are governed by applicable laws",
      ],
    },
    {
      title: "Service Delivery",
      icon: CheckCircle,
      content: [
        "We commit to delivering services as specified in our agreements",
        "Project timelines are estimates and may vary based on complexity",
        "Client cooperation is required for timely project completion",
        "Changes to project scope may affect timeline and costs",
      ],
    },
    {
      title: "Payment Terms",
      icon: Scale,
      content: [
        "Payment terms are specified in individual service agreements",
        "Late payments may incur additional fees",
        "Disputed charges must be reported within 30 days",
        "Refunds are subject to our refund policy",
      ],
    },
    {
      title: "Intellectual Property",
      icon: Shield,
      content: [
        "We respect and protect intellectual property rights",
        "Client retains ownership of their business information",
        "We retain rights to our methodologies and frameworks",
        "Third-party licenses are handled separately",
      ],
    },
    {
      title: "Limitation of Liability",
      icon: AlertTriangle,
      content: [
        "Our liability is limited to the value of services provided",
        "We are not liable for indirect or consequential damages",
        "Force majeure events are excluded from liability",
        "Some jurisdictions may not allow these limitations",
      ],
    },
    {
      title: "Data Protection",
      icon: Shield,
      content: [
        "We implement appropriate security measures for your data",
        "Data processing is governed by our Privacy Policy",
        "We comply with applicable data protection regulations",
        "Data breaches will be reported as required by law",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <NavBar />

      {/* Background Effects */}
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

        {/* Legal scales pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          viewBox="0 0 100 100"
        >
          <defs>
            <pattern
              id="scalesPattern"
              x="0"
              y="0"
              width="30"
              height="30"
              patternUnits="userSpaceOnUse"
            >
              {/* Scale base */}
              <line
                x1="15"
                y1="5"
                x2="15"
                y2="25"
                stroke="#9ef01a"
                strokeWidth="0.5"
                opacity="0.3"
              />
              <line
                x1="10"
                y1="25"
                x2="20"
                y2="25"
                stroke="#9ef01a"
                strokeWidth="0.5"
                opacity="0.3"
              />
              {/* Scale arms */}
              <line
                x1="8"
                y1="10"
                x2="22"
                y2="10"
                stroke="#9ef01a"
                strokeWidth="0.5"
                opacity="0.3"
              />
              {/* Scale pans */}
              <ellipse
                cx="8"
                cy="12"
                rx="3"
                ry="1"
                stroke="#70e000"
                strokeWidth="0.3"
                fill="none"
                opacity="0.4"
              />
              <ellipse
                cx="22"
                cy="12"
                rx="3"
                ry="1"
                stroke="#70e000"
                strokeWidth="0.3"
                fill="none"
                opacity="0.4"
              />
              <circle cx="15" cy="10" r="1" fill="#9ef01a" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#scalesPattern)" />
        </svg>

        {/* Floating elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-8 min-h-[60vh] flex items-center">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/imgs/gavel-bg.jpg')",
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-blue-500/30">
              <Scale className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              These terms govern your use of Best Technologies Ltd services and
              establish the foundation for our professional relationship. Please
              read them carefully.
            </p>
            <div className="flex items-center justify-center mt-8 text-gray-400">
              <Clock className="w-5 h-5 mr-2" />
              <span>Last updated: March 2025</span>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/50 mb-20">
              <h2 className="text-3xl font-bold mb-8 text-white">
                Agreement Overview
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Welcome to Best Technologies Ltd. These Terms of Service
                (&quot;Terms&quot;) govern your access to and use of our
                technology services, including custom software development,
                cloud solutions, digital transformation, and related
                professional services.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                By engaging our services or using our website, you agree to be
                bound by these Terms. If you disagree with any part of these
                terms, please do not use our services.
              </p>
              <div className="bg-brand-primary/10 border-l-4 border-brand-primary rounded-r-lg p-6">
                <p className="text-brand-primary font-semibold">
                  Important: These terms supplement but do not replace
                  individual service agreements. Specific project terms will be
                  detailed in separate contracts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Terms Grid */}
        <section className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">
              Key Terms & Conditions
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {terms.map((term) => (
                <div
                  key={term.title}
                  className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-brand-primary/30 transition-all duration-500 hover:transform hover:scale-105 group"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-brand-primary to-brand-accent rounded-xl flex items-center justify-center mr-4 group-hover:shadow-lg group-hover:shadow-brand-primary/30 transition-all duration-300">
                      <term.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">
                      {term.title}
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {term.content.map((item, idx) => (
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

        {/* Dispute Resolution */}
        <section className="py-20 px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-brand-secondary/20 via-gray-800/80 to-brand-secondary/20 rounded-3xl p-12 border border-brand-primary/20">
              <h2 className="text-3xl font-bold text-center mb-8 text-white">
                Dispute Resolution
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-brand-primary">
                    Mediation First
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We believe in resolving disputes through open communication
                    and mediation before pursuing formal legal action.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Direct negotiation preferred</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Professional mediation available</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Cost-effective resolution</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-brand-primary">
                    Governing Law
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    These terms are governed by applicable local and
                    international laws relevant to technology services and data
                    protection.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Local jurisdiction applies</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>International standards followed</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Data protection compliance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;

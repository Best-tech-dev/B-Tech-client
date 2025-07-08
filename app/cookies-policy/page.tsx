"use client";

import React from "react";
import NavBar from "@/components/Header/NavBar";
import Footer from "@/components/Footer/Footer";
import {
  Cookie,
  Settings,
  Shield,
  AlertCircle,
  Clock,
  Globe,
} from "lucide-react";

const CookiesPolicy = () => {
  const cookieTypes = [
    {
      title: "Essential Cookies",
      icon: Shield,
      description: "Required for basic website functionality",
      color: "from-green-500 to-emerald-500",
      examples: [
        "Session management",
        "Security tokens",
        "Load balancing",
        "Basic functionality",
      ],
    },
    {
      title: "Analytics Cookies",
      icon: Settings,
      description: "Help us understand how visitors use our website",
      color: "from-blue-500 to-cyan-500",
      examples: [
        "Page view tracking",
        "User behavior analysis",
        "Performance metrics",
        "Error reporting",
      ],
    },
    {
      title: "Marketing Cookies",
      icon: Globe,
      description: "Used to deliver relevant advertisements",
      color: "from-purple-500 to-pink-500",
      examples: [
        "Ad targeting",
        "Social media integration",
        "Campaign tracking",
        "Conversion measurement",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <NavBar />

      {/* Background Effects */}
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

        {/* Cookie crumb pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          viewBox="0 0 100 100"
        >
          <defs>
            <pattern
              id="cookiePattern"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="10"
                cy="10"
                r="8"
                stroke="#9ef01a"
                strokeWidth="0.5"
                fill="none"
                opacity="0.3"
              />
              <circle cx="7" cy="7" r="1" fill="#9ef01a" opacity="0.4" />
              <circle cx="13" cy="8" r="0.8" fill="#70e000" opacity="0.5" />
              <circle cx="8" cy="13" r="0.6" fill="#9ef01a" opacity="0.3" />
              <circle cx="12" cy="12" r="0.7" fill="#70e000" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cookiePattern)" />
        </svg>

        {/* Floating elements */}
        <div className="absolute top-40 right-32 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-32 left-32 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "3s" }}
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
            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-orange-500/30">
              <Cookie className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Cookies Policy
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              We use cookies and similar technologies to enhance your browsing
              experience, analyze site traffic, and provide personalized
              content. Here&apos;s everything you need to know.
            </p>
            <div className="flex items-center justify-center mt-8 text-gray-400">
              <Clock className="w-5 h-5 mr-2" />
              <span>Last updated: March 2025</span>
            </div>
          </div>
        </section>

        {/* What Are Cookies Section */}
        <section className="py-20 px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/50 mb-20">
              <div className="flex items-center mb-8">
                <AlertCircle className="w-8 h-8 text-brand-primary mr-4" />
                <h2 className="text-3xl font-bold text-white">
                  What Are Cookies?
                </h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Cookies are small text files that are stored on your device when
                you visit our website. They help us provide you with a better
                experience by remembering your preferences and analyzing how you
                use our site.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                These files contain information that is transferred to your
                device&apos;s hard drive and allow us to recognize your device
                and gather information about your browsing patterns.
              </p>
            </div>
          </div>
        </section>

        {/* Cookie Types */}
        <section className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">
              Types of Cookies We Use
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {cookieTypes.map((type) => (
                <div
                  key={type.title}
                  className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-brand-primary/30 transition-all duration-500 hover:transform hover:scale-105 group"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300`}
                  >
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-center mb-4 text-white">
                    {type.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-6 leading-relaxed">
                    {type.description}
                  </p>
                  <ul className="space-y-3">
                    {type.examples.map((example, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-brand-primary rounded-full mr-3 flex-shrink-0"></div>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cookie Management */}
        <section className="py-20 px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-brand-secondary/20 via-gray-800/80 to-brand-secondary/20 rounded-3xl p-12 border border-brand-primary/20">
              <h2 className="text-3xl font-bold text-center mb-8 text-white">
                Managing Your Cookie Preferences
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-brand-primary">
                    Browser Settings
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    You can control cookies through your browser settings. Most
                    browsers allow you to:
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>View which cookies are stored</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Delete specific cookies</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Block cookies from specific sites</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Block all cookies</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-brand-primary">
                    Third-Party Tools
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    You can also opt out of certain analytics and advertising
                    cookies using:
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Google Analytics opt-out</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Network advertising initiative</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Digital advertising alliance</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Your online choices</span>
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

export default CookiesPolicy;

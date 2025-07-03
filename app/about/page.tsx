"use client";

import React from "react";

import NavBar from "@/components/Header/NavBar";
import Footer from "@/components/Footer/Footer";
import { Target, Award, Globe, Zap, Heart, ArrowRight } from "lucide-react";

const values = [
  {
    title: "Innovation",
    description:
      "We stay at the forefront of technology to deliver cutting-edge solutions.",
    icon: Target,
  },
  {
    title: "Client-Centric",
    description:
      "Your success is our priority. We build lasting partnerships with our clients.",
    icon: Heart,
  },
  {
    title: "Excellence",
    description:
      "We maintain the highest standards in every project we undertake.",
    icon: Award,
  },
  {
    title: "Global Perspective",
    description: "We bring international best practices to local market needs.",
    icon: Globe,
  },
];

export default function About() {
  const stats = [
    { number: "50+", label: "Projects Delivered" },
    { number: "25+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "15+", label: "Team Members" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <NavBar />

      {/* Background Effects */}
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

        {/* Subtle pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          viewBox="0 0 100 100"
        >
          <defs>
            <pattern
              id="aboutPattern"
              x="0"
              y="0"
              width="30"
              height="30"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="15" cy="15" r="2" fill="#9ef01a" opacity="0.3" />
              <circle cx="5" cy="5" r="1" fill="#70e000" opacity="0.4" />
              <circle cx="25" cy="25" r="1" fill="#70e000" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#aboutPattern)" />
        </svg>
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-brand-primary to-brand-accent bg-clip-text text-transparent">
              About Us
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              We are Best Technologies Ltd., a forward-thinking digital agency
              committed to empowering businesses through innovative technology
              solutions.
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Founded with a vision to bridge the gap between businesses and
                  cutting-edge technology, Best Technologies Ltd. has grown from
                  a small startup to a trusted partner for organizations
                  worldwide.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  Our journey began with a simple belief: technology should
                  empower, not complicate. Today, we continue to live by this
                  principle, delivering solutions that drive real business
                  value.
                </p>
                <div className="flex items-center">
                  <button className="bg-brand-primary text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-primary/30 flex items-center">
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
              <div className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-brand-primary mb-2">
                        {stat.number}
                      </div>
                      <div className="text-gray-300 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-8 bg-gray-900/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-primary to-brand-accent rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  To empower businesses with innovative technology solutions
                  that drive growth, efficiency, and competitive advantage in
                  the digital age.
                </p>
              </div>

              <div className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-primary to-brand-accent rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  To be the leading technology partner for businesses seeking
                  digital transformation and sustainable growth through
                  cutting-edge solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                The principles that guide everything we do and shape our
                culture.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-brand-primary/30 transition-all duration-500 hover:-translate-y-2 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-brand-primary to-brand-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-brand-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
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
                Ready to Work Together?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let&apos;s discuss how we can help transform your business with
                innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-brand-primary text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-primary/30">
                  Get In Touch
                </button>
                <button className="bg-gray-700/50 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-gray-600/50 border border-gray-600">
                  View Our Work
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

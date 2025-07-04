"use client";

import React from "react";
import Link from "next/link";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import { Button } from "@/ui/button";

interface IndustryData {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  challenges: string[];
  solutions: string[];
  benefits: string[];
}

interface IndustryDetailClientProps {
  industry: IndustryData;
}

export default function IndustryDetailClient({
  industry,
}: IndustryDetailClientProps) {
  const { navigateAndScroll } = useSmoothScroll();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigateAndScroll("/contact", "contact-form", 120);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {industry.title}{" "}
              <span className="bg-gradient-to-r from-[#a4cd39] to-[#7ca412] bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              {industry.fullDescription}
            </p>
            <Button
              onClick={handleContactClick}
              className="inline-flex items-center px-8 py-6 bg-gradient-to-r from-[#a4cd39] to-[#7ca412] text-white font-semibold rounded-full hover:from-[#7ca412] hover:to-[#a4cd39] transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Challenges */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="w-2 h-8 bg-red-500 rounded-full mr-3"></span>
                Challenges
              </h2>
              <ul className="space-y-4">
                {industry.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="w-2 h-8 bg-[#a4cd39] rounded-full mr-3"></span>
                Solutions
              </h2>
              <ul className="space-y-4">
                {industry.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <span className="w-2 h-2 bg-[#a4cd39] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {solution}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="w-2 h-8 bg-blue-500 rounded-full mr-3"></span>
                Benefits
              </h2>
              <ul className="space-y-4">
                {industry.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your {industry.title} Operations?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s discuss how our specialized solutions can address your
            unique challenges and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleContactClick}
              className="inline-flex items-center justify-center px-8 py-6 bg-gradient-to-r from-[#a4cd39] to-[#7ca412] text-white font-semibold rounded-full hover:from-[#7ca412] hover:to-[#a4cd39] transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Button>
            <Link
              href="/industries"
              className="inline-flex items-center justify-center px-8 py-2 border-2 border-[#a4cd39] text-[#a4cd39] font-semibold rounded-full hover:bg-[#a4cd39] hover:text-white transition-all duration-300"
            >
              View All Industries
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/ui/button";
import NavBar from "@/components/Header/NavBar";
import Footer from "@/components/Footer/Footer";
import useSmoothScroll from "@/hooks/useSmoothScroll";

const industries = [
  {
    slug: "branding",
    title: "Branding",
    description:
      "Elevating brands with creative and strategic solutions. We help businesses define their identity, communicate their values, and stand out in a crowded marketplace through innovative branding strategies and visual storytelling.",
    image: "/imgs/industries-branding.jpg",
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    description:
      "Transforming healthcare through innovative technology solutions, including patient management systems, telemedicine platforms, and secure health data management. Our expertise enables healthcare providers to improve patient outcomes, streamline operations, and ensure regulatory compliance.",
    image: "/imgs/industries-healthcare.jpg",
  },
  {
    slug: "finance",
    title: "Finance",
    description:
      "Empowering financial institutions with secure, scalable solutions including fintech applications, payment systems, and regulatory compliance tools. We help banks, insurers, and fintech startups modernize their services, enhance security, and deliver seamless digital experiences to their customers.",
    image: "/imgs/industries-finance.jpg",
  },
  {
    slug: "education",
    title: "Education",
    description:
      "Revolutionizing education with learning management systems, virtual classrooms, and educational technology platforms for modern learning. Our solutions foster collaboration, personalized learning, and accessibility, supporting educators and learners in achieving their goals.",
    image: "/imgs/industries-education.jpg",
  },
  {
    slug: "government",
    title: "Government",
    description:
      "Modernizing government services with digital transformation solutions, citizen portals, and efficient public administration systems. We enable governments to deliver transparent, accessible, and efficient services to citizens while ensuring data security and compliance.",
    image: "/imgs/industries-government.jpg",
  },
  {
    slug: "retail",
    title: "Retail",
    description:
      "Enhancing retail experiences with e-commerce platforms, inventory management systems, and customer engagement solutions. Our technology empowers retailers to optimize operations, personalize customer journeys, and drive growth in a competitive market.",
    image: "/imgs/industries-retail.jpg",
  },
];

export default function IndustriesPage() {
  const { navigateAndScroll } = useSmoothScroll();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigateAndScroll("/contact", "contact-form", 120);
  };
  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Hero Section */}
        <section className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Industries We{" "}
              <span className="bg-gradient-to-r from-[#a4cd39] to-[#7ca412] bg-clip-text text-transparent">
                Serve
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver tailored technology solutions across diverse
              industries, helping organizations transform and thrive in the
              digital age.
            </p>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry) => (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-[#a4cd39]/50 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center overflow-hidden">
                    <Image
                      src={industry.image}
                      alt={`${industry.title} industry solutions`}
                      width={400}
                      height={225}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#a4cd39] transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {industry.description}
                    </p>

                    <div className="mt-4 inline-flex items-center text-[#a4cd39] text-sm font-medium">
                      Learn More
                      <svg
                        className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let&apos;s discuss how our technology solutions can drive
              innovation in your sector.
            </p>
            <Button
              onClick={handleContactClick}
              className="inline-flex items-center px-8 py-6 bg-gradient-to-r from-[#a4cd39] to-[#7ca412] text-white font-semibold rounded-full hover:from-[#7ca412] hover:to-[#a4cd39] transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
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
        </section>
      </div>
      <Footer />
    </>
  );
}

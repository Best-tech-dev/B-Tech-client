"use client";

import React, { useState, useEffect, useRef } from "react";

const HomepageAbout = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    retention: 0,
    support: 0,
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  const targetValues = React.useMemo(
    () => ({
      projects: 150,
      clients: 50,
      retention: 99,
      support: 24,
    }),
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 steps for smooth animation
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);

        setCounts({
          projects: Math.floor(targetValues.projects * easeOutQuart),
          clients: Math.floor(targetValues.clients * easeOutQuart),
          retention: Math.floor(targetValues.retention * easeOutQuart),
          support: Math.floor(targetValues.support * easeOutQuart),
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setCounts(targetValues);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible, targetValues]);

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
    >
      {/* Subtle SVG background */}
      <div className="absolute inset-0">
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          viewBox="0 0 800 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="aboutPattern"
              x="0"
              y="0"
              width="120"
              height="120"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M60 20 L100 60 L60 100 L20 60 Z"
                stroke="#9ef01a"
                strokeWidth="1"
                fill="none"
                opacity="0.2"
              />
              <circle cx="60" cy="60" r="3" fill="#70e000" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#aboutPattern)" />
        </svg>
        <div className="absolute top-10 right-10 w-72 h-72 bg-brand-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-accent/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 text-white">
              Driving Innovation Forward
            </h2>
            <div className="space-y-4 md:space-y-6 text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed">
              <p>
                With a foundation built on technical excellence and customer
                satisfaction, Best Technologies Limited is at the forefront of
                digital innovation, helping businesses thrive in the digital
                age.
              </p>
              <p>
                Our approach is rooted in understanding your unique challenges
                and opportunities, ensuring that every solution we provide is
                aligned with your strategic objectives and delivers measurable
                business value.
              </p>
              <p>
                We take pride in partnering with organizations driving industry
                innovation. Our diverse portfolio spans from startups to
                enterprises and government agencies across multiple sectors.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-8" ref={sectionRef}>
            <div className="text-center p-4 md:p-6 bg-gray-800/80 backdrop-blur-sm rounded-xl border border-brand-primary/20 hover:border-brand-primary/40 hover:bg-gray-800/95 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-primary mb-2">
                {counts.projects}+
              </div>
              <div className="text-gray-300 text-xs md:text-sm">
                Projects Delivered
              </div>
            </div>
            <div className="text-center p-4 md:p-6 bg-gray-800/80 backdrop-blur-sm rounded-xl border border-brand-primary/20 hover:border-brand-primary/40 hover:bg-gray-800/95 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-primary mb-2">
                {counts.clients}+
              </div>
              <div className="text-gray-300 text-xs md:text-sm">
                Happy Clients
              </div>
            </div>
            <div className="text-center p-4 md:p-6 bg-gray-800/80 backdrop-blur-sm rounded-xl border border-brand-primary/20 hover:border-brand-primary/40 hover:bg-gray-800/95 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-primary mb-2">
                {counts.retention}%
              </div>
              <div className="text-gray-300 text-xs md:text-sm">
                Client Retention
              </div>
            </div>
            <div className="text-center p-4 md:p-6 bg-gray-800/80 backdrop-blur-sm rounded-xl border border-brand-primary/20 hover:border-brand-primary/40 hover:bg-gray-800/95 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-primary mb-2">
                {counts.support}/7
              </div>
              <div className="text-gray-300 text-xs md:text-sm">
                Support Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageAbout;

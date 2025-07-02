"use client";

import React, { useEffect, useRef } from "react";
import { Rocket, Target, Zap, Shield, Users, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Technical Excellence",
    description:
      "Our foundation is built on deep technical expertise and commitment to delivering solutions that exceed expectations using the latest technologies and industry best practices.",
  },
  {
    icon: Target,
    title: "Strategic Alignment",
    description:
      "We understand your unique challenges and opportunities, ensuring every solution aligns with your strategic objectives and drives real business value.",
  },
  {
    icon: Zap,
    title: "Digital Innovation",
    description:
      "At the forefront of digital transformation, we help businesses leverage emerging technologies to stay competitive and thrive in the digital age.",
  },
  {
    icon: Shield,
    title: "Secure & Scalable",
    description:
      "Built with security and scalability in mind, our solutions grow with your business while maintaining the highest standards of data protection.",
  },
  {
    icon: Users,
    title: "Trusted Partnership",
    description:
      "We pride ourselves on building long-term partnerships with organizations across multiple sectors, from startups to enterprises and government agencies.",
  },
  {
    icon: TrendingUp,
    title: "Measurable Results",
    description:
      "Our success is measured by your success. We deliver solutions that provide tangible ROI and drive transformative growth for your organization.",
  },
];

const HomeWhyChooseUs = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    cardsRef.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-32 px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
          Why Choose Us
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We deliver cutting-edge technology solutions with a focus on
          innovation, reliability, and measurable business impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            className="bg-card-light rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-brand-primary/30 hover:shadow-2xl hover:shadow-brand-primary/10 relative overflow-hidden group opacity-0 translate-y-8"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

            <div className="w-15 h-15 bg-gradient-to-r from-brand-primary to-brand-primary-dark rounded-xl flex items-center justify-center mb-6 p-3 shadow-lg shadow-brand-primary/30">
              <feature.icon className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              {feature.title}
            </h3>

            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeWhyChooseUs;

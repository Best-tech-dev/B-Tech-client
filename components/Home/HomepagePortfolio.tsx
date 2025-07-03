"use client";

import { useState } from "react";
import {
  Sparkles,
  ImageIcon,
  Code,
  Rocket,
  Edit,
  FileText,
  RefreshCw,
  Eye,
} from "lucide-react";

import Image from "next/image";

const portfolioImages = [
  "/portfolio/portfolio-01.png",
  "/portfolio/portfolio-02.png",
  "/portfolio/portfolio-03.png",
  "/portfolio/portfolio-04.png",
  "/portfolio/portfolio-05.png",
  "/portfolio/portfolio-06.png",
  "/portfolio/portfolio-07.png",
  "/portfolio/portfolio-08.png",
];

const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="group bg-gray-800/40 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-gray-700/50 hover:border-brand-primary/30 transition-all duration-500 hover:-translate-y-2">
    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-brand-primary to-brand-accent rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
      <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
    </div>
    <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4 group-hover:text-brand-primary transition-colors">
      {title}
    </h3>
    <p className="text-sm md:text-base text-gray-300 leading-relaxed">
      {description}
    </p>
  </div>
);

const MarqueeItem = ({ src, index }: { src: string; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex-shrink-0 mx-2 md:mx-4 relative group w-[20rem] h-[12rem] md:w-[28rem] md:h-[18rem]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
        w-[20rem] h-[12rem] md:w-[28rem] md:h-[18rem] rounded-lg overflow-hidden border border-gray-300 transition-all duration-500
        ${
          isHovered
            ? "opacity-100 scale-105 shadow-2xl shadow-brand-primary/20"
            : "opacity-60 grayscale"
        }
      `}
      >
        <Image
          width={448}
          height={288}
          src={src || "/placeholder.svg"}
          alt={`Portfolio project ${index + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default function HomepagePortfolioSection() {
  const topFeatures = [
    {
      icon: Sparkles,
      title: "Custom Brand Solutions",
      description:
        "Deliver tailored digital experiences that elevate your clients' brands.",
    },
    {
      icon: ImageIcon,
      title: "Creative Visual Design",
      description:
        "Craft visually stunning layouts and assets to make your agency's work stand out.",
    },
    {
      icon: Code,
      title: "Seamless Integration",
      description:
        "Integrate with popular CMS, analytics, and marketing tools for streamlined workflows.",
    },
    {
      icon: Rocket,
      title: "Rapid Project Delivery",
      description:
        "Accelerate timelines with efficient tools designed for agency-scale collaboration.",
    },
  ];

  const bottomFeatures = [
    {
      icon: Edit,
      title: "Brand Storytelling",
      description:
        "Craft compelling narratives and messaging that resonate with your clients' audiences.",
    },
    {
      icon: FileText,
      title: "Content Strategy",
      description:
        "Develop and execute content plans that drive engagement and support business goals.",
    },
    {
      icon: RefreshCw,
      title: "Campaign Management",
      description:
        "Coordinate and optimize multi-channel marketing campaigns for maximum impact.",
    },
    {
      icon: Eye,
      title: "Performance Analytics",
      description:
        "Monitor project success with real-time analytics and actionable insights.",
    },
  ];
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 md:py-20 px-4 overflow-hidden">
      {/* Complex geometric background pattern inspired by fffuel.co */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          viewBox="0 0 800 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="hexPattern"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M30 5 L50 20 L50 40 L30 55 L10 40 L10 20 Z"
                stroke="#9ef01a"
                strokeWidth="1"
                fill="none"
                opacity="0.3"
              />
            </pattern>
            <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#9ef01a" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#70e000" stopOpacity="0.4" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexPattern)" />
          <circle cx="200" cy="200" r="150" fill="url(#glowGradient)" />
          <circle cx="600" cy="600" r="200" fill="url(#glowGradient)" />
        </svg>
        <div className="absolute top-10 left-10 w-72 h-72 bg-brand-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
            Our Portfolio Projects
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Explore how we&apos;ve helped digital agencies elevate their brands,
            streamline workflows, and deliver impactful digital experiences
            through innovative design and technology.
          </p>
        </div>

        {/* Top Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
          {topFeatures.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        {/* Marquee Item size is now controlled by Tailwind classes on the MarqueeItem component */}
        {/* Marquee Section with Gradient Glows */}
        <div className="relative mb-6 md:mb-8">
          {/* First Marquee - Moving Right */}
          <div className="marquee-container mb-2">
            <div className="marquee-right flex">
              {[...portfolioImages, ...portfolioImages].map((src, index) => (
                <MarqueeItem key={`right-${index}`} src={src} index={index} />
              ))}
            </div>
          </div>

          {/* Second Marquee - Moving Left */}
          <div className="marquee-container">
            <div className="marquee-left flex">
              {[...portfolioImages, ...portfolioImages].map((src, index) => (
                <MarqueeItem key={`left-${index}`} src={src} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {bottomFeatures.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-container {
          overflow: hidden;
          white-space: nowrap;
        }

        .marquee-right {
          animation: scroll-right 30s linear infinite;
        }

        .marquee-left {
          animation: scroll-left 25s linear infinite;
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .rotating-gradient-top {
          background: conic-gradient(
            f r om 0deg,

            #9ef 0 1a,

            #70e000,
            #d9f99d,
            #004b23,
            #9ef01a
          );
          animation: rotate-gradient 8s linear infinite;
        }

        .rotating-gradient-bottom {
          background: conic-gradient(
            from 180deg,
            #70e000,
            #004b23,
            #9ef01a,
            #d9f99d,
            #70e000
          );
          animation: rotate-gradient 6s linear infinite reverse;
        }

        @keyframes rotate-gradient {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}

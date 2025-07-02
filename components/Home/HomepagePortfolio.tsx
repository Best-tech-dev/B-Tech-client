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
  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-[#9ef01a]/30 transition-all duration-300">
    <div className="w-12 h-12 bg-[#9ef01a]/10 rounded-lg flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-[#9ef01a]" />
    </div>
    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

const MarqueeItem = ({ src, index }: { src: string; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex-shrink-0 mx-4 relative group w-[28rem] h-[18rem]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
        w-[28rem] h-[18rem] rounded-lg overflow-hidden border border-gray-700 transition-all duration-500
        ${
          isHovered
            ? "opacity-100 scale-105 shadow-2xl shadow-[#9ef01a]/20"
            : "opacity-40 grayscale"
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
    <section className="bg-black py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gradient-heading mb-6">
            Our Portfolio Projects
          </h2>
          <p className="text-xl text-neutral-300 max-w-4xl mx-auto leading-relaxed">
            Explore how we&apos;ve helped digital agencies elevate their brands,
            streamline workflows, and deliver impactful digital experiences
            through innovative design and technology.
          </p>
        </div>

        {/* Top Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {topFeatures.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        {/* Marquee Item size is now controlled by Tailwind classes on the MarqueeItem component */}
        {/* Marquee Section with Gradient Glows */}
        <div className="relative mb-8">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

import React from "react";
import Link from "next/link";
import { Button } from "@/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import Image from "next/image";

// Props for text-only cards
interface TextCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  className?: string;
}

// Props for image cards
interface ImageCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  href: string;
  imagePosition?: "top" | "bottom";
  className?: string;
}

// Text-only card component (shorter height)
const TextCard: React.FC<TextCardProps> = ({
  title,
  description,
  icon,
  href,
  className = "",
}) => {
  return (
    <Link href={href} className="block group">
      <div
        className={`
        bg-gray-800/80 backdrop-blur-sm 
        border border-brand-primary/20 
        rounded-lg 
        p-8 
        min-w-[280px] w-full
        group-hover:border-brand-primary/40 group-hover:bg-gray-800/95
        transition-all duration-300 
        group-hover:transform group-hover:scale-105
        shadow-lg group-hover:shadow-xl
        cursor-pointer
        ${className}
      `}
      >
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="text-brand-primary text-2xl group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-white text-xl font-semibold mb-4 text-center group-hover:text-brand-primary transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed text-center">
          {description}
        </p>
      </div>
    </Link>
  );
};

// Image card component (taller height)
const ImageCard: React.FC<ImageCardProps> = ({
  title,
  description,
  icon,
  image,
  href,
  imagePosition = "bottom",
  className = "",
}) => {
  const textContent = (
    <div className="p-8">
      {/* Icon */}
      <div className="flex justify-center mb-4">
        <div className="text-brand-primary text-2xl group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-white text-xl font-semibold mb-4 text-center group-hover:text-brand-primary transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-300 text-sm leading-relaxed text-center">
        {description}
      </p>
    </div>
  );

  const imageElement = (
    <div className="h-48 overflow-hidden">
      <Image
        width={300}
        height={200}
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>
  );

  return (
    <Link href={href} className="block group">
      <div
        className={`
        bg-gray-800/90 backdrop-blur-sm 
        border border-brand-primary/20 
        rounded-lg 
        overflow-hidden
        min-w-[280px] w-full
        group-hover:border-brand-primary/40 group-hover:bg-gray-800/95
        transition-all duration-300 
        group-hover:transform group-hover:scale-105
        shadow-lg group-hover:shadow-xl
        cursor-pointer
        ${className}
      `}
      >
        {imagePosition === "top" ? (
          <>
            {imageElement}
            {textContent}
          </>
        ) : (
          <>
            {textContent}
            {imageElement}
          </>
        )}
      </div>
    </Link>
  );
};

// Icon components for Best Technologies Ltd services
const WebDevelopmentIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="16,18 22,12 16,6" />
    <polyline points="8,6 2,12 8,18" />
  </svg>
);

const DigitalTransformationIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="7.5,4.21 12,6.81 16.5,4.21" />
    <polyline points="7.5,19.79 7.5,14.6 3,12" />
    <polyline points="21,12 16.5,14.6 16.5,19.79" />
    <polyline points="3.27,6.96 12,12.01 20.73,6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const AIMLIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M9 12l2 2 4-4" />
    <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3" />
    <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3" />
    <path d="M12 3c0 1-1 3-3 3s-3-2-3-3 1-3 3-3 3 2 3 3" />
    <path d="M12 21c0-1 1-3 3-3s3 2 3 3-1 3-3 3-3-2-3-3" />
  </svg>
);

const MobileAppIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
);

const BrandDesignIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 19l7-7 3 3-7 7-3-3z" />
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
    <path d="M2 2l7.586 7.586" />
    <circle cx="11" cy="11" r="2" />
  </svg>
);

const DigitalMarketingIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M3 3v18h18" />
    <path d="M18.7 8a2 2 0 1 0-3.4 0 2 2 0 0 0 3.4 0Z" />
    <path d="M7 12v4" />
    <path d="M13 10v6" />
    <path d="M9 16v2" />
  </svg>
);

// Demo component showing masonry layout
const HomepageServiceCards: React.FC = () => {
  // Service images from Best Technologies Ltd
  const webDevImage = "/imgs/service-banner-04.jpg";
  const digitalTransformationImage = "/imgs/service-banner-02.jpg";
  const mobileAppImage = "/imgs/service-banner-06.jpg";
  return (
    <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 px-8 py-24 overflow-hidden">
      {/* Intricate SVG background inspired by fffuel.co */}
      <div className="absolute inset-0">
        <svg
          className="absolute inset-0 w-full h-full opacity-15"
          viewBox="0 0 800 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="diamondPattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M50 20 L80 50 L50 80 L20 50 Z"
                stroke="#9ef01a"
                strokeWidth="1"
                fill="none"
                opacity="0.3"
              />
              <circle cx="50" cy="50" r="5" fill="#70e000" opacity="0.4" />
            </pattern>
            <radialGradient id="serviceGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#9ef01a" stopOpacity="0.4" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#diamondPattern)" />
          <circle cx="150" cy="150" r="120" fill="url(#serviceGlow)" />
          <circle cx="650" cy="350" r="150" fill="url(#serviceGlow)" />
          <circle cx="300" cy="650" r="180" fill="url(#serviceGlow)" />
        </svg>
        <div className="absolute top-10 left-10 w-80 h-80 bg-brand-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-brand-secondary/20 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          What We Offer
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl text-center mx-auto mb-16">
          Empowering businesses with cutting-edge digital solutions and
          AI-driven transformation for sustainable growth and competitive
          advantage. Each card below is clickable—select any service to find out
          more about how we can help.
        </p>

        {/* Manual masonry layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-6xl mx-auto">
          {/* Column 1 */}
          <div className="space-y-8 w-full max-w-sm">
            <ImageCard
              title="Web Development"
              description="Professional websites and custom solutions with responsive design and optimal performance for exceptional user experiences."
              icon={<WebDevelopmentIcon />}
              image={webDevImage}
              href="/services/web-development"
              imagePosition="top"
            />

            <TextCard
              title="Digital Marketing"
              description="Comprehensive strategies including SEO, social media management, and multi-platform advertising to amplify your online presence."
              icon={<DigitalMarketingIcon />}
              href="/services/digital-marketing"
            />
          </div>

          {/* Column 2 */}
          <div className="space-y-8 w-full max-w-sm">
            <TextCard
              title="AI & Machine Learning"
              description="Harness the power of AI/ML for smarter decision-making, personalized experiences, and sustainable digital transformation."
              icon={<AIMLIcon />}
              href="/services/ai-machine-learning"
            />

            <ImageCard
              title="Digital Transformation"
              description="Strategic technology implementation covering digital maturity assessment, cloud migration, and IoT integration for modern operations."
              icon={<DigitalTransformationIcon />}
              image={digitalTransformationImage}
              href="/services/digital-transformation"
              imagePosition="bottom"
            />
          </div>

          {/* Column 3 */}
          <div className="space-y-8 w-full max-w-sm">
            <ImageCard
              title="Mobile App Development"
              description="Modern iOS and Android applications using Flutter and React Native with exceptional UI/UX design and optimal performance."
              icon={<MobileAppIcon />}
              image={mobileAppImage}
              href="/services/mobile-app-development"
              imagePosition="top"
            />

            <TextCard
              title="Brand & Motion Design"
              description="Compelling brand identities with logo design, visual development, motion graphics, and 2D/3D animation for digital platforms."
              icon={<BrandDesignIcon />}
              href="/services/brand-motion-design"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-16">
          <Button
            asChild
            className="group bg-gradient-to-r from-brand-primary to-brand-accent hover:from-brand-accent hover:to-brand-primary text-white font-semibold px-8 py-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3 shadow-lg hover:shadow-brand-primary/25"
          >
            <Link href="/services">
              View All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </Button>

          <Button
            asChild
            className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-blue-600 hover:to-purple-600 text-white font-semibold px-8 py-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3 shadow-lg hover:shadow-purple-500/25"
          >
            <Link href="/trainings">
              View Our Trainings
              <BookOpen className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

// Export both components for individual use
export { TextCard, ImageCard, HomepageServiceCards as default };

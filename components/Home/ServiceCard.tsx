import React from "react";

import Image from "next/image";

// Props for text-only cards
interface TextCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

// Props for image cards
interface ImageCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  imagePosition?: "top" | "bottom";
  className?: string;
}

// Text-only card component (shorter height)
const TextCard: React.FC<TextCardProps> = ({
  title,
  description,
  icon,
  className = "",
}) => {
  return (
    <div
      className={`
      bg-gradient-to-br from-slate-900/50 to-brand-primary/30 
      backdrop-blur-sm 
      border border-brand-primary/20 
      rounded-lg 
      p-8 
      min-w-[280px] w-full
      hover:border-brand-primary/40 
      transition-all duration-300 
      hover:transform hover:scale-105
      ${className}
    `}
    >
      {/* Icon */}
      <div className="flex justify-center mb-4">
        <div className="text-brand-primary text-2xl">{icon}</div>
      </div>

      {/* Title */}
      <h3 className="text-white text-xl font-semibold mb-4 text-center">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed text-center">
        {description}
      </p>
    </div>
  );
};

// Image card component (taller height)
const ImageCard: React.FC<ImageCardProps> = ({
  title,
  description,
  icon,
  image,
  imagePosition = "bottom",
  className = "",
}) => {
  const textContent = (
    <div className="p-8">
      {/* Icon */}
      <div className="flex justify-center mb-4">
        <div className="text-brand-primary text-2xl">{icon}</div>
      </div>

      {/* Title */}
      <h3 className="text-white text-xl font-semibold mb-4 text-center">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed text-center">
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
        className="w-full h-full object-cover"
      />
    </div>
  );

  return (
    <div
      className={`
      bg-gradient-to-br from-slate-900/50 to-slate-800/30 
      backdrop-blur-sm 
      border border-brand-primary/20 
      rounded-lg 
      overflow-hidden
      min-w-[280px] w-full
      hover:border-brand-primary/40 
      transition-all duration-300 
      hover:transform hover:scale-105
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
  );
};

// Icon components
const EdgeIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 2L2 7v10l10 5 10-5V7l-10-5z" />
    <path d="M12 12l0-10" />
    <path d="m8 6 4-4 4 4" />
  </svg>
);

const DesignIcon = () => (
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

const PerformanceIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const SafetyIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const SEOIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    <path d="m9 14 2 2 4-4" />
  </svg>
);

const ScalabilityIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" />
  </svg>
);

// Demo component showing masonry layout
const HomepageServiceCards: React.FC = () => {
  // Sample images
  const edgeImage = "/imgs/service-01.png";

  const designImage = "/imgs/service-02.jpg";

  const performanceImage =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Cdefs%3E%3ClinearGradient id='tech' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%2300bcd4'/%3E%3Cstop offset='100%25' stop-color='%23006064'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='200' fill='%23001a1f'/%3E%3Crect x='50' y='60' width='200' height='80' rx='10' fill='url(%23tech)' opacity='0.8'/%3E%3Crect x='70' y='80' width='160' height='5' fill='%2300bcd4'/%3E%3Crect x='70' y='95' width='160' height='5' fill='%2300bcd4'/%3E%3Crect x='70' y='110' width='160' height='5' fill='%2300bcd4'/%3E%3Ccircle cx='80' cy='70' r='5' fill='%2300e5ff'/%3E%3C/svg%3E";

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-8 py-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          What We Offer
        </h1>

        {/* Manual masonry layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-6xl mx-auto">
          {/* Column 1 */}
          <div className="space-y-8 w-full max-w-sm">
            <ImageCard
              title="Edge"
              description="Globally distributed servers to reduce load time and increase reliability."
              icon={<EdgeIcon />}
              image={edgeImage}
              imagePosition="top"
            />

            <TextCard
              title="SEO"
              description="Be found by those who look for you and increase the visibility of your business."
              icon={<SEOIcon />}
            />
          </div>

          {/* Column 2 */}
          <div className="space-y-8 w-full max-w-sm">
            <TextCard
              title="Safety"
              description="Robustness in protecting your business and those who trust it is a priority."
              icon={<SafetyIcon />}
            />

            <ImageCard
              title="Design"
              description="An impactful first impression and the materialization of the brand's identity."
              icon={<DesignIcon />}
              image={designImage}
              imagePosition="bottom"
            />
          </div>

          {/* Column 3 */}
          <div className="space-y-8 w-full max-w-sm">
            <ImageCard
              title="Performance"
              description="It delivers a superior user experience and a good achieving business goals."
              icon={<PerformanceIcon />}
              image={performanceImage}
              imagePosition="top"
            />

            <TextCard
              title="Scalability"
              description="Robust infrastructure prepared to support millions of accesses."
              icon={<ScalabilityIcon />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Export both components for individual use
export { TextCard, ImageCard, HomepageServiceCards as default };

"use client";
/**
 * @file ServiceCard.tsx
 * @description A React functional component that renders a service card with an animated hover effect.
 * The card includes an image, title, and truncated description, and links to a specified URL.
 * The hover effect animates a circular background expansion from the mouse position.
 *
 * @module ServiceCard
 */

import React from "react";

/**
 * Props for the `ServiceCard` component.
 *
 * @typedef {Object} ServiceCardProps
 * @property {string} title - The title of the service.
 * @property {string} description - A detailed description of the service.
 * @property {string} imageSrc - The source URL of the service image.
 * @property {string} href - The URL to navigate to when the card is clicked.
 */

/**
 * A React functional component that renders a service card with an animated hover effect.
 *
 * @component
 * @param {ServiceCardProps} props - The props for the component.
 * @param {string} props.title - The title of the service.
 * @param {string} props.description - A detailed description of the service.
 * @param {string} props.imageSrc - The source URL of the service image.
 * @param {string} props.href - The URL to navigate to when the card is clicked.
 *
 * @returns {JSX.Element} The rendered service card component.
 *
 * @example
 * <ServiceCard
 *   title="Web Development"
 *   description="We provide cutting-edge web development services to build responsive and scalable websites."
 *   imageSrc="/images/web-development.jpg"
 *   href="/services/web-development"
 * />
 *
 * @remarks
 * - The component uses `framer-motion` for the hover animation.
 * - The `truncateText` utility is used to limit the description to 320 characters.
 * - The `Image` component from `next/image` is used for optimized image rendering.
 * - The hover effect is achieved by animating a circular background expansion from the mouse position.
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import truncateText from "@/lib/TruncateText";

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imageSrc,
  href,
}) => {
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoverPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link href={href} className="block">
      <div
        className="relative p-2 md:p-4 lg:p-6 bg-[#111827] text-white rounded-lg border-4 border-[#2bcd15] overflow-hidden cursor-pointer transition-all group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Animated Background */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 bg-[#7ca412] z-0"
              initial={{
                clipPath: `circle(0px at ${hoverPosition.x}px ${hoverPosition.y}px)`,
              }}
              animate={{
                clipPath: `circle(120% at 50% 50%)`,
                transition: { duration: 0.5, ease: "easeOut" },
              }}
              exit={{
                clipPath: `circle(0px at ${hoverPosition.x}px ${hoverPosition.y}px)`,
                transition: { duration: 0.4, ease: "easeIn" },
              }}
            />
          )}
        </AnimatePresence>

        {/* Card Content */}
        <div className="relative z-1">
          {/* Service Image */}
          <div className="w-full h-36 rounded-lg overflow-hidden">
            <Image
              src={imageSrc}
              alt={title}
              width={400}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Service Title */}
          <h3 className="mt-4 text-xl font-bold text-[#2bcd15] transition-colors duration-300 group-hover:text-white">
            {title}
          </h3>

          {/* Service Description (Truncated to 320 Characters) */}
          <p className="mt-2 text-sm break-words">
            {truncateText(description, 320)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;

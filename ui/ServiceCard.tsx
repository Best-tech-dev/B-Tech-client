"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import truncateText from "@/lib/TruncateText";

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
}

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
        className="relative p-6 bg-[#111827] text-white rounded-lg border-4 border-[#2bcd15] overflow-hidden cursor-pointer transition-all group"
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
        <div className="relative z-10">
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

"use client";

import { motion } from "framer-motion";
import React from "react";

interface BlobProps {
  className?: string;
  color?: string;
  style?: React.CSSProperties;
  duration?: number;
  delay?: number;
}

const Blob: React.FC<BlobProps> = ({
  className = "",
  color = "#71990b",
  style,
  duration = 10,
  delay = 0,
}) => {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute z-0 ${className}`}
      style={style}
      animate={{
        y: [0, -20, 0, 20, 0],
        x: [0, 10, 0, -10, 0],
        rotate: [0, 5, 0, -5, 0],
      }}
      transition={{
        duration,
        ease: "easeInOut",
        repeat: Infinity,
        delay,
      }}
    >
      <path
        fill={color}
        d="M48.6,-63.5C62.6,-53.5,73.7,-37.2,73.2,-22.4C72.8,-7.5,60.8,6,51.2,17.5C41.7,29.1,34.6,38.8,25.2,47.6C15.9,56.4,4.2,64.3,-10.5,67.1C-25.1,69.8,-42.5,67.3,-55.4,57.3C-68.2,47.3,-76.5,29.9,-75.3,14.1C-74.2,-1.7,-63.5,-16,-52.2,-28.1C-40.9,-40.2,-28.9,-50,-15.2,-60.6C-1.5,-71.1,13.9,-82.5,28.7,-82.4C43.4,-82.3,58.6,-70.8,48.6,-63.5Z"
        transform="translate(100 100)"
      />
    </motion.svg>
  );
};

export default Blob;

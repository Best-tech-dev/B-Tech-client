"use client";

import { motion } from "framer-motion";

type SlideProps = {
  slide: {
    title: string;
    subtitle: string;
    description: string;
    buttonText: string;
    bgImage: string;
    animation: "inward" | "outward";
  };
  isActive: boolean;
};

const Slide: React.FC<SlideProps> = ({ slide, isActive }) => {
  return (
    <div
      className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ${
        isActive ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
      style={{
        backgroundImage: `url(${slide.bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <motion.p
          className="text-green-400 text-lg font-semibold"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {slide.subtitle}
        </motion.p>

        <motion.h1
          className="text-4xl md:text-6xl font-bold mt-2"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {slide.title}
        </motion.h1>

        <motion.p
          className="max-w-2xl mt-4 text-lg"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {slide.description}
        </motion.p>

        <motion.button
          className="mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 transition text-white rounded-lg shadow-lg"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {slide.buttonText}
        </motion.button>
      </div>
    </div>
  );
};

export default Slide;

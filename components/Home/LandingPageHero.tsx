"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

import { slides } from "@/constants/landingPageHeroSlides"; // Import slides data

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const LandingPageHero = () => {
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);

  const onAutoplayTimeLeft = (s: unknown, time: number, progress: number) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", `${1 - progress}`);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <div className="relative w-full h-full overflow-y-hidden">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="w-full 2xl:max-h-[600px] h-screen"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative flex flex-col justify-center items-center text-center text-white w-full h-full"
              style={{
                backgroundImage: `url(${slide.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/10"></div>

              {/* Text Content */}
              <div className="relative z-10 max-w-2xl px-6 text-center">
                <motion.p
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                  className="text-base sm:text-lg md:text-xl mt-2 text-brand-primary italic"
                >
                  {slide.subtitle}
                </motion.p>

                <motion.h2
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-6"
                >
                  {slide.title}
                </motion.h2>

                <motion.p
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.4 }}
                  className="mt-4 font-medium text-sm sm:text-base md:text-lg"
                >
                  {slide.description}
                </motion.p>

                <motion.button
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.6 }}
                  className="mt-10 sm:mt-14 md:mt-20 px-5 sm:px-6 py-2 sm:py-3 text-[10px] sm:text-xs uppercase border-2 border-brand-primary cursor-pointer bg-brand-secondary rounded-full text-white font-semibold hover:bg-primary-two transition"
                  onClick={() => alert("Button clicked!")}
                >
                  {slide.buttonText}
                </motion.button>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Progress Indicator Positioned at Bottom-Right */}
        <div className="absolute bottom-5 right-5 bg-black p-2 rounded-full z-50">
          <svg viewBox="0 0 48 48" ref={progressCircle} className="w-12 h-12">
            <circle
              cx="24"
              cy="24"
              r="20"
              className="stroke-white stroke-[4] opacity-40"
            />
            <circle
              cx="24"
              cy="24"
              r="20"
              className="stroke-brand-primary stroke-[4] transition-all duration-100"
              style={{
                strokeDasharray: "126",
                strokeDashoffset: `calc(126 * var(--progress, 1))`,
              }}
            />
          </svg>
          <span
            ref={progressContent}
            className="text-white text-sm absolute inset-0 flex items-center justify-center"
          ></span>
        </div>
      </Swiper>
    </div>
  );
};

export default LandingPageHero;

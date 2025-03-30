"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

import { slides } from "@/constants/landingPageHeroSlides"; // Import your slides data

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
    <div className="relative w-full h-screen">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="w-full h-screen"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative flex flex-col justify-center items-center text-center text-white w-full h-screen"
              style={{
                backgroundImage: `url(${slide.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>
              {/* Text Content */}
              {/* <div className="relative z-10 max-w-2xl px-6">
                <h2 className="text-5xl font-bold text-primary-one">
                  {slide.title}
                </h2>
                <p className="text-xl mt-2">{slide.subtitle}</p>
                <p className="mt-4">{slide.description}</p>
                <button className="mt-6 px-6 py-3 bg-purple-600 rounded text-white font-semibold hover:bg-purple-700 transition">
                  {slide.buttonText}
                </button>
              </div> */}
              <div className="relative z-10 max-w-2xl px-6 text-center">
                <motion.h2
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-5xl font-bold"
                >
                  {slide.title}
                </motion.h2>

                <motion.p
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                  className="text-xl mt-2"
                >
                  {slide.subtitle}
                </motion.p>

                <motion.p
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.4 }}
                  className="mt-4"
                >
                  {slide.description}
                </motion.p>

                <motion.button
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.6 }}
                  className="mt-6 px-6 py-3 bg-primary-one rounded text-white font-semibold hover:bg-primary-two transition"
                >
                  {slide.buttonText}
                </motion.button>
              </div>
              ;
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
              className="stroke-purple-500 stroke-[4] transition-all duration-100"
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

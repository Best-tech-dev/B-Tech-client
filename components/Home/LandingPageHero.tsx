"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    title: "Amplify Your Digital Presence",
    subtitle: "Business Transformation",
    description:
      "We provide enterprises with innovative software solutions and digital marketing strategies that drive exponential growth.",
    buttonText: "Reach Out",
    bgImage: "/sliders/slider-01.jpg",
  },
  {
    id: 2,
    title: "Empower Your Business with Tech",
    subtitle: "Innovative Solutions",
    description:
      "Leverage cutting-edge technology to enhance productivity and achieve business goals.",
    buttonText: "Get Started",
    bgImage: "/sliders/slider-02.jpg",
  },
  {
    id: 3,
    title: "Future-Ready Digital Strategies",
    subtitle: "Smart Growth",
    description:
      "Stay ahead with data-driven insights and seamless digital transformation.",
    buttonText: "Explore Now",
    bgImage: "/sliders/slider-03.jpg",
  },
];

const LandingPageHero = () => {
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);

  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
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
              <div className="relative z-10 max-w-2xl px-6">
                <h2 className="text-5xl font-bold">{slide.title}</h2>
                <p className="text-xl mt-2">{slide.subtitle}</p>
                <p className="mt-4">{slide.description}</p>
                <button className="mt-6 px-6 py-3 bg-purple-600 rounded text-white font-semibold hover:bg-purple-700 transition">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* Progress Indicator Positioned at Bottom-Right */} // This was made
        visible by setting z-index
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

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    title: "Amplify Your Digital Presence",
    subtitle: "Businesses Transformation",
    description:
      "We Provide Enterprises With Innovative Software Solutions And Digital Marketing Transformation Strategies That Drive Exponential Growth.",
    buttonText: "Reach Out",
    bgImage: "/path-to-image-1.jpg",
  },
  {
    id: 2,
    title: "Empower Your Business with Tech",
    subtitle: "Innovative Solutions",
    description:
      "Leverage cutting-edge technology to enhance productivity and achieve business goals.",
    buttonText: "Get Started",
    bgImage: "/path-to-image-2.jpg",
  },
  {
    id: 3,
    title: "Future-Ready Digital Strategies",
    subtitle: "Smart Growth",
    description:
      "Stay ahead with data-driven insights and seamless digital transformation.",
    buttonText: "Explore Now",
    bgImage: "/path-to-image-3.jpg",
  },
];

const LandingPageHero = () => {
  return (
    <div className="relative w-full h-screen">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-screen flex flex-col justify-center items-center text-center text-white"
              style={{
                backgroundImage: `url(${slide.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <h2 className="text-4xl font-bold z-10">{slide.title}</h2>
              <p className="text-lg z-10">{slide.subtitle}</p>
              <p className="max-w-lg mt-4 z-10">{slide.description}</p>
              <button className="mt-6 px-6 py-2 bg-purple-600 rounded text-white font-semibold z-10 hover:bg-purple-700 transition">
                {slide.buttonText}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LandingPageHero;

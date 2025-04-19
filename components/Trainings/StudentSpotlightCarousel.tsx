"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import { testimonials } from "@/constants/testimonials";
import { Button } from "@/ui/Bootcamp/button";
import useScrollToAnchor from "@/hooks/useScrollToAnchor";

export default function StudentSpotlightCarousel() {
  useScrollToAnchor(80);

  return (
    <section id="student-spotlight" className="w-full bg-black text-white py-8">
      <div className="relative max-w-6xl mx-auto group">
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          allowTouchMove
          className="h-[400px] relative"
        >
          {testimonials.map((student) => (
            <SwiperSlide key={student.id}>
              <div className="relative w-full h-[400px] flex items-end justify-center overflow-hidden">
                {/* Image Wrapper */}
                <div className="absolute inset-0 z-0 flex items-center justify-center">
                  <div className="relative w-full max-w-4xl h-full">
                    <Image
                      src={student.image || "/images/default-student.jpg"}
                      alt={student.name}
                      fill
                      className="object-cover object-center"
                      priority
                    />
                  </div>

                  {/* Edge Shadows */}
                  <div className="absolute inset-0 z-10 pointer-events-none">
                    <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent" />
                    <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent" />
                    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />
                  </div>
                </div>

                {/* Foreground Text Content */}
                <div className="relative z-20 text-center px-4 pb-6 max-w-2xl">
                  <p className="text-xs text-gray-400 mb-1">
                    {student.name} <span className="mx-1">|</span>{" "}
                    {student.program}
                  </p>
                  <p className="text-sm italic mb-3">“{student.quote}”</p>
                  {student.linkedin && (
                    <a
                      href={student.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="secondary"
                        size="sm"
                        className="rounded-full px-4"
                      >
                        View LinkedIn
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Swiper Built-in Navigation Buttons */}
          <div className="swiper-button-prev text-white !left-4 !top-1/2 -translate-y-1/2" />
          <div className="swiper-button-next text-white !right-4 !top-1/2 -translate-y-1/2" />
        </Swiper>
      </div>
    </section>
  );
}

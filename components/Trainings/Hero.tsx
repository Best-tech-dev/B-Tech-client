"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import CloudNetwork from "@/svgs/CloudNetwork.svg";
import StarGlow from "@/svgs/StarGlow.svg";
import Sun from "@/svgs/Sun.svg";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-[#161a25] text-white overflow-hidden pt-28 pb-20 lg:pb-36 h-screen max-h-[780px] ">
      {/* Glowing Sun SVG */}
      <Sun className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] opacity-30 blur-3xl z-0 animate-pulse" />

      <Sun className="absolute top-[-10px] left-[10px] w-[300px] h-[300px] opacity-30 blur-3xl z-0 animate-pulse" />

      {/* For the right side of the Hero section */}
      <Sun className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] opacity-30 blur-3xl z-0 animate-pulse" />

      <Sun className="absolute bottom-[-10px] right-[10px] w-[300px] h-[300px] opacity-30 blur-3xl z-0 animate-pulse" />

      {/* Static Stars */}
      <StarGlow className="absolute top-20 right-10 w-2 h-2 opacity-50 blur-sm z-0 animate-pulse" />
      <StarGlow className="absolute top-40 right-40 w-1.5 h-1.5 opacity-40 blur-sm z-0 animate-pulse" />
      <StarGlow className="absolute top-60 left-60 w-2 h-2 opacity-60 blur-sm z-0 animate-pulse" />

      {/* Cloud-like Data Animations */}
      <motion.div
        className="absolute top-10 left-[-150px] z-0"
        animate={{ x: "150%" }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <CloudNetwork className="w-[180px] h-[100px] opacity-30" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-[-200px] z-0"
        animate={{ x: "160%" }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <CloudNetwork className="w-180 h-[120px] opacity-25" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
        {/* Text Section */}
        <div className="max-w-xl space-y-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Learn Tech. Get Certified. Launch Your Career.
          </h1>
          <p className="text-base sm:text-lg opacity-80">
            From Bootcamps to Internships and Online Courses, our trainings
            equip you with real-world skills for in-demand tech careers.
          </p>

          {/* Button Section */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start items-center mt-8 px-4 sm:px-0">
            <Link
              href="/trainings/register"
              className="group bg-gradient-to-r from-brand-primary to-brand-accent hover:from-brand-accent hover:to-brand-primary font-semibold px-6 sm:px-10 py-3 sm:py-[12px] text-sm sm:text-base rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 sm:gap-3 shadow-lg hover:shadow-brand-primary/25 focus:outline-none focus:ring-2 focus:ring-brand-primary w-full sm:w-auto justify-center"
            >
              Register Now
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>

            <Link
              href="/trainings/continue"
              className="group border-2 border-brand-primary/50 hover:border-brand-primary text-white hover:text-white font-semibold px-6 sm:px-10 py-3 sm:py-[10px] text-sm sm:text-base rounded-xl transition-all duration-300 hover:bg-brand-primary/5 flex items-center justify-center w-full sm:w-auto"
            >
              Already Started? Continue
            </Link>
          </div>
        </div>

        {/* Illustration with animated SVG glows */}
        <div className="relative w-[280px] sm:w-[320px] md:w-[400px] lg:w-[480px]">
          <Image
            src="/imgs/mushroom3d.jpg"
            width={380}
            height={380}
            priority
            alt="Hero Illustration"
            className="rounded-full opacity-40 shadow-2xl shadow-brand-primary-accent transition-transform duration-300 transform hover:scale-105"
          />

          {/* Corner SVG Glows */}
          <motion.div
            className="absolute top-0 left-0 w-8 sm:w-10 md:w-14"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <StarGlow />
          </motion.div>
          <motion.div
            className="absolute top-0 right-0 w-6 sm:w-8 md:w-12"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <StarGlow />
          </motion.div>
          <motion.div
            className="absolute bottom-0 left-0 w-6 sm:w-8 md:w-12"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
          >
            <StarGlow />
          </motion.div>
          <motion.div
            className="absolute bottom-0 right-0 w-8 sm:w-10 md:w-14"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
          >
            <StarGlow />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

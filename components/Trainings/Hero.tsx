"use client";

import Image from "next/image";
import { Button } from "@/ui/Bootcamp/button";
import { motion } from "framer-motion";

import CloudNetwork from "@/svgs/CloudNetwork.svg";
import StarGlow from "@/svgs/StarGlow.svg";
import Sun from "@/svgs/Sun.svg";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-[#161a25] text-white overflow-hidden pt-28 pb-20 lg:pb-36 h-screen">
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
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Learn Tech. Get Certified. Launch Your Career.
          </h1>
          <p className="text-lg opacity-80">
            From Bootcamps to Internships and Online Courses, our trainings
            equip you with real-world skills for in-demand tech careers.
          </p>
          <Button
            asChild
            className="bg-[#2bcd15] hover:bg-[#25a912] text-white text-lg px-6 py-3 rounded-xl"
          >
            <Link href="/trainings/register">Register Now</Link>
          </Button>
        </div>

        {/* Illustration with animated SVG glows */}
        <div className="relative w-[320px] md:w-[400px] lg:w-[480px]">
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
            className="absolute top-0 left-0 w-10 md:w-14"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <StarGlow />
          </motion.div>
          <motion.div
            className="absolute top-0 right-0 w-8 md:w-12"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <StarGlow />
          </motion.div>
          <motion.div
            className="absolute bottom-0 left-0 w-8 md:w-12"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
          >
            <StarGlow />
          </motion.div>
          <motion.div
            className="absolute bottom-0 right-0 w-10 md:w-14"
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

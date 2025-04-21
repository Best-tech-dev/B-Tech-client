"use client";

import { Button } from "@/ui/Bootcamp/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0e1118] text-white py-20 px-6 md:px-16">
      {/* Background Blobs */}
      <motion.div
        className="absolute top-0 left-0 w-40 h-40 bg-[#71990b] opacity-30 rounded-full blur-2xl"
        animate={{ x: [0, 50, -30, 0], y: [0, -20, 20, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-green-900 opacity-20 rounded-full blur-3xl"
        animate={{ x: [0, -40, 30, 0], y: [0, 30, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-28 h-28 bg-green-700 opacity-20 rounded-full blur-xl"
        animate={{ x: [0, -20, 20, 0], y: [0, -20, 20, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
      />

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-2xl md:text-5xl font-bold mb-6 leading-tight">
          <span className="text-white">Transform</span>{" "}
          <span className="text-white">Your Future</span>
          <br />
          <span className="text-[#a3cd39]">with Our Tech Bootcamp</span>
        </h1>
        <p className="text-sm md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Accelerate your tech career in just 12 weeks. Master in-demand skills
          with industry experts and join our network of successful graduates
          working at top tech companies.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            asChild
            className="bg-[#a3cd39] text-black hover:bg-[#c7f552] px-6 py-3 font-semibold"
          >
            <Link href="/trainings/register">Apply Now</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-black px-6 py-3"
          >
            <Link href="#explore-programs">Explore Programs</Link>
          </Button>
        </div>

        <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-3 text-gray-400 text-sm">
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className="w-6 h-6 flex items-center justify-center rounded-full bg-[#2e3340] -ms-4 border border-[#a4cd39]"
              >
                {num}
              </div>
            ))}
          </div>
          <span>
            Joined by <span className="text-[#a3cd39] font-semibold">500+</span>{" "}
            students this year
          </span>
        </div>
      </div>
    </section>
  );
}

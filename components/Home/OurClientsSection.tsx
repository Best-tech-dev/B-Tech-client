"use client";

import ClientLogoScroller from "@/lib/ClientLogoScroller";
import { motion } from "framer-motion";
import Image from "next/image";

const OurClientsSection: React.FC = () => {
  return (
    <>
      <div className="hero px-4 sm:px-10 md:px-20 lg:px-40 py-10 bg-brand-secondary">
        <div className="hero-content justify-between px-0 flex flex-col lg:flex-row">
          <div className="w-full lg:w-3/5 text-white">
            <h3 className="text-xl sm:text-4xl md:text-5xl font-bold text-brand-primary-accent">
              Our Clients
            </h3>
            <p className="text-sm md:text-base py-6 text-brand-primary">
              We take pride in partnering with organisations driving industry
              innovation. Our diverse portfolio spans from startups to
              enterprises and government agencies across multiple sectors.
              Beyond technical expertise, clients trust us for our deep
              understanding of business challenges, and commitment to delivering
              transformative IT solutions that drive real growth.
            </p>
          </div>

          <div className="w-full lg:w-1/3 mt-16 md:mt-36 lg:mt-16 flex justify-center lg:justify-start items-center relative">
            {/* Infinite Rotating Image */}
            <motion.div
              className="absolute -top-6 sm:-top-12 right-0 sm:-right-16 w-full h-full flex justify-center items-center"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            >
              <Image
                src="/imgs/animated-engine.png"
                alt="Rotating Engine"
                width={100}
                height={100}
                className="opacity-50 w-[100px] sm:w-[100px] md:w-[150px]"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Client Logo Scroller */}
      <div className="overflow-hidden py-4 bg-white">
        <ClientLogoScroller />
      </div>
    </>
  );
};

export default OurClientsSection;

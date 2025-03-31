"use client";

import ClientLogoScroller from "@/lib/ClientLogoScroller";
import { motion } from "framer-motion";
import Image from "next/image";

const OurClientsSection: React.FC = () => {
  return (
    <>
      <div className="hero px-40 py-10 bg-[#161a25]">
        <div className="hero-content justify-between px-0 flex-col lg:flex-row">
          <div className="w-3/5 text-white">
            <h3 className="text-5xl font-bold text-[#2bcd15]">Our Clients</h3>
            <p className="py-6 text-[#a4cd39]">
              We take pride in partnering with organisations driving industry
              innovation. Our diverse portfolio spans from startups to
              enterprises and government agencies across multiple sectors.
              Beyond technical expertise, clients trust us for our deep
              understanding of business challenges, and commitment to delivering
              transformative IT solutions that drive real growth.
            </p>
          </div>

          <div className="w-1/3 ms-6 flex justify-start items-center relative">
            {/* Infinite Rotating Image */}
            <motion.div
              className="absolute -top-12 -right-28 w-full h-full flex justify-center items-center"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            >
              <Image
                src="/imgs/animated-engine.png"
                alt="Rotating Engine"
                width={180}
                height={180}
                className="opacity-50"
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

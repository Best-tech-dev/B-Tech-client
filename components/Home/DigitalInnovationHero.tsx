"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import ClientStats from "@/lib/ClientStats";

const DigitalInnovationHero: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-sm sm:text-md md:text-lg text-brand-primary italic text-left font-medium">
        Digital Innovation Through Technology Excellence.
      </h2>
      <h3 className="text-2xl sm:text-4xl md:text-[54px] mt-2 text-left text-black font-bold max-w-4xl">
        We&apos;re more than just a technology partner &ndash; we&apos;re your
        catalyst for digital transformation.
      </h3>
      <div className="hero bg-white">
        <div className="hero-content justify-between px-0 flex flex-col lg:flex-row">
          <div className="w-full lg:w-3/5 text-black text-sm">
            <p className="pb-4 lg:py-6 md:text-base">
              With a foundation built on technical excellence and customer
              satisfaction, Best Technologies Limited is at the forefront of
              digital innovation, helping businesses thrive in the digital age.
              We combine our expertise with industry best practices to deliver
              solutions that drive real business value.
            </p>
            <p className="md:text-base">
              Our approach is rooted in understanding your unique challenges and
              opportunities, ensuring that every solution we provide is aligned
              with your strategic objectives.
            </p>
          </div>

          <div className="w-full lg:w-1/3 mt-6 lg:mt-0 flex justify-center lg:justify-start items-center relative">
            <Image
              src="/imgs/digital-innovation-hero.png"
              alt="Digital Innovation Hero image"
              width={500}
              height={250}
              className="w-full max-w-[500px] h-auto"
              style={{ objectFit: "contain" }}
            />

            {/* Infinite Rotating Image */}
            <motion.div
              className="absolute sm:-top-2/6 -top-2/6 -right-4/12 sm:-right-4/12 w-full h-full flex justify-center items-center"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            >
              <Image
                src="/imgs/animated-engine.png"
                alt="Rotating Engine"
                width={40}
                height={40}
                className="w-[30px] sm:w-[50px]"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Client Stats Section */}
      <div className="w-full h-auto bg-red-300">
        <ClientStats />
      </div>
    </div>
  );
};

export default DigitalInnovationHero;

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import ClientStats from "@/lib/ClientStats";

const DigitalInnovationHero: React.FC = () => {
  return (
    <>
      <div className="hero bg-white">
        <div className="hero-content justify-between px-0 flex-col lg:flex-row">
          <div className="w-3/5 text-black">
            <p className="py-6">
              With a foundation built on technical excellence and customer
              satisfaction, Best Technologies Limited is at the forefront of
              digital innovation, helping businesses thrive in the digital age.
              We combine our expertise with industry best practices to deliver
              solutions that drive real business value.
            </p>
            <p>
              Our approach is rooted in understanding your unique challenges and
              opportunities, ensuring that every solution we provide is aligned
              with your strategic objectives.
            </p>
          </div>

          <div className="w-1/3 ms-6 flex justify-start items-center relative">
            <Image
              src="/imgs/digital-innovation-hero.png"
              alt="Digital Innovation Hero image"
              width={500}
              height={250}
              className="w-[500px] h-auto"
              style={{ objectFit: "contain" }}
            />

            {/* Infinite Rotating Image */}
            <motion.div
              className="absolute -top-12 -right-28 w-full h-full flex justify-center items-center"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            >
              <Image
                src="/imgs/animated-engine.png"
                alt="Rotating Engine"
                width={50}
                height={50}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Client Stats Section */}
      <div className="w-full h-auto bg-red-300">
        <ClientStats />
      </div>
    </>
  );
};

export default DigitalInnovationHero;

"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import StatsCounter from "@/lib/StatsCounter"; // Importing the StatsCounter component

// const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let start = 0;
//     const duration = 2000; // Animation time in ms
//     const stepTime = Math.abs(Math.floor(duration / value));

//     const timer = setInterval(() => {
//       start += 1;
//       setCount(start);
//       if (start === value) clearInterval(timer);
//     }, stepTime);

//     return () => clearInterval(timer);
//   }, [value]);

//   return (
//     <motion.span
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       className="text-5xl font-bold"
//     >
//       {count}
//       {suffix}
//     </motion.span>
//   );
// };

function ClientStats() {
  return (
    <div className="bg-white w-full text-black mt-10">
      <div className="flex flex-col w-full">
        {/* First Row */}
        <div className="flex w-full justify-between text-center">
          <div className="flex flex-col items-center w-1/2">
            <StatsCounter
              value={75}
              suffix="+"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            />
            <p className="text-sm md:text-md lg:text-lg">Happy Clients</p>
          </div>
          <div className="flex flex-col items-center w-1/2">
            <StatsCounter
              value={99}
              suffix="%"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            />
            <p className="text-sm md:text-md lg:text-lg">Client Retention</p>
          </div>
        </div>

        {/* Divider between first and second row */}
        <div className="flex w-full justify-center">
          <div className="divider divider-neutral w-full" />
        </div>

        {/* Second Row */}
        <div className="flex w-full justify-between text-center mt-4">
          <div className="flex flex-col items-center w-1/2">
            <StatsCounter
              value={150}
              suffix="+"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            />
            <p className="text-sm md:text-md lg:text-lg">Projects Delivered</p>
          </div>
          <div className="flex flex-col items-center w-1/2">
            <StatsCounter
              value={10}
              suffix="+"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            />
            <p className="text-sm md:text-md lg:text-lg">
              Experienced Team Members
            </p>
          </div>
        </div>

        {/* Divider after the second row */}
        <div className="flex w-full justify-center">
          <div className="divider divider-neutral w-full" />
        </div>
      </div>
    </div>
  );
}

export default ClientStats;

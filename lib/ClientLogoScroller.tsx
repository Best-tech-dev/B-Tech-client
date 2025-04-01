"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { CLIENTS } from "@/constants/clients";

const ClientLogoScroller: React.FC = () => {
  return (
    <div className="overflow-hidden py-5 bg-white relative">
      <div className="flex w-full items-center">
        {/* Two identical rows to ensure seamless looping */}
        {[0, 1].map((_, i) => (
          <motion.div
            key={i}
            className="flex space-x-8 min-w-max"
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              duration: 15, // Adjust this for speed
              ease: "linear",
            }}
          >
            {CLIENTS.map((client, index) => (
              <Link
                key={index + i * CLIENTS.length}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-48 h-30 flex-shrink-0 relative ${
                  index === CLIENTS.length - 1 ? "mr-8" : ""
                }`} // Add margin to last item
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={200}
                  height={100}
                  // layout="fill"
                  // objectFit="contain"
                />
              </Link>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ClientLogoScroller;

/**
 * ExploreServices Component
 *
 * This React functional component renders a visually appealing section
 * designed to encourage users to explore the services offered. It includes
 * a background image, decorative design elements, and a call-to-action
 * link with animated visuals.
 *
 * @component
 *
 * @returns {JSX.Element} A styled section with a background image, text, and animations.
 *
 * ## Features
 * - **Background Image**: Displays a full-width background image with a dark overlay.
 * - **Decorative Elements**: Includes fixed green and white design elements for visual enhancement.
 * - **Call-to-Action**: Contains a clickable link that navigates to the `/services` page.
 * - **Animation**: Features a bouncing down arrow animation using `framer-motion`.
 *
 * ## Usage
 * This component is intended to be used on the homepage or any other page
 * where you want to highlight and link to the services section.
 *
 * ## Dependencies
 * - `framer-motion`: Used for the arrow animation.
 * - `next/image`: For optimized image rendering.
 * - `next/link`: For client-side navigation.
 * - `react-icons`: For the double-down arrow icon.
 *
 * ## Styling
 * - Tailwind CSS classes are used for layout and styling.
 * - Responsive design is implemented for various screen sizes.
 */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { HiChevronDoubleDown } from "react-icons/hi2";

const ExploreServices: React.FC = () => {
  return (
    <div className="relative w-full h-[450px] md:h-[500px] lg:h-screen flex items-center justify-center bg-gray-100 px-6">
      {/* Background Container (Keeps blobs inside) */}
      <div className="relative w-full max-w-[1200px] h-full flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute w-[90%] h-[80%] md:w-[90%] md:h-[70%] rounded-lg">
          <Image
            src="/imgs/explore-services.jpg"
            alt="Explore Our Services"
            fill
            className="object-cover rounded-lg"
          />
          {/* Overlay (Adjusted size) */}
          <div className="absolute w-full h-full bg-black/50 rounded-lg"></div>

          {/* Left Green Image (Fixed inside the container) */}
          <div className="absolute left-0 bottom-[-30px] md:-left-7 md:bottom-20 z-10">
            <Image
              src="/blobs/h2-shape-2.png"
              alt="Green Design Element"
              width={80}
              height={80}
              className="max-w-none rotate-90"
            />
          </div>

          {/* Right White Image (Fixed inside the container) */}
          <div className="absolute right-0 top-20 md:-right-7 z-10">
            <Image
              src="/blobs/shape-6.png"
              alt="White Design Element"
              width={60}
              height={60}
              className="max-w-none rotate-36"
            />
          </div>
        </div>

        {/* Centered Text & Animated Down Arrow */}
        <div className="relative text-white text-center z-10">
          <Link href="/services">
            <h2 className="text-2xl md:text-6xl font-bold">Explore</h2>
            <h2 className="text-2xl md:text-6xl font-bold">Our Services</h2>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mt-4 flex justify-center"
            >
              <HiChevronDoubleDown className="font-bold text-4xl text-[#2bcd15]" />
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExploreServices;

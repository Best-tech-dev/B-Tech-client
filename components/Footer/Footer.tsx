"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      requestAnimationFrame(() => {
        setShowScroll(window.scrollY > 300);
      });
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <footer className="bg-[#0e1117] text-white px-6 md:px-10 py-6 border-t border-t-gray-500 flex flex-col md:flex-row md:justify-between md:items-center text-center md:text-left">
      {/* Logo */}
      <Link href="/" className="mb-4 md:mb-0">
        <Image
          src="/logo-main.png"
          alt="Best Technologies Ltd"
          width={150}
          height={20}
          className="mx-auto md:mx-0"
        />
      </Link>

      {/* Policy Links */}
      <div className="flex flex-row mx-auto gap-4 text-xs">
        <Link href="/privacy-policy" className="hover:underline">
          Privacy Policy
        </Link>
        <Link href="/cookies-policy" className="hover:underline">
          Cookies Policy
        </Link>
      </div>

      {/* Copyright */}
      <p className="text-xs mt-4 md:mt-0">
        © {new Date().getFullYear()} Best Technologies Ltd. All rights reserved.
      </p>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          className="fixed z-10 bottom-4 right-4 md:bottom-6 md:right-6 border rounded-full p-2 text-[#7ca412] border-[#7ca412] bg-[#0e1117] hover:bg-[#7ca412] hover:text-white transition"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <FaArrowUp size={18} />
        </button>
      )}
    </footer>
  );
};

export default Footer;

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
    <footer className="bg-[rgba(10,10,10,0.9)] border-t border-white/10 py-16 px-8 relative overflow-hidden">
      {/* SVG Background */}
      <div className="absolute top-0 -right-2/5 w-full h-full opacity-30 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 800 800"
          className="w-full h-full"
        >
          <g transform="matrix(1,0,0,1,0,0)">
            <rect
              width="100"
              height="100"
              x="634"
              y="634"
              strokeWidth="4"
              stroke="#d9f99d"
              fill="none"
              opacity="0.1"
              transform="rotate(100, 400, 400)"
            ></rect>
            <rect
              width="116.66666666666667"
              height="116.66666666666667"
              x="602"
              y="602"
              strokeWidth="5"
              stroke="#d5f897"
              fill="none"
              opacity="0.175"
              transform="rotate(91.66666666666667, 400, 400)"
            ></rect>
            <rect
              width="133.33333333333334"
              height="133.33333333333334"
              x="570"
              y="570"
              strokeWidth="6"
              stroke="#d0f890"
              fill="none"
              opacity="0.25"
              transform="rotate(83.33333333333333, 400, 400)"
            ></rect>
            <rect
              width="150"
              height="150"
              x="538"
              y="538"
              strokeWidth="7"
              stroke="#ccf789"
              fill="none"
              opacity="0.32499999999999996"
              transform="rotate(75, 400, 400)"
            ></rect>
            <rect
              width="166.66666666666669"
              height="166.66666666666669"
              x="506"
              y="506"
              strokeWidth="8"
              stroke="#c7f681"
              fill="none"
              opacity="0.4"
              transform="rotate(66.66666666666666, 400, 400)"
            ></rect>
            <rect
              width="183.33333333333334"
              height="183.33333333333334"
              x="473.99999999999994"
              y="473.99999999999994"
              strokeWidth="9"
              stroke="#c3f579"
              fill="none"
              opacity="0.475"
              transform="rotate(58.33333333333333, 400, 400)"
            ></rect>
            <rect
              width="200"
              height="200"
              x="442"
              y="442"
              strokeWidth="10"
              stroke="#bef571"
              fill="none"
              opacity="0.5499999999999999"
              transform="rotate(50, 400, 400)"
            ></rect>
            <rect
              width="216.66666666666669"
              height="216.66666666666669"
              x="409.9999999999999"
              y="409.9999999999999"
              strokeWidth="11"
              stroke="#b9f467"
              fill="none"
              opacity="0.625"
              transform="rotate(41.666666666666664, 400, 400)"
            ></rect>
            <rect
              width="233.33333333333334"
              height="233.33333333333334"
              x="377.99999999999994"
              y="377.99999999999994"
              strokeWidth="12"
              stroke="#b4f35d"
              fill="none"
              opacity="0.7"
              transform="rotate(33.33333333333333, 400, 400)"
            ></rect>
            <rect
              width="250"
              height="250"
              x="346"
              y="346"
              strokeWidth="13"
              stroke="#aff252"
              fill="none"
              opacity="0.7749999999999999"
              transform="rotate(25, 400, 400)"
            ></rect>
            <rect
              width="266.6666666666667"
              height="266.6666666666667"
              x="314"
              y="314"
              strokeWidth="14"
              stroke="#a9f244"
              fill="none"
              opacity="0.85"
              transform="rotate(16.666666666666657, 400, 400)"
            ></rect>
            <rect
              width="283.33333333333337"
              height="283.33333333333337"
              x="281.99999999999994"
              y="281.99999999999994"
              strokeWidth="15"
              stroke="#a4f134"
              fill="none"
              opacity="0.9249999999999999"
              transform="rotate(8.333333333333329, 400, 400)"
            ></rect>
            <rect
              width="300"
              height="300"
              x="250"
              y="250"
              strokeWidth="16"
              stroke="#9ef01a"
              fill="none"
              opacity="0.9999999999999999"
              transform="rotate(0, 400, 400)"
            ></rect>
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Services */}
          <div>
            <h4 className="text-[#a4cd39] text-xl font-semibold mb-6">
              Services
            </h4>
            <div className="space-y-3">
              <a
                href="#"
                className="block text-gray-300 hover:text-[#a4cd39] transition-colors"
              >
                Web Development
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-[#a4cd39] transition-colors"
              >
                Mobile Development
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-[#a4cd39] transition-colors"
              >
                Cloud Solutions
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-[#a4cd39] transition-colors"
              >
                Digital Transformation
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-[#a4cd39] transition-colors"
              >
                Cybersecurity
              </a>
            </div>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-[#a4cd39] text-xl font-semibold mb-6">
              Industries
            </h4>
            <div className="space-y-3">
              <a
                href="#"
                className="block text-gray-300 hover:text-[#a4cd39] transition-colors"
              >
                Healthcare
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-[#a4cd39] transition-colors"
              >
                Finance
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-[#a4cd39] transition-colors"
              >
                Education
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-[#a4cd39] transition-colors"
              >
                Government
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-[#a4cd39] transition-colors"
              >
                Retail
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[#a4cd39] text-xl font-semibold mb-6">
              Company
            </h4>
            <div className="space-y-3">
              <button
                onClick={() => scrollToSection("about")}
                className="block text-gray-300 hover:text-[#a4cd39] transition-colors text-left"
              >
                About Us
              </button>
              <a
                href="#"
                className="block text-gray-300 hover:text-[#a4cd39] transition-colors"
              >
                Our Team
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-[#a4cd39] transition-colors"
              >
                Careers
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-[#a4cd39] transition-colors"
              >
                Blog
              </a>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-gray-300 hover:text-[#a4cd39] transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-[#a4cd39] text-xl font-semibold mb-6">
              Connect
            </h4>
            <div className="space-y-4">
              <a
                href="#"
                className="flex items-center gap-3 text-gray-300 hover:text-[#a4cd39] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-gray-300 hover:text-[#a4cd39] transition-colors"
              >
                <Twitter className="w-5 h-5" />
                Twitter
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-gray-300 hover:text-[#a4cd39] transition-colors"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-gray-300 hover:text-[#a4cd39] transition-colors"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-white px-6 md:px-10 flex flex-col md:flex-row md:justify-between md:items-center text-center md:text-left max-w-7xl mx-auto border-t border-brand-primary/10 pt-8 md:pt-12 relative z-10">
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
          <Link href="/terms-of-service" className="hover:underline">
            Terms of Service
          </Link>
          <Link href="/about-us#faqs" className="hover:underline">
            FAQs
          </Link>
        </div>
        {/* Copyright */}
        <p className="text-xs mt-4 md:mt-0">
          © {new Date().getFullYear()} Best Technologies Ltd. All rights
          reserved.
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
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isPastHero, setIsPastHero] = useState(false);

  const router = useRouter();

  // Handle scroll effect with more nuanced control
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 50);
      // Check if user has scrolled past the hero section (780px max height)
      setIsPastHero(currentScrollY > 780);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate opacity based on scroll position for smooth transition
  const getNavbarOpacity = () => {
    if (scrollY <= 50) return 0;
    if (scrollY >= 150) return 1;
    return (scrollY - 50) / 100;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleApplyNowClick = () => {
    router.push("/trainings/register");
  };

  const opacity = getNavbarOpacity();

  return (
    <>
      <nav
        className={cn(
          "fixed top-2 sm:top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-700 ease-in-out",
          isScrolled ? "w-[95%] max-w-[1140px]" : "w-[90%] max-w-[1140px]"
        )}
      >
        <div
          className={cn(
            "relative px-4 py-3 sm:px-6 sm:py-4 transition-all duration-700 ease-in-out",
            isScrolled
              ? "backdrop-blur-lg bg-white/20 border border-white/30 rounded-2xl shadow-2xl before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-white/5 before:to-transparent before:pointer-events-none"
              : "bg-transparent border-transparent"
          )}
          style={
            opacity > 0
              ? {
                  backgroundColor: `rgba(255, 255, 255, ${opacity * 0.2})`,
                  backdropFilter: `blur(${opacity * 16}px)`,
                  borderColor: `rgba(255, 255, 255, ${opacity * 0.3})`,
                  borderWidth: "1px",
                  borderRadius: "16px",
                  boxShadow: `0 25px 50px -12px rgba(0, 0, 0, ${
                    opacity * 0.25
                  })`,
                }
              : {}
          }
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src={isPastHero ? "/logo-black.png" : "/logo-main.png"}
                width={140}
                height={35}
                alt="Best Technologies Ltd"
                className="h-6 w-auto sm:h-8 transition-all duration-200"
                priority
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <Link
                href="/trainings"
                className={`${
                  isPastHero
                    ? "text-gray-800/90 hover:text-gray-900"
                    : "text-white/90 hover:text-white"
                } hover:scale-105 transition-all duration-200 font-medium relative group px-2 py-2 lg:px-3 text-sm lg:text-base`}
              >
                <span className="relative z-10">Trainings</span>
                <div className="absolute inset-0 bg-brand-primary/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200 -z-10"></div>
              </Link>

              <Link
                href="/trainings/bootcamp"
                className={`${
                  isPastHero
                    ? "text-gray-800/90 hover:text-gray-900"
                    : "text-white/90 hover:text-white"
                } hover:scale-105 transition-all duration-200 font-medium relative group px-2 py-2 lg:px-3 text-sm lg:text-base`}
              >
                <span className="relative z-10">Bootcamp</span>
                <div className="absolute inset-0 bg-brand-primary/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200 -z-10"></div>
              </Link>

              <Link
                href="/trainings/courses"
                className={`${
                  isPastHero
                    ? "text-gray-800/90 hover:text-gray-900"
                    : "text-white/90 hover:text-white"
                } hover:scale-105 transition-all duration-200 font-medium relative group px-2 py-2 lg:px-3 text-sm lg:text-base`}
              >
                <span className="relative z-10">Courses</span>
                <div className="absolute inset-0 bg-brand-primary/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200 -z-10"></div>
              </Link>

              <Link
                href="/trainings/about"
                className={`${
                  isPastHero
                    ? "text-gray-800/90 hover:text-gray-900"
                    : "text-white/90 hover:text-white"
                } hover:scale-105 transition-all duration-200 font-medium relative group px-2 py-2 lg:px-3 text-sm lg:text-base`}
              >
                <span className="relative z-10">About</span>
                <div className="absolute inset-0 bg-brand-primary/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200 -z-10"></div>
              </Link>

              <Link
                href="/auth/login/student"
                className={`${
                  isPastHero
                    ? "text-gray-800/90 hover:text-gray-900"
                    : "text-white/90 hover:text-white"
                } hover:scale-105 transition-all duration-200 font-medium relative group px-2 py-2 lg:px-3 text-sm lg:text-base`}
              >
                <span className="relative z-10">Sign In</span>
                <div className="absolute inset-0 bg-brand-primary/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200 -z-10"></div>
              </Link>
            </div>

            {/* Register Now Button (Desktop) */}
            <div className="hidden lg:block">
              <Button
                onClick={handleApplyNowClick}
                className={`bg-transparent border border-brand-primary/60 ${
                  isPastHero
                    ? "text-gray-800 hover:text-white"
                    : "text-white hover:text-white"
                } hover:bg-brand-primary hover:scale-105 hover:shadow-lg hover:shadow-brand-primary/25 transition-all duration-300 rounded-full px-4 py-2 lg:px-6 text-sm lg:text-base backdrop-blur-sm`}
              >
                Register Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className={`lg:hidden ${
                isPastHero
                  ? "text-gray-800 hover:bg-gray-200/20"
                  : "text-white hover:bg-white/10"
              } transition-colors duration-200`}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: isMenuOpen ? 0 : "-100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-0 left-0 w-full h-full bg-slate-900/95 backdrop-blur-md text-white flex flex-col z-50 lg:hidden"
        >
          {/* Header with Close Button */}
          <div className="flex justify-between items-center p-6 border-b border-white/10">
            <h2 className="text-xl font-semibold">Menu</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-white hover:bg-white/10"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-2 px-6 py-4 overflow-y-auto max-h-[85vh]">
            <Link
              href="/trainings"
              className="block py-3 text-white hover:text-brand-primary transition-colors duration-200 font-medium"
              onClick={toggleMenu}
            >
              Trainings
            </Link>
            <Link
              href="/trainings/bootcamp"
              className="block py-3 text-white hover:text-brand-primary transition-colors duration-200 font-medium"
              onClick={toggleMenu}
            >
              Bootcamp
            </Link>
            <Link
              href="/trainings/courses"
              className="block py-3 text-white hover:text-brand-primary transition-colors duration-200 font-medium"
              onClick={toggleMenu}
            >
              Courses
            </Link>
            <Link
              href="/trainings/tuition-dates"
              className="block py-3 text-white hover:text-brand-primary transition-colors duration-200 font-medium"
              onClick={toggleMenu}
            >
              Tuition & Dates
            </Link>
            <Link
              href="/trainings/about"
              className="block py-3 text-white hover:text-brand-primary transition-colors duration-200 font-medium"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/auth/login/student"
              className="block py-3 text-white hover:text-brand-primary transition-colors duration-200 font-medium"
              onClick={toggleMenu}
            >
              Sign In
            </Link>

            {/* Register Now Button */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <Button
                onClick={() => {
                  handleApplyNowClick();
                  toggleMenu();
                }}
                className="w-full bg-transparent border border-brand-primary text-white hover:bg-brand-primary hover:text-white transition-all duration-200"
              >
                Register Now
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;

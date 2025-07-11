"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const router = useRouter();

  // Handle scroll effect with more nuanced control
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 50);
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
          "fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-700 ease-in-out",
          isScrolled ? "w-[95%] max-w-6xl" : "w-[90%] max-w-7xl"
        )}
      >
        <div
          className={cn(
            "relative px-6 py-4 transition-all duration-700 ease-in-out",
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
                src="/logo-main.png"
                width={140}
                height={35}
                alt="Best Technologies Ltd"
                className="h-8 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                href="/trainings"
                className="text-white/90 hover:text-white hover:scale-105 transition-all duration-200 font-medium relative group px-3 py-2"
              >
                <span className="relative z-10">Trainings</span>
                <div className="absolute inset-0 bg-brand-primary/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200 -z-10"></div>
              </Link>

              <Link
                href="/trainings/bootcamp"
                className="text-white/90 hover:text-white hover:scale-105 transition-all duration-200 font-medium relative group px-3 py-2"
              >
                <span className="relative z-10">Bootcamp</span>
                <div className="absolute inset-0 bg-brand-primary/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200 -z-10"></div>
              </Link>

              <Link
                href="/trainings/courses"
                className="text-white/90 hover:text-white hover:scale-105 transition-all duration-200 font-medium relative group px-3 py-2"
              >
                <span className="relative z-10">Courses</span>
                <div className="absolute inset-0 bg-brand-primary/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200 -z-10"></div>
              </Link>

              <Link
                href="/trainings/tuition-dates"
                className="text-white/90 hover:text-white hover:scale-105 transition-all duration-200 font-medium relative group px-3 py-2"
              >
                <span className="relative z-10">Tuition & Dates</span>
                <div className="absolute inset-0 bg-brand-primary/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200 -z-10"></div>
              </Link>

              <Link
                href="/trainings/about"
                className="text-white/90 hover:text-white hover:scale-105 transition-all duration-200 font-medium relative group px-3 py-2"
              >
                <span className="relative z-10">About</span>
                <div className="absolute inset-0 bg-brand-primary/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200 -z-10"></div>
              </Link>
            </div>

            {/* Register Now Button (Desktop) */}
            <div className="hidden lg:block">
              <Button
                onClick={handleApplyNowClick}
                className="bg-transparent border border-brand-primary/60 text-white hover:bg-brand-primary hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-brand-primary/25 transition-all duration-300 rounded-full px-6 backdrop-blur-sm"
              >
                Register Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="lg:hidden text-white hover:bg-white/10"
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
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={toggleMenu}
          />

          {/* Mobile Menu */}
          <div className="fixed top-0 right-0 h-full w-80 bg-gray-900/95 backdrop-blur-lg border-l border-white/10 shadow-2xl transform transition-transform">
            <div className="p-6 pt-20 space-y-6">
              <Link
                href="/trainings"
                className="block py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg px-4 transition-all duration-200"
                onClick={toggleMenu}
              >
                Trainings
              </Link>
              <Link
                href="/trainings/bootcamp"
                className="block py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg px-4 transition-all duration-200"
                onClick={toggleMenu}
              >
                Bootcamp
              </Link>
              <Link
                href="/trainings/courses"
                className="block py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg px-4 transition-all duration-200"
                onClick={toggleMenu}
              >
                Courses
              </Link>
              <Link
                href="/trainings/tuition-dates"
                className="block py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg px-4 transition-all duration-200"
                onClick={toggleMenu}
              >
                Tuition & Dates
              </Link>
              <Link
                href="/trainings/about"
                className="block py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg px-4 transition-all duration-200"
                onClick={toggleMenu}
              >
                About
              </Link>

              <div className="pt-6 border-t border-white/10">
                <Button
                  onClick={() => {
                    handleApplyNowClick();
                    toggleMenu();
                  }}
                  className="w-full bg-transparent border border-brand-primary/60 text-white hover:bg-brand-primary hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-brand-primary/25 transition-all duration-300 rounded-full px-6 backdrop-blur-sm"
                >
                  Register Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/ui/Bootcamp/button";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const router = useRouter();

  const handleApplyNowClick = () => {
    router.push("/trainings/register");
  };

  return (
    <header className="sticky w-full z-50 top-0 shadow-md bg-[#161a25]">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-8 text-xs">
        <div className="flex items-center">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo-main.png"
              alt="Best Technologies Ltd"
              className="h-8"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <div className="font-medium space-x-6">
            <Link
              href="/programs"
              className="text-white hover:text-primary-two transition-colors"
            >
              PROGRAMS
            </Link>
            <Link
              href="/courses"
              className="text-white hover:text-primary-two transition-colors"
            >
              COURSES
            </Link>
            <Link
              href="/resources"
              className="text-white hover:text-primary-two transition-colors"
            >
              RESOURCES
            </Link>
            <Link
              href="/tuition-dates"
              className="text-white hover:text-primary-two transition-colors"
            >
              TUITION & DATES
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-primary-two transition-colors"
            >
              ABOUT
            </Link>
          </div>
        </div>

        <div className="hidden lg:block text-center">
          <Button
            className="bg-[#71990b] hover:bg-[#a3cd39] hover:cursor-pointer text-white px-8 py-3 text-xs rounded-2xl shadow-md transition-all duration-300"
            onClick={handleApplyNowClick}
          >
            Register Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="p-2 focus:outline-none">
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3 space-y-3">
            <Link
              href="/programs"
              className="block py-2 text-gray-700 hover:text-primary-two"
            >
              PROGRAMS
            </Link>
            <Link
              href="/courses"
              className="block py-2 text-gray-700 hover:text-primary-two"
            >
              COURSES
            </Link>
            <Link
              href="/resources"
              className="block py-2 text-gray-700 hover:text-primary-two"
            >
              RESOURCES
            </Link>
            <Link
              href="/tuition-dates"
              className="block py-2 text-gray-700 hover:text-primary-two"
            >
              TUITION & DATES
            </Link>
            <Link
              href="/about"
              className="block py-2 text-gray-700 hover:text-primary-two"
            >
              ABOUT
            </Link>
            <div className="pt-3 flex flex-col space-y-3">
              <Button variant="outline" className="w-full">
                Sign In
              </Button>
              <Button className="w-full">Sign Up</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

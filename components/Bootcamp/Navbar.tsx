import React from "react";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/ui/Bootcamp/button";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full z-50 top-0 shadow-md bg-white">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="flex-shrink-0">
            <img
              src="/lovable-uploads/ebcddcbe-f924-472d-9604-df772e35a931.png"
              alt="Best Technologies Ltd"
              className="h-10"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <div className="font-medium space-x-6">
            <Link
              href="/programs"
              className="text-gray-700 hover:text-primary-two transition-colors"
            >
              PROGRAMS
            </Link>
            <Link
              href="/courses"
              className="text-gray-700 hover:text-primary-two transition-colors"
            >
              COURSES
            </Link>
            <Link
              href="/resources"
              className="text-gray-700 hover:text-primary-two transition-colors"
            >
              RESOURCES
            </Link>
            <Link
              href="/tuition-dates"
              className="text-gray-700 hover:text-primary-two transition-colors"
            >
              TUITION & DATES
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-primary-two transition-colors"
            >
              ABOUT
            </Link>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline">Sign In</Button>
            <Button>Sign Up</Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="p-2 focus:outline-none">
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
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

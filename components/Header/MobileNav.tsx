"use client";

import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/ui/button";

const navLinks = [
  { title: "Services", href: "/services" },
  { title: "Trainings", href: "/trainings" },
  { title: "About Us", href: "/about" },
  { title: "Blog", href: "/blog" },
  { title: "Sign In", href: "/auth/login/student" },
];

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: isOpen ? 0 : "-100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full h-full bg-slate-900/95 backdrop-blur-md text-white flex flex-col z-50"
    >
      {/* Header with Close Button */}
      <div className="flex justify-between items-center p-6 border-b border-white/10">
        <h2 className="text-xl font-semibold">Menu</h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="text-white hover:bg-white/10"
        >
          <X className="h-6 w-6" />
        </Button>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col gap-2 px-6 py-4 overflow-y-auto max-h-[85vh]">
        {navLinks.map(({ title, href }) => (
          <div key={title}>
            <Link
              href={href || "#"}
              className="block py-3 text-white hover:text-brand-primary transition-colors duration-200 font-medium"
              onClick={onClose}
            >
              {title}
            </Link>
          </div>
        ))}

        {/* Contact Us Button */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <Button
            asChild
            className="w-full bg-transparent border border-brand-primary text-white hover:bg-brand-primary hover:text-white transition-all duration-200"
          >
            <Link href="/contact" onClick={onClose}>
              Contact Us
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileNav;

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/ui/button";
import { signInItems } from "@/constants/navLinks";

const navLinks = [
  { title: "Services", href: "/services" },
  { title: "Trainings", href: "/trainings" },
  { title: "About Us", href: "/about" },
  { title: "Sign In", subLinks: signInItems },
  { title: "Blog", href: "/blog" },
];

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleSubMenu = (title: string) => {
    setOpenMenu((prev) => (prev === title ? null : title));
  };

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
        {navLinks.map(({ title, href, subLinks }) => (
          <div key={title}>
            {subLinks ? (
              // Parent link with sub-links
              <button
                className="w-full flex justify-between items-center py-3 text-left text-white hover:text-brand-primary transition-colors duration-200 font-medium"
                onClick={() => toggleSubMenu(title)}
              >
                {title}
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    openMenu === title ? "rotate-180" : ""
                  }`}
                />
              </button>
            ) : (
              // Normal link
              <Link
                href={href || "#"}
                className="block py-3 text-white hover:text-brand-primary transition-colors duration-200 font-medium"
                onClick={onClose}
              >
                {title}
              </Link>
            )}

            {/* Sub-links */}
            {openMenu === title && subLinks && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="pl-6 flex flex-col gap-2 overflow-hidden border-l border-brand-primary/30 ml-2"
              >
                {subLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block py-2 text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                ))}
              </motion.div>
            )}
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

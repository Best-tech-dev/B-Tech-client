"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import RegistrationModal from "@/components/Home/RegistrationModal";

const NewHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const megaMenuServices = [
    {
      category: "Development",
      items: [
        "Web Development",
        "Mobile Apps",
        "Custom Software",
        "API Development",
      ],
    },
    {
      category: "Cloud & Infrastructure",
      items: [
        "Cloud Migration",
        "DevOps Services",
        "System Integration",
        "Security Audits",
      ],
    },
    {
      category: "Consulting",
      items: [
        "Digital Strategy",
        "Technology Audit",
        "Process Optimization",
        "Training & Support",
      ],
    },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/98 shadow-md" : "bg-white/95"
        } backdrop-blur-xl border-b border-brand-primary/10`}
      >
        <nav className="max-w-7xl mx-auto px-8 flex justify-between items-center h-20">
          <Link href="/" className="text-3xl font-bold text-gradient-primary">
            Best Technologies
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            <li
              className="relative group"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-gray-700 hover:text-brand-primary transition-colors duration-300 font-medium px-4 py-2 rounded-lg hover:bg-brand-primary/5 flex items-center gap-1">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Mega Menu */}
              {activeDropdown === "services" && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white/95 backdrop-blur-xl border border-brand-primary/20 rounded-xl shadow-2xl p-8 min-w-[800px] opacity-100 visible transition-all duration-300">
                  <div className="grid grid-cols-3 gap-8">
                    {megaMenuServices.map((section) => (
                      <div key={section.category}>
                        <h4 className="text-brand-primary font-semibold text-lg mb-4">
                          {section.category}
                        </h4>
                        <div className="space-y-2">
                          {section.items.map((item) => (
                            <Link
                              key={item}
                              href="/services"
                              className="block text-gray-600 hover:text-brand-primary transition-colors duration-200 py-1 text-sm"
                            >
                              {item}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-brand-primary/10 text-center">
                    <Link
                      href="/services"
                      className="inline-flex items-center text-brand-primary font-semibold hover:text-brand-primary-dark transition-colors"
                    >
                      View All Services →
                    </Link>
                  </div>
                </div>
              )}
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-700 hover:text-brand-primary transition-colors duration-300 font-medium px-4 py-2 rounded-lg hover:bg-brand-primary/5"
              >
                About
              </Link>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-gray-700 hover:text-brand-primary transition-colors duration-300 font-medium px-4 py-2 rounded-lg hover:bg-brand-primary/5"
              >
                Portfolio
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-brand-primary transition-colors duration-300 font-medium px-4 py-2 rounded-lg hover:bg-brand-primary/5"
              >
                Contact
              </button>
            </li>
            <li>
              <button
                onClick={() => setIsRegistrationModalOpen(true)}
                className="bg-gradient-to-r from-brand-primary to-brand-primary-dark text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-primary/30 glow-button"
              >
                Register Now
              </button>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-brand-primary/10 md:hidden">
              <ul className="flex flex-col py-4">
                <li>
                  <button
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === "services-mobile"
                          ? null
                          : "services-mobile"
                      )
                    }
                    className="w-full text-left px-8 py-3 text-gray-700 hover:text-brand-primary hover:bg-brand-primary/5 transition-colors flex items-center justify-between"
                  >
                    Services
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        activeDropdown === "services-mobile" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeDropdown === "services-mobile" && (
                    <div className="px-12 py-2 space-y-2">
                      {megaMenuServices
                        .flatMap((section) => section.items)
                        .map((item) => (
                          <Link
                            key={item}
                            href="/services"
                            className="block text-gray-600 hover:text-brand-primary transition-colors py-1 text-sm"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item}
                          </Link>
                        ))}
                    </div>
                  )}
                </li>
                <li>
                  <Link
                    href="/about"
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full text-left px-8 py-3 text-gray-700 hover:text-brand-primary hover:bg-brand-primary/5 transition-colors block"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("portfolio")}
                    className="w-full text-left px-8 py-3 text-gray-700 hover:text-brand-primary hover:bg-brand-primary/5 transition-colors"
                  >
                    Portfolio
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="w-full text-left px-8 py-3 text-gray-700 hover:text-brand-primary hover:bg-brand-primary/5 transition-colors"
                  >
                    Contact
                  </button>
                </li>
                <li className="px-8 py-3">
                  <button
                    onClick={() => {
                      setIsRegistrationModalOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-gradient-to-r from-brand-primary to-brand-primary-dark text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 glow-button"
                  >
                    Register Now
                  </button>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>

      <RegistrationModal
        isOpen={isRegistrationModalOpen}
        onClose={() => setIsRegistrationModalOpen(false)}
      />
    </>
  );
};

export default NewHeader;

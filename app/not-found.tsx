"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/ui/button";
import NavBar from "@/components/Header/NavBar";
import Footer from "@/components/Footer/Footer";
import { Home, ArrowLeft, Search, FileQuestion, Lightbulb } from "lucide-react";

const NotFoundPage = () => {
  const popularPages = [
    { name: "Services", href: "/services", icon: "🛠️" },
    { name: "Training Programs", href: "/trainings", icon: "🎓" },
    { name: "About Us", href: "/about", icon: "ℹ️" },
    { name: "Contact", href: "/contact", icon: "📞" },
    { name: "Blog", href: "/blog", icon: "📝" },
  ];

  const helpfulLinks = [
    "Custom Software Development",
    "Web Development Services",
    "Mobile App Development",
    "Digital Transformation",
    "Technology Consulting",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <NavBar />

      {/* Background Effects */}
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          viewBox="0 0 100 100"
        >
          <defs>
            <pattern
              id="techGrid"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="10" cy="10" r="1" fill="#9ef01a" opacity="0.3" />
              <path
                d="M10,0 L10,20 M0,10 L20,10"
                stroke="#9ef01a"
                strokeWidth="0.3"
                opacity="0.2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#techGrid)" />
        </svg>
      </div>

      <main className="relative z-10 pt-24 md:pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Animation */}
          <div className="mb-8">
            <div className="relative inline-block">
              <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-bold bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary bg-clip-text text-transparent opacity-20">
                404
              </h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <FileQuestion className="w-16 h-16 md:w-20 md:h-20 text-brand-primary animate-bounce" />
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Oops! Page Not Found
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              It seems like the page you&apos;re looking for has moved, been
              deleted, or doesn&apos;t exist. But don&apos;t worry, we&apos;re
              here to help you find what you need!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              asChild
              className="bg-brand-primary hover:bg-brand-primary/80 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-primary/30"
            >
              <Link href="/">
                <Home className="w-5 h-5 mr-2" />
                Go to Homepage
              </Link>
            </Button>
            <Button
              onClick={() => window.history.back()}
              variant="outline"
              className="bg-gray-700/50 hover:bg-gray-600/50 text-white border-gray-600 hover:border-gray-500 px-8 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </Button>
          </div>

          {/* Popular Pages */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white flex items-center justify-center">
              <Lightbulb className="w-6 h-6 md:w-8 md:h-8 text-brand-primary mr-3" />
              Popular Pages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {popularPages.map((page, index) => (
                <Link
                  key={index}
                  href={page.href}
                  className="group bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-brand-primary/30 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="text-3xl mb-3">{page.icon}</div>
                  <h4 className="text-white font-semibold group-hover:text-brand-primary transition-colors">
                    {page.name}
                  </h4>
                </Link>
              ))}
            </div>
          </div>

          {/* Search Suggestions */}
          <div className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-white flex items-center justify-center">
              <Search className="w-6 h-6 text-brand-primary mr-3" />
              You might be looking for...
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {helpfulLinks.map((link, index) => (
                <div
                  key={index}
                  className="bg-gray-700/30 rounded-lg p-4 text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-200 cursor-pointer"
                >
                  {link}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Support */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">
              Still can&apos;t find what you&apos;re looking for?
            </p>
            <Button
              asChild
              variant="ghost"
              className="text-brand-primary hover:text-brand-accent hover:bg-brand-primary/10 transition-all duration-200"
            >
              <Link href="/contact">Contact Our Support Team</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFoundPage;

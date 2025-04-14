"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const tabs = [
  "The Fullstack Experience",
  "Courses",
  "Daily Schedule",
  "Tuition and Dates",
  "FAQs",
];

export default function BootcampLanding() {
  const [showBanner, setShowBanner] = useState(true);
  const [timeLeft, setTimeLeft] = useState({});
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [dailyTab, setDailyTab] = useState("Monday");

  useEffect(() => {
    const countdownDate = new Date("2025-05-02T00:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const renderTabContent = (tab: unknown) => {
    switch (tab) {
      case "The Fullstack Experience":
        return <div className="p-4">Welcome to the fullstack experience!</div>;
      case "Courses":
        return <div className="p-4">List of available courses goes here.</div>;
      case "Daily Schedule":
        return (
          <div className="p-4">
            <div className="flex space-x-2 overflow-x-auto">
              {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map(
                (day) => (
                  <button
                    key={day}
                    onClick={() => setDailyTab(day)}
                    className={`px-3 py-1 border rounded-full text-sm ${
                      dailyTab === day
                        ? "bg-[#2bcd15] text-white"
                        : "text-gray-700"
                    }`}
                  >
                    {day}
                  </button>
                )
              )}
            </div>
            <div className="mt-4">Schedule for {dailyTab}...</div>
          </div>
        );
      case "Tuition and Dates":
        return (
          <div className="p-4 space-y-4">
            {["Fees", "Start Dates", "Payment Options"].map((title) => (
              <details key={title} className="border rounded p-2">
                <summary className="cursor-pointer font-semibold">
                  {title}
                </summary>
                <p className="text-sm text-gray-600 mt-2">
                  Detailed content about {title.toLowerCase()}.
                </p>
              </details>
            ))}
          </div>
        );
      case "FAQs":
        return <div className="p-4">Frequently asked questions go here.</div>;
    }
  };

  return (
    <div className="bg-[#161a25] text-white min-h-screen">
      {/* Banner */}
      {showBanner && (
        <div className="bg-[#2bcd15] text-white flex items-center justify-between px-4 py-2">
          <div className="flex gap-4 items-center">
            {Object.entries(timeLeft).map(([key, value]) => (
              <div key={key} className="border px-2 py-1 border-white rounded">
                {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
              </div>
            ))}
            <span>
              Save ₦20,000 on registration when you enroll before our bootcamp
              starts by 02/05/2025
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button className="bg-white text-[#2bcd15] px-4 py-2 rounded shadow hover:bg-[#a4cd39]">
              Secure Your ₦20,000 Discount
            </button>
            <button
              onClick={() => setShowBanner(false)}
              className="text-xl font-bold"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-[#161a25] shadow-md sticky top-0 z-50">
        <img src="/logo.png" alt="Logo" className="h-10" />
        <nav className="hidden md:flex gap-6">
          {["PROGRAMS", "COURSES", "RESOURCES", "TUITION & DATES", "ABOUT"].map(
            (link) => (
              <a key={link} href="#" className="hover:text-[#2bcd15]">
                {link}
              </a>
            )
          )}
        </nav>
        <div className="hidden md:flex gap-4">
          <button className="border px-4 py-1 rounded">Sign up</button>
          <button className="bg-[#2bcd15] px-4 py-1 rounded">Login</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-[#a4cd39]"
        >
          Empower Your Tech Future
        </motion.h1>
        <p className="mt-4 text-lg max-w-xl text-white">
          Join our immersive fullstack bootcamp and launch a high-demand tech
          career in months.
        </p>
        <button className="mt-6 px-6 py-3 bg-[#2bcd15] text-white rounded hover:bg-[#a4cd39]">
          Apply Now
        </button>
      </section>

      {/* Side Navigation and Tabs */}
      <section className="flex relative">
        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col fixed top-20 left-0 h-[calc(100vh-5rem)] w-64 overflow-y-auto border-r border-gray-700 bg-[#161a25]">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-left hover:bg-[#2bcd15] ${
                activeTab === tab ? "bg-[#2bcd15] text-white" : "text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </aside>

        {/* Tab Content */}
        <div className="lg:ml-64 flex-1">{renderTabContent(activeTab)}</div>
      </section>

      {/* Footer */}
      <footer className="mt-12 p-6 bg-black text-center text-gray-400">
        © 2025 Best Technologies. All rights reserved.
      </footer>
    </div>
  );
}

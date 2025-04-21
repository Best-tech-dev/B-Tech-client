"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/ui/button";
import { CheckCircle, Users, LineChart } from "lucide-react";

const qualities = [
  {
    icon: <CheckCircle className="h-8 w-8 text-brand-primary" />,
    title: "Commitment",
    description:
      "You demonstrate a commitment to learning advanced material within a rigorous, accelerated bootcamp environment.",
  },
  {
    icon: <Users className="h-8 w-8 text-brand-primary" />,
    title: "Culture Add",
    description:
      "You possess qualities such as consideration, dedication, creativity, and a team-oriented mindset.",
  },
  {
    icon: <LineChart className="h-8 w-8 text-brand-primary" />,
    title: "Growth Mindset",
    description:
      "You're committed to continuous learning and growth, adapting to your evolving interests.",
  },
];

const Admissions = () => {
  return (
    <section
      id="admissions"
      className="py-16 px-4 sm:px-6 lg:px-12 scroll-mt-28"
    >
      <h2 className="text-base md:text-3xl font-bold mb-6">Admissions</h2>

      <p className="text-sm md:text-base text-gray-700 mb-6 max-w-3xl">
        This Backend Development Bootcamp, with its in-depth curriculum covering
        computer science fundamentals to back-end route handling and
        authentication & authorization, is designed for motivated students
        passionate about technology.
      </p>

      <p className="text-sm md:text-base text-gray-700 mb-6 max-w-3xl">
        The Backend Development Immersive&apos;s accelerated timeline is
        designed to engage and challenge students. Our thoughtful application
        process ensures that prospective students are well-suited for the
        program, and vice-versa.
      </p>

      <p className="text-base font-bold mb-10">
        Here's what we look for in prospective students:
      </p>

      <div className="grid gap-10 md:grid-cols-3 mb-16">
        {qualities.map((item, idx) => (
          <div key={idx} className="text-left px-4">
            <div className="flex justify-start mb-4">{item.icon}</div>
            <h3 className="text-base md:text-lg text-brand-primary font-semibold mb-3">
              {item.title}
            </h3>
            <p className="text-gray-700 text-base">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Button
          href="/trainings/register"
          className="bg-brand-primary hover:bg-brand-primary/85 text-white text-sm md:text-base"
        >
          START YOUR APPLICATION
        </Button>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 mt-16"></div>
    </section>
  );
};

export default Admissions;

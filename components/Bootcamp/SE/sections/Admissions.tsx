"use client";

import React from "react";
import { Button } from "@/ui/Bootcamp/button";
import { CheckCircle, Users, LineChart } from "lucide-react";

const qualities = [
  {
    icon: <CheckCircle className="h-12 w-12 text-primary-one" />,
    title: "Commitment",
    description:
      "You're committed to learning advanced material at an accelerated, rigorous bootcamp pace.",
  },
  {
    icon: <Users className="h-12 w-12 text-primary-one" />,
    title: "Culture Add",
    description: "You're considerate, dedicated, creative, and team-oriented.",
  },
  {
    icon: <LineChart className="h-12 w-12 text-primary-one" />,
    title: "Growth Mindset",
    description:
      "No matter where your interests take you, you're always continuing to learn and grow along the way.",
  },
];

const Admissions = () => {
  return (
    <section id="admissions" className="py-16 px-4 sm:px-6 lg:px-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Admissions</h2>

      <p className="text-base md:text-lg text-gray-700 mb-6 max-w-3xl">
        With an in-depth curriculum spanning computer science fundamentals to
        front-end and back-end web development, the Software Engineering
        Bootcamp is best for motivated students who are passionate about tech.
      </p>

      <p className="text-base md:text-lg text-gray-700 mb-6 max-w-3xl">
        The Software Engineering Immersive is designed to engage and challenge
        students throughout their bootcamp experience on an accelerated
        timeline. That's why we've developed a thoughtful application process to
        ensure prospective students are a good fit for the program—and vice
        versa!
      </p>

      <p className="text-xl font-medium mb-10">
        Here's what we look for in prospective students.
      </p>

      <div className="grid gap-10 md:grid-cols-3 mb-16">
        {qualities.map((item, idx) => (
          <div key={idx} className="text-center px-4">
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-gray-700 text-base">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Button
          asChild
          className="bg-red-600 hover:bg-red-700 text-white text-sm md:text-base"
        >
          <a href="/application">START YOUR APPLICATION</a>
        </Button>
      </div>

      <div className="h-px bg-gray-200 mt-16" />
    </section>
  );
};

export default Admissions;

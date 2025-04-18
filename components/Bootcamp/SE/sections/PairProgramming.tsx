"use client";

import React from "react";
import Image from "next/image";

const PairProgramming = () => {
  return (
    <section id="pair-programming" className="py-12 px-4 sm:px-6 lg:px-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Pair Programming</h2>

      <p className="text-base md:text-lg text-gray-700 mb-10 max-w-3xl">
        Throughout bootcamp, you'll program alongside a partner. Together,
        you'll assume defined roles to solve programming challenges and
        double-check each other's work.
      </p>

      <div className="mb-10">
        {/* If using Next.js Image component: */}
        <Image
          src="/lovable-uploads/4da1946b-74bb-4aef-8cc8-d0f8365c98bb.png"
          alt="Pair Programming"
          width={1200}
          height={675}
          className="w-full h-auto rounded-lg shadow-md object-cover"
        />

        {/* If not using next/image, revert to this:
        <img 
          src="/lovable-uploads/4da1946b-74bb-4aef-8cc8-d0f8365c98bb.png" 
          alt="Pair Programming" 
          className="w-full h-auto rounded-lg shadow-md"
        />
        */}
      </div>

      <h3 className="text-2xl md:text-3xl font-semibold mb-4">
        Some things are better when they are shared
      </h3>

      <p className="text-base md:text-lg text-gray-700 max-w-3xl">
        Employers love to see ample pair programming experience on your resume
        because it demonstrates practical knowledge as well as creative
        problem-solving skills. Plus, pair programming helps you get a feel for
        real-world remote work environments while building lasting, meaningful
        professional relationships.
      </p>

      <div className="mt-16 border-t pt-12" />
    </section>
  );
};

export default PairProgramming;

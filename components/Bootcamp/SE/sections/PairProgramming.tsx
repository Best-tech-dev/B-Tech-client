"use client";

import React from "react";
import Image from "next/image";

const PairProgramming = () => {
  return (
    <section
      id="pair-programming"
      className="py-12 px-4 sm:px-6 lg:px-12 scroll-mt-28"
    >
      <h2 className="text-xl md:text-3xl font-bold mb-6">Pair Programming</h2>

      <p className="text-sm md:text-base text-gray-700 mb-10 max-w-3xl">
        During bootcamp, you&apos;ll engage in pair programming, collaborating
        with a partner in assigned roles to solve programming problems and
        ensure code quality through mutual review.
      </p>

      <div className="mb-10">
        <Image
          src="/imgs/learner-support.avif"
          alt="Pair Programming"
          width={1200}
          height={675}
          className="w-full h-auto rounded-lg shadow-md object-cover"
        />
      </div>

      <h3 className="text-xl md:text-3xl font-semibold mb-4">
        The Power of Collaborative Coding
      </h3>

      <p className="text-sm md:text-base text-gray-700 max-w-3xl">
        Pair programming provides practical experience and hones creative
        problem-solving skills, both highly valued by employers. This
        collaborative method also simulates real-world work environments and
        facilitates the development of strong professional connections.
      </p>

      {/* Divider */}
      <div className="border-t border-gray-200 mt-16"></div>
    </section>
  );
};

export default PairProgramming;

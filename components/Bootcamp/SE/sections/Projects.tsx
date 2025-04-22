"use client";

import React, { useState } from "react";

const Projects = () => {
  const projects = [
    {
      title: "Acme",
      description: "A modern invoice dashboard web app",
      videoUrl: "https://www.youtube.com/embed/HGLTAu3y_uc?si=oQ3qzOt1KI0lKTyb",
    },
    {
      title: "AI E-commerce Platform",
      description: "Build complete e-commerce platform with AI",
      videoUrl: "https://www.youtube.com/embed/hlMXobLvVB0?si=twpIeFuU8CLmZhld",
    },
    {
      title: "Tower of Zurpalen",
      description: "An adventure game",
      videoUrl: "https://www.youtube.com/embed/HGLTAu3y_uc?si=oQ3qzOt1KI0lKTyb",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section id="projects" className="py-12 px-4 sm:px-6 lg:px-12 scroll-mt-28">
      <h2 className="text-3xl font-bold mb-6">Build a Portfolio of Apps</h2>

      <p className="text-base text-gray-700 mb-6 max-w-3xl">
        Upon graduating from the Software Engineering Bootcamp, you&apos;ll have
        a full-stack capstone project in your portfolio, hosted on GitHub, and
        built with real-world libraries and methodologies. This project will
        effectively demonstrate your technical, practical, and creative skills
        to future employers.
      </p>

      <p className="text-base text-gray-700 mb-10 max-w-3xl">
        Check out some of the capstone projects you&apos;ll work on.
      </p>

      <div className="text-center mb-10">
        <div className="inline-block border-b border-brand-primary px-8 py-3 text-xl font-medium text-gray-800">
          Capstone Projects
        </div>
      </div>

      <div className="grid gap-10 md:grid-cols-2 items-start">
        {/* Project List */}
        <ul className="space-y-6">
          {projects.map((project, index) => (
            <li
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`border-l-4 py-2 pl-4 transition-all duration-300 cursor-pointer ${
                selectedIndex === index
                  ? "border-brand-primary bg-gray-50"
                  : "border-gray-200 hover:border-brand-primary"
              }`}
            >
              <h3 className="font-semibold text-base">{project.title}</h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </li>
          ))}
        </ul>

        {/* Video Preview */}
        <div className="w-full rounded-xl overflow-hidden shadow-lg">
          <div className="aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src={projects[selectedIndex].videoUrl}
              title={`Demo video for ${projects[selectedIndex].title}`}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 mt-16"></div>
    </section>
  );
};

export default Projects;

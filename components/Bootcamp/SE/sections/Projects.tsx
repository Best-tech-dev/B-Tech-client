"use client";

import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Blissful Journey",
      description: "A travel planning website",
      active: true,
    },
    {
      title: "Pucker Up",
      description: "A dating website",
    },
    {
      title: "Tower of Zurpalen",
      description: "An adventure game",
    },
  ];

  return (
    <section id="projects" className="py-12 px-4 sm:px-6 lg:px-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Build a Portfolio of Apps
      </h2>

      <p className="text-base md:text-lg text-gray-700 mb-6 max-w-3xl">
        By the time you graduate from the Software Engineering Bootcamp, you'll
        have a culminating full stack capstone project in your software
        engineering portfolio. All of your code will be housed on GitHub and
        built out with real-world libraries and methodologies—demonstrating your
        technical, practical, and creative skills to future employers.
      </p>

      <p className="text-base md:text-lg text-gray-700 mb-10 max-w-3xl">
        Check out some of our past coding student capstone projects.
      </p>

      <div className="text-center mb-10">
        <div className="inline-block border-b-2 border-primary-one px-8 py-3 text-xl font-medium text-gray-800">
          Capstone Projects
        </div>
      </div>

      <div className="grid gap-10 md:grid-cols-2 items-start">
        {/* Project List */}
        <ul className="space-y-6">
          {projects.map((project, index) => (
            <li
              key={index}
              className={`border-l-4 py-2 pl-4 transition-all duration-300 cursor-pointer ${
                project.active
                  ? "border-primary-one bg-gray-50"
                  : "border-gray-200 hover:border-primary-one"
              }`}
            >
              <h3 className="font-semibold text-xl">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </li>
          ))}
        </ul>

        {/* Video Preview */}
        <div className="w-full rounded-xl overflow-hidden shadow-lg">
          <div className="aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Project Demo Video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t pt-12" />
    </section>
  );
};

export default Projects;

"use client";

import React from "react";
import { Code, Database, Globe, Smartphone, Monitor } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack marketplace with payment integration, user authentication, and admin dashboard",
      icon: <Monitor className="h-6 w-6 text-blue-600" />,
      duration: "Weeks 3-5",
      deliverables: [
        "User authentication system",
        "Payment processing integration",
        "Admin dashboard interface",
        "Product catalog management",
      ],
    },
    {
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates and team features",
      icon: <Smartphone className="h-6 w-6 text-green-600" />,
      duration: "Weeks 6-8",
      deliverables: [
        "Real-time collaboration features",
        "Task assignment system",
        "Progress tracking dashboard",
        "Team communication tools",
      ],
    },
    {
      title: "Social Media Dashboard",
      description:
        "Analytics platform for managing multiple social media accounts with automated posting",
      icon: <Globe className="h-6 w-6 text-purple-600" />,
      duration: "Weeks 9-11",
      deliverables: [
        "Multi-platform API integration",
        "Analytics and reporting",
        "Content scheduling system",
        "Performance metrics tracking",
      ],
    },
    {
      title: "Learning Management System",
      description:
        "Educational platform with course creation, progress tracking, and interactive content",
      icon: <Code className="h-6 w-6 text-orange-600" />,
      duration: "Weeks 12-14",
      deliverables: [
        "Course creation interface",
        "Student progress tracking",
        "Interactive content delivery",
        "Assessment and grading system",
      ],
    },
    {
      title: "Real Estate Portal",
      description:
        "Property listing platform with advanced search, virtual tours, and agent tools",
      icon: <Database className="h-6 w-6 text-red-600" />,
      duration: "Weeks 15-17",
      deliverables: [
        "Property search and filtering",
        "Agent management system",
        "Virtual tour integration",
        "Lead generation tools",
      ],
    },
  ];

  return (
    <section id="projects" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
          Hands-on Projects
        </h2>
        <p className="text-base text-gray-700 mb-8 leading-relaxed">
          Build a portfolio of real-world projects that demonstrate your
          full-stack development skills and problem-solving abilities. Each
          project follows industry standards and best practices.
        </p>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6"
            >
              <div className="flex flex-col sm:flex-row items-start sm:space-x-4 space-y-4 sm:space-y-0">
                <div className="flex-shrink-0 p-3 bg-gray-50 rounded-lg self-start">
                  {project.icon}
                </div>
                <div className="flex-1 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 space-y-2 sm:space-y-0">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full mt-1 sm:mt-0">
                      {project.duration}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4 text-base sm:text-base">
                    {project.description}
                  </p>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Key Deliverables:
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {project.deliverables.map((deliverable, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-gray-600"
                        >
                          <div className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-3"></div>
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

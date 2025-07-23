import React from "react";
import { Monitor, Smartphone, ShoppingCart } from "lucide-react";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Interactive Landing Page",
      description:
        "Create a fully responsive business landing page with animations and interactive elements",
      icon: <Monitor className="h-6 w-6 text-blue-600" />,
      deliverables: [
        "Responsive HTML/CSS structure",
        "JavaScript interactivity",
        "Mobile-first design approach",
        "Cross-browser compatibility",
      ],
    },
    {
      title: "Task Management App",
      description:
        "Build a full-featured task management application with CRUD operations and local storage",
      icon: <Smartphone className="h-6 w-6 text-green-600" />,
      deliverables: [
        "Interactive user interface",
        "Local data persistence",
        "Search and filter functionality",
        "Drag-and-drop features",
      ],
    },
    {
      title: "E-commerce Frontend",
      description:
        "Develop a complete e-commerce website frontend with shopping cart and checkout flow",
      icon: <ShoppingCart className="h-6 w-6 text-purple-600" />,
      deliverables: [
        "Product catalog system",
        "Shopping cart functionality",
        "Payment integration UI",
        "User authentication pages",
      ],
    },
  ];

  return (
    <section id="projects" className="mb-16">
      <div className="max-w-4xl">
        <h2
          className="font-bold text-gray-900 mb-6"
          style={{
            fontSize: "clamp(1.25rem, 4vw, 1.875rem)",
            lineHeight: "1.2",
          }}
        >
          Hands-on Projects
        </h2>
        <p
          className="text-gray-700 mb-8 leading-relaxed"
          style={{
            fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
            lineHeight: "1.6",
          }}
        >
          Build a portfolio of industry-standard projects that demonstrate your
          coding skills and technical expertise. Each project follows modern
          development practices and real-world requirements.
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
                  <h3
                    className="font-semibold text-gray-900 mb-3"
                    style={{
                      fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                      lineHeight: "1.4",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-gray-700 mb-4"
                    style={{
                      fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
                      lineHeight: "1.5",
                    }}
                  >
                    {project.description}
                  </p>
                  <div>
                    <h4
                      className="font-medium text-gray-900 mb-2"
                      style={{
                        fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
                        lineHeight: "1.4",
                      }}
                    >
                      Key Deliverables:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {project.deliverables.map((deliverable, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-gray-600"
                          style={{
                            fontSize: "clamp(0.75rem, 1.2vw, 0.875rem)",
                            lineHeight: "1.4",
                          }}
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

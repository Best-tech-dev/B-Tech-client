import React from "react";
import { Monitor, Smartphone, ShoppingCart } from "lucide-react";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Interactive Landing Page",
      description:
        "Create a fully responsive business landing page with animations and interactive elements",
      icon: <Monitor className="h-6 w-6 text-blue-600" />,
      duration: "Weeks 2-4",
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
      duration: "Weeks 5-7",
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
      duration: "Weeks 8-10",
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
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Hands-on Projects
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Build a portfolio of industry-standard projects that demonstrate your
          coding skills and technical expertise. Each project follows modern
          development practices and real-world requirements.
        </p>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-gray-50 rounded-lg">
                  {project.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {project.duration}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">{project.description}</p>
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

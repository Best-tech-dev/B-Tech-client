import React from "react";
import { Smartphone, Users, ShoppingCart } from "lucide-react";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Personal Finance Tracker",
      description:
        "Create a native mobile app for expense tracking with data visualization and budget management",
      icon: <Smartphone className="h-6 w-6 text-green-600" />,
      duration: "Weeks 3-5",
      deliverables: [
        "Native iOS/Android implementation",
        "Local database integration",
        "Interactive charts and graphs",
        "Biometric authentication",
      ],
    },
    {
      title: "Social Media Feed App",
      description:
        "Build a cross-platform social networking app with real-time updates and media sharing",
      icon: <Users className="h-6 w-6 text-blue-600" />,
      duration: "Weeks 6-8",
      deliverables: [
        "Cross-platform compatibility",
        "Real-time messaging features",
        "Image/video upload functionality",
        "Push notification system",
      ],
    },
    {
      title: "E-commerce Mobile App",
      description:
        "Develop a complete mobile shopping experience with payment integration and order tracking",
      icon: <ShoppingCart className="h-6 w-6 text-purple-600" />,
      duration: "Weeks 9-11",
      deliverables: [
        "Product catalog and search",
        "Shopping cart and checkout",
        "Payment gateway integration",
        "Order management system",
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
          Build a portfolio of real-world mobile applications that demonstrate
          your development skills and technical expertise. Each project follows
          industry best practices and modern development standards.
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
                    <h3
                      className="font-semibold text-gray-900"
                      style={{
                        fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                        lineHeight: "1.4",
                      }}
                    >
                      {project.title}
                    </h3>
                    <span
                      className="text-gray-500 bg-gray-100 px-3 py-1 rounded-full w-fit"
                      style={{
                        fontSize: "clamp(0.75rem, 1.2vw, 0.875rem)",
                        lineHeight: "1.4",
                      }}
                    >
                      {project.duration}
                    </span>
                  </div>
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
                          <div className="h-1.5 w-1.5 bg-green-600 rounded-full mr-3"></div>
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

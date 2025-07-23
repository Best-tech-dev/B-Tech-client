import React from "react";
import { Target, Eye, MessageSquare } from "lucide-react";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Supervised Learning Classifier",
      description:
        "Train a classification model to predict outcomes from structured data.",
      icon: <Target className="h-6 w-6 text-green-600" />,
      deliverables: [
        "Preprocessing pipeline",
        "Logistic regression or decision tree model",
        "Confusion matrix and evaluation metrics",
        "Jupyter notebook with explanations",
      ],
    },
    {
      title: "Image Recognition System",
      description:
        "Build a CNN that classifies images into categories using TensorFlow or PyTorch.",
      icon: <Eye className="h-6 w-6 text-blue-600" />,
      deliverables: [
        "Labeled dataset preprocessing",
        "CNN model architecture",
        "Training logs and accuracy tracking",
        "Inference script and demo",
      ],
    },
    {
      title: "AI Chatbot with NLP",
      description:
        "Develop a conversational AI chatbot using natural language processing techniques.",
      icon: <MessageSquare className="h-6 w-6 text-green-600" />,
      deliverables: [
        "Intent recognition and response logic",
        "Tokenization and vectorization pipeline",
        "Model training with Rasa or Hugging Face",
        "Deployment-ready interface",
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
          Showcase your ML/AI capabilities by building intelligent models and
          deploying them in real-world use cases. Each project emphasizes model
          training, evaluation, and responsible AI practices.
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
                  <div className="mb-3">
                    <h3
                      className="font-semibold text-gray-900"
                      style={{
                        fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                        lineHeight: "1.4",
                      }}
                    >
                      {project.title}
                    </h3>
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

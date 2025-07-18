import React from "react";
import { Target, Eye, MessageSquare } from "lucide-react";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Supervised Learning Classifier",
      description:
        "Train a classification model to predict outcomes from structured data.",
      icon: <Target className="h-6 w-6 text-green-600" />,
      duration: "Weeks 3-5",
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
      duration: "Weeks 6-8",
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
      duration: "Weeks 9-11",
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
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Hands-on Projects
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Showcase your ML/AI capabilities by building intelligent models and
          deploying them in real-world use cases. Each project emphasizes model
          training, evaluation, and responsible AI practices.
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

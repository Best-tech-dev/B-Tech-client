import React from "react";
import { CheckCircle } from "lucide-react";

const WhatYoullLearn: React.FC = () => {
  const learningModules = [
    {
      category: "Machine Learning Topics",
      skills: [
        "Supervised and unsupervised learning",
        "Neural networks and deep learning",
        "Model evaluation and cross-validation",
        "Natural language processing and computer vision",
        "Ethical considerations and AI bias",
      ],
    },
    {
      category: "Model Research & Evaluation",
      skills: [
        "Dataset exploration and preprocessing",
        "Defining evaluation metrics (accuracy, recall, etc.)",
        "Feature selection and engineering",
        "Cross-validation and performance tuning",
        "A/B testing for model comparison",
      ],
    },
    {
      category: "Model Design & Integration",
      skills: [
        "Designing ML workflows and pipelines",
        "Prototyping AI models in Jupyter Notebooks",
        "Building interactive AI demos",
        "Designing model outputs for usability",
        "Mobile-first AI integrations (e.g., edge AI, on-device models)",
      ],
    },
    {
      category: "ML & AI Frameworks",
      skills: [
        "TensorFlow and PyTorch",
        "Scikit-learn and XGBoost",
        "OpenAI Gym and Hugging Face Transformers",
        "MLflow for model tracking and deployment",
        "ONNX and TensorRT for model optimization and export",
      ],
    },
  ];

  return (
    <section id="what-youll-learn" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          What You&apos;ll Learn – Machine Learning / AI
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Created by AI engineers and researchers, this curriculum helps you
          understand both foundational theory and real-world ML
          applications—from simple models to deep learning systems.
        </p>

        <div className="space-y-8">
          {learningModules.map((module, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {module.category}
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {module.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-green-50 p-6 rounded-xl border border-green-100">
          <h3 className="text-lg font-semibold text-green-900 mb-3">
            AI Project Showcase
          </h3>
          <p className="text-green-800">
            Throughout the program, you&apos;ll build smart systems and deploy
            intelligent solutions. By graduation, you&apos;ll have 5–7
            end-to-end AI projects that demonstrate your skills in data
            preprocessing, model development, and application deployment—perfect
            for your portfolio or GitHub profile.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatYoullLearn;

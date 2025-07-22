import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do I need to know programming or math?",
      answer:
        "Basic Python and high-school math are helpful, but we teach you everything from the ground up—including how to train and deploy models. We focus more on your analytical mindset and willingness to learn than prior technical experience.",
    },
    {
      question: "What tools and frameworks will I learn?",
      answer:
        "You'll work with Python, Scikit-learn, TensorFlow, PyTorch, and Jupyter Notebooks, plus platforms like Hugging Face and MLflow. We also cover cloud deployment and model optimization tools to prepare you for real-world ML engineering.",
    },
    {
      question: "Will I build real ML projects?",
      answer:
        "Yes! You'll create 5–7 projects including image classification, NLP chatbots, and model deployments you can showcase. Each project follows industry best practices and includes proper documentation for your portfolio.",
    },
    {
      question: "What makes this different from online ML courses?",
      answer:
        "We offer personalized feedback, practical mentorship, end-to-end project pipelines, and career-focused outcomes—not just theory. You'll work with real datasets and get code reviews from industry professionals.",
    },
    {
      question: "Do you provide career support in AI?",
      answer:
        "Yes! We help you prepare for ML/AI roles through mock interviews, GitHub polishing, and referrals to AI companies and startups. Our career services continue for 6 months after graduation.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faqs" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-base text-gray-700 mb-8 leading-relaxed">
          Considering our Machine Learning / AI bootcamp? Here&apos;s what most
          prospective students ask before applying.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-base lg:text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openFAQ === index ? (
                  <ChevronUp className="h-5 w-5 text-green-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-green-600 flex-shrink-0" />
                )}
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 bg-green-50 p-6 rounded-xl border border-green-200 text-center">
          <h4 className="font-semibold text-green-900 mb-3">
            Ready to Start Your AI Journey?
          </h4>
          <p className="text-green-800 mb-4">
            Join our next cohort and transform your analytical skills into a
            rewarding career in artificial intelligence and machine learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/trainings/register"
              className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center"
            >
              Apply Now
            </Link>
            <Link
              href="/trainings/curriculum"
              className="border border-green-600 text-green-600 px-6 py-2 rounded-lg font-medium hover:bg-green-50 transition-colors flex items-center justify-center"
            >
              Download Curriculum
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;

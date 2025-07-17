import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do I need prior design experience to join the UI/UX bootcamp?",
      answer:
        "No prior design experience is required. Our program starts with fundamentals and gradually builds up to advanced concepts. We welcome participants from all backgrounds - the only requirement is creativity and willingness to learn.",
    },
    {
      question: "What design software will I learn during the bootcamp?",
      answer:
        "You'll master industry-standard tools including Figma (primary tool), Adobe XD, Sketch, InVision, Principle for animations, and various prototyping tools. We provide licenses for premium software during the course.",
    },
    {
      question: "Will I have a portfolio by the end of the bootcamp?",
      answer:
        "Absolutely! You'll complete 3-5 comprehensive case studies that showcase your design process, problem-solving skills, and final solutions. Our instructors provide detailed feedback to ensure your portfolio meets industry standards.",
    },
    {
      question: "How is this different from online design courses?",
      answer:
        "Our bootcamp provides live mentorship, real-time design critiques, collaborative projects, and structured portfolio development. You'll work on actual design briefs and receive personalized feedback that online courses can't provide.",
    },
    {
      question: "What career support do you provide after graduation?",
      answer:
        "We offer portfolio reviews, interview preparation, design challenge practice, and direct introductions to hiring partners. Our career services team supports you until you land a design role.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faqs" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Have questions about our UI/UX Design bootcamp? Here are answers to
          the most common questions from prospective students.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </div>
                </div>
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 bg-purple-50 p-6 rounded-xl border border-purple-200 text-center">
          <h4 className="font-semibold text-purple-900 mb-3">
            Ready to Start Your Design Journey?
          </h4>
          <p className="text-purple-800 mb-4">
            Join our next cohort and transform your creativity into a rewarding
            career in UI/UX design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors">
              Apply Now
            </button>
            <button className="border border-purple-600 text-purple-600 px-6 py-2 rounded-lg font-medium hover:bg-purple-50 transition-colors">
              Download Curriculum
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;

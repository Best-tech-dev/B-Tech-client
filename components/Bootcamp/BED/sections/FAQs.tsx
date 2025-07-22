import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question:
        "Do I need prior programming experience to join the backend bootcamp?",
      answer:
        "Basic programming knowledge is recommended but not strictly required. Our program starts with fundamentals and gradually builds up to advanced concepts. We welcome participants from all backgrounds - the only requirement is dedication and willingness to learn.",
    },
    {
      question: "What backend technologies will I learn during the bootcamp?",
      answer:
        "You'll master industry-standard technologies including Python, Node.js, databases (SQL and NoSQL), API development, cloud services, and DevOps tools. We provide access to premium development environments during the course.",
    },
    {
      question: "Will I have a portfolio by the end of the bootcamp?",
      answer:
        "Absolutely! You'll complete 3-5 comprehensive backend projects that showcase your development process, problem-solving skills, and technical solutions. Our instructors provide detailed feedback to ensure your portfolio meets industry standards.",
    },
    {
      question: "How is this different from online programming courses?",
      answer:
        "Our bootcamp provides live mentorship, real-time code reviews, collaborative projects, and structured portfolio development. You'll work on actual development challenges and receive personalized feedback that online courses can't provide.",
    },
    {
      question: "What career support do you provide after graduation?",
      answer:
        "We offer portfolio reviews, technical interview preparation, coding challenge practice, and direct introductions to hiring partners. Our career services team supports you until you land a backend development role.",
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
          Have questions about our Backend Development bootcamp? Here are
          answers to the most common questions from prospective students.
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
                  <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-blue-600 flex-shrink-0" />
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

        <div className="mt-8 bg-blue-50 p-6 rounded-xl border border-blue-200 text-center">
          <h4 className="font-semibold text-blue-900 mb-3">
            Ready to Start Your Backend Journey?
          </h4>
          <p className="text-blue-800 mb-4">
            Join our next cohort and transform your coding skills into a
            rewarding career in backend development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/trainings/register"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              Apply Now
            </Link>
            <Link
              href="/trainings/curriculum"
              className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors flex items-center justify-center"
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

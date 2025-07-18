import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question:
        "Do I need prior data experience to join the Data Analysis bootcamp?",
      answer:
        "No prior data experience is required. Our program starts with fundamentals and gradually builds up to advanced concepts. We welcome participants from all backgrounds - the only requirement is analytical thinking and willingness to learn.",
    },
    {
      question: "What data tools will I learn during the bootcamp?",
      answer:
        "You'll master industry-standard tools including Python (primary tool), SQL, Power BI, Excel, Jupyter Notebooks, and various data visualization libraries. We provide access to premium software during the course.",
    },
    {
      question: "Will I have a portfolio by the end of the bootcamp?",
      answer:
        "Absolutely! You'll complete 4-6 comprehensive data analysis projects that showcase your analytical process, problem-solving skills, and final insights. Our instructors provide detailed feedback to ensure your portfolio meets industry standards.",
    },
    {
      question: "How is this different from online data courses?",
      answer:
        "Our bootcamp provides live mentorship, real-time project reviews, collaborative analysis projects, and structured portfolio development. You'll work on actual business datasets and receive personalized feedback that online courses can't provide.",
    },
    {
      question: "What career support do you provide after graduation?",
      answer:
        "We offer portfolio reviews, interview preparation, data challenge practice, and direct introductions to hiring partners. Our career services team supports you until you land a data analysis role.",
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
          Have questions about our Data Analysis bootcamp? Here are answers to
          the most common questions from prospective students.
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
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
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
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 bg-blue-50 p-6 rounded-xl border border-blue-200 text-center">
          <h4 className="font-semibold text-blue-900 mb-3">
            Ready to Start Your Data Journey?
          </h4>
          <p className="text-blue-800 mb-4">
            Join our next cohort and transform your analytical skills into a
            rewarding career in data analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Apply Now
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
              Download Curriculum
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;

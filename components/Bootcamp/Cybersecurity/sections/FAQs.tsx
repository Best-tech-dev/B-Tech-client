import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question:
        "Do I need a technical background to join the cybersecurity bootcamp?",
      answer:
        "Not necessarily. While some IT familiarity helps, we start from foundational concepts. Motivation and curiosity are key.",
    },
    {
      question: "What tools and platforms will I use during training?",
      answer:
        "You'll work with Kali Linux, Wireshark, Nmap, Burp Suite, and more — simulating real-world cyber scenarios.",
    },
    {
      question:
        "Will I be ready for certifications like CEH or CompTIA Security+?",
      answer:
        "Yes, the curriculum aligns with major certifications and prepares you to pursue them confidently.",
    },
    {
      question: "How is this different from online cybersecurity courses?",
      answer:
        "We offer hands-on labs, red-team simulations, expert mentorship, and direct feedback on real attacks and defenses.",
    },
    {
      question: "What kind of career support is included?",
      answer:
        "You'll get resume reviews, security portfolio building, job prep, and connection to hiring partners in fintech, gov, and more.",
    },
    {
      question: "Can I balance this program with my job?",
      answer:
        "Yes — the evening classes allow you to keep working while learning and practicing at night.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faqs" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
          Frequently Asked Questions – Cybersecurity
        </h2>
        <p className="text-base text-gray-700 mb-8 leading-relaxed">
          Curious about our Cybersecurity bootcamp? These are the most common
          questions we receive from incoming students.
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
                  <ChevronUp className="h-5 w-5 text-red-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-red-600 flex-shrink-0" />
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

        <div className="mt-8 bg-red-50 p-6 rounded-xl border border-red-200 text-center">
          <h4 className="font-semibold text-red-900 mb-3">
            Ready to Start Your Cybersecurity Journey?
          </h4>
          <p className="text-red-800 mb-4">
            Join our next cohort and transform your career with comprehensive
            cybersecurity skills in ethical hacking and digital defense.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors">
              Apply Now
            </button>
            <button className="border border-red-600 text-red-600 px-6 py-2 rounded-lg font-medium hover:bg-red-50 transition-colors">
              Download Curriculum
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;

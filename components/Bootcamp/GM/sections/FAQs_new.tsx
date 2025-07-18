import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is this program beginner-friendly?",
      answer:
        "We recommend at least 1–2 years of professional experience in marketing, product, or adjacent roles. However, the program covers foundational marketing concepts and is designed to accommodate both beginners and intermediate professionals in digital marketing.",
    },
    {
      question: "Can I join online?",
      answer:
        "Yes! The program is both remote and onsite and timezone-considerate. Past cohorts have included learners from Africa, Europe, and USA. All sessions are structured to accommodate global participants.",
    },
    {
      question: "What tools will I learn?",
      answer:
        "You'll gain practical exposure to tools used in paid media, analytics, landing page testing, CRM, and experimentation - the stack depends on your project's focus. We cover industry-standard platforms used by leading growth teams.",
    },
    {
      question: "Will I receive a certificate?",
      answer:
        "Yes. Upon completion, you'll receive a certificate and project showcase for your portfolio. This demonstrates your strategic growth thinking to potential employers.",
    },
    {
      question: "What if I can't keep up?",
      answer:
        "All sessions are recorded, and our support team is available via our communication channels. We also provide dedicated mentorship to help you succeed throughout the program.",
    },
    {
      question: "What's included in the program fee?",
      answer:
        "Your investment includes 12 weeks of live instruction, all recordings and resources, dedicated mentorship, lifetime access to our alumni network, and a Certificate of Completion.",
    },
    {
      question: "How selective is the admission process?",
      answer:
        "We maintain small cohort sizes to ensure quality learning experiences. While we welcome applications from various backgrounds, we look for demonstrated commitment to growth marketing and the ability to complete the program.",
    },
    {
      question: "Can I work while taking this bootcamp?",
      answer:
        "Yes! The program is designed for working professionals with a time commitment of 6–8 hours per week. Sessions are scheduled to accommodate different time zones and work schedules.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faqs" className="py-16 bg-white">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Have questions about our Growth Marketing bootcamp? Here are answers
          to the most common questions from prospective students.
        </p>

        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-green-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </div>
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-4 bg-gray-50">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl border border-green-100 text-center">
          <h4 className="font-semibold text-green-900 mb-3">
            Ready to Build Your Growth Skillset?
          </h4>
          <p className="text-green-800 mb-4">
            Apply now and join a select group of professionals ready to lead
            growth in their teams and organizations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors">
              Apply Now
            </button>
            <button className="border border-green-600 text-green-600 px-6 py-2 rounded-lg font-medium hover:bg-green-50 transition-colors">
              Download Syllabus
            </button>
          </div>
          <p className="text-green-700 text-sm mt-4 font-medium">
            12 weeks. Real skills. No fluff.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQs;

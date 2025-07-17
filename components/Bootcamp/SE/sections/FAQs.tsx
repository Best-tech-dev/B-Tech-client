import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question:
        "Do I need prior coding experience to join the full-stack bootcamp?",
      answer:
        "No prior experience is needed. We start from the basics and guide you through real-world full-stack projects. All you need is a strong desire to learn and build complete web applications.",
    },
    {
      question: "What programming languages will I learn during the bootcamp?",
      answer:
        "You'll work with industry-relevant languages like JavaScript, TypeScript, and SQL, along with frameworks like React for frontend and Node.js/Express for backend development.",
    },
    {
      question: "Will I have a GitHub portfolio by the end of the bootcamp?",
      answer:
        "Absolutely! You'll build 5–7 full-stack web applications and publish them on GitHub to showcase your complete development skills to employers.",
    },
    {
      question: "How is this different from free online coding tutorials?",
      answer:
        "This bootcamp offers structured mentorship, hands-on full-stack projects, personalized feedback, and real-world scenarios that go far beyond generic video tutorials.",
    },
    {
      question: "What career support do you provide after graduation?",
      answer:
        "You'll get job placement help, resume and GitHub reviews, mock interviews, and access to a tech hiring network specifically for full-stack positions.",
    },
    {
      question: "Can I work full-time while attending the bootcamp?",
      answer:
        "Yes, our weekday evening schedule (6:00 PM – 9:00 PM WAT) is designed for working professionals who want to transition into full-stack development.",
    },
    {
      question: "Do you provide development software and hosting accounts?",
      answer:
        "We provide guidance on setting up your full-stack development environment and accessing necessary tools for both frontend and backend development.",
    },
    {
      question: "What types of companies hire your graduates?",
      answer:
        "Our graduates work at fintech companies, e-commerce platforms, startups, and tech agencies building complete web solutions across various industries.",
    },
    {
      question: "Is the program suitable for career changers?",
      answer:
        "Absolutely! Many of our successful graduates transition from non-technical backgrounds. The program is designed to take you from beginner to job-ready full-stack developer.",
    },
    {
      question: "Do you offer any scholarships or payment plans?",
      answer:
        "We offer need-based scholarships and flexible payment plans to make the program accessible. Contact our admissions team to discuss available financial assistance options.",
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
          Have questions about our Full-Stack Development bootcamp? Here are
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
            Ready to Start Your Full-Stack Journey?
          </h4>
          <p className="text-blue-800 mb-4">
            Join our next cohort and transform your career with comprehensive
            full-stack development skills.
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

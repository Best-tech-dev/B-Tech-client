import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question:
        "Do I need prior marketing experience to join the Growth Marketing bootcamp?",
      answer:
        "No prior marketing experience is required. Our program is designed for beginners and includes foundational concepts. However, basic computer literacy and enthusiasm for data-driven marketing are essential. We welcome participants from diverse backgrounds including business, psychology, communications, and even technical fields.",
    },
    {
      question: "What tools and software will I learn during the bootcamp?",
      answer:
        "You'll gain hands-on experience with industry-standard tools including Google Analytics 4, Google Ads, Facebook Ads Manager, HubSpot, Mailchimp, SEMrush, Ahrefs, Hotjar, Mixpanel, Canva, and various A/B testing platforms. We also cover marketing automation tools and CRM systems commonly used in the industry.",
    },
    {
      question: "Can I work full-time while attending the bootcamp?",
      answer:
        "Yes! Our evening schedule (6:00 PM - 9:00 PM) is specifically designed for working professionals. The program requires 15-20 hours per week including class time and assignments. We also provide recorded sessions and flexible assignment deadlines to accommodate your work schedule.",
    },
    {
      question: "What kind of support do you provide for job placement?",
      answer:
        "We offer comprehensive career support including resume optimization, portfolio development, interview preparation, and direct introductions to our hiring partners. Our career services team works with you until you land a role, with a 6-month job placement guarantee for qualified graduates.",
    },
    {
      question: "Are there payment plan options available?",
      answer:
        "Yes, we offer flexible payment options including a 3-installment plan. You can pay ₦300,000 upfront and the remaining balance in two installments. We also offer early bird discounts for students who register 4 weeks before the cohort starts.",
    },
    {
      question: "What makes this program different from online courses?",
      answer:
        "Our bootcamp provides live instruction, real-time feedback, peer collaboration, and hands-on projects with actual businesses. You'll work on real campaigns with measurable results, receive personalized mentorship, and build a professional network. The structured environment and accountability ensure higher completion rates and better outcomes.",
    },
    {
      question: "Do you provide certificates upon completion?",
      answer:
        "Yes, graduates receive a certificate of completion from Best Technologies Ltd. Additionally, we help you prepare for industry certifications like Google Ads, Facebook Blueprint, and HubSpot certifications, which are highly valued by employers.",
    },
    {
      question: "Can I attend if I'm based outside Lagos?",
      answer:
        "Currently, our bootcamp is delivered online, making it accessible to students across Nigeria and internationally. All you need is a stable internet connection and a computer. We accommodate different time zones and provide recorded sessions for make-up classes.",
    },
    {
      question:
        "What happens if I miss classes due to work or personal commitments?",
      answer:
        "All sessions are recorded and available for later review. We also offer make-up sessions and one-on-one catch-up sessions with instructors. Our learning management system ensures you can stay on track even if you miss a few live sessions.",
    },
    {
      question: "Do you offer any scholarship or financial aid programs?",
      answer:
        "We occasionally offer merit-based scholarships and need-based financial aid. We also partner with organizations to sponsor employees for professional development. Contact our admissions team to learn about current opportunities and eligibility criteria.",
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
          Have questions about our Growth Marketing bootcamp? Here are answers
          to the most common questions from prospective students.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
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

        <div className="mt-8 bg-blue-50 p-6 rounded-xl border border-blue-200 text-center">
          <h4 className="font-semibold text-blue-900 mb-3">
            Still Have Questions?
          </h4>
          <p className="text-blue-800 mb-4">
            Our admissions team is here to help you make an informed decision
            about your career journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Schedule a Call
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;

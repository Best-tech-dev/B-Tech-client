import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQs: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question:
        "Do I need prior mobile development experience to join the bootcamp?",
      answer:
        "No prior mobile development experience is required. Our program starts with fundamentals of mobile programming and gradually progresses to advanced concepts. We welcome participants from all backgrounds - the only requirement is enthusiasm and willingness to learn.",
    },
    {
      question: "What programming languages will I learn during the bootcamp?",
      answer:
        "You'll learn Swift for iOS development, Kotlin for Android, and JavaScript/Dart for cross-platform solutions using React Native and Flutter. We also cover essential mobile development tools and frameworks.",
    },
    {
      question: "Will I have published apps by the end of the bootcamp?",
      answer:
        "Yes, you'll complete 4-5 mobile applications that you can publish to app stores, including a finance tracker, social media app, and e-commerce platform that demonstrate your development capabilities.",
    },
    {
      question: "How is this different from online mobile development courses?",
      answer:
        "Our bootcamp provides structured learning with live instruction, peer collaboration, mentorship, and career support. You'll work on real mobile projects with feedback from industry professionals and app store publishing experience.",
    },
    {
      question: "What career support do you provide after graduation?",
      answer:
        "We offer portfolio reviews, technical interview preparation, access to our hiring partner network, and ongoing career guidance. Our goal is to help you secure a mobile development role or launch your own app.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faqs" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Get answers to common questions about our Mobile App Development
          bootcamp.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openFaq === index ? (
                  <ChevronUp className="h-5 w-5 text-green-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-green-600 flex-shrink-0" />
                )}
              </button>
              {openFaq === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-6 text-center">
          <h4 className="font-semibold text-green-900 mb-3">
            Ready to Start Your Mobile Development Journey?
          </h4>
          <p className="text-green-800 mb-4">
            Join our next cohort and transform your career with mobile app
            development skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors">
              Apply Now
            </button>
            <button className="border border-green-600 text-green-600 px-6 py-2 rounded-lg font-medium hover:bg-green-50 transition-colors">
              Download Curriculum
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;

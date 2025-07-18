import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question:
        "Do I need a technical background to start this data science bootcamp?",
      answer:
        "Not necessarily! While it helps to have some familiarity with basic math and analytical thinking, many of our successful graduates come from non-technical backgrounds—finance, marketing, education, and more. The first 2 weeks of the program are designed to get everyone on the same level with Python fundamentals.",
    },
    {
      question: "What tools and software will I learn?",
      answer:
        "You'll master the complete data science toolkit: Python (pandas, NumPy, scikit-learn), SQL for databases, Tableau/Power BI for visualization, Jupyter notebooks for analysis, Git for version control, and cloud platforms like AWS or Google Cloud. We also cover modern tools like TensorFlow for machine learning.",
    },
    {
      question: "Will I have a portfolio by the end?",
      answer:
        "Absolutely! You'll complete 3 major portfolio projects: an exploratory data analysis of Nigerian market trends, a machine learning model for sales forecasting, and an interactive dashboard for business insights. Each project is designed to showcase different skills that employers want to see.",
    },
    {
      question: "How is this different from online data science courses?",
      answer:
        "The key differences are personalized feedback, live instruction, and real-world application. While online courses give you videos to watch, we provide live problem-solving sessions, code reviews from industry professionals, and immediate help when you're stuck. You'll also work on projects with actual Nigerian business scenarios.",
    },
    {
      question: "What career support do you provide after graduation?",
      answer:
        "We have a dedicated career services team that works with you for 6 months after graduation. This includes resume optimization for data roles, mock interviews, salary negotiation guidance, and direct connections to our hiring partners—companies like Paga, Andela, and Konga who regularly recruit our graduates.",
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
          Have questions about our Data Science bootcamp? Here are answers to
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
                  <ChevronUp className="h-5 w-5 text-purple-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-purple-600 flex-shrink-0" />
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

        <div className="mt-8 bg-purple-50 p-6 rounded-xl border border-purple-200 text-center">
          <h4 className="font-semibold text-purple-900 mb-3">
            Ready to Start Your Data Science Journey?
          </h4>
          <p className="text-purple-800 mb-4">
            Join our next cohort and transform your analytical skills into a
            rewarding career in data science.
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

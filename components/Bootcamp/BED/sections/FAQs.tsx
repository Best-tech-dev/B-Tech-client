import React, { useState } from "react";
import { Plus } from "lucide-react";

const FAQs = () => {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    if (expandedFaq === id) {
      setExpandedFaq(null);
    } else {
      setExpandedFaq(id);
    }
  };

  const faqs = [
    {
      id: "faq1",
      question: "What is a backend development bootcamp?",
      answer:
        "A backend development bootcamp is an intensive, accelerated learning program designed to equip students with practical coding skills in a short timeframe, typically 6-12 weeks. These programs focus on hands-on projects and real-world applications rather than theoretical knowledge, preparing graduates for immediate entry into the tech workforce.",
    },
    {
      id: "faq2",
      question: "What is covered in the backend development bootcamp?",
      answer:
        "Our bootcamp covers backend web development aspects including HTML, CSS, JavaScript, React, API integration, authentication, deployment strategies, and modern development practices. The curriculum is regularly updated to reflect industry demands.",
    },
    {
      id: "faq3",
      question: "Are backend development bootcamps still worth it?",
      answer:
        "Absolutely! While the tech landscape evolves, the demand for skilled developers continues to grow. Our bootcamp offers focused, practical training that many employers value. With our career support services and industry connections, graduates enter the job market with real-world skills, professional portfolios, and networking opportunities that position them competitively.",
    },
    {
      id: "faq4",
      question: "How much does a backend development bootcamp cost?",
      answer:
        "Our full-time bootcamp tuition is ₦10,995 (reduced from ₦13,995 for early registration). We offer various payment options including installment plans, loan financing, income share agreements, and scholarships to make education accessible to qualified students.",
    },
    {
      id: "faq5",
      question:
        "Will I get a certificate after completing the backend development bootcamp?",
      answer:
        "Yes, all graduates receive an official certificate of completion that validates their acquired skills. Additionally, you'll graduate with a comprehensive portfolio of projects that demonstrates your technical capabilities to potential employers, which many hiring managers find even more valuable than the certificate itself.",
    },
    {
      id: "faq6",
      question: "Who should attend this backend development bootcamp?",
      answer:
        "Our bootcamp is ideal for motivated individuals who are passionate about technology and committed to an intensive learning experience. Whether you're a career changer, a college graduate seeking practical skills, or someone looking to upskill, the program is designed for those with strong problem-solving abilities and a growth mindset. No prior coding experience is required for our beginner-friendly cohorts.",
    },
    {
      id: "faq7",
      question:
        "What is the application process for this backend development bootcamp?",
      answer:
        "The application process involves submitting an online application, completing a logic assessment (no coding experience required), and participating in an interview with our admissions team. We evaluate candidates based on their problem-solving abilities, commitment, and cultural fit rather than technical background.",
    },
    {
      id: "faq8",
      question:
        "What makes Best Technologies Ltd. one of the best backend development bootcamps for learners?",
      answer:
        "Best Technologies Ltd. backend development Bootcamp stands out for its comprehensive curriculum, experienced instructors from the industry, career support services, strong alumni network, and proven track record of graduate success. Our program emphasizes pair programming, real-world projects, and job preparation, while maintaining small class sizes to ensure personalized attention and community building.",
    },
  ];

  return (
    <section id="faqs" className="py-12 scroll-mt-28">
      <h2 className="text-base md:text-3xl font-bold mb-8">FAQs</h2>

      <div className="space-y-4">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="border border-gray-300 shadow-md rounded-lg overflow-hidden"
          >
            <div
              className="flex items-center justify-between p-6 cursor-pointer bg-white"
              onClick={() => toggleFaq(faq.id)}
            >
              <h3 className="text-base font-bold pr-6">{faq.question}</h3>
              <button className="flex-shrink-0">
                <Plus
                  className={`h-5 w-5 text-brand-primary transition-transform ${
                    expandedFaq === faq.id ? "rotate-45" : ""
                  }`}
                />
              </button>
            </div>

            {expandedFaq === faq.id && (
              <div className="p-6 border-t border-t-gray-300 bg-gray-50">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;

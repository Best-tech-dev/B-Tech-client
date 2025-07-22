import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do I need prior cloud or DevOps experience?",
      answer:
        "No prior cloud or DevOps experience is required. We start with fundamentals and build up to advanced topics. However, basic computer literacy and familiarity with command line interfaces will be helpful.",
    },
    {
      question: "What cloud platforms will I learn?",
      answer:
        "You&apos;ll gain hands-on experience with AWS (primary focus), Microsoft Azure, and Google Cloud Platform. We also cover Docker, Kubernetes, Jenkins, Terraform, and other essential DevOps tools.",
    },
    {
      question: "How much time should I dedicate to the bootcamp?",
      answer:
        "We recommend 15-20 hours per week, including 4 hours of live classes and 10-15 hours of hands-on projects and studying. The program is intensive but designed to fit around work schedules.",
    },
    {
      question: "Will I get cloud certifications?",
      answer:
        "Yes! The curriculum prepares you for AWS Cloud Practitioner and Solutions Architect Associate certifications. We provide study materials and practice exams for these industry-recognized credentials.",
    },
    {
      question: "What kind of projects will I work on?",
      answer:
        "You&apos;ll build real-world projects including: automated CI/CD pipelines, containerized microservices deployments, Infrastructure as Code with Terraform, monitoring and logging systems, and a capstone project deploying a full-stack application.",
    },
    {
      question: "Do you provide job placement assistance?",
      answer:
        "Yes! We offer comprehensive career support including resume review, technical interview preparation, and connections to our network of 150+ hiring partners in the tech industry.",
    },
    {
      question: "What&apos;s the typical salary after graduation?",
      answer:
        "Our graduates typically start with salaries ranging from ₦300,000 to ₦600,000 monthly, depending on experience level and company size. Senior DevOps roles can command ₦800,000+ monthly.",
    },
    {
      question: "Can I take the bootcamp while working full-time?",
      answer:
        "Yes! Our evening and weekend schedule is designed for working professionals. Classes are held 6-9 PM on weekdays and Saturday mornings, with recorded sessions available for review.",
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
          Have questions about our Cloud & DevOps bootcamp? Here are answers to
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
            Ready to Start Your Cloud Journey?
          </h4>
          <p className="text-blue-800 mb-4">
            Join our next cohort and transform your technical skills into a
            rewarding career in Cloud & DevOps.
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

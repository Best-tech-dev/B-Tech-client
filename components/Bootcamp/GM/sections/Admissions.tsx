import React from "react";
import { GraduationCap, Clock, FileCheck, CreditCard } from "lucide-react";

const Admissions: React.FC = () => {
  const requirements = [
    {
      title: "Educational Background",
      description: "Minimum of OND/HND or Bachelor's degree in any field",
      icon: <GraduationCap className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Time Commitment",
      description: "Ability to dedicate 15-20 hours per week for 12 weeks",
      icon: <Clock className="h-6 w-6 text-green-600" />,
    },
    {
      title: "Application Materials",
      description: "Completed application form, CV, and motivation letter",
      icon: <FileCheck className="h-6 w-6 text-purple-600" />,
    },
    {
      title: "Financial Readiness",
      description: "Confirmed payment plan or full tuition payment",
      icon: <CreditCard className="h-6 w-6 text-orange-600" />,
    },
  ];

  const applicationSteps = [
    {
      step: "1",
      title: "Submit Application",
      description:
        "Complete our online application form with your background and motivation",
      timeline: "15 minutes",
    },
    {
      step: "2",
      title: "Initial Screening",
      description:
        "We review your application and may contact you for clarification",
      timeline: "2-3 business days",
    },
    {
      step: "3",
      title: "Assessment Interview",
      description:
        "Brief interview to assess fit and commitment to the program",
      timeline: "30 minutes",
    },
    {
      step: "4",
      title: "Admission Decision",
      description: "Receive admission decision and enrollment instructions",
      timeline: "1-2 business days",
    },
    {
      step: "5",
      title: "Enrollment & Payment",
      description:
        "Secure your spot with payment and complete pre-course setup",
      timeline: "Immediate",
    },
  ];

  return (
    <section id="admissions" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Admissions Process
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Our admissions process is designed to ensure that every student is
          prepared for success. We look for motivated individuals ready to
          commit to intensive learning and career growth.
        </p>

        {/* Requirements */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Admission Requirements
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {requirements.map((requirement, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-white border border-gray-200 rounded-xl"
              >
                <div className="flex-shrink-0 p-2 bg-gray-50 rounded-lg">
                  {requirement.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {requirement.title}
                  </h4>
                  <p className="text-gray-600">{requirement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Application Steps
          </h3>
          <div className="space-y-6">
            {applicationSteps.map((step, index) => (
              <div
                key={index}
                className="flex items-start space-x-6 p-6 bg-white border border-gray-200 rounded-xl"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {step.title}
                    </h4>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {step.timeline}
                    </span>
                  </div>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Tips */}
        <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
          <h4 className="font-semibold text-yellow-900 mb-4">
            Application Tips for Success
          </h4>
          <div className="space-y-2 text-yellow-800">
            <p>
              • <strong>Be specific</strong> about your career goals and how
              growth marketing fits
            </p>
            <p>
              • <strong>Show commitment</strong> by demonstrating your ability
              to manage time effectively
            </p>
            <p>
              • <strong>Highlight transferable skills</strong> from your current
              experience
            </p>
            <p>
              • <strong>Express genuine interest</strong> in data-driven
              marketing approaches
            </p>
            <p>
              • <strong>Apply early</strong> as we have limited spots per cohort
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="bg-blue-600 text-white p-8 rounded-xl">
            <h4 className="text-xl font-semibold mb-4">
              Ready to Transform Your Career?
            </h4>
            <p className="mb-6">
              Join hundreds of professionals who have launched successful growth
              marketing careers through our comprehensive bootcamp program.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Your Application
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;

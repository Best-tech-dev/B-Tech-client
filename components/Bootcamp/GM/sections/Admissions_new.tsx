import React from "react";
import {
  Clock,
  FileCheck,
  GraduationCap,
  Users,
  ArrowRight,
} from "lucide-react";

const Admissions: React.FC = () => {
  const requirements = [
    {
      title: "Professional Experience",
      description:
        "At least 1–2 years of professional experience in marketing, product, or adjacent roles",
      icon: <GraduationCap className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Application Process",
      description:
        "Submit a short application (3–5 minutes) and attend a brief intro call with our team",
      icon: <FileCheck className="h-6 w-6 text-green-600" />,
    },
    {
      title: "Time Commitment",
      description:
        "Ability to dedicate 6–8 hours per week for 12 weeks to the program",
      icon: <Clock className="h-6 w-6 text-purple-600" />,
    },
    {
      title: "Growth Mindset",
      description:
        "Eagerness to learn data-driven marketing strategies and experiment with new approaches",
      icon: <Users className="h-6 w-6 text-orange-600" />,
    },
  ];

  const admissionSteps = [
    {
      step: "1",
      title: "Submit Application",
      description: "Complete our short application form (3–5 minutes)",
    },
    {
      step: "2",
      title: "Intro Call",
      description: "If selected, attend a brief intro call with our team",
    },
    {
      step: "3",
      title: "Reserve Your Seat",
      description: "Payment due only after acceptance to secure your spot",
    },
    {
      step: "4",
      title: "Onboard & Start",
      description: "Get curriculum access and meet your cohort",
    },
  ];

  return (
    <section id="admissions" className="py-16 bg-gray-50">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Admissions Process
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          We're looking for motivated professionals ready to master growth
          marketing. Our selective admission process ensures you'll learn
          alongside driven peers.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {requirements.map((requirement, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">{requirement.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {requirement.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {requirement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-xl border border-gray-200 mb-10">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Application Steps
          </h3>
          <div className="space-y-6">
            {admissionSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-semibold">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                {index < admissionSteps.length - 1 && (
                  <ArrowRight className="h-5 w-5 text-gray-400 mt-2" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl border border-green-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            What We Look For
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-3">
                Professional Background
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                  <span>
                    Digital marketers ready to transition into growth roles
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                  <span>
                    Product or brand managers seeking user acquisition skills
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                  <span>Startup founders building scalable growth systems</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                  <span>Performance marketers deepening analytics skills</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-3">
                Personal Qualities
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                  <span>Data-driven mindset and analytical thinking</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                  <span>Willingness to experiment and test new approaches</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                  <span>Commitment to completing the full program</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                  <span>Eagerness to learn from global peers</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-green-200">
            <p className="text-gray-700 text-sm">
              <strong>Note:</strong> This bootcamp is suitable for both complete
              beginners and intermediate professionals in digital marketing. A
              foundational understanding of marketing concepts will be taught
              during the program.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <div className="bg-green-600 text-white p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">
              Ready to Start Your Growth Journey?
            </h3>
            <p className="mb-6">
              Join a select group of professionals ready to lead growth in their
              teams and organizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Apply Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Download Syllabus
              </button>
            </div>
            <p className="text-green-100 text-sm mt-4">
              12 weeks. Real skills. No fluff.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;

import React from "react";
import { Calendar, DollarSign, Clock, Users } from "lucide-react";

const TuitionDates: React.FC = () => {
  const upcomingCohorts = [
    {
      name: "August 2025 Cohort",
      startDate: "August 2025",
      duration: "12 weeks",
      format: "Remote-first, Global-friendly",
      status: "Open for Applications",
    },
  ];

  const pricingOptions = [
    {
      title: "Early Cohort Rate",
      price: "₦150,000",
      originalPrice: "₦200,000",
      description: "If you apply before July 24",
      features: [
        "12 weeks of onsite or live instructions",
        "All recordings, templates, and resources",
        "Dedicated mentorship",
        "Lifetime access to the alumni network",
        "Certificate of Completion",
        "Capstone project portfolio piece",
      ],
      recommended: true,
    },
    {
      title: "Standard Tuition",
      price: "₦200,000",
      description: "Regular pricing",
      features: [
        "12 weeks of onsite or live instructions",
        "All recordings, templates, and resources",
        "Dedicated mentorship",
        "Lifetime access to the alumni network",
        "Certificate of Completion",
        "Capstone project portfolio piece",
      ],
      recommended: false,
    },
  ];

  return (
    <section id="tuition-dates" className="py-16 bg-white">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Tuition & Dates
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Join our next cohort and secure your spot in this comprehensive growth
          marketing program.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Upcoming Cohorts */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Upcoming Cohorts
            </h3>
            {upcomingCohorts.map((cohort, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Calendar className="h-5 w-5 text-green-600" />
                  <h4 className="font-semibold text-gray-900">{cohort.name}</h4>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>Duration: {cohort.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span>Format: {cohort.format}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>Starts: {cohort.startDate}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    {cohort.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Schedule Details */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Program Structure
            </h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900">
                    Total Duration:
                  </span>
                  <span className="text-gray-700">12 weeks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900">
                    Learning Phase:
                  </span>
                  <span className="text-gray-700">6 weeks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900">
                    Capstone Project:
                  </span>
                  <span className="text-gray-700">Final 2 weeks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900">
                    Time Commitment:
                  </span>
                  <span className="text-gray-700">6–8 hours/week</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900">Format:</span>
                  <span className="text-gray-700">Remote & Onsite</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Investment Options
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {pricingOptions.map((option, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg border-2 transition-all ${
                  option.recommended
                    ? "border-green-500 bg-green-50"
                    : "border-gray-200 bg-white"
                }`}
              >
                {option.recommended && (
                  <div className="inline-block bg-green-500 text-white text-xs px-3 py-1 rounded-full mb-4">
                    Recommended
                  </div>
                )}
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {option.title}
                </h4>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900">
                    {option.price}
                  </span>
                  {option.originalPrice && (
                    <span className="text-lg text-gray-500 line-through ml-2">
                      {option.originalPrice}
                    </span>
                  )}
                </div>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <ul className="space-y-2">
                  {option.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start space-x-2"
                    >
                      <div className="w-4 h-4 text-green-600 mt-0.5">✓</div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <div className="flex items-center space-x-3 mb-3">
              <DollarSign className="h-5 w-5 text-green-600" />
              <h4 className="font-semibold text-green-900">
                Secure Your Early-Bird Rate
              </h4>
            </div>
            <p className="text-green-800 text-sm mb-4">
              Apply now and save ₦50,000. Payment validates registration after
              acceptance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                Apply Now
              </button>
              <button className="border border-green-600 text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors">
                Download Syllabus
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TuitionDates;

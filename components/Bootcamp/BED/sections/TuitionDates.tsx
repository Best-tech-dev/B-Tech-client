import React from "react";
import { Calendar, Clock, DollarSign, CheckCircle } from "lucide-react";

const TuitionDates: React.FC = () => {
  const upcomingCohorts = [
    {
      cohort: "Cohort #2",
      startDate: "September 2025",
      endDate: "February 2026",
      schedule: "Weekdays (Mon-Fri)",
      time: "9:00 AM - 5:00 PM WAT",
      status: "Early Bird Active",
    },
    {
      cohort: "Cohort #3",
      startDate: "March 2026",
      endDate: "August 2026",
      schedule: "Weekdays (Mon-Fri)",
      time: "9:00 AM - 5:00 PM WAT",
      status: "Upcoming",
    },
  ];

  const pricingOptions = [
    {
      plan: "Full Payment",
      price: "₦500,000",
      savings: "Save ₦10,000",
      features: [
        "Complete bootcamp access",
        "26-week intensive program",
        "Live instruction & mentorship",
        "Career support",
        "Certificate of completion",
      ],
    },
    {
      plan: "Installment Plan",
      price: "₦170,000 × 3",
      savings: "Total: ₦510,000",
      features: [
        "Complete bootcamp access",
        "26-week intensive program",
        "Live instruction & mentorship",
        "Career support",
        "Certificate of completion",
      ],
    },
  ];

  return (
    <section id="tuition-dates" className="mb-12 lg:mb-16">
      <div className="max-w-4xl">
        <h2
          className="font-bold text-gray-900 mb-4 lg:mb-6"
          style={{
            fontSize: "clamp(1.75rem, 5vw, 2.5rem)",
            lineHeight: "1.2",
          }}
        >
          Tuition & Dates
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Best Technologies Ltd. is committed to making tech education more
          accessible, which is why we offer several payment options to help you
          invest in your bootcamp education.
        </p>

        {/* Upcoming Cohorts */}
        <div className="mb-8 lg:mb-10">
          <h3
            className="font-semibold text-gray-900 mb-4 lg:mb-6"
            style={{
              fontSize: "clamp(1.125rem, 3vw, 1.5rem)",
              lineHeight: "1.4",
            }}
          >
            Upcoming Cohorts
          </h3>
          <div className="space-y-3 lg:space-y-4">
            {upcomingCohorts.map((cohort, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg lg:rounded-xl p-4 lg:p-6 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-3 md:mb-0">
                    <h4
                      className="font-semibold text-gray-900 mb-2"
                      style={{
                        fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                        lineHeight: "1.4",
                      }}
                    >
                      {cohort.cohort}
                    </h4>
                    <div className="space-y-1 lg:space-y-2">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-3 w-3 lg:h-4 lg:w-4 mr-2 flex-shrink-0" />
                        <span
                          style={{
                            fontSize: "clamp(0.75rem, 1.2vw, 0.875rem)",
                            lineHeight: "1.4",
                          }}
                        >
                          {cohort.startDate} - {cohort.endDate}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-3 w-3 lg:h-4 lg:w-4 mr-2 flex-shrink-0" />
                        <span
                          style={{
                            fontSize: "clamp(0.75rem, 1.2vw, 0.875rem)",
                            lineHeight: "1.4",
                          }}
                        >
                          {cohort.schedule}, {cohort.time}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span
                      className={`inline-block px-2 lg:px-3 py-1 rounded-full font-medium ${
                        cohort.status === "Open for Registration"
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                      style={{
                        fontSize: "clamp(0.75rem, 1.2vw, 0.875rem)",
                        lineHeight: "1.4",
                      }}
                    >
                      {cohort.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div>
          <h3
            className="font-semibold text-gray-900 mb-4 lg:mb-6"
            style={{
              fontSize: "clamp(1.125rem, 3vw, 1.5rem)",
              lineHeight: "1.4",
            }}
          >
            Payment Options
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
            {pricingOptions.map((option, index) => (
              <div
                key={index}
                className={`bg-white border-2 rounded-lg lg:rounded-xl p-4 lg:p-6 shadow-sm hover:shadow-md transition-all duration-200 ${
                  index === 0 ? "border-blue-200 bg-blue-50" : "border-gray-200"
                }`}
              >
                <div className="text-center mb-4 lg:mb-6">
                  <h4
                    className="font-semibold text-gray-900 mb-2"
                    style={{
                      fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                      lineHeight: "1.4",
                    }}
                  >
                    {option.plan}
                  </h4>
                  <div
                    className="font-bold text-gray-900 mb-1"
                    style={{
                      fontSize: "clamp(1.5rem, 4vw, 1.875rem)",
                      lineHeight: "1.3",
                    }}
                  >
                    {option.price}
                  </div>
                  <p
                    className="text-gray-600"
                    style={{
                      fontSize: "clamp(0.75rem, 1.2vw, 0.875rem)",
                      lineHeight: "1.4",
                    }}
                  >
                    {option.savings}
                  </p>
                </div>
                <ul className="space-y-2 lg:space-y-3">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-4 w-4 lg:h-5 lg:w-5 text-blue-500 mr-2 lg:mr-3 flex-shrink-0" />
                      <span
                        className="text-gray-700"
                        style={{
                          fontSize: "clamp(0.75rem, 1.2vw, 0.875rem)",
                          lineHeight: "1.4",
                        }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 lg:mt-8 bg-yellow-50 p-4 lg:p-6 rounded-lg lg:rounded-xl border border-yellow-200 shadow-sm hover:shadow-md transition-all duration-200">
          <div className="flex flex-col sm:flex-row items-start">
            <DollarSign className="h-5 w-5 lg:h-6 lg:w-6 text-yellow-600 mr-0 sm:mr-2 lg:sm:mr-3 mb-2 sm:mb-0 mt-1 flex-shrink-0" />
            <div>
              <h4
                className="font-semibold text-yellow-900 mb-2"
                style={{
                  fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                  lineHeight: "1.4",
                }}
              >
                Early Bird Discount Available
              </h4>
              <p
                className="text-yellow-800"
                style={{
                  fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
                  lineHeight: "1.5",
                }}
              >
                Register early and you could be eligible for a ₦10,000 discount
                on your tuition fees! Terms and Conditions apply, though.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TuitionDates;

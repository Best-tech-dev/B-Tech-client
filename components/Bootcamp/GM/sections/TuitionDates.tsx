import React from "react";
import { Calendar, Clock, DollarSign, CheckCircle } from "lucide-react";

const TuitionDates: React.FC = () => {
  const upcomingCohorts = [
    {
      cohort: "Cohort 1",
      startDate: "August 12, 2025",
      endDate: "November 4, 2025",
      schedule: "Remote-first, Global-friendly",
      time: "6–8 hours/week commitment",
      status: "Open for Registration",
    },
    {
      cohort: "Cohort 2",
      startDate: "November 18, 2025",
      endDate: "February 10, 2026",
      schedule: "Remote-first, Global-friendly",
      time: "6–8 hours/week commitment",
      status: "Early Bird Available",
    },
  ];

  const pricingOptions = [
    {
      plan: "Full Payment",
      price: "₦350,000",
      savings: "Save ₦10,000",
      features: [
        "12 weeks of live instructions",
        "All recordings, templates, and resources",
        "Dedicated mentorship",
        "Lifetime access to alumni network",
        "Certificate of Completion",
      ],
    },
    {
      plan: "Installment",
      price: "₦140,000 × 3",
      savings: "Total: ",
      features: [
        "12 weeks of live instructions",
        "All recordings, templates, and resources",
        "Dedicated mentorship",
        "Lifetime access to alumni network",
        "Certificate of Completion",
      ],
    },
  ];

  return (
    <section id="tuition-dates" className="mb-12 lg:mb-16">
      <div className="max-w-4xl">
        <h2
          className="font-bold text-gray-900 mb-4 lg:mb-6"
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
            lineHeight: "1.3",
          }}
        >
          Tuition & Dates
        </h2>

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
                className="bg-white border border-gray-200 rounded-lg lg:rounded-xl p-4 lg:p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-4">
                  <div>
                    <h4
                      className="font-semibold text-gray-900 mb-2"
                      style={{
                        fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
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
                            fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
                            lineHeight: "1.5",
                          }}
                        >
                          {cohort.startDate} - {cohort.endDate}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-3 w-3 lg:h-4 lg:w-4 mr-2 flex-shrink-0" />
                        <span
                          style={{
                            fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
                            lineHeight: "1.5",
                          }}
                        >
                          {cohort.schedule}, {cohort.time}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="md:text-right">
                    <span
                      className={`inline-block px-2 lg:px-3 py-1 rounded-full font-medium ${
                        cohort.status === "Open for Registration"
                          ? "bg-green-100 text-green-800"
                          : "bg-green-100 text-green-800"
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
            Investment Options
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
            {pricingOptions.map((option, index) => (
              <div
                key={index}
                className={`bg-white border-2 rounded-lg lg:rounded-xl p-4 lg:p-6 shadow-sm hover:shadow-md transition-all duration-200 ${
                  index === 0
                    ? "border-green-200 bg-green-50"
                    : "border-gray-200"
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
                      <CheckCircle className="h-4 w-4 lg:h-5 lg:w-5 text-green-500 mr-2 lg:mr-3 flex-shrink-0" />
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

        <div className="mt-6 lg:mt-8 bg-green-50 p-4 lg:p-6 rounded-lg lg:rounded-xl border border-green-200 shadow-sm hover:shadow-md transition-all duration-200">
          <div className="flex flex-col sm:flex-row items-start">
            <DollarSign className="h-5 w-5 lg:h-6 lg:w-6 text-green-600 mr-0 sm:mr-2 lg:sm:mr-3 mb-2 sm:mb-0 mt-1 flex-shrink-0" />
            <div>
              <h4
                className="font-semibold text-green-900 mb-2"
                style={{
                  fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                  lineHeight: "1.4",
                }}
              >
                Early Bird Discount Available
              </h4>
              <p
                className="text-green-800"
                style={{
                  fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
                  lineHeight: "1.5",
                }}
              >
                Apply before July 24 and save ₦10,000 on tuition fees. Payment
                validates registration after acceptance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TuitionDates;

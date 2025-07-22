import React from "react";
import { Calendar, Clock, DollarSign } from "lucide-react";

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
      plan: "Early Cohort Rate",
      price: "₦150,000",
      savings: "Save ₦50,000",
      features: [
        "12 weeks of live instructions",
        "All recordings, templates, and resources",
        "Dedicated mentorship",
        "Lifetime access to alumni network",
        "Certificate of Completion",
      ],
    },
    {
      plan: "Standard Tuition",
      price: "₦200,000",
      savings: "Regular pricing",
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
    <section id="tuition-dates" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
          Tuition & Dates
        </h2>

        {/* Upcoming Cohorts */}
        <div className="mb-10">
          <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-6">
            Upcoming Cohorts
          </h3>
          <div className="space-y-4">
            {upcomingCohorts.map((cohort, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h4 className="text-base lg:text-lg font-semibold text-gray-900 mb-2">
                      {cohort.cohort}
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>
                          {cohort.startDate} - {cohort.endDate}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>
                          {cohort.schedule}, {cohort.time}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="md:text-right">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        cohort.status === "Open for Registration"
                          ? "bg-green-100 text-green-800"
                          : "bg-green-100 text-green-800"
                      }`}
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
          <h3 className="text-lg lg:text-2xl font-semibold text-gray-900 mb-6">
            Investment Options
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {pricingOptions.map((option, index) => (
              <div
                key={index}
                className={`bg-white border-2 rounded-xl p-6 ${
                  index === 0
                    ? "border-green-200 bg-green-50"
                    : "border-gray-200"
                }`}
              >
                <div className="text-center mb-6">
                  <h4 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">
                    {option.plan}
                  </h4>
                  <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                    {option.price}
                  </div>
                  <p className="text-sm lg:text-base text-gray-600">
                    {option.savings}
                  </p>
                </div>
                <ul className="space-y-3">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="h-2 w-2 bg-green-600 rounded-full mr-3"></div>
                      <span className="text-base text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 bg-green-50 p-6 rounded-xl border border-green-200">
          <div className="flex flex-col sm:flex-row items-start">
            <DollarSign className="h-6 w-6 text-green-600 mr-0 sm:mr-3 mb-2 sm:mb-0 mt-1" />
            <div>
              <h4 className="font-semibold text-green-900 mb-2">
                Early Bird Discount Available
              </h4>
              <p className="text-green-800">
                Apply before July 24 and save ₦50,000 on tuition fees. Payment
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

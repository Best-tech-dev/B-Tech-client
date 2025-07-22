import React from "react";
import { Calendar, Clock, DollarSign, CheckCircle } from "lucide-react";

const TuitionDates: React.FC = () => {
  const upcomingCohorts = [
    {
      cohort: "Cohort 1",
      startDate: "September 23, 2024",
      endDate: "February 14, 2025",
      schedule: "Weekdays (Mon-Fri)",
      time: "9:00 AM - 4:00 PM WAT",
      status: "Open for Registration",
    },
    {
      cohort: "Cohort 2",
      startDate: "January 27, 2025",
      endDate: "June 20, 2025",
      schedule: "Weekdays (Mon-Fri)",
      time: "9:00 AM - 4:00 PM WAT",
      status: "Early Bird Available",
    },
  ];

  const pricingOptions = [
    {
      plan: "Full Payment",
      price: "₦570,000",
      savings: "Save ₦30,000",
      features: [
        "Complete bootcamp access",
        "Python & SQL training",
        "1-on-1 data project reviews",
        "Job placement assistance",
        "Lifetime alumni network access",
      ],
    },
    {
      plan: "Installment Plan",
      price: "₦200,000 × 3",
      savings: "Total: ₦600,000",
      features: [
        "Pay in 3 installments",
        "Complete bootcamp access",
        "Python & SQL training",
        "1-on-1 data project reviews",
        "Job placement assistance",
      ],
    },
  ];

  return (
    <section id="tuition-dates" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Tuition & Dates
        </h2>

        {/* Upcoming Cohorts */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Upcoming Cohorts
          </h3>
          <div className="space-y-4">
            {upcomingCohorts.map((cohort, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-4 md:mb-0">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
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
                  <div className="text-right">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        cohort.status === "Open for Registration"
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
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
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Investment Options
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {pricingOptions.map((option, index) => (
              <div
                key={index}
                className={`bg-white border-2 rounded-xl p-6 ${
                  index === 0 ? "border-blue-200 bg-blue-50" : "border-gray-200"
                }`}
              >
                <div className="text-center mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {option.plan}
                  </h4>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {option.price}
                  </div>
                  <p className="text-sm text-gray-600">{option.savings}</p>
                </div>
                <ul className="space-y-3">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="h-2 w-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 bg-yellow-50 p-6 rounded-xl border border-yellow-200">
          <div className="flex items-start">
            <DollarSign className="h-6 w-6 text-yellow-600 mr-3 mt-1" />
            <div>
              <h4 className="font-semibold text-yellow-900 mb-2">
                Early Bird Discount Available
              </h4>
              <p className="text-yellow-800">
                Register 4 weeks before cohort start date and save ₦50,000 on
                tuition fees. Limited spots available for each cohort.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TuitionDates;

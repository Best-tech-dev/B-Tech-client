import React from "react";
import { Calendar, Clock, DollarSign, CreditCard } from "lucide-react";

const TuitionDates = () => {
  return (
    <section
      id="tuition-dates"
      className="py-12 scroll-mt-28"
      aria-labelledby="tuition-dates-title"
    >
      <h2
        id="tuition-dates-title"
        className="text-lg md:text-3xl font-bold mb-6"
      >
        Tuition & Upcoming Dates
      </h2>
      <p className="text-sm md:text-base text-gray-700 mb-10">
        Join our intensive 20-week Data Analytics bootcamp with flexible payment
        options designed to fit your schedule and budget.
      </p>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Tuition Information */}
        <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
          <div className="text-center mb-6">
            <DollarSign className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Program Investment
            </h3>
            <p className="text-gray-600">
              Professional data analytics training
            </p>
          </div>

          <div className="space-y-6">
            <div className="text-center p-4 bg-white rounded-lg border border-blue-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                ₦1,000,000
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                Full Program
              </div>
              <p className="text-sm text-gray-600">
                20-week intensive data bootcamp
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <CreditCard className="h-5 w-5 text-blue-600 mr-2" />
                Payment Options
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Full payment: 5% discount (₦950,000)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  3-installment plan available
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Early bird: ₦150,000 off (limited time)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Corporate training packages available
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Upcoming Dates */}
        <div className="bg-white rounded-lg p-8 border border-gray-200">
          <div className="text-center mb-6">
            <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Upcoming Cohorts
            </h3>
            <p className="text-gray-600">Choose your preferred start date</p>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-900">Cohort 1 - 2024</h4>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  Enrolling Now
                </span>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  Start: September 23, 2024
                </p>
                <p>Duration: 20 weeks (Sep 2024 - Feb 2025)</p>
                <p>Format: Full-time (Monday-Friday, 9 AM - 4 PM)</p>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-900">Cohort 2 - 2025</h4>
                <span className="bg-gray-500 text-white px-3 py-1 rounded-full text-sm">
                  Coming Soon
                </span>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  Start: January 27, 2025
                </p>
                <p>Duration: 20 weeks (Jan 2025 - Jun 2025)</p>
                <p>Format: Full-time (Monday-Friday, 9 AM - 4 PM)</p>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-900">Cohort 3 - 2025</h4>
                <span className="bg-gray-500 text-white px-3 py-1 rounded-full text-sm">
                  Coming Soon
                </span>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  Start: May 26, 2025
                </p>
                <p>Duration: 20 weeks (May 2025 - Oct 2025)</p>
                <p>Format: Full-time (Monday-Friday, 9 AM - 4 PM)</p>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Apply for Next Cohort
            </button>
          </div>
        </div>
      </div>

      {/* What's Included */}
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 border border-blue-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          What&apos;s Included in Your Investment
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">20</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">
              Weeks of Training
            </h4>
            <p className="text-sm text-gray-600">
              Comprehensive data analytics curriculum with hands-on projects
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">5+</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Data Projects</h4>
            <p className="text-sm text-gray-600">
              Real-world analytics projects for your professional portfolio
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">1:1</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Career Support</h4>
            <p className="text-sm text-gray-600">
              Personal career coaching and data analytics job placement
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TuitionDates;

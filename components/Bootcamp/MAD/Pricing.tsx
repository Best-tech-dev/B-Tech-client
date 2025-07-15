import React from "react";
import { DollarSign, CreditCard, Gift } from "lucide-react";

export const Pricing = () => {
  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Investment in Your Future
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Competitive pricing for comprehensive mobile app development
            training
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-lg p-8 border-2 border-gray-200">
            <div className="text-center mb-6">
              <Gift className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Early Bird
              </h3>
              <p className="text-gray-600">
                Limited time offer for first 50 students
              </p>
            </div>
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-orange-600 mb-2">
                ₦950,000
              </div>
              <div className="text-gray-500 line-through">₦1,200,000</div>
              <p className="text-sm text-gray-600 mt-2">Save ₦250,000</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                24-week intensive program
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                All development platforms
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                5+ portfolio projects
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Career placement support
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                1-year mentorship
              </li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-lg p-8 border-2 border-green-500 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
            <div className="text-center mb-6">
              <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Standard
              </h3>
              <p className="text-gray-600">Regular enrollment price</p>
            </div>
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-green-600 mb-2">
                ₦1,200,000
              </div>
              <p className="text-sm text-gray-600">Full program fee</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                24-week intensive program
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                All development platforms
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                5+ portfolio projects
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Career placement support
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                6-month mentorship
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
            <div className="flex items-center mb-4">
              <CreditCard className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-lg font-semibold text-gray-900">
                Payment Options
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <p className="font-medium mb-2">💳 Full Payment</p>
                <p>Pay in full and save additional 5%</p>
              </div>
              <div>
                <p className="font-medium mb-2">📅 Installments</p>
                <p>3-month payment plan available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

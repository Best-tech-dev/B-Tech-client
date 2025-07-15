import React from "react";
import { DollarSign } from "lucide-react";

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Investment</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
            <div className="text-center mb-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Early Bird Price
              </h4>
              <div className="text-3xl font-bold text-blue-600 mb-1">
                ₦900,000
              </div>
              <p className="text-sm text-gray-600">Save ₦200,000</p>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="h-2 w-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Complete bootcamp access</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">
                  AWS/Azure credits included
                </span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">
                  1-on-1 mentorship sessions
                </span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Job placement assistance</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
            <div className="text-center mb-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Regular Price
              </h4>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                ₦1,100,000
              </div>
              <p className="text-sm text-gray-600">Standard rate</p>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="h-2 w-2 bg-gray-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Complete bootcamp access</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 bg-gray-600 rounded-full mr-3"></div>
                <span className="text-gray-700">
                  AWS/Azure credits included
                </span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 bg-gray-600 rounded-full mr-3"></div>
                <span className="text-gray-700">
                  1-on-1 mentorship sessions
                </span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 bg-gray-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Job placement assistance</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
          <div className="flex items-start">
            <DollarSign className="h-6 w-6 text-yellow-600 mr-3 mt-1" />
            <div>
              <h4 className="font-semibold text-yellow-900 mb-2">
                Premium Investment
              </h4>
              <p className="text-yellow-800">
                This bootcamp includes expensive cloud credits and enterprise
                tool licenses, ensuring you get hands-on experience with
                production-grade infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

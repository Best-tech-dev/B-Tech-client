import React from "react";
import { Bell, Mail, Users, Smartphone, ArrowRight } from "lucide-react";

export const JoinWaitlist = () => {
  return (
    <section
      id="waitlist"
      className="py-16 bg-gradient-to-r from-green-50 to-emerald-50"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Smartphone className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Be First in Line for Mobile App Development Mastery
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Join our exclusive waitlist and get early access to Nigeria&apos;s
              most comprehensive mobile app development bootcamp when it
              launches in Q4 2025.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg border border-green-200">
              <Bell className="h-8 w-8 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Early Access</h3>
              <p className="text-sm text-gray-600">
                Be among the first 50 students to secure your spot with special
                early bird pricing
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-green-200">
              <Mail className="h-8 w-8 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Exclusive Updates
              </h3>
              <p className="text-sm text-gray-600">
                Get behind-the-scenes content, curriculum previews, and
                instructor insights
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-green-200">
              <Users className="h-8 w-8 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Community Access
              </h3>
              <p className="text-sm text-gray-600">
                Connect with fellow aspiring mobile developers before the
                program starts
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-green-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              🎯 Reserve Your Spot Today
            </h3>

            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                <option value="">Current Experience Level</option>
                <option value="beginner">Complete Beginner</option>
                <option value="basic">Basic Programming Knowledge</option>
                <option value="intermediate">
                  Some Web Development Experience
                </option>
                <option value="advanced">Experienced Developer</option>
              </select>

              <button
                type="submit"
                className="w-full bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center group"
              >
                Join the Waitlist
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="mt-6 text-sm text-gray-600">
              <p>
                🔒 Your information is secure and will only be used to update
                you about the Mobile App Development Bootcamp.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg text-green-800 font-medium">
              💫 <strong>Limited Spots:</strong> Only 30 students in our first
              cohort
            </p>
            <p className="text-lg text-green-800 font-medium mt-2">
              ⏰ <strong>Early Bird Savings:</strong> ₦250,000 off for waitlist
              members
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

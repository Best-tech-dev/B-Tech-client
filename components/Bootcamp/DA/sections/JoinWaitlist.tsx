import React from "react";
import { Mail, Bell, Users, Gift } from "lucide-react";

const JoinWaitlist: React.FC = () => {
  const benefits = [
    {
      icon: <Bell className="h-6 w-6 text-blue-600" />,
      title: "Early Access",
      description: "Be the first to know when registration opens",
    },
    {
      icon: <Gift className="h-6 w-6 text-green-600" />,
      title: "Special Pricing",
      description: "Exclusive early bird discount for waitlist members",
    },
    {
      icon: <Users className="h-6 w-6 text-purple-600" />,
      title: "Priority Enrollment",
      description: "Guaranteed spot in the first cohort",
    },
    {
      icon: <Mail className="h-6 w-6 text-orange-600" />,
      title: "Progress Updates",
      description: "Regular updates on curriculum development",
    },
  ];

  return (
    <section id="join-waitlist" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Join the Waitlist
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Secure your spot in our inaugural Data Analytics cohort and enjoy
          exclusive benefits as an early supporter.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl"
            >
              <div className="flex-shrink-0">{benefit.icon}</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Ready to Transform Your Career with Data?
          </h3>
          <p className="mb-6 opacity-90">
            Join over 500+ professionals already on our waitlist for the Data
            Analytics bootcamp.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex-1">
              Join Waitlist
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex-1">
              Download Syllabus
            </button>
          </div>

          <p className="text-sm opacity-75 mt-4">
            No spam, just updates. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default JoinWaitlist;

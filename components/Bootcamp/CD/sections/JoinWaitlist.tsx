import React from "react";

const JoinWaitlist: React.FC = () => {
  return (
    <section id="join-waitlist" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Join the Waitlist
        </h2>
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8 rounded-xl text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Ready to Master Cloud & DevOps?
          </h3>
          <p className="mb-6 opacity-90">
            Join our waitlist and be among the first to transform your career
            with cloud technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex-1">
              Join Waitlist
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex-1">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinWaitlist;

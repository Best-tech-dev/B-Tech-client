import React from "react";

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Launch Timeline
        </h2>
        <div className="bg-blue-50 p-8 rounded-xl border border-blue-200 text-center">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Q3 2025 Launch
          </h3>
          <p className="text-blue-800">
            We&apos;re finalizing partnerships with cloud providers and
            preparing comprehensive curriculum. Join our waitlist to be notified
            when registration opens.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

import React from "react";

const Prerequisites: React.FC = () => {
  return (
    <section id="prerequisites" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Prerequisites</h2>
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            What You Need:
          </h3>
          <div className="space-y-2">
            <p>• Basic understanding of operating systems (Linux preferred)</p>
            <p>• Familiarity with command line interfaces</p>
            <p>• Basic networking concepts</p>
            <p>• Some programming experience (any language)</p>
            <p>• Eagerness to learn cloud technologies</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prerequisites;

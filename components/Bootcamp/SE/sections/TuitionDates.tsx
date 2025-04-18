import React, { useState } from "react";
import { Button } from "@/ui/Bootcamp/button";
import { Plus, Calendar } from "lucide-react";

const TuitionDates = () => {
  const [expandedAccordion, setExpandedAccordion] = useState<string | null>(
    null
  );

  const toggleAccordion = (id: string) => {
    if (expandedAccordion === id) {
      setExpandedAccordion(null);
    } else {
      setExpandedAccordion(id);
    }
  };

  return (
    <section id="tuition-dates" className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Tuition and Dates</h2>

      <p className="text-lg text-gray-700 mb-8">
        Fullstack Academy is committed to making tech education more accessible,
        which is why we offer several payment options to help you invest in your
        bootcamp education.
      </p>

      <div className="space-y-6">
        {/* Tuition Accordion */}
        <div className="border rounded-lg overflow-hidden">
          <div
            className="flex items-center justify-between p-6 cursor-pointer bg-white"
            onClick={() => toggleAccordion("tuition")}
            aria-expanded={expandedAccordion === "tuition"}
            aria-controls="accordion-content-tuition"
            id="accordion-header-tuition"
          >
            <h3 className="text-xl font-medium">
              Full-Time Coding Bootcamp Tuition
            </h3>
            <div className="flex items-center space-x-3">
              <div className="text-2xl font-bold line-through text-gray-500">
                ₦13,995
              </div>
              <div className="text-2xl font-bold">₦10,995</div>
              <Plus
                className={`h-6 w-6 text-primary-one transition-transform duration-300 ease-in-out ${
                  expandedAccordion === "tuition" ? "rotate-45" : ""
                }`}
              />
            </div>
          </div>

          {expandedAccordion === "tuition" && (
            <div
              className="p-6 border-t animate-fadeIn"
              role="region"
              aria-labelledby="accordion-header-tuition"
              id="accordion-content-tuition"
            >
              <p className="mb-4">Our full-time bootcamp tuition includes:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>16-week immersive program</li>
                <li>Live instruction from industry professionals</li>
                <li>All course materials and resources</li>
                <li>Career coaching and job placement assistance</li>
                <li>Access to alumni network and events</li>
                <li>Certificate of completion</li>
              </ul>
              <p className="font-medium">
                Save ₦3,000 when you enroll before our early deadline!
              </p>
            </div>
          )}
        </div>

        {/* Financing Options Accordion */}
        <div className="border rounded-lg overflow-hidden">
          <div
            className="flex items-center justify-between p-6 cursor-pointer bg-white"
            onClick={() => toggleAccordion("financing")}
            aria-expanded={expandedAccordion === "financing"}
            aria-controls="accordion-content-financing"
            id="accordion-header-financing"
          >
            <h3 className="text-xl font-medium">Financing Options</h3>
            <div className="flex items-center">
              <div>
                <div className="text-sm text-gray-500">As low as</div>
                <div className="text-2xl font-bold">₦226/month</div>
              </div>
              <Plus
                className={`h-6 w-6 ml-3 text-primary-one transition-transform duration-300 ease-in-out ${
                  expandedAccordion === "financing" ? "rotate-45" : ""
                }`}
              />
            </div>
          </div>

          {expandedAccordion === "financing" && (
            <div
              className="p-6 border-t animate-fadeIn"
              role="region"
              aria-labelledby="accordion-header-financing"
              id="accordion-content-financing"
            >
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg">Installment Plan</h4>
                  <p>
                    Split your tuition into 4 equal payments with no interest.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Loan Financing</h4>
                  <p>
                    Partner with our preferred lenders for flexible payment
                    plans with competitive interest rates.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    Income Share Agreement
                  </h4>
                  <p>
                    Pay nothing upfront and contribute a percentage of your
                    income after you get hired.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Scholarships</h4>
                  <p>
                    Various scholarship opportunities are available for
                    underrepresented groups in tech.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Government Benefits Accordion */}
        <div className="border rounded-lg overflow-hidden">
          <div
            className="flex items-center justify-between p-6 cursor-pointer bg-white"
            onClick={() => toggleAccordion("benefits")}
            aria-expanded={expandedAccordion === "benefits"}
            aria-controls="accordion-content-benefits"
            id="accordion-header-benefits"
          >
            <h3 className="text-xl font-medium">Government Benefits</h3>
            <Plus
              className={`h-6 w-6 text-primary-one transition-transform duration-300 ease-in-out ${
                expandedAccordion === "benefits" ? "rotate-45" : ""
              }`}
            />
          </div>

          {expandedAccordion === "benefits" && (
            <div
              className="p-6 border-t animate-fadeIn"
              role="region"
              aria-labelledby="accordion-header-benefits"
              id="accordion-content-benefits"
            >
              <p className="mb-4">
                We accept various government education benefits, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>G.I. Bill® for eligible veterans</li>
                <li>Workforce Innovation and Opportunity Act (WIOA) funding</li>
                <li>Vocational rehabilitation programs</li>
                <li>State-specific education grants</li>
              </ul>
              <p className="mt-4">
                Contact our admissions team to learn more about eligibility and
                application process.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8">
        <Button className="bg-red-600 hover:bg-red-700">GET STARTED</Button>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-8">Upcoming Dates</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Cohort Card */}
        <div className="bg-black text-white rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="h-6 w-6" />
            <h3 className="text-xl font-semibold">Full-Time</h3>
          </div>
          <div className="mb-4">
            <div className="text-lg">August 1, 2025</div>
            <div className="text-sm opacity-70">
              Application Deadline: July 15, 2025
            </div>
          </div>
          <Button className="w-full bg-primary-one hover:bg-primary-two">
            Apply Now
          </Button>
        </div>

        <div className="bg-black text-white rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="h-6 w-6" />
            <h3 className="text-xl font-semibold">Full-Time</h3>
          </div>
          <div className="mb-4">
            <div className="text-lg">October 3, 2025</div>
            <div className="text-sm opacity-70">
              Application Deadline: September 15, 2025
            </div>
          </div>
          <Button className="w-full bg-primary-one hover:bg-primary-two">
            Apply Now
          </Button>
        </div>

        <div className="bg-black text-white rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="h-6 w-6" />
            <h3 className="text-xl font-semibold">Part-Time</h3>
          </div>
          <div className="mb-4">
            <div className="text-lg">September 5, 2025</div>
            <div className="text-sm opacity-70">
              Application Deadline: August 20, 2025
            </div>
          </div>
          <Button className="w-full bg-primary-one hover:bg-primary-two">
            Apply Now
          </Button>
        </div>
      </div>

      <div className="section-divider"></div>
    </section>
  );
};

export default TuitionDates;

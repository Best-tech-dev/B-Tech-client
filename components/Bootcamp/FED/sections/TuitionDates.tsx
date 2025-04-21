"use client";

import React, { useState } from "react";
import { Button } from "@/ui/button";
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
    <section id="tuition-dates" className="py-12 scroll-mt-28">
      <h2 className="text-lg md:text-3xl font-bold mb-6">Tuition and Dates</h2>

      <p className="text-sm md:text-base text-gray-700 mb-8">
        Best Technologies Ltd. is committed to making tech education more
        accessible, which is why we offer several payment options to help you
        invest in your bootcamp education.
      </p>

      <div className="space-y-6">
        {/* Tuition Accordion */}
        <div className="border border-gray-300 shadow-md rounded-lg overflow-hidden">
          <div
            className="flex items-center justify-between p-6 cursor-pointer bg-white"
            onClick={() => toggleAccordion("tuition")}
            aria-expanded={expandedAccordion === "tuition"}
            aria-controls="accordion-content-tuition"
            id="accordion-header-tuition"
          >
            <h3 className="text-sm md:text-base font-bold">
              Full-Time Coding Bootcamp Tuition
            </h3>
            <div className="flex flex-col md:flex-row items-center space-x-3">
              <div className="text-sm md:text-base font-bold line-through text-gray-500">
                ₦200,995
              </div>
              <div className="text-sm md:text-base font-bold">₦150,995</div>
              <Plus
                className={`h-4 w-4 text-gray-400 transition-transform duration-300 ease-in-out ${
                  expandedAccordion === "tuition" ? "rotate-45" : ""
                }`}
              />
            </div>
          </div>

          {expandedAccordion === "tuition" && (
            <div
              className="p-6 border-t border-t-gray-300 animate-fadeIn"
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
        <div className="border border-gray-300 shadow-md rounded-lg overflow-hidden">
          <div
            className="flex items-center justify-between p-6 cursor-pointer bg-white"
            onClick={() => toggleAccordion("financing")}
            aria-expanded={expandedAccordion === "financing"}
            aria-controls="accordion-content-financing"
            id="accordion-header-financing"
          >
            <h3 className="text-base font-bold">Financing Options</h3>
            <div className="flex items-center">
              <div>
                <div className="text-sm text-gray-500">As low as</div>
                <div className="text-base font-bold">₦226/month</div>
              </div>
              <Plus
                className={`h-4 w-4 ml-3 text-gray-400 transition-transform duration-300 ease-in-out ${
                  expandedAccordion === "financing" ? "rotate-45" : ""
                }`}
              />
            </div>
          </div>

          {expandedAccordion === "financing" && (
            <div
              className="p-6 border-t border-t-gray-300 animate-fadeIn"
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
        <div className="border border-gray-300 shadow-md rounded-lg overflow-hidden">
          <div
            className="flex items-center justify-between p-6 cursor-pointer bg-white"
            onClick={() => toggleAccordion("benefits")}
            aria-expanded={expandedAccordion === "benefits"}
            aria-controls="accordion-content-benefits"
            id="accordion-header-benefits"
          >
            <h3 className="text-base font-bold">Government Benefits</h3>
            <Plus
              className={`h-4 w-4 text-gray-400 transition-transform duration-300 ease-in-out ${
                expandedAccordion === "benefits" ? "rotate-45" : ""
              }`}
            />
          </div>

          {expandedAccordion === "benefits" && (
            <div
              className="p-6 border-t border-t-gray-300 animate-fadeIn"
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
        <Button
          href="/trainings/register"
          className="inline-block mt-4 text-white bg-brand-primary hover:bg-brand-primary/80"
        >
          GET STARTED
        </Button>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-8">Upcoming Dates</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Cohort Card */}
        <div className="bg-brand-secondary text-white rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="h-4 w-4 text-brand-primary" />
            <h3 className="text-base font-bold text-brand-primary">
              Full-Time
            </h3>
          </div>
          <div className="mb-4">
            <div className="text-lg">August Cohort</div>
            <div className="text-sm opacity-70">
              Application Deadline: July 15
            </div>
          </div>
          <Button
            href="/trainings/register"
            className="w-full mt-4 bg-brand-primary hover:bg-brand-primary/80"
          >
            Apply Now
          </Button>
        </div>

        <div className="bg-brand-secondary text-white rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="h-4 w-4 text-brand-primary" />
            <h3 className="text-base font-bold text-brand-primary">
              Full-Time
            </h3>
          </div>
          <div className="mb-4">
            <div className="text-lg">January Cohort</div>
            <div className="text-sm opacity-70">
              Application Deadline: Sept. 15
            </div>
          </div>
          <Button
            href="/trainings/register"
            className="w-full mt-4 bg-brand-primary hover:bg-brand-primary/80"
          >
            Apply Now
          </Button>
        </div>

        <div className="bg-brand-secondary text-white rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="h-4 w-4 text-brand-primary" />
            <h3 className="text-base font-bold text-brand-primary">
              Part-Time
            </h3>
          </div>
          <div className="mb-4">
            <div className="text-lg">September Cohort</div>
            <div className="text-sm opacity-70">
              Application Deadline: August 20
            </div>
          </div>
          <Button
            href="/trainings/register"
            className="w-full mt-4 bg-brand-primary hover:bg-brand-primary/80"
          >
            Apply Now
          </Button>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 mt-16"></div>
    </section>
  );
};

export default TuitionDates;

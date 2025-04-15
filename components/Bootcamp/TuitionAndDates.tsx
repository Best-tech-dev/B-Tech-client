"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/ui/Bootcamp/button";
import Blob from "@/ui/Bootcamp/blob";

export default function TuitionDatesSection() {
  const router = useRouter();

  const handleApplyNowClick = () => {
    router.push("/trainings/register");
  };

  return (
    <section className="relative bg-[#161a25] py-20 px-4 md:px-10 overflow-hidden">
      {/* Background Blobs */}
      <Blob
        className="absolute -top-20 -left-20 w-72 h-72 opacity-20 z-0"
        color="#71990b"
      />
      <Blob
        className="absolute bottom-0 right-0 w-96 h-96 opacity-20 z-0"
        color="#a3cd39"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
          Tuition & Key Dates
        </h2>
        <p className="text-center text-lg mt-4 max-w-2xl mx-auto text-white">
          Our bootcamp offers world-class training at a fraction of the typical
          cost. Payment is flexible and support is always available.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-10">
          {/* Tuition */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Tuition</h3>
            <ul className="space-y-4 text-white">
              <li>
                💸 <strong>Total Cost:</strong> ₦250,000 NGN
              </li>
              <li>
                🎁 <strong>Early Bird Discount:</strong> 15% off when you apply
                before the deadline
              </li>
              <li>
                💳 <strong>Payment Plan:</strong> Pay in 2-3 flexible
                installments
              </li>
              <li>
                📘 <strong>Includes:</strong> Full access to live classes,
                projects, resources, and certificate
              </li>
            </ul>
          </div>

          {/* Dates */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Upcoming Cohort
            </h3>
            <ul className="space-y-4 text-white">
              <li>
                🗓️ <strong>Start Date:</strong> Monday, June 3, 2025
              </li>
              <li>
                ⏳ <strong>Duration:</strong> 6 months (Live Online)
              </li>
              <li>
                📌 <strong>Application Deadline:</strong> May 28, 2025
              </li>
              <li>
                🔗 <strong>Next Cohort:</strong> October 2025 (date TBA)
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-10">
          <Button
            className="bg-[#71990b] hover:bg-[#a3cd39] hover:cursor-pointer text-white px-8 py-3 text-lg rounded-2xl shadow-md transition-all duration-300"
            onClick={handleApplyNowClick}
          >
            Apply Now
          </Button>
        </div>
      </div>
    </section>
  );
}

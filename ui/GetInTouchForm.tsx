"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

type FormData = {
  name: string;
  phone: string;
  email: string;
  projectDetails: string;
  service: string;
};

const services = [
  "Software/Website Development",
  "Digital Marketing",
  "Brand/UX Design",
  "IT Consulting & Support",
  "Other",
];

const GetInTouchForm = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (!selectedService) {
      alert("Please select a service");
      return;
    }
    console.log("Form Data:", { ...data, service: selectedService });
  };

  return (
    <div className="w-full md:w-4/5 lg:w-1/2">
      <p className="text-sm text-gray-300">
        Briefly describe your project idea. The more details the better.
        We&apos;ll reply within 24 hours. Together we&apos;ll discuss your
        project on a quick call, and you&apos;ll get a nicely presented quote
        from Best Technologies.
      </p>

      {/* Services Selection */}
      <h3 className="text-xl font-bold mb-4 mt-6">Services</h3>
      <div className="flex flex-wrap gap-3 mb-4">
        {services.map((service) => (
          <button
            key={service}
            className={`px-4 text-sm py-2 border rounded transition ${
              selectedService === service
                ? "border-[#7ca412] text-[#7ca412] bg-gray-800"
                : "border-gray-600 bg-gray-900 text-white"
            }`}
            onClick={() => setSelectedService(service)}
          >
            {service}
          </button>
        ))}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              {...register("name", { required: "Name is required" })}
              placeholder="Your name*"
              className="input input-bordered w-full bg-gray-900 text-white"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div className="flex-1">
            <input
              {...register("phone", {
                required: "Phone is required",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Enter a valid phone number",
                },
              })}
              placeholder="Your phone*"
              className="input input-bordered w-full bg-gray-900 text-white"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^@]+@[^@]+\.[^@]+$/,
              message: "Enter a valid email",
            },
          })}
          placeholder="Your email*"
          className="input input-bordered w-full bg-gray-900 text-white"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}

        <textarea
          {...register("projectDetails", {
            required: "Project details are required",
          })}
          placeholder="Tell us about your project..."
          className="textarea textarea-bordered w-full bg-gray-900 text-white"
          rows={4}
        ></textarea>
        {errors.projectDetails && (
          <p className="text-red-500 text-sm">
            {errors.projectDetails.message}
          </p>
        )}

        <button
          type="submit"
          className="btn bg-black border-[#7ca412] rounded-full text-white px-6 py-3 mt-4 w-full md:w-auto"
        >
          SEND NOW
        </button>
      </form>
    </div>
  );
};

export default GetInTouchForm;

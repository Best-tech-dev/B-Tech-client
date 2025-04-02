"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

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

const GetInTouch = () => {
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
    <section className="bg-black text-white p-20 flex justify-between items-start gap-10">
      {/* Left Section */}
      <div className="w-1/2">
        <div className="flex gap-4 mb-6">
          <button className="btn bg-black border border-white rounded-full px-6 py-2">
            LinkedIn
          </button>
          <button className="btn bg-black border border-white rounded-full px-6 py-2">
            Facebook
          </button>
          <button className="btn bg-black border border-white rounded-full px-3 py-2">
            X
          </button>
        </div>
        <p className="italic text-lg mb-2 mt-20 inline-block border-b">
          Connect on Socials
        </p>

        <h2 className="text-5xl font-bold mt-8">
          Get In Touch And <br />
          <span className="text-[#7ca412]">
            Let&apos;s Discuss About Your Project.
          </span>
        </h2>
      </div>

      {/* Right Section - Form */}
      <div className="w-1/2">
        <p className="text-sm">
          Briefly describe your project idea. The more details the better.
          We&apos;ll reply within 24 hours. Together we&apos;ll discuss your
          project on a quick call, and you&apos;ll get a nicely presented quote
          from Best Technologies.
        </p>
        <h3 className="text-xl font-bold mb-4 mt-8">Services</h3>
        <div className="flex flex-wrap gap-3 mb-4">
          {services.map((service) => (
            <button
              key={service}
              className={`px-4 py-2 border rounded transition ${
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
          <div className="flex gap-4">
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
            className="btn bg-black border-[#7ca412] rounded-full text-white px-6 py-3 mt-4"
          >
            SEND NOW
          </button>
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;

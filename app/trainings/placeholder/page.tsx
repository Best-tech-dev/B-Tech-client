"use client";

import React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
};

export default function FormTest() {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Submitted data:", data);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Mini Form Test</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("name")}
          placeholder="Your name"
          className="border px-3 py-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Submit
        </button>
      </form>
    </div>
  );
}

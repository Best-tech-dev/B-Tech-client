"use client";

import React from "react";

const testimonials = [
  {
    name: "Anthony Ruiz",
    title: "Software Development Engineer | at Amazon",
    image: "/lovable-uploads/9fbefa06-5296-480f-adf4-546871631e12.png",
    quote:
      "Embarking on a tech career isn't easy, but it's certainly achievable. It took me about 10 months of hard work, but now I've landed my dream job!",
  },
  {
    name: "Isaias Julio",
    title: "Engineer Technical Services 1",
    image: "/lovable-uploads/fa84ff25-3494-4d71-9243-8580d62e3358.png",
    quote:
      "My career coach's guidance was crucial in helping me understand the tech industry landscape and ultimately secure my role.",
  },
  {
    name: "Ariane Rubin",
    title: "Software Engineer at Entitled",
    image: "/lovable-uploads/2ba955fe-7bf3-4f0d-84f7-abd9605a258a.png",
    quote:
      "The support I received was instrumental to my success. The instructors were knowledgeable and always available for questions, fostering a collaborative environment where students could learn from each other.",
  },
  {
    name: "Emilia Carotti",
    title: "Associate Software Engineer @ Capital One",
    image: "/lovable-uploads/ce3f6188-535b-4fac-b879-d1e582520f74.png",
    quote:
      "I learned everything I needed to be a competitive potential candidate with an edge against my peers.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 px-4 sm:px-6 lg:px-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">Testimonials</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((item, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md p-8">
            <p className="text-base md:text-lg text-gray-800 mb-6 leading-relaxed">
              {item.quote}
            </p>
            <div className="flex items-center">
              <img
                src={item.image}
                alt={item.name}
                className="h-16 w-16 rounded-full mr-4 object-cover"
              />
              <div>
                <h4 className="font-semibold text-lg">{item.name}</h4>
                <p className="text-gray-600 text-sm">{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="h-px bg-gray-200 mt-16" />
    </section>
  );
};

export default Testimonials;

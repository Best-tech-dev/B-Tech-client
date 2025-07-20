import React from "react";
import { Star, Quote } from "lucide-react";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Emmanuel Okafor",
      role: "Backend Engineer at Paystack",
      company: "Paystack",
      rating: 5,
      testimonial:
        "The bootcamp completely transformed my career. The hands-on approach and portfolio development support helped me land my dream job at Paystack. The instructors are industry experts who provide real-world insights.",
      highlight: "Career transformation success",
    },
    {
      name: "Fatima Abdullahi",
      role: "API Developer at Flutterwave",
      company: "Flutterwave",
      rating: 5,
      testimonial:
        "What impressed me most was the focus on backend architecture and scalable systems. The program goes beyond just tools - it teaches you how to think like a backend engineer and solve complex problems.",
      highlight: "Strong foundation in backend thinking",
    },
    {
      name: "David Adebayo",
      role: "Senior Backend Developer at Andela",
      company: "Andela",
      rating: 5,
      testimonial:
        "The portfolio I built during the bootcamp was instrumental in getting hired. The projects are realistic and the feedback from instructors helped me create work that stands out to employers.",
      highlight: "Portfolio led to job success",
    },
  ];

  return (
    <section id="testimonials" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Student Success Stories
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Our graduates are now working at leading tech companies across Nigeria
          and globally, building scalable backend systems and robust APIs.
        </p>

        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 relative"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-gray-200" />

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  <blockquote className="text-gray-700 text-lg mb-4 leading-relaxed">
                    &quot;{testimonial.testimonial}&quot;
                  </blockquote>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-600">{testimonial.role}</div>
                      <div className="text-sm text-blue-600 font-medium">
                        {testimonial.company}
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {testimonial.highlight}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

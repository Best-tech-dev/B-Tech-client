import React from "react";
import { Star, Quote } from "lucide-react";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Adaora Okafor",
      role: "Growth Marketing Manager at Flutterwave",
      company: "Flutterwave",
      rating: 5,
      testimonial:
        "The Growth Marketing bootcamp completely transformed my approach to marketing. The hands-on projects and real-world case studies prepared me for the challenges I face daily. Within 3 months of graduation, I landed my dream role at Flutterwave.",
      highlight: "Career transformation success",
    },
    {
      name: "Kemi Johnson",
      role: "Digital Marketing Lead at PiggyVest",
      company: "PiggyVest",
      rating: 5,
      testimonial:
        "What sets this program apart is the practical approach. We worked on real campaigns with measurable results. The instructors are industry experts who share current best practices, not outdated theories.",
      highlight: "Strong foundation in growth strategy",
    },
    {
      name: "David Ogunlade",
      role: "Performance Marketing Specialist at Jumia",
      company: "Jumia",
      rating: 5,
      testimonial:
        "The bootcamp's focus on data-driven marketing opened my eyes to the power of analytics. I now optimize campaigns with confidence and have increased ROI by 300% in my current role at Jumia.",
      highlight: "Data-driven success",
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
          and globally, driving growth and scaling businesses through
          data-driven marketing.
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
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
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
                      <div className="text-sm text-green-600 font-medium">
                        {testimonial.company}
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
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

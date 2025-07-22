import React from "react";
import { Star, Quote } from "lucide-react";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Adebayo",
      role: "Business Intelligence Analyst",
      company: "Zenith Bank",
      rating: 5,
      testimonial:
        "The Data Analysis bootcamp transformed my career completely. I went from basic Excel to creating comprehensive BI dashboards and got promoted within 6 months of graduation.",
      highlight: "Career transformation success",
    },
    {
      name: "Michael Okonkwo",
      role: "Data Analyst",
      company: "MTN Nigeria",
      rating: 5,
      testimonial:
        "The hands-on approach and real-world projects made all the difference. I'm now analyzing customer data and providing insights that drive business decisions at one of Nigeria's leading telecom companies.",
      highlight: "Strong foundation in analytics",
    },
    {
      name: "Fatima Ibrahim",
      role: "Financial Analyst",
      company: "Access Bank",
      rating: 5,
      testimonial:
        "The SQL and Power BI skills I learned are exactly what I use daily. The instructors were industry experts who provided practical, applicable knowledge that I could immediately apply.",
      highlight: "Portfolio led to job success",
    },
  ];

  return (
    <section id="testimonials" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
          Student Success Stories
        </h2>
        <p className="text-base text-gray-700 mb-8 leading-relaxed">
          Our graduates are now working at leading companies across Nigeria and
          globally, analyzing data and providing insights that drive business
          decisions.
        </p>

        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 relative"
            >
              <Quote className="absolute top-4 right-4 sm:top-6 sm:right-6 h-7 w-7 sm:h-8 sm:w-8 text-gray-200" />

              <div className="flex flex-col sm:flex-row items-start sm:space-x-6 space-y-4 sm:space-y-0">
                <div className="flex-shrink-0 self-center sm:self-auto">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
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

                  <blockquote className="text-gray-700 text-base sm:text-lg mb-4 leading-relaxed">
                    &quot;{testimonial.testimonial}&quot;
                  </blockquote>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-600">{testimonial.role}</div>
                      <div className="text-sm text-blue-600 font-medium">
                        {testimonial.company}
                      </div>
                    </div>

                    <div className="sm:text-right">
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

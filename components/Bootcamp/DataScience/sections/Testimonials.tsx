import React from "react";
import { Star, Quote } from "lucide-react";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Kelechi Chima",
      role: "Data Analyst at GTBank",
      company: "GTBank",
      rating: 5,
      testimonial:
        "I used to be an Excel analyst. After this bootcamp, I built dashboards, trained models, and presented results with confidence. That helped me get into a data role at GTBank.",
      highlight: "Career upgrade to data science",
    },
    {
      name: "Damilola Adebayo",
      role: "Data Scientist at Paga",
      company: "Paga",
      rating: 5,
      testimonial:
        "The machine learning project I completed impressed my interviewer. I even open-sourced it on GitHub. This course gives you the portfolio and the confidence to stand out.",
      highlight: "Portfolio project success",
    },
    {
      name: "Nini Idowu",
      role: "Business Intelligence Analyst at Flutterwave",
      company: "Flutterwave",
      rating: 5,
      testimonial:
        "What set this program apart was the focus on communication—how to tell stories with data. That's exactly what employers look for.",
      highlight: "Data storytelling mastery",
    },
  ];

  return (
    <section id="testimonials" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Student Success Stories
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Our data science graduates are now working at leading tech companies
          across Nigeria and globally, transforming businesses through
          data-driven insights.
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
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
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
                      <div className="text-sm text-purple-600 font-medium">
                        {testimonial.company}
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
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

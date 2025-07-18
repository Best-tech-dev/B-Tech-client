import React from "react";
import { Star, Quote } from "lucide-react";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Emeka Obi",
      role: "Machine Learning Engineer at Zindi",
      company: "Zindi",
      rating: 5,
      testimonial:
        "Before the bootcamp, I only had theoretical AI knowledge. Now, I've deployed models to production and contribute to real projects at an AI startup.",
      highlight: "From theory to production-level ML",
    },
    {
      name: "Rashidat Raji",
      role: "Computer Vision Specialist at Max.ng",
      company: "Max.ng",
      rating: 5,
      testimonial:
        "Training with real data and tuning models taught me more than months of self-study. I built a facial recognition system as a final project—and that landed me a job.",
      highlight: "Project-based learning led to job success",
    },
    {
      name: "Bashir Aluko",
      role: "NLP Engineer at Kudi.ai",
      company: "Kudi.ai",
      rating: 5,
      testimonial:
        "The bootcamp taught me how to work with models, deploy them, and evaluate fairness. I now work on NLP products that serve thousands of users.",
      highlight: "Building real-world AI solutions post-bootcamp",
    },
  ];

  return (
    <section id="testimonials" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Student Success Stories
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Our ML/AI graduates are now innovating in cutting-edge fields—from
          building chatbots to powering intelligent systems across Africa and
          the world.
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
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
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

import React from "react";
import { Star, Quote } from "lucide-react";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Adebayo Thompson",
      role: "Full-Stack Developer at Flutterwave",
      company: "Flutterwave",
      rating: 5,
      testimonial:
        "The full-stack bootcamp gave me everything I needed to transition from marketing to tech. Now I'm building payment solutions at one of Africa's leading fintech companies!",
      highlight: "Career transformation success",
    },
    {
      name: "Chioma Okwu",
      role: "Software Engineer at Andela",
      company: "Andela",
      rating: 5,
      testimonial:
        "Learning both frontend and backend in one program was game-changing. The projects we built gave me the confidence to tackle any full-stack challenge in my new role.",
      highlight: "Strong full-stack foundation",
    },
    {
      name: "Kemi Adeleke",
      role: "Full-Stack Developer at Kuda Bank",
      company: "Kuda Bank",
      rating: 5,
      testimonial:
        "From zero coding experience to building complete web applications in 20 weeks. The instructors made complex concepts accessible and the career support was outstanding.",
      highlight: "Portfolio led to job success",
    },
  ];
  return (
    <section id="testimonials" className="mb-12 lg:mb-16">
      <div className="max-w-4xl">
        <h2
          className="font-bold text-gray-900 mb-4 lg:mb-6"
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
            lineHeight: "1.3",
          }}
        >
          Student Success Stories
        </h2>
        <p
          className="text-gray-700 mb-6 lg:mb-8 leading-relaxed"
          style={{
            fontSize: "clamp(0.875rem, 2vw, 1rem)",
            lineHeight: "1.6",
          }}
        >
          Our graduates are now working at leading tech companies across Nigeria
          and globally, creating robust and scalable applications.
        </p>

        <div className="space-y-6 lg:space-y-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg lg:rounded-xl p-4 lg:p-6 xl:p-8 relative shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <Quote className="absolute top-3 right-3 lg:top-4 lg:right-4 xl:top-6 xl:right-6 h-6 w-6 lg:h-7 lg:w-7 xl:h-8 xl:w-8 text-gray-200" />

              <div className="flex flex-col sm:flex-row items-start sm:space-x-4 lg:sm:space-x-6 space-y-3 sm:space-y-0 lg:sm:space-y-0">
                <div className="flex-shrink-0 self-center sm:self-auto">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm lg:text-lg">
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
                        className="h-3 w-3 lg:h-4 lg:w-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  <blockquote
                    className="text-gray-700 mb-3 lg:mb-4 leading-relaxed"
                    style={{
                      fontSize: "clamp(0.875rem, 2.5vw, 1.125rem)",
                      lineHeight: "1.6",
                    }}
                  >
                    &quot;{testimonial.testimonial}&quot;
                  </blockquote>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                    <div>
                      <div
                        className="font-semibold text-gray-900"
                        style={{
                          fontSize: "clamp(0.875rem, 2vw, 1rem)",
                          lineHeight: "1.4",
                        }}
                      >
                        {testimonial.name}
                      </div>
                      <div
                        className="text-gray-600"
                        style={{
                          fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)",
                          lineHeight: "1.4",
                        }}
                      >
                        {testimonial.role}
                      </div>
                      <div
                        className="text-blue-600 font-medium"
                        style={{
                          fontSize: "clamp(0.75rem, 1.2vw, 0.875rem)",
                          lineHeight: "1.4",
                        }}
                      >
                        {testimonial.company}
                      </div>
                    </div>

                    <div className="sm:text-right">
                      <div
                        className="inline-block bg-blue-100 text-blue-800 px-2 lg:px-3 py-1 rounded-full font-medium"
                        style={{
                          fontSize: "clamp(0.75rem, 1.2vw, 0.875rem)",
                          lineHeight: "1.4",
                        }}
                      >
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

import React from "react";
import { Star, Quote } from "lucide-react";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Adaobi Dike",
      role: "Security Analyst at Access Bank",
      company: "Access Bank",
      rating: 5,
      testimonial:
        "This bootcamp changed the game for me. I moved from IT support into cybersecurity and got hired by Access Bank's cybersecurity team. The hands-on labs and red-team simulations were gold.",
      highlight: "Transitioned from IT to cybersecurity",
    },
    {
      name: "Moses Okon",
      role: "Penetration Tester at Deloitte",
      company: "Deloitte",
      rating: 5,
      testimonial:
        "I was blown away by how practical the training was. I got certified and also landed a job shortly after the program. The support didn't stop at graduation!",
      highlight: "Earned a role through hands-on offensive security training",
    },
    {
      name: "Fola Eze",
      role: "SOC Analyst at NCC",
      company: "NCC",
      rating: 5,
      testimonial:
        "I never thought I'd be working in a SOC team so quickly. The bootcamp helped me build confidence, handle incidents, and understand SIEM tools deeply.",
      highlight: "Landed a government security role",
    },
  ];

  return (
    <section id="testimonials" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Student Success Stories
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Graduates of our cybersecurity track are now securing systems at top
          financial institutions, consulting firms, and global organizations.
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
                  <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
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
                      <div className="text-sm text-red-600 font-medium">
                        {testimonial.company}
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
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

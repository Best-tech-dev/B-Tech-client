import React from "react";
import { Star, Quote } from "lucide-react";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Michael Adebayo",
      role: "DevOps Engineer at PayStack",
      company: "PayStack",
      rating: 5,
      testimonial:
        "The Cloud & DevOps bootcamp completely transformed my understanding of infrastructure automation. Within 2 months of graduation, I landed a DevOps role at a leading fintech company. The hands-on AWS labs and CI/CD pipeline projects were invaluable.",
      highlight: "Career transformation success",
    },
    {
      name: "Folake Okonkwo",
      role: "Cloud Solutions Architect at Microsoft",
      company: "Microsoft",
      rating: 5,
      testimonial:
        "Best Tech's curriculum is incredibly comprehensive. The Docker and Kubernetes modules prepared me perfectly for enterprise-level container orchestration. The instructors have real-world cloud experience.",
      highlight: "Strong foundation in DevOps",
    },
    {
      name: "Emmanuel Nkomo",
      role: "Site Reliability Engineer at Flutterwave",
      company: "Flutterwave",
      rating: 5,
      testimonial:
        "From knowing nothing about cloud computing to deploying scalable microservices on AWS - this bootcamp is a game-changer. The Infrastructure as Code projects using Terraform were especially valuable.",
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
          and globally, building the cloud infrastructure that powers modern
          applications.
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
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
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

import React from "react";
import { Star, Quote } from "lucide-react";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Adaora Okafor",
      role: "Growth Marketing Manager at Flutterwave",
      company: "Flutterwave",
      image: "/staff/testimonial-1.jpg",
      rating: 5,
      testimonial:
        "The Growth Marketing bootcamp completely transformed my approach to marketing. The hands-on projects and real-world case studies prepared me for the challenges I face daily. Within 3 months of graduation, I landed my dream role at Flutterwave.",
      highlight: "Landed dream role in 3 months",
    },
    {
      name: "Kemi Johnson",
      role: "Digital Marketing Lead at PiggyVest",
      company: "PiggyVest",
      image: "/staff/testimonial-2.jpg",
      rating: 5,
      testimonial:
        "What sets this program apart is the practical approach. We worked on real campaigns with measurable results. The instructors are industry experts who share current best practices, not outdated theories.",
      highlight: "Real campaigns with measurable results",
    },
    {
      name: "David Ogunlade",
      role: "Performance Marketing Specialist at Jumia",
      company: "Jumia",
      image: "/staff/testimonial-3.jpg",
      rating: 5,
      testimonial:
        "The bootcamp's focus on data-driven marketing opened my eyes to the power of analytics. I now optimize campaigns with confidence and have increased ROI by 300% in my current role.",
      highlight: "Increased ROI by 300%",
    },
  ];

  const stats = [
    {
      number: "95%",
      label: "Job Placement Rate",
      description: "within 6 months",
    },
    {
      number: "₦4.2M",
      label: "Average Starting Salary",
      description: "for graduates",
    },
    { number: "50+", label: "Hiring Partners", description: "across Nigeria" },
    {
      number: "4.9/5",
      label: "Student Satisfaction",
      description: "based on reviews",
    },
  ];

  return (
    <section id="testimonials" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Student Success Stories
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Hear from our graduates who have successfully transitioned into growth
          marketing roles at leading tech companies across Nigeria and beyond.
        </p>

        {/* Success Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white border border-gray-200 rounded-xl"
            >
              <div className="text-2xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="font-semibold text-gray-900 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 relative"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-gray-200" />

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
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

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border border-blue-200 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-gray-700 mb-6">
            Join our next cohort and take the first step towards a rewarding
            career in growth marketing. Our graduates consistently land roles at
            top tech companies with competitive salaries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Apply Now
            </button>
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Download Curriculum
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import React from "react";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/ui/carousel";

const testimonials = [
  {
    name: "Olugbenga Agboola",
    position: "CTO, Flutterwave",
    company: "Flutterwave",
    avatar: "/placeholder.svg",
    rating: 5,
    content:
      "Best Technologies transformed our entire infrastructure. Their expertise in cloud migration and system integration helped us scale from a startup to serving millions of users. Exceptional team!",
  },
  {
    name: "Emeka Adeyemi",
    position: "Digital Director, Interswitch",
    company: "Interswitch",
    avatar: "/placeholder.svg",
    rating: 5,
    content:
      "Working with Best Technologies on our digital transformation was a game-changer. They delivered beyond expectations and their ongoing support has been invaluable to our success.",
  },
  {
    name: "Aisha Bello",
    position: "Founder, Lifebank",
    company: "Lifebank",
    avatar: "/placeholder.svg",
    rating: 5,
    content:
      "The custom healthcare platform they built for us has revolutionized how we serve our patients. Their attention to security and compliance requirements was outstanding.",
  },
  {
    name: "Tunde Balogun",
    position: "IT Manager, Dangote Group",
    company: "Dangote Group",
    avatar: "/placeholder.svg",
    rating: 5,
    content:
      "Best Technologies delivered our ERP system on time and within budget. The integration with our existing processes was seamless, and the training they provided was comprehensive.",
  },
  {
    name: "Ngozi Nwosu",
    position: "COO, Andela",
    company: "Andela",
    avatar: "/placeholder.svg",
    rating: 5,
    content:
      "Our online learning platform has been a tremendous success thanks to Best Technologies. The AI-powered features they implemented have significantly improved student engagement.",
  },
  {
    name: "Ifeanyi Eze",
    position: "CEO, Paystack",
    company: "Paystack",
    avatar: "/placeholder.svg",
    rating: 5,
    content:
      "The analytics dashboard they created for us provides real-time insights that have transformed our decision-making process. Truly a partnership that drives results.",
  },
];

const HomepageTestimonials = () => {
  return (
    <section className="relative py-32 px-8 max-w-7xl mx-auto bg-gradient-to-br from-slate-50 via-white to-brand-primary/5 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg
            className="w-96 h-96 text-brand-primary/5"
            fill="currentColor"
            viewBox="0 0 100 100"
          >
            <circle cx="20" cy="20" r="8" />
            <circle cx="50" cy="10" r="6" />
            <circle cx="80" cy="20" r="10" />
            <circle cx="15" cy="50" r="7" />
            <circle cx="50" cy="50" r="12" />
            <circle cx="85" cy="50" r="9" />
            <circle cx="20" cy="80" r="11" />
            <circle cx="50" cy="90" r="8" />
            <circle cx="80" cy="80" r="6" />
          </svg>
        </div>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-brand-accent to-brand-primary bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it - hear from the organizations
            we&apos;ve helped transform
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.name}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 py-6"
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-brand-primary/30 hover:shadow-xl hover:shadow-brand-primary/10 relative h-full border border-brand-primary/20">
                  <Quote className="w-8 h-8 text-brand-primary mb-4 opacity-50" />

                  <p className="text-gray-600 mb-6 leading-relaxed italic">
                    &quot;{testimonial.content}&quot;
                  </p>

                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>

                    <div>
                      <div className="font-semibold text-gray-800">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.position}
                      </div>
                      <div className="text-xs text-brand-primary">
                        {testimonial.company}
                      </div>
                    </div>

                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 bg-white border-2 border-brand-primary/20 hover:bg-brand-primary hover:text-white hover:border-brand-primary" />
          <CarouselNext className="hidden md:flex -right-12 bg-white border-2 border-brand-primary/20 hover:bg-brand-primary hover:text-white hover:border-brand-primary" />
        </Carousel>
      </div>
    </section>
  );
};

export default HomepageTestimonials;

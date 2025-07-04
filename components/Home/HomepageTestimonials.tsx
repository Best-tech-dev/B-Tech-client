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
    position: "Principal, Valencia",
    company: "Valencia High School",
    avatar: "/placeholder.svg",
    rating: 5,
    content:
      "Best Technologies' capstone project for our school management system has been a game-changer. Their attention to detail and commitment to quality is unmatched.",
  },
  {
    name: "Emeka Julius",
    position: "Founder, ClassyMate",
    company: "ClassyMate Furnitures",
    avatar: "/placeholder.svg",
    rating: 5,
    content:
      "Ecommerce is the future, and Best Technologies helped us build a robust online platform that has significantly increased our sales.",
  },
  {
    name: "Aisha Bello",
    position: "Minister for Education",
    company: "UBEC, Kano State",
    avatar: "/placeholder.svg",
    rating: 5,
    content:
      "Best Technologies' commitment to excellence is evident in every aspect of their work. They took the time to understand our unique challenges and delivered a solution that exceeded our expectations.",
  },
  {
    name: "Tunde Balogun",
    position: "IT Manager, BIPA",
    company: "Best In Print Academy",
    avatar: "/placeholder.svg",
    rating: 5,
    content:
      "Best Technologies' expertise in AI and data analytics has transformed our operations. Their solutions are not just innovative, but also practical and effective for our needs.",
  },
  {
    name: "Ngozi Nwosu",
    position: "Class Teacher, Evergreen High School",
    company: "Evergreen High School, Port Harcourt",
    avatar: "/placeholder.svg",
    rating: 5,
    content:
      "Best Technologies has been a fantastic partner in our digital transformation journey. Their team is responsive, knowledgeable, and truly cares about our success.",
  },
  {
    name: "Ifeanyi Eze",
    position: "Parent, Starlight Academy",
    company: "Starlight Academy, Lagos",
    avatar: "/placeholder.svg",
    rating: 5,
    content:
      "I can easily say that Best Technologies has been a game-changer for our school. Their solutions have made learning more engaging and accessible for my child. James is now more excited about his studies, and I attribute a lot of that to the innovative tools Best Technologies has implemented.",
  },
];

const HomepageTestimonials = () => {
  return (
    <section className="relative py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Subtle SVG background */}
      <div className="absolute inset-0">
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          viewBox="0 0 800 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="testimonialPattern"
              x="0"
              y="0"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="40" cy="40" r="2" fill="#9ef01a" opacity="0.3" />
              <circle cx="20" cy="20" r="1.5" fill="#70e000" opacity="0.4" />
              <circle cx="60" cy="60" r="1.5" fill="#70e000" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#testimonialPattern)" />
        </svg>
        <div className="absolute top-10 right-10 w-80 h-80 bg-brand-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 text-white">
            What Our Clients Say
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
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
                <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-2 hover:border-brand-primary/30 hover:shadow-xl hover:shadow-brand-primary/10 relative h-full border border-brand-primary/20">
                  <Quote className="w-6 h-6 md:w-8 md:h-8 text-brand-primary mb-4 opacity-50" />

                  <p className="text-sm md:text-base text-gray-300 mb-6 leading-relaxed italic">
                    &quot;{testimonial.content}&quot;
                  </p>

                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-brand-primary to-brand-accent rounded-full flex items-center justify-center text-white font-semibold text-sm md:text-base">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>

                    <div>
                      <div className="font-semibold text-white text-sm md:text-base">
                        {testimonial.name}
                      </div>
                      <div className="text-xs md:text-sm text-gray-400">
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
                          className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 bg-gray-800 border-2 border-brand-primary/20 hover:bg-brand-primary hover:text-white hover:border-brand-primary" />
          <CarouselNext className="hidden md:flex -right-12 bg-gray-800 border-2 border-brand-primary/20 hover:bg-brand-primary hover:text-white hover:border-brand-primary" />
        </Carousel>
      </div>
    </section>
  );
};

export default HomepageTestimonials;

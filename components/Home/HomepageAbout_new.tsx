import React from "react";

const HomepageAbout = () => {
  return (
    <section
      id="about"
      className="relative py-32 px-8 max-w-7xl mx-auto bg-gradient-to-br from-brand-primary/10 via-white to-brand-accent/5 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-72 h-72 bg-brand-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2">
          <svg
            className="w-64 h-64 text-brand-primary/5"
            fill="currentColor"
            viewBox="0 0 100 100"
          >
            <path d="M10,50 Q50,10 90,50 Q50,90 10,50" />
            <path d="M30,50 Q50,30 70,50 Q50,70 30,50" />
          </svg>
        </div>
      </div>

      <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Driving Innovation Forward
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                With a foundation built on technical excellence and customer
                satisfaction, Best Technologies Limited is at the forefront of
                digital innovation, helping businesses thrive in the digital
                age.
              </p>
              <p>
                Our approach is rooted in understanding your unique challenges
                and opportunities, ensuring that every solution we provide is
                aligned with your strategic objectives and delivers measurable
                business value.
              </p>
              <p>
                We take pride in partnering with organizations driving industry
                innovation. Our diverse portfolio spans from startups to
                enterprises and government agencies across multiple sectors.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-brand-primary/20 hover:border-brand-primary/40 hover:bg-white/95 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="text-4xl font-bold text-brand-primary mb-2">
                150+
              </div>
              <div className="text-gray-600 text-sm">Projects Delivered</div>
            </div>
            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-brand-primary/20 hover:border-brand-primary/40 hover:bg-white/95 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="text-4xl font-bold text-brand-primary mb-2">
                50+
              </div>
              <div className="text-gray-600 text-sm">Happy Clients</div>
            </div>
            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-brand-primary/20 hover:border-brand-primary/40 hover:bg-white/95 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="text-4xl font-bold text-brand-primary mb-2">
                5+
              </div>
              <div className="text-gray-600 text-sm">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-brand-primary/20 hover:border-brand-primary/40 hover:bg-white/95 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="text-4xl font-bold text-brand-primary mb-2">
                24/7
              </div>
              <div className="text-gray-600 text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageAbout;

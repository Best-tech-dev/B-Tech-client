import React from "react";

const HomepageAbout = () => {
  return (
    <section id="about" className="py-32 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Driving Innovation Forward
          </h2>
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              With a foundation built on technical excellence and customer
              satisfaction, Best Technologies Limited is at the forefront of
              digital innovation, helping businesses thrive in the digital age.
            </p>
            <p>
              Our approach is rooted in understanding your unique challenges and
              opportunities, ensuring that every solution we provide is aligned
              with your strategic objectives and delivers measurable business
              value.
            </p>
            <p>
              We take pride in partnering with organizations driving industry
              innovation. Our diverse portfolio spans from startups to
              enterprises and government agencies across multiple sectors.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="text-center p-6 bg-card-light rounded-xl border border-brand-primary/10">
            <div className="text-4xl font-bold text-brand-primary mb-2">
              150+
            </div>
            <div className="text-gray-600 text-sm">Projects Delivered</div>
          </div>
          <div className="text-center p-6 bg-card-light rounded-xl border border-brand-primary/10">
            <div className="text-4xl font-bold text-brand-primary mb-2">
              50+
            </div>
            <div className="text-gray-600 text-sm">Happy Clients</div>
          </div>
          <div className="text-center p-6 bg-card-light rounded-xl border border-brand-primary/10">
            <div className="text-4xl font-bold text-brand-primary mb-2">5+</div>
            <div className="text-gray-600 text-sm">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-card-light rounded-xl border border-brand-primary/10">
            <div className="text-4xl font-bold text-brand-primary mb-2">
              24/7
            </div>
            <div className="text-gray-600 text-sm">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageAbout;

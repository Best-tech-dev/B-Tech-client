import React from "react";
import { Quote } from "lucide-react";
import Image from "next/image";

const FromTheVisionary = () => {
  return (
    <section className="relative py-20 bg-gray-800/30">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            From Our Visionary
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A message from our founder about our mission to transform businesses
            through innovative technology solutions.
          </p>
        </div>

        <div className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-700/50">
          <div className="lg:flex lg:items-center lg:gap-12">
            {/* Quote Icon */}
            <div className="flex-shrink-0 mb-8 lg:mb-0">
              <div className="w-20 h-20 bg-gradient-to-r from-brand-primary to-brand-accent rounded-full flex items-center justify-center mx-auto lg:mx-0">
                <Quote className="w-10 h-10 text-white" />
              </div>
            </div>

            {/* Quote Content */}
            <div className="flex-1">
              <blockquote className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8 italic">
                &quot;At Best Technologies Ltd., we believe that technology—
                especially the power of AI—should be a catalyst for growth, not
                a barrier. Our mission is to empower businesses with innovative
                solutions, harnessing artificial intelligence to drive real
                results and create lasting impact in the digital age.&quot;
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className="relative w-16 h-16 mr-4">
                  <Image
                    src="/imgs/MD.jpg"
                    alt="Gbadega Adedapo"
                    fill
                    className="w-16 h-16 rounded-full object-cover border-2 border-brand-primary/20"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Gbadega Adedapo
                  </h4>
                  <p className="text-brand-primary font-medium">
                    Founder & Managing Director
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FromTheVisionary;

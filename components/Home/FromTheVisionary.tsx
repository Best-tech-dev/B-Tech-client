import React from "react";
import { Quote } from "lucide-react";
import Image from "next/image";

const FromTheVisionary = () => {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-gray-800/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            From Our Visionary
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
            A message from our founder about our mission to transform businesses
            through innovative technology solutions.
          </p>
        </div>

        <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-gray-700/50">
          <div className="lg:flex lg:items-center lg:gap-12">
            {/* Quote Icon */}
            <div className="flex-shrink-0 mb-6 sm:mb-8 lg:mb-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-brand-primary to-brand-accent rounded-full flex items-center justify-center mx-auto lg:mx-0">
                <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
            </div>

            {/* Quote Content */}
            <div className="flex-1">
              <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-6 sm:mb-8 italic text-center lg:text-left">
                &quot;At Best Technologies Ltd., we believe that technology—
                especially the power of AI—should be a catalyst for growth, not
                a barrier. Our mission is to empower businesses with innovative
                solutions, harnessing artificial intelligence to drive real
                results and create lasting impact in the digital age.&quot;
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center lg:justify-start">
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 mr-3 sm:mr-4">
                  <Image
                    src="/imgs/MD.jpg"
                    alt="Gbadega Adedapo"
                    fill
                    className="rounded-full object-cover border-2 border-brand-primary/20"
                  />
                </div>
                <div className="text-center lg:text-left">
                  <h4 className="text-base sm:text-lg font-semibold text-white">
                    Gbadega Adedapo
                  </h4>
                  <p className="text-sm sm:text-base text-brand-primary font-medium">
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

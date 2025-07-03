import Link from "next/link";
import React from "react";

import { ArrowRight, Sparkles, Zap, Star } from "lucide-react";
import { Button } from "@/ui/button";

const NewLandingPageHero = () => {
  return (
    <section
      id="contact"
      className="h-screen max-h-[780px] py-20 bg-gradient-to-br from-black via-brand-secondary to-brand-neutral-near-black relative overflow-hidden flex items-center"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 mt-10">
          <h2 className="md:text-6xl font-bold mb-6 leading-tight text-5xl bg-gradient-to-r from-brand-accent via-brand-primary to-white bg-clip-text text-transparent">
            Transform Your
            <span className="block text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-brand-primary to-brand-accent bg-clip-text text-transparent">
              Digital Future
            </span>
          </h2>

          <p className="text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Join thousands of forward-thinking companies who have already
            revolutionized their digital presence with our cutting-edge
            platform.
          </p>
        </div>

        {/* Feature highlights */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-4 py-2 rounded-full border border-cyan-400/30">
            <Zap className="h-4 w-4 text-yellow-400" />
            <span className="text-cyan-200 text-sm font-medium">
              Innovative Solutions
            </span>
          </div>
          <div className="flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-4 py-2 rounded-full border border-purple-400/30">
            <Star className="h-4 w-4 text-yellow-400" />
            <span className="text-purple-200 text-sm font-medium">
              Trusted by Industry Leaders
            </span>
          </div>
          <div className="flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 px-4 py-2 rounded-full border border-green-400/30">
            <Sparkles className="h-4 w-4 text-yellow-400" />
            <span className="text-green-200 text-sm font-medium">
              Exceptional Customer Support
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Link
            href="#get-in-touch-form"
            className="group bg-gradient-to-r from-brand-primary to-brand-accent hover:from-brand-accent hover:to-brand-primary font-semibold px-10 py-[12px] rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3 shadow-lg hover:shadow-brand-primary/25 focus:outline-none focus:ring-2 focus:ring-brand-primary"
            style={{ scrollMarginTop: "100px" }}
          >
            Get Started Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>

          <Link
            href="/contact"
            className="group border-2 border-brand-primary/50 hover:border-brand-primary text-brand-neutral-off-white hover:text-white font-semibold px-10 py-[10px] rounded-xl transition-all duration-300 hover:bg-brand-primary/5 flex items-center justify-center"
          >
            Schedule a Demo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewLandingPageHero;

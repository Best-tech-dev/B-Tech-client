import { ArrowRight, Sparkles, Zap, Star } from "lucide-react";
import { Button } from "@/ui/button";

const NewLandingPageHero = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-black via-brand-secondary to-brand-neutral-near-black relative overflow-hidden"
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
        <div className="mb-8">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Transform Your
            <span className="block text-gradient-heading">Digital Future</span>
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
              Weekly Insights
            </span>
          </div>
          <div className="flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-4 py-2 rounded-full border border-purple-400/30">
            <Star className="h-4 w-4 text-yellow-400" />
            <span className="text-purple-200 text-sm font-medium">
              Exclusive Content
            </span>
          </div>
          <div className="flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 px-4 py-2 rounded-full border border-green-400/30">
            <Sparkles className="h-4 w-4 text-yellow-400" />
            <span className="text-green-200 text-sm font-medium">
              Early Access
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Button className="group bg-gradient-to-r from-brand-primary to-brand-accent hover:from-brand-accent hover:to-brand-primary font-semibold px-10 py-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3 shadow-lg hover:shadow-brand-primary/25">
            Start Your Journey
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>

          <Button
            variant="outline"
            className="group border-2 border-brand-primary/50 hover:border-brand-primary text-brand-neutral-off-white hover:text-white font-semibold px-10 py-6 rounded-xl transition-all duration-300 hover:bg-brand-primary/5"
          >
            Schedule a Demo
          </Button>
        </div>

        {/* Trust indicators */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-brand-primary/20">
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-primary mb-2">
              10K+
            </div>
            <div className="text-sm text-brand-text-primary">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-primary mb-2">
              99.9%
            </div>
            <div className="text-sm text-brand-text-primary">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-primary mb-2">
              500+
            </div>
            <div className="text-sm text-brand-text-primary">Companies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-primary mb-2">
              24/7
            </div>
            <div className="text-sm text-brand-text-primary">Support</div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default NewLandingPageHero;

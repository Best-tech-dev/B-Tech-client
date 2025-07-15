import React from "react";
import { Smartphone, Heart, Shield, Code, Zap, Users } from "lucide-react";

export const ComingSoonHero = () => {
  return (
    <section
      id="hero"
      className="py-16 bg-gradient-to-r from-green-50 to-emerald-50"
    >
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
          <Smartphone className="h-16 w-16 text-green-600 mx-auto mb-4" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Mobile App Development Bootcamp
        </h1>
        <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          Our comprehensive mobile app development bootcamp is being crafted to
          teach you cross-platform development with React Native and Flutter,
          native iOS and Android development, and modern mobile app
          architecture.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-green-200">
            <Code className="h-4 w-4 text-green-600" />
            <span className="text-sm font-medium">Cross-Platform</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-green-200">
            <Zap className="h-4 w-4 text-green-600" />
            <span className="text-sm font-medium">Native Performance</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-green-200">
            <Users className="h-4 w-4 text-green-600" />
            <span className="text-sm font-medium">Real Projects</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg border border-green-200">
            <Heart className="h-8 w-8 text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">
              User-Centered Design
            </h3>
            <p className="text-sm text-gray-600">
              Create intuitive, engaging mobile experiences
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-green-200">
            <Shield className="h-8 w-8 text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Security First</h3>
            <p className="text-sm text-gray-600">
              Implement robust security practices
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-green-200">
            <Zap className="h-8 w-8 text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">
              Performance Optimized
            </h3>
            <p className="text-sm text-gray-600">
              Build fast, responsive mobile apps
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

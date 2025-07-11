"use client";

import Link from "next/link";
import { Users } from "lucide-react";

export default function MeetTheTeam() {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-gray-50 via-white to-gray-50 rounded-2xl md:rounded-3xl p-8 md:p-12 border border-gray-200 shadow-lg">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-brand-primary to-brand-accent rounded-2xl flex items-center justify-center mx-auto mb-6 md:mb-8">
            <Users className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-green-600 via-brand-primary to-brand-accent bg-clip-text text-transparent">
            Meet Our Expert Team
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
            Get to know the passionate professionals behind your learning
            journey. Our experienced team is dedicated to helping you succeed in
            your tech career.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/our-team"
              className="bg-gradient-to-r from-brand-primary to-brand-accent hover:from-brand-accent hover:to-brand-primary text-white px-6 md:px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-primary/30 inline-block"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

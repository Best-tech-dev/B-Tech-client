"use client";

import React from "react";

import NewHeader from "@/components/Header/NewHeader";
import Footer from "@/components/Footer/Footer";

import BackgroundAnimation from "@/components/Home/BackgroundAnimation";

import { Target, Eye, Award, Users2, CheckCircle } from "lucide-react";

const values = [
  {
    title: "Innovation",
    description:
      "We embrace cutting-edge technologies and creative solutions to solve complex business challenges.",
    icon: Target,
  },
  {
    title: "Excellence",
    description:
      "We maintain the highest standards in everything we do, from code quality to customer service.",
    icon: Award,
  },
  {
    title: "Collaboration",
    description:
      "We believe in the power of partnership and work closely with our clients to achieve shared success.",
    icon: Users2,
  },
  {
    title: "Integrity",
    description:
      "We conduct business with honesty, transparency, and ethical practices in all our relationships.",
    icon: CheckCircle,
  },
];

const team = [
  {
    name: "Mayowa Bernard",
    role: "Senior Software Engineer",
    experience: "7+ years",
    specialty: "Software Development",
  },
  {
    name: "Steve Oladele",
    role: "The Growth Marketer",
    experience: "7+ years",
    specialty: "Full-Stack Marketing",
  },
  {
    name: "Esther Bamgboje",
    role: "Project Manager",
    experience: "7+ years",
    specialty: "Project Management",
  },
  {
    name: "Moses Adetola",
    role: "Principal Consultant",
    experience: "20+ years",
    specialty: "Internet of Things (IoT)",
  },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen relative bg-white">
      <BackgroundAnimation />
      <NewHeader />

      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-20 px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-brand-primary to-brand-primary-dark bg-clip-text text-transparent">
              About Best Technologies
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Empowering businesses through innovative technology solutions and
              digital transformation
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Founded with a vision to bridge the gap between business needs
                  and technology solutions, Best Technologies Limited has been
                  at the forefront of digital innovation for over five years.
                </p>
                <p>
                  Our journey began with a simple belief: that every business,
                  regardless of size, deserves access to world-class technology
                  solutions that drive growth and efficiency.
                </p>
                <p>
                  Today, we&apos;re proud to have helped hundreds of
                  organizations transform their operations, streamline their
                  processes, and achieve their strategic objectives through
                  innovative technology implementations.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="text-center p-6 bg-card-light rounded-xl border border-brand-primary/10">
                <div className="text-4xl font-bold text-brand-primary mb-2">
                  200+
                </div>
                <div className="text-gray-600 text-sm">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-card-light rounded-xl border border-brand-primary/10">
                <div className="text-4xl font-bold text-brand-primary mb-2">
                  100+
                </div>
                <div className="text-gray-600 text-sm">Satisfied Clients</div>
              </div>
              <div className="text-center p-6 bg-card-light rounded-xl border border-brand-primary/10">
                <div className="text-4xl font-bold text-brand-primary mb-2">
                  5+
                </div>
                <div className="text-gray-600 text-sm">Years of Excellence</div>
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

        {/* Mission & Vision */}
        <section className="py-20 px-8 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-primary to-brand-primary-dark rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-brand-primary mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower businesses with innovative technology solutions
                  that drive growth, efficiency, and competitive advantage in
                  the digital age.
                </p>
              </div>

              <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-primary to-brand-primary-dark rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-brand-primary mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the leading technology partner for businesses seeking
                  digital transformation and sustainable growth through
                  cutting-edge solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center p-6 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-brand-primary to-brand-primary-dark rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-brand-primary mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-8 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experienced professionals dedicated to your success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="text-center p-6 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-brand-primary to-brand-primary-dark rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users2 className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-brand-primary font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-500 mb-1">
                    {member.experience}
                  </p>
                  <p className="text-xs text-gray-400">{member.specialty}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-8 bg-gradient-to-r from-brand-primary to-brand-primary-dark text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Let&apos;s discuss how we can help transform your business with
              innovative technology solutions
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.location.href = "/#contact";
                }
              }}
              className="bg-white text-brand-primary px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/20"
            >
              Get In Touch
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;

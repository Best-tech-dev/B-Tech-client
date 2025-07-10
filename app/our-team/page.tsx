"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/Header/NavBar";
import Footer from "@/components/Footer/Footer";
import {
  Users,
  Coffee,
  Linkedin,
  Github,
  Award,
  Lightbulb,
  ChartLine,
} from "lucide-react";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Mayowa Bernard",
      position: "Senior Software Developer",
      bio: "Mayowa specializes in full-stack development, building scalable and robust applications.",
      image: "/staff/mayowa_portrait.png",
      linkedin: "https://linkedin.com/in/maximusz",
      github: "https://github.com/maxi-musz",
      expertise: ["Nest.js", "Node.js", "TypeScript"],
    },
    {
      name: "Steve Oladele",
      position: "Fullstack Growth Marketer",
      bio: "Steve drives our marketing strategy with data-driven insights and innovative campaigns.",
      image: "/staff/steve_portrait.jpg",
      linkedin: "https://www.linkedin.com/in/growthmarketingwithstevenola/",
      expertise: ["Digital Marketing", "lorem", "ipsum"],
    },
    {
      name: "Esther Bamgboje",
      position: "Creative Admin",
      bio: "Esther ensures our operations run smoothly, managing schedules and supporting team members.",
      image: "/staff/esther_portrait.jpg",
      linkedin: "https://linkedin.com/in/james-thompson",
      expertise: ["UI Design", "UX Research", "Prototyping"],
    },
    {
      name: "Vanilla Monyei",
      position: "Social Media Manager",
      bio: "Vanilla crafts engaging content and manages our online presence across platforms, building strong connections with our audience.",
      image: "/staff/vanilla_portrait.jpg",
      linkedin: "https://linkedin.com/in/ana-martinez",
      expertise: ["Content Creation", "Change", "Expertise"],
    },
    {
      name: "Oluwapelumi Akindele",
      position: "Project Manager",
      bio: "Oluwapelumi coordinates project timelines, resources, and communication to ensure successful delivery of client solutions. With a keen eye for detail and a passion for teamwork, Oluwapelumi keeps projects on track and stakeholders informed.",
      image: "/staff/pelumi_portrait.jpg",
      linkedin: "https://linkedin.com/in/robert-zhang",
      expertise: ["UI/UX", "Change", "Expertise"],
    },
    {
      name: "Oluwajuwon Kayode",
      position: "Web Dev",
      bio: "Juwon is a skilled web developer focused on creating responsive and user-friendly websites that enhance user experience.",
      image: "/staff/juwon_portrait.jpg",
      linkedin: "https://linkedin.com/in/oluwajuwon-kayode",
      github: "https://github.com/Ola-Oluwajuwon",
      expertise: ["Next.js", "API Integration", "Accessibility"],
    },
  ];

  const values = [
    {
      title: "Collaboration",
      description:
        "We believe the best solutions come from diverse perspectives working together.",
      icon: Users,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Innovation",
      description:
        "We constantly push boundaries and embrace new technologies to solve complex problems.",
      icon: Lightbulb,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Growth",
      description:
        "We foster an environment of continuous learning and improvement.",
      icon: ChartLine,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Integrity",
      description:
        "We build trust through transparency, honesty, and ethical business practices.",
      icon: Award,
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <NavBar />

      {/* Background Effects */}
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

        {/* Team collaboration pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          viewBox="0 0 100 100"
        >
          <defs>
            <pattern
              id="teamPattern"
              x="0"
              y="0"
              width="30"
              height="30"
              patternUnits="userSpaceOnUse"
            >
              {/* People icons */}
              <circle
                cx="8"
                cy="8"
                r="3"
                stroke="#9ef01a"
                strokeWidth="0.3"
                fill="none"
                opacity="0.4"
              />
              <circle
                cx="22"
                cy="8"
                r="3"
                stroke="#70e000"
                strokeWidth="0.3"
                fill="none"
                opacity="0.4"
              />
              <circle
                cx="8"
                cy="22"
                r="3"
                stroke="#9ef01a"
                strokeWidth="0.3"
                fill="none"
                opacity="0.4"
              />
              <circle
                cx="22"
                cy="22"
                r="3"
                stroke="#70e000"
                strokeWidth="0.3"
                fill="none"
                opacity="0.4"
              />
              {/* Connection lines */}
              <line
                x1="8"
                y1="8"
                x2="22"
                y2="8"
                stroke="#9ef01a"
                strokeWidth="0.2"
                opacity="0.3"
              />
              <line
                x1="8"
                y1="8"
                x2="8"
                y2="22"
                stroke="#9ef01a"
                strokeWidth="0.2"
                opacity="0.3"
              />
              <line
                x1="22"
                y1="8"
                x2="22"
                y2="22"
                stroke="#70e000"
                strokeWidth="0.2"
                opacity="0.3"
              />
              <line
                x1="8"
                y1="22"
                x2="22"
                y2="22"
                stroke="#70e000"
                strokeWidth="0.2"
                opacity="0.3"
              />
              <line
                x1="8"
                y1="8"
                x2="22"
                y2="22"
                stroke="#9ef01a"
                strokeWidth="0.1"
                opacity="0.2"
              />
              <line
                x1="22"
                y1="8"
                x2="8"
                y2="22"
                stroke="#70e000"
                strokeWidth="0.1"
                opacity="0.2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#teamPattern)" />
        </svg>

        {/* Floating elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-20 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative pt-40 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/staff/best-tech-team.jpg"
              alt="Best Technologies Ltd Team"
              fill
              className="object-cover"
              quality={100}
              priority
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/85 to-gray-900/95"></div>
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-brand-primary to-brand-accent rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-brand-primary/30">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-brand-primary to-brand-accent bg-clip-text text-transparent drop-shadow-lg">
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-100 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
              Our diverse team of technology experts, designers, and strategists
              work together to deliver exceptional solutions that drive your
              business forward.
            </p>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-brand-primary/30 transition-all duration-500 hover:transform hover:scale-105 group text-center"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300`}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">
              Our Amazing Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="bg-gray-800/40 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700/50 hover:border-brand-primary/30 transition-all duration-500 hover:transform hover:scale-105 group"
                >
                  <div className="h-64 bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 relative overflow-hidden">
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.position}`}
                      fill
                      className="object-cover object-top group-hover:scale-110 transition-transform duration-300"
                      style={{ objectPosition: "center 15%" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white">
                      {member.name}
                    </h3>
                    <p className="text-brand-primary font-semibold mb-3">
                      {member.position}
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-4 text-sm">
                      {member.bio}
                    </p>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, idx) => (
                          <span
                            key={idx}
                            className="bg-brand-primary/20 text-brand-primary px-2 py-1 rounded-full text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      {member.linkedin && (
                        <Link
                          href={member.linkedin}
                          className="w-8 h-8 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all duration-300"
                        >
                          <Linkedin className="w-4 h-4" />
                        </Link>
                      )}
                      {member.github && (
                        <Link
                          href={member.github}
                          className="w-8 h-8 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all duration-300"
                        >
                          <Github className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-brand-secondary/20 via-gray-800/80 to-brand-secondary/20 rounded-3xl p-12 border border-brand-primary/20 text-center">
              <Coffee className="w-16 h-16 text-brand-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-6 text-white">
                Want to Join Our Team?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We&apos;re always looking for talented individuals who share our
                passion for technology and innovation. Check out our current
                openings or send us your resume.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/careers"
                  className="bg-brand-primary text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-primary/40"
                >
                  View Open Positions
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OurTeam;

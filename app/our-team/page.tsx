"use client";

import React from "react";
import NavBar from "@/components/Header/NavBar";
import Footer from "@/components/Footer/Footer";
import GetInTouch from "@/components/Footer/GetInTouch";
import {
  Users,
  Award,
  Coffee,
  Globe,
  Linkedin,
  Twitter,
  Github,
  Star,
  Target,
  Heart,
  Lightbulb,
} from "lucide-react";

const OurTeam = () => {
  const leadership = [
    {
      name: "Sarah Johnson",
      position: "Chief Executive Officer",
      bio: "Sarah brings over 15 years of technology leadership experience, having previously led digital transformation initiatives at Fortune 500 companies.",
      image: "/staff/sarah-johnson.jpg",
      linkedin: "https://linkedin.com/in/sarah-johnson",
      twitter: "https://twitter.com/sarah_johnson",
      expertise: [
        "Strategic Planning",
        "Digital Transformation",
        "Team Leadership",
      ],
    },
    {
      name: "Michael Chen",
      position: "Chief Technology Officer",
      bio: "Michael is a seasoned technologist with expertise in cloud architecture, AI/ML, and enterprise software development with 12+ years experience.",
      image: "/staff/michael-chen.jpg",
      linkedin: "https://linkedin.com/in/michael-chen",
      github: "https://github.com/michael-chen",
      expertise: ["Cloud Architecture", "AI/ML", "System Design"],
    },
    {
      name: "Emily Rodriguez",
      position: "VP of Engineering",
      bio: "Emily leads our engineering teams with a focus on innovation, quality, and scalable solutions. She has 10+ years in software development.",
      image: "/staff/emily-rodriguez.jpg",
      linkedin: "https://linkedin.com/in/emily-rodriguez",
      github: "https://github.com/emily-rodriguez",
      expertise: ["Software Engineering", "Team Management", "DevOps"],
    },
  ];

  const teamMembers = [
    {
      name: "David Kim",
      position: "Senior Full-Stack Developer",
      bio: "David specializes in modern web technologies and has delivered over 50 successful projects.",
      image: "/staff/david-kim.jpg",
      linkedin: "https://linkedin.com/in/david-kim",
      github: "https://github.com/david-kim",
      expertise: ["React", "Node.js", "TypeScript"],
    },
    {
      name: "Lisa Wang",
      position: "Cloud Solutions Architect",
      bio: "Lisa designs scalable cloud infrastructures and has helped dozens of companies migrate to the cloud.",
      image: "/staff/lisa-wang.jpg",
      linkedin: "https://linkedin.com/in/lisa-wang",
      expertise: ["AWS", "Azure", "Kubernetes"],
    },
    {
      name: "James Thompson",
      position: "UI/UX Designer",
      bio: "James creates beautiful, user-centered designs that drive engagement and conversion.",
      image: "/staff/james-thompson.jpg",
      linkedin: "https://linkedin.com/in/james-thompson",
      expertise: ["UI Design", "UX Research", "Prototyping"],
    },
    {
      name: "Ana Martinez",
      position: "DevOps Engineer",
      bio: "Ana streamlines deployment processes and ensures our systems run smoothly and securely.",
      image: "/staff/ana-martinez.jpg",
      linkedin: "https://linkedin.com/in/ana-martinez",
      github: "https://github.com/ana-martinez",
      expertise: ["CI/CD", "Docker", "Monitoring"],
    },
    {
      name: "Robert Zhang",
      position: "Cybersecurity Specialist",
      bio: "Robert protects our clients&apos; data and systems with cutting-edge security practices and protocols.",
      image: "/staff/robert-zhang.jpg",
      linkedin: "https://linkedin.com/in/robert-zhang",
      expertise: ["Penetration Testing", "Security Audits", "Compliance"],
    },
    {
      name: "Jessica Brown",
      position: "Project Manager",
      bio: "Jessica ensures projects are delivered on time and within scope, coordinating between teams and clients.",
      image: "/staff/jessica-brown.jpg",
      linkedin: "https://linkedin.com/in/jessica-brown",
      expertise: ["Agile", "Scrum", "Client Relations"],
    },
  ];

  const stats = [
    { number: "50+", label: "Team Members", icon: Users },
    { number: "200+", label: "Projects Delivered", icon: Award },
    { number: "15+", label: "Years Combined Experience", icon: Star },
    { number: "25+", label: "Countries Served", icon: Globe },
  ];

  const values = [
    {
      title: "Innovation",
      description:
        "We constantly push boundaries and embrace new technologies to solve complex problems.",
      icon: Lightbulb,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Excellence",
      description:
        "We strive for perfection in everything we do, from code quality to client service.",
      icon: Target,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Collaboration",
      description:
        "We believe the best solutions come from diverse perspectives working together.",
      icon: Users,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Integrity",
      description:
        "We build trust through transparency, honesty, and ethical business practices.",
      icon: Heart,
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
        <section className="pt-32 pb-20 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-brand-primary to-brand-accent rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-brand-primary/30">
              <Users className="w-10 h-10 text-gray-900" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-brand-primary to-brand-accent bg-clip-text text-transparent">
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Our diverse team of technology experts, designers, and strategists
              work together to deliver exceptional solutions that drive your
              business forward.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 text-center hover:border-brand-primary/30 transition-all duration-300"
                >
                  <stat.icon className="w-12 h-12 text-brand-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 px-8">
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

        {/* Leadership Team */}
        <section className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">
              Leadership Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leadership.map((leader) => (
                <div
                  key={leader.name}
                  className="bg-gray-800/40 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700/50 hover:border-brand-primary/30 transition-all duration-500 hover:transform hover:scale-105 group"
                >
                  <div className="h-64 bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Users className="w-24 h-24 text-brand-primary/30" />
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2 text-white">
                      {leader.name}
                    </h3>
                    <p className="text-brand-primary font-semibold mb-4">
                      {leader.position}
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {leader.bio}
                    </p>

                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {leader.expertise.map((skill, idx) => (
                          <span
                            key={idx}
                            className="bg-brand-primary/20 text-brand-primary px-3 py-1 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      {leader.linkedin && (
                        <a
                          href={leader.linkedin}
                          className="w-10 h-10 bg-gray-700/50 rounded-xl flex items-center justify-center hover:bg-brand-primary hover:text-gray-900 transition-all duration-300"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {leader.twitter && (
                        <a
                          href={leader.twitter}
                          className="w-10 h-10 bg-gray-700/50 rounded-xl flex items-center justify-center hover:bg-brand-primary hover:text-gray-900 transition-all duration-300"
                        >
                          <Twitter className="w-5 h-5" />
                        </a>
                      )}
                      {leader.github && (
                        <a
                          href={leader.github}
                          className="w-10 h-10 bg-gray-700/50 rounded-xl flex items-center justify-center hover:bg-brand-primary hover:text-gray-900 transition-all duration-300"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-20 px-8">
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
                  <div className="h-48 bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Users className="w-16 h-16 text-brand-primary/30" />
                    </div>
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
                        <a
                          href={member.linkedin}
                          className="w-8 h-8 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-brand-primary hover:text-gray-900 transition-all duration-300"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                      {member.github && (
                        <a
                          href={member.github}
                          className="w-8 h-8 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-brand-primary hover:text-gray-900 transition-all duration-300"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team CTA */}
        <section className="py-20 px-8">
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
                <a
                  href="/careers"
                  className="bg-brand-primary text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-primary/40"
                >
                  View Open Positions
                </a>
                <a
                  href="/contact"
                  className="bg-transparent border-2 border-brand-primary text-brand-primary px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-brand-primary hover:text-gray-900"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="scroll-m-24">
        <GetInTouch />
        <Footer />
      </footer>
    </div>
  );
};

export default OurTeam;

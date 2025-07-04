"use client";

import React, { useState } from "react";
import Link from "next/link";
import NavBar from "@/components/Header/NavBar";
import Footer from "@/components/Footer/Footer";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import { Button } from "@/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Globe,
  Users,
} from "lucide-react";

const Contact = () => {
  // Initialize smooth scroll hook to handle hash navigation
  useSmoothScroll();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
    budget: "",
    timeline: "",
  });

  const contactMethods = [
    {
      title: "Email Us",
      icon: Mail,
      primary: "hello@besttechnologiesltd.com ",
      secondary: "We typically respond within 24 hours",
      color: "from-blue-500 to-cyan-500",
      action: "mailto:hello@besttechnologiesltd.com",
    },
    {
      title: "Call Us",
      icon: Phone,
      primary: "+234-802-5321-179",
      secondary: "Mon - Fri, 9AM - 5PM WAT",
      color: "from-green-500 to-emerald-500",
      action: "tel:+2348025321179",
    },
    {
      title: "Visit Us",
      icon: MapPin,
      primary: "The Knowledge Hub",
      secondary: "121/123 Obafemi Awolowo Way, Oke Ado, Ibadan",
      color: "from-purple-500 to-pink-500",
      action: "https://maps.app.goo.gl/g14CanT4L91xHNDe7",
    },
    {
      title: "Live Chat",
      icon: MessageSquare,
      primary: "Round the clock support",
      secondary: "Click to start a conversation",
      color: "from-orange-500 to-red-500",
      action: "#",
    },
  ];

  const departments = [
    { value: "general", label: "General Inquiry" },
    { value: "sales", label: "Sales & Partnerships" },
    { value: "support", label: "Technical Support" },
    { value: "careers", label: "Careers & HR" },
    { value: "media", label: "Media & Press" },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We&apos;ll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <NavBar />

      {/* Background Effects */}
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

        {/* Communication network pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          viewBox="0 0 100 100"
        >
          <defs>
            <pattern
              id="networkPattern"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              {/* Network nodes */}
              <circle cx="5" cy="5" r="1.5" fill="#9ef01a" opacity="0.4" />
              <circle cx="15" cy="5" r="1.5" fill="#70e000" opacity="0.4" />
              <circle cx="5" cy="15" r="1.5" fill="#9ef01a" opacity="0.4" />
              <circle cx="15" cy="15" r="1.5" fill="#70e000" opacity="0.4" />
              {/* Network connections */}
              <line
                x1="5"
                y1="5"
                x2="15"
                y2="5"
                stroke="#9ef01a"
                strokeWidth="0.3"
                opacity="0.3"
              />
              <line
                x1="5"
                y1="5"
                x2="5"
                y2="15"
                stroke="#9ef01a"
                strokeWidth="0.3"
                opacity="0.3"
              />
              <line
                x1="15"
                y1="5"
                x2="15"
                y2="15"
                stroke="#70e000"
                strokeWidth="0.3"
                opacity="0.3"
              />
              <line
                x1="5"
                y1="15"
                x2="15"
                y2="15"
                stroke="#70e000"
                strokeWidth="0.3"
                opacity="0.3"
              />
              <line
                x1="5"
                y1="5"
                x2="15"
                y2="15"
                stroke="#9ef01a"
                strokeWidth="0.2"
                opacity="0.2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#networkPattern)" />
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
              <MessageSquare className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-brand-primary to-brand-accent bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge technology?
              Let&apos;s discuss your project and explore how we can help you
              achieve your goals.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">
              Ways to Reach Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactMethods.map((method) => (
                <Link
                  key={method.title}
                  href={method.action}
                  className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-brand-primary/30 transition-all duration-500 hover:transform hover:scale-105 group text-center block"
                  {...(method.title === "Visit Us"
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300`}
                  >
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    {method.title}
                  </h3>
                  <p className="text-brand-primary font-semibold mb-2 break-all">
                    {method.primary}
                  </p>
                  <p className="text-gray-400 text-sm">{method.secondary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact-form" className="py-20 px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Send Us a Message
              </h2>
              <p className="text-xl text-gray-300">
                Tell us about your project and we&apos;ll get back to you with a
                customized solution.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/50"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-brand-primary mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-brand-primary focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-brand-primary mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-brand-primary focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold text-brand-primary mb-2"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-brand-primary focus:outline-none transition-colors"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-brand-primary mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-brand-primary focus:outline-none transition-colors"
                    placeholder="+234 (000) 123-4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-brand-primary mb-2"
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-brand-primary focus:outline-none transition-colors"
                  >
                    <option value="">Select a subject</option>
                    {departments.map((dept) => (
                      <option key={dept.value} value={dept.value}>
                        {dept.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-semibold text-brand-primary mb-2"
                  >
                    Project Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-brand-primary focus:outline-none transition-colors"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-150k">Under ₦150,000</option>
                    <option value="150k-250k">₦150,000 - ₦250,000</option>
                    <option value="250k-500k">₦250,000 - ₦500,000</option>
                    <option value="500k-1m">₦500,000 - ₦1,000,000</option>
                    <option value="over-1m">Over ₦1,000,000</option>
                  </select>
                </div>
              </div>

              <div className="mb-8">
                <label
                  htmlFor="timeline"
                  className="block text-sm font-semibold text-brand-primary mb-2"
                >
                  Project Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-brand-primary focus:outline-none transition-colors"
                >
                  <option value="">Select timeline</option>
                  <option value="asap">ASAP</option>
                  <option value="1-3-months">1-3 months</option>
                  <option value="3-6-months">3-6 months</option>
                  <option value="6-12-months">6-12 months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              <div className="mb-8">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-brand-primary mb-2"
                >
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-brand-primary focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-brand-primary text-white py-6 rounded-md font-semibold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-primary/40 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </section>

        {/* Office Hours & Additional Info */}
        <section className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 text-center">
                <Clock className="w-12 h-12 text-brand-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Office Hours
                </h3>
                <div className="space-y-2 text-gray-300">
                  <p>Monday - Friday</p>
                  <p className="text-brand-primary font-semibold">
                    9:00 AM - 5:00 PM WAT
                  </p>
                  <p>Weekend support available</p>
                  <p>for urgent matters</p>
                </div>
              </div>

              <div className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 text-center">
                <Globe className="w-12 h-12 text-brand-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Global Reach
                </h3>
                <div className="space-y-2 text-gray-300">
                  <p>Serving clients worldwide</p>
                  <p className="text-brand-primary font-semibold">
                    Remote collaboration
                  </p>
                  <p>Time zone flexibility</p>
                  <p>International partnerships</p>
                </div>
              </div>

              <div className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 text-center">
                <Users className="w-12 h-12 text-brand-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Response Time
                </h3>
                <div className="space-y-2 text-gray-300">
                  <p>Email inquiries</p>
                  <p className="text-brand-primary font-semibold">
                    Within 24 hours
                  </p>
                  <p>Urgent matters</p>
                  <p>Same day response</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
